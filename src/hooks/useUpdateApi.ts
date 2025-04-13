import { useState, useCallback } from "react";

// Define types
interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
  body?: any; // Allow any type for body
}

interface UseUpdateApiResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  isSuccess: boolean;
  update: (
    url: string,
    options?: Partial<FetchOptions>,
    tags?: string,
  ) => Promise<T>;
  reset: () => void;
}

// Generic hook for API updates
function useUpdateApi<T>(
  onSuccess?: (result: T) => void,
  initialData?: T,
): UseUpdateApiResponse<T> {
  const [data, setData] = useState<T | null>(initialData ?? null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const update = useCallback(
    async (url: string, options: Partial<FetchOptions> = {}, tags?: string) => {
      setIsLoading(true);
      setError(null);
      setIsSuccess(false);

      // Default headers and options
      const defaultOptions: FetchOptions = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        ...options,
      };

      // Stringify body if it's an object
      if (options.body && typeof options.body === "object") {
        defaultOptions.body = JSON.stringify(options.body);
      }

      try {
        const response = await fetch(url, defaultOptions);
        const contentType = response.headers.get("content-type");
        let result: T;

        if (contentType?.includes("application/json")) {
          result = await response.json();
        } else {
          result = (await response.text()) as unknown as T;
        }

        if (!response.ok) {
          throw new Error(
            (result as any)?.message || `Update failed: ${response.status}`,
          );
        }

        setData(result);
        setIsSuccess(true);

        onSuccess?.(result);
        return result;
      } catch (err) {
        const errorInstance =
          err instanceof Error ? err : new Error(String(err));
        setError(errorInstance);
        setIsSuccess(false);
        throw errorInstance;
      } finally {
        setIsLoading(false);
      }
    },
    [onSuccess],
  );

  const reset = useCallback(() => {
    setData(initialData ?? null);
    setError(null);
    setIsLoading(false);
    setIsSuccess(false);
  }, [initialData]);

  return { data, isLoading, error, isSuccess, update, reset };
}

export default useUpdateApi;

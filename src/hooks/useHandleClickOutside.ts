import { useEffect, RefObject } from "react";

/**
 * A custom hook that handles clicks outside of specified elements and triggers corresponding close actions.
 *
 * @param refs - An array of `RefObject` elements to monitor for outside clicks.
 * @param closeHandlers - An array of callback functions to execute when a click outside the corresponding element is detected.
 *
 * How it works:
 * - Attaches a `mousedown` event listener to the document.
 * - On each click, checks if the click occurred outside any of the elements specified in `refs`.
 * - If an outside click is detected for a particular element, invokes the corresponding callback in `closeHandlers`..
 */
const useHandleClickOutside = (
  refs: RefObject<HTMLElement>[],
  closeHandlers: (() => void)[],
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      refs.forEach((ref, index) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          closeHandlers[index]();
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [refs, closeHandlers]);
};

export default useHandleClickOutside;

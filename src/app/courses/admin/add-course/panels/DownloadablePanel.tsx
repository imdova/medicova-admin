"use client";
import { useState, useCallback, useEffect } from "react";
import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";

// Define FormData explicitly
interface MaterialFiles {
  fileTitle: string;
  method: "Upload" | "Link";
  selectedFiles: File[];
}

interface DownloadablePanelProps {
  materialFiles: MaterialFiles;
  onChange: (field: keyof MaterialFiles, value: any) => void;
}

export default function DownloadablePanel({
  materialFiles,
  onChange,
}: DownloadablePanelProps) {
  const [filesData, setFilesData] = useState<MaterialFiles>({
    fileTitle: materialFiles.fileTitle || "",
    method: materialFiles.method || "Upload",
    selectedFiles: materialFiles.selectedFiles || [],
  });

  useEffect(() => {
    setFilesData({
      fileTitle: materialFiles.fileTitle || "",
      method: materialFiles.method || "Upload",
      selectedFiles: materialFiles.selectedFiles || [],
    });
  }, [materialFiles]);

  const updateMaterialFiles = useCallback(
    (updatedFields: Partial<MaterialFiles>) => {
      setFilesData((prev) => {
        const updatedData = { ...prev, ...updatedFields };
        Object.entries(updatedFields).forEach(([key, value]) => {
          onChange(key as keyof MaterialFiles, value);
        });
        return updatedData;
      });
    },
    [onChange],
  );

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        const validFiles = Array.from(files).filter(
          (file) =>
            (file.type === "application/pdf" || file.type === "text/plain") &&
            file.size <= 2 * 1024 * 1024,
        );

        setFilesData((prev) => {
          if (prev.selectedFiles.length + validFiles.length > 2) {
            alert("You can upload a maximum of 2 files.");
            return prev;
          }

          const updatedFiles = [...prev.selectedFiles, ...validFiles];
          updateMaterialFiles({ selectedFiles: updatedFiles });
          return { ...prev, selectedFiles: updatedFiles };
        });
      }
    },
    [updateMaterialFiles],
  );

  const handleRemoveFile = useCallback(
    (index: number) => {
      setFilesData((prev) => {
        const updatedFiles = prev.selectedFiles.filter((_, i) => i !== index);
        updateMaterialFiles({ selectedFiles: updatedFiles });
        return { ...prev, selectedFiles: updatedFiles };
      });
    },
    [updateMaterialFiles],
  );

  const handleSave = () => {
    console.log("Saving data:", filesData);
    alert("Files saved successfully!"); // Replace with API call if needed
  };

  return (
    <div>
      {/* File upload instructions */}
      <Typography variant="body2" className="mb-2">
        + Maximum files allowed:{" "}
        <strong>{2 - filesData.selectedFiles.length} files</strong> (Max 2MB per
        file)
      </Typography>
      <Typography variant="body2" className="mb-4">
        + Allowed file types: <strong>pdf, txt</strong>.
      </Typography>

      {/* File title input */}
      <TextField
        label="File Title"
        fullWidth
        variant="outlined"
        value={filesData.fileTitle}
        onChange={(e) => updateMaterialFiles({ fileTitle: e.target.value })}
        className="mt-4"
      />

      {/* Select upload method */}
      <Select
        value={filesData.method}
        onChange={(e) =>
          updateMaterialFiles({ method: e.target.value as "Upload" | "Link" })
        }
        fullWidth
        className="mt-4"
      >
        <MenuItem value="Upload">Upload</MenuItem>
        <MenuItem value="Link">Link</MenuItem>
      </Select>

      {/* File upload input */}
      <div className="mt-4 flex items-center gap-3">
        <label className="inline-block cursor-pointer rounded-md border bg-gray-200 p-2">
          <input type="file" multiple onChange={handleFileChange} hidden />
          Choose file
        </label>
      </div>

      {/* Display selected files */}
      {filesData.selectedFiles.length > 0 && (
        <ul className="mt-4">
          {filesData.selectedFiles.map((file, index) => (
            <li
              key={index}
              className="mb-2 flex items-center justify-between rounded-lg border p-2"
            >
              <span>{file.name}</span>
              <Button color="error" onClick={() => handleRemoveFile(index)}>
                Remove
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

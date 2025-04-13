"use client";
import { useState, useCallback, useEffect } from "react";
import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";

// Define FormData explicitly
interface MaterialFiles {
  fileTitle: string;
  method: "Upload" | "Link";
  selectedFiles: File[];
  linkUrl: string;
}

interface DownloadablePanelProps {
  formData: MaterialFiles;
  onChange: (field: keyof MaterialFiles, value: any) => void;
}

export default function DownloadablePanel({
  formData,
  onChange,
}: DownloadablePanelProps) {
  const [filesData, setFilesData] = useState<MaterialFiles>({
    fileTitle: formData.fileTitle || "",
    method: formData.method || "Upload",
    selectedFiles: formData.selectedFiles || [],
    linkUrl: formData.linkUrl || "",
  });

  useEffect(() => {
    setFilesData({
      fileTitle: formData.fileTitle || "",
      method: formData.method || "Upload",
      selectedFiles: formData.selectedFiles || [],
      linkUrl: formData.linkUrl || "",
    });
  }, [formData]);

  const updateMaterialFiles = useCallback(
    (updatedFields: Partial<MaterialFiles>) => {
      setFilesData((prev) => {
        const updatedData = { ...prev, ...updatedFields };

        // Call onChange for each updated field
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
      if (!event.target.files) return;

      const validFiles = Array.from(event.target.files).filter(
        (file) =>
          (file.type === "application/pdf" || file.type === "text/plain") &&
          file.size <= 2 * 1024 * 1024,
      );

      // Prevent duplicate uploads
      const newFiles = validFiles.filter(
        (file) =>
          !filesData.selectedFiles.some(
            (existingFile) => existingFile.name === file.name,
          ),
      );

      if (filesData.selectedFiles.length + newFiles.length > 2) {
        alert("You can upload a maximum of 2 files.");
        return;
      }

      updateMaterialFiles({
        selectedFiles: [...filesData.selectedFiles, ...newFiles],
      });

      // Clear file input value after selection
      event.target.value = "";
    },
    [filesData.selectedFiles, updateMaterialFiles],
  );

  const handleRemoveFile = useCallback(
    (index: number) => {
      const updatedFiles = filesData.selectedFiles.filter(
        (_, i) => i !== index,
      );
      updateMaterialFiles({ selectedFiles: updatedFiles });
    },
    [filesData.selectedFiles, updateMaterialFiles],
  );

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
      <Typography className="mb-2 font-bold">File Title</Typography>

      <TextField
        placeholder="Enter File Title"
        fullWidth
        variant="outlined"
        value={filesData.fileTitle}
        onChange={(e) => updateMaterialFiles({ fileTitle: e.target.value })}
      />

      {/* Select upload method */}
      <Select
        value={filesData.method}
        onChange={(e) => {
          const newMethod = e.target.value as "Upload" | "Link";
          updateMaterialFiles({
            method: newMethod,
            selectedFiles:
              newMethod === "Upload" ? filesData.selectedFiles : [],
            linkUrl: newMethod === "Link" ? filesData.linkUrl : "",
          });
        }}
        fullWidth
        className="mt-4"
      >
        <MenuItem value="Upload">Upload</MenuItem>
        <MenuItem value="Link">Link</MenuItem>
      </Select>

      {/* Show text field for entering a link if method is "Link" */}
      {filesData.method === "Link" && (
        <div className="mt-4">
          <Typography className="mb-2 font-bold">File Link</Typography>
          <TextField
            placeholder="Enter File Link"
            fullWidth
            variant="outlined"
            value={filesData.linkUrl}
            onChange={(e) => updateMaterialFiles({ linkUrl: e.target.value })}
          />
        </div>
      )}

      {/* File upload input (only show if method is Upload) */}
      {filesData.method === "Upload" && (
        <div className="mt-4 flex items-center gap-3">
          <label className="inline-block cursor-pointer rounded-md border bg-gray-200 p-2">
            <input type="file" multiple onChange={handleFileChange} hidden />
            Choose file
          </label>
        </div>
      )}

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

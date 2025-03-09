"use client";
import { useState, useCallback } from "react";
import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";

export default function DownloadablePanel() {
  const [fileTitle, setFileTitle] = useState("");
  const [method, setMethod] = useState<"Upload" | "Link">("Upload");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        const validFiles = Array.from(files).filter(
          (file) =>
            (file.type === "application/pdf" || file.type === "text/plain") &&
            file.size <= 2 * 1024 * 1024,
        );

        if (selectedFiles.length + validFiles.length > 2) {
          alert("You can upload a maximum of 2 files.");
          return;
        }

        setSelectedFiles((prev) => [...prev, ...validFiles]);
      }
    },
    [selectedFiles],
  );

  const handleRemoveFile = useCallback((index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <div>
      {/* File upload instructions */}
      <Typography variant="body2" className="mb-2">
        + Maximum files allowed:{" "}
        <strong>{2 - selectedFiles.length} files</strong> (Max 2MB per file)
      </Typography>
      <Typography variant="body2" className="mb-4">
        + Allowed file types: <strong>pdf, txt</strong>.
      </Typography>

      {/* Action buttons */}
      <div className="mb-4 flex items-center">
        <Button variant="contained" color="success">
          Add Course Materials
        </Button>
        <Button variant="outlined" color="success" className="ml-2">
          Save
        </Button>
      </div>

      {/* File title input */}
      <TextField
        label="File Title"
        fullWidth
        variant="outlined"
        value={fileTitle}
        onChange={(e) => setFileTitle(e.target.value)}
        className="mt-4"
      />

      {/* Select upload method */}
      <Select
        value={method}
        onChange={(e) => setMethod(e.target.value as "Upload" | "Link")}
        fullWidth
        className="mt-4"
      >
        <MenuItem value="Upload">Upload</MenuItem>
        <MenuItem value="Link">Link</MenuItem>
      </Select>

      {/* File upload input */}
      <div className="mt-4">
        <label className="inline-block cursor-pointer rounded-md border bg-gray-200 p-2">
          <input type="file" multiple onChange={handleFileChange} hidden />
          Choose file
        </label>
      </div>

      {/* Display selected files */}
      {selectedFiles.length > 0 && (
        <ul className="mt-4">
          {selectedFiles.map((file, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-lg border p-2"
            >
              <span>{file.name}</span>
              <Button color="error" onClick={() => handleRemoveFile(index)}>
                Remove
              </Button>
            </li>
          ))}
        </ul>
      )}

      {/* Save & Remove buttons */}
      <div className="mt-4 flex gap-2">
        <Button variant="contained" color="success">
          Save
        </Button>
        <Button variant="contained" color="error">
          Remove
        </Button>
      </div>
    </div>
  );
}

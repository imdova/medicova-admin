"use client";
import { useState } from "react";
import { Button, MenuItem, Select, TextField } from "@mui/material";

export default function DownloadablePanel() {
  const [fileTitle, setFileTitle] = useState("");
  const [method, setMethod] = useState("Upload");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

      setSelectedFiles([...selectedFiles, ...validFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  return (
    <div>
      <p className="mb-2 text-xs">
        + Maximum amount of files you can upload more:{" "}
        <strong className="text-xs">{2 - selectedFiles.length} files</strong>{" "}
        (maximum file size is 2 MB)
      </p>
      <p className="mb-4 text-xs">
        + And allow upload only these types:{" "}
        <strong className="text-xs">pdf, txt</strong>.
      </p>

      <div className="mb-4 flex items-center">
        <Button variant="contained" color="success">
          Add course materials
        </Button>
        <Button variant="outlined" color="success" className="ml-2">
          Save
        </Button>
      </div>
      <div className="mt-4">
        <TextField
          label="File Title"
          fullWidth
          variant="outlined"
          className="border-primary"
          value={fileTitle}
          onChange={(e) => setFileTitle(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <Select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          fullWidth
          className="border-primary"
        >
          <MenuItem value="Upload">Upload</MenuItem>
          <MenuItem value="Link">Link</MenuItem>
        </Select>
      </div>

      <div className="mt-4">
        <label className="inline-block cursor-pointer rounded-md border bg-gray-200 p-2">
          <input type="file" multiple onChange={handleFileChange} hidden />
          Choose file
        </label>
      </div>

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

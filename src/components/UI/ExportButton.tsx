import React from "react";
import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
interface ExportOptions {
  data: string; // The content to export (e.g., CSV or JSON content).
  fileName?: string; // Optional file name (default is "export.csv").
  fileType?: string; // Optional MIME type (default is "text/csv").
}
const ExportButton = ({
  data,
  fileName = "export.csv",
  fileType = "text/csv",
}: ExportOptions) => {
  const handleExport = () => {
    const blob = new Blob([data], { type: fileType });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<FileDownloadIcon />}
      onClick={handleExport}
      className="h-10 text-xs"
    >
      Export
    </Button>
  );
};

export default ExportButton;

import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Menu,
  Radio,
  RadioGroup,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
interface ExportOptions {
  data: string; // The content to export (e.g., CSV or JSON content).
}
const ExportBtnIcon = ({ data }: ExportOptions) => {
  const handleExport = () => {
    const blob = new Blob([data], { type: selectedValue });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `export.${selectedValue === "text/pdf" ? "pdf" : "csv"}`;
    a.click();
    window.URL.revokeObjectURL(url);
  };
  const [anchorElButton, setAnchorElButton] =
    React.useState<null | HTMLElement>(null);
  const openButton = Boolean(anchorElButton);
  const handleClickButton = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElButton(event.currentTarget);
  };
  const handleCloseButton = () => {
    setAnchorElButton(null);
  };
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <button
        onClick={handleClickButton}
        className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white hover:bg-primary-900"
      >
        <FileDownloadIcon className="text-xl" />
      </button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorElButton}
        open={openButton}
        onClose={handleCloseButton}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div className="p-3">
          <div className="mb-2">
            <FormControl
              sx={{
                ".css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label":
                  {
                    fontSize: 11,
                  },
              }}
            >
              <FormLabel id="demo-radio-buttons-group-label">
                Please Choose:
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={handleChange}
              >
                <FormControlLabel
                  className="text-xs"
                  value="text/csv"
                  control={<Radio />}
                  label="Download in Excel"
                />
                <FormControlLabel
                  value="text/pdf"
                  control={<Radio />}
                  label="Download in PDF"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="flex items-center justify-center">
            <Button
              onClick={handleExport}
              variant="contained"
              className="w-full bg-primary"
            >
              Download
            </Button>
          </div>
        </div>
      </Menu>
    </>
  );
};

export default ExportBtnIcon;

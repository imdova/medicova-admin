import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const NestedMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [nestedMenuEl, setNestedMenuEl] = useState<null | HTMLElement>(null);
  const [selectedValue, setSelectedValue] = useState("");

  const handleMainMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMainMenuClose = () => {
    setAnchorEl(null);
    setNestedMenuEl(null);
  };

  const handleNestedMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNestedMenuEl(event.currentTarget);
  };

  const handleNestedMenuClose = () => {
    setNestedMenuEl(null);
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value as string);
  };

  return (
    <div>
      <Select
        className="h-10"
        value={selectedValue}
        onChange={handleSelectChange}
        displayEmpty
        onClick={handleMainMenuOpen}
        onClose={handleMainMenuClose}
        renderValue={(value) => (value ? value : "Today")}
      >
        <MenuItem value="Today">Today</MenuItem>
        <MenuItem value="This week">This week</MenuItem>
        <MenuItem value="This month">This month</MenuItem>
        <MenuItem value="This year">This year</MenuItem>
        <MenuItem
          value="Set up"
          onMouseEnter={(event) => handleNestedMenuOpen(event)}
        >
          <ListItemText primary="Set up" />
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
        </MenuItem>
      </Select>

      <Menu
        anchorEl={nestedMenuEl}
        open={Boolean(nestedMenuEl)}
        onClose={handleNestedMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker orientation="landscape" />
        </LocalizationProvider>
      </Menu>
    </div>
  );
};

export default NestedMenu;

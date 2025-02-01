import {
  AttachEmailOutlined,
  DeleteOutlineOutlined,
  DriveFileRenameOutlineOutlined,
  MoreVert,
  SendOutlined,
  WorkOutline,
} from "@mui/icons-material";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const TableDropMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <button onClick={handleClick}>
        <MoreVert />
      </button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem className="flex items-center gap-2" onClick={handleClose}>
          <ListItemIcon>
            <WorkOutline className="text-primary" />
          </ListItemIcon>
          <ListItemText>View Job</ListItemText>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <ListItemIcon>
            <DriveFileRenameOutlineOutlined className="text-primary" />
          </ListItemIcon>
          <ListItemText> Edit Profile</ListItemText>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <ListItemIcon>
            <SendOutlined className="text-primary" />
          </ListItemIcon>
          <ListItemText>Send Massege</ListItemText>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <ListItemIcon>
            <AttachEmailOutlined className="text-primary" />
          </ListItemIcon>
          <ListItemText>Send Email</ListItemText>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <ListItemIcon>
            <DeleteOutlineOutlined className="text-primary" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};
export default TableDropMenu;

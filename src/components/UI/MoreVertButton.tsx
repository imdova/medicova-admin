import {
  DeleteOutlineOutlined,
  EditNoteOutlined,
  MoreVert,
} from "@mui/icons-material";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
interface MoreVertButtonProps {
  handleDelete: () => void; // Function type
}
const MoreVertButton: React.FC<MoreVertButtonProps> = ({ handleDelete }) => {
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
            <EditNoteOutlined className="text-primary" />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem className="flex items-center gap-2" onClick={handleDelete}>
          <ListItemIcon>
            <DeleteOutlineOutlined className="text-primary" />
          </ListItemIcon>
          <ListItemText onClick={handleDelete}>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};
export default MoreVertButton;

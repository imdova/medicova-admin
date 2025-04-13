import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
const UserMassegeDrop: React.FC = () => {
  const [anchorElMessage, setAnchorElMessage] = useState<null | HTMLElement>(
    null,
  );
  const openMessage = Boolean(anchorElMessage);
  const handleClickMessage = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMessage(event.currentTarget);
  };
  const handleCloseMessage = () => {
    setAnchorElMessage(null);
  };
  const messages = [
    {
      name: "Ralph Edwards",
      avatar: "https://mui.com/static/images/avatar/3.jpg",
      preview: "Are you there? Interested in this...",
    },
    {
      name: "Jane Cooper",
      avatar: "https://mui.com/static/images/avatar/2.jpg",
      preview: "Let's meet up tomorrow!",
    },
    {
      name: "Jane Cooper",
      avatar: "https://mui.com/static/images/avatar/2.jpg",
      preview: "Let's meet up tomorrow!",
    },
    {
      name: "Jane Cooper",
      avatar: "https://mui.com/static/images/avatar/2.jpg",
      preview: "Let's meet up tomorrow!",
    },
  ];
  return (
    <>
      {/* massege content menu */}
      <div>
        <button
          onClick={handleClickMessage}
          type="button"
          className="nav-btn relative h-9 w-9 p-2 text-xs"
        >
          <span className="absolute right-1 top-1 flex h-1.5 w-1.5 items-center justify-center rounded-full bg-primary"></span>
          <span className="sr-only">View message</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6352 3.09066C9.32046 3.09066 3.33569 9.09066 3.33569 16.424C3.33569 19.4907 4.39965 22.424 6.39457 24.824L3.73468 27.4907C3.2027 28.024 3.2027 28.824 3.73468 29.3573C4.00067 29.624 4.26666 29.7573 4.66564 29.7573H16.6352C23.9499 29.7573 29.9346 23.7573 29.9346 16.424C29.9346 9.09066 23.9499 3.09066 16.6352 3.09066ZM17.9651 20.424H9.98543C9.18746 20.424 8.65548 19.8907 8.65548 19.0907C8.65548 18.2907 9.18746 17.7573 9.98543 17.7573H17.9651C18.7631 17.7573 19.2951 18.2907 19.2951 19.0907C19.2951 19.8907 18.7631 20.424 17.9651 20.424ZM23.2849 15.0907H9.98543C9.18746 15.0907 8.65548 14.5573 8.65548 13.7573C8.65548 12.9573 9.18746 12.424 9.98543 12.424H23.2849C24.0829 12.424 24.6148 12.9573 24.6148 13.7573C24.6148 14.5573 24.0829 15.0907 23.2849 15.0907Z"
              fill="#9A9A9A"
            />
          </svg>
        </button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorElMessage}
          open={openMessage}
          onClose={handleCloseMessage}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          slotProps={{
            paper: {
              sx: {
                width: "300px", // Adjust menu width
                maxHeight: "400px", // Enable scrolling if messages overflow
                overflowY: "auto", // Allows scroll if too many messages
                borderRadius: "8px", // Rounded corners
                padding: "8px", // Inner padding
                boxShadow: 3, // Adds subtle shadow
              },
            },
          }}
        >
          {/* Messages List */}
          {messages.length > 0 ? (
            messages.map((message, index) => (
              <MenuItem
                key={index}
                onClick={handleCloseMessage}
                sx={{ padding: "8px 12px" }}
              >
                <Link
                  href="#"
                  className="flex w-full items-center gap-3 p-2 hover:bg-hover-link"
                >
                  {/* Avatar */}
                  <Avatar alt={message.name} src={message.avatar} />

                  {/* Message Details */}
                  <div className="flex flex-1 flex-col">
                    <a className="text-sm font-medium" href="#">
                      {message.name}
                    </a>
                    <p className="max-w-[250px] truncate text-xs text-secondary">
                      {message.preview}
                    </p>
                  </div>
                </Link>
              </MenuItem>
            ))
          ) : (
            <MenuItem
              disabled
              sx={{ justifyContent: "center", fontSize: "12px", color: "gray" }}
            >
              No new messages
            </MenuItem>
          )}

          {/* "View All" Button */}
          <div className="mt-2 flex w-full justify-center px-2">
            <Button
              variant="outlined"
              fullWidth
              size="small"
              sx={{ fontSize: "12px", textTransform: "none" }}
            >
              View All
            </Button>
          </div>
        </Menu>
      </div>
    </>
  );
};
export default UserMassegeDrop;

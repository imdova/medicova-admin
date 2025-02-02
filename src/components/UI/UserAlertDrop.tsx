import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
import { notifications } from "@/constants";

import { getFullLastEdit } from "@/util";
const UserAlertDrop: React.FC = () => {
  const [anchorElAlert, setAnchorElAlert] = useState<null | HTMLElement>(null);
  const openAlert = Boolean(anchorElAlert);
  const handleClickAlert = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAlert(event.currentTarget);
  };
  const handleCloseAlert = () => {
    setAnchorElAlert(null);
  };

  return (
    <>
      {/* alert content menu */}
      <div>
        <button
          onClick={handleClickAlert}
          type="button"
          className="nav-btn text-textblack relative h-9 w-9 cursor-pointer rounded-lg p-2"
        >
          <span className="absolute right-1 top-1 flex h-1.5 w-1.5 items-center justify-center rounded-full bg-[#D34232]"></span>
          <span className="sr-only">View notifications</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.7941 20.704L25.4001 18.2907V12.344C25.432 10.1358 24.6658 7.99054 23.2431 6.30444C21.8204 4.61834 19.8373 3.50524 17.6599 3.17066C16.3962 3.00382 15.1115 3.10908 13.8916 3.47943C12.6717 3.84978 11.5446 4.47669 10.5855 5.31834C9.62641 6.15999 8.85739 7.19703 8.32975 8.36025C7.80211 9.52348 7.52798 10.7861 7.52565 12.064V18.2907L5.13175 20.704C4.83106 21.0105 4.62714 21.399 4.54551 21.8211C4.46387 22.2431 4.50813 22.6799 4.67275 23.0768C4.83738 23.4738 5.11506 23.8133 5.47109 24.0529C5.82711 24.2925 6.24569 24.4216 6.67449 24.424H11.1431V24.8773C11.2052 26.2309 11.8 27.5046 12.7972 28.4194C13.7944 29.3341 15.1125 29.8152 16.4629 29.7573C17.8133 29.8152 19.1314 29.3341 20.1286 28.4194C21.1258 27.5046 21.7206 26.2309 21.7827 24.8773V24.424H26.2513C26.6801 24.4216 27.0987 24.2925 27.4547 24.0529C27.8107 23.8133 28.0884 23.4738 28.253 23.0768C28.4177 22.6799 28.4619 22.2431 28.3803 21.8211C28.2987 21.399 28.0947 21.0105 27.7941 20.704ZM19.1228 24.8773C19.049 25.5187 18.7313 26.1067 18.2358 26.519C17.7403 26.9314 17.1052 27.1361 16.4629 27.0907C15.8206 27.1361 15.1855 26.9314 14.69 26.519C14.1945 26.1067 13.8768 25.5187 13.803 24.8773V24.424H19.1228V24.8773Z"
              fill="#9A9A9A"
            />
          </svg>
        </button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorElAlert}
          open={openAlert}
          onClose={handleCloseAlert}
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
                width: "350px", // Adjust menu width
                maxHeight: "400px", // Set max height
                overflowY: "auto", // Enable scroll if content overflows
                borderRadius: "8px", // Rounded corners
                padding: "8px", // Add inner spacing
                boxShadow: 3, // Add subtle shadow
              },
            },
          }}
        >
          {notifications.length > 0 ? (
            notifications.map((alert) => (
              <MenuItem
                key={alert.title}
                onClick={handleCloseAlert}
                sx={{ padding: "8px 12px" }}
              >
                <Link
                  href="#"
                  className="flex w-full items-center gap-3 p-2 hover:bg-hover-link"
                >
                  {/* Icon Container */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e6f7f2] p-4">
                    {alert.icon &&
                      React.createElement(alert.icon, {
                        style: { color: "#2ba149", fontSize: "15px" },
                      })}
                  </div>

                  {/* Notification Details */}
                  <div className="flex-1">
                    <div className="text-sm font-medium">{alert.title}</div>
                    <p className="max-w-[250px] truncate text-xs text-secondary">
                      {alert.description}
                    </p>
                    <div className="text-[10px] text-gray-500">
                      {getFullLastEdit(alert.timeStamp)}
                    </div>
                  </div>
                </Link>
              </MenuItem>
            ))
          ) : (
            <MenuItem
              disabled
              sx={{ justifyContent: "center", fontSize: "12px", color: "gray" }}
            >
              No new notifications
            </MenuItem>
          )}
        </Menu>
      </div>
    </>
  );
};
export default UserAlertDrop;

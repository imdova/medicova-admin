import { Avatar, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import Link from "next/link";
const UserProfileDrop: React.FC = () => {
  const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(
    null,
  );
  const openProfile = Boolean(anchorElProfile);
  const handleClickProfile = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProfile(event.currentTarget);
  };
  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };
  return (
    <>
      {/* Profile content menu */}
      <div className="ml-5">
        <button
          onClick={handleClickProfile}
          type="button"
          className="nav-btn text-textblack relative h-10 w-10 cursor-pointer overflow-hidden rounded-lg object-cover"
        >
          <span className="sr-only">View Peofile</span>
          <Avatar
            src="https://s3-alpha-sig.figma.com/img/8464/679f/75f2b09276ba5b402bd107381eef2fc7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fiCKsh2T0VjcKgEO-To3MP2ETQL6EVsKDuowszVlZZNciQyHNrwO9yZoSztxaDJrzDxPxvqmbw3W6kJlRo2WtWu5ahqV~hZtCK6S77Z0~OlqzSWkV35qvvg7UT0K08bg5jc2fReoxg32VNO27di0Fp1YUB9YEedagGkKMTwiBUQipUT6XtnVAN0FRJQ75W5R-zj1ns7IPCAljMtFfA1YYf-VZClH3DYCmxGy6bLHaLqtziKHL~HZwn9QP93dtRpS6lYIBQrCqPNY75DFKnbZVPh3iVbaAIHIVuWWGtkS1ulTnJ2xlXm~cCR7eD0~aP~S-cRJ8Xxly6pGHgHkMA9kgQ__"
            alt="Ralph Edwards"
            sx={{ width: 32, height: 32, mr: 2, borderRadius: "10px" }}
          />
        </button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorElProfile}
          open={openProfile}
          onClose={handleCloseProfile}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleCloseProfile}>
            <Link
              className="flex items-center gap-2 p-1 hover:bg-hover-link"
              href="#"
            >
              <span className="h-8 w-8 overflow-hidden rounded-full">
                <Avatar
                  src="https://s3-alpha-sig.figma.com/img/8464/679f/75f2b09276ba5b402bd107381eef2fc7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fiCKsh2T0VjcKgEO-To3MP2ETQL6EVsKDuowszVlZZNciQyHNrwO9yZoSztxaDJrzDxPxvqmbw3W6kJlRo2WtWu5ahqV~hZtCK6S77Z0~OlqzSWkV35qvvg7UT0K08bg5jc2fReoxg32VNO27di0Fp1YUB9YEedagGkKMTwiBUQipUT6XtnVAN0FRJQ75W5R-zj1ns7IPCAljMtFfA1YYf-VZClH3DYCmxGy6bLHaLqtziKHL~HZwn9QP93dtRpS6lYIBQrCqPNY75DFKnbZVPh3iVbaAIHIVuWWGtkS1ulTnJ2xlXm~cCR7eD0~aP~S-cRJ8Xxly6pGHgHkMA9kgQ__"
                  alt="Ralph Edwards"
                  sx={{ width: 32, height: 32, mr: 2 }}
                />
              </span>
              <div className="flex flex-1 flex-col">
                <a className="text-sm" href="#">
                  Ralph Edwards
                </a>
                <p className="text-xs text-secondary">medicova@example.com</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleCloseProfile}>
            <Link
              className="flex items-center gap-2 p-1 hover:bg-hover-link"
              href="#"
            >
              <PersonOutlineIcon className="text-primary" />
              <div className="flex flex-col">
                <div className="text-xs">Account setting</div>
              </div>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleCloseProfile}>
            <Link
              className="flex items-center gap-2 p-1 hover:bg-hover-link"
              href="#"
            >
              <SettingsIcon className="text-primary" />
              <div className="flex flex-col">
                <div className="text-xs">setting</div>
              </div>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleCloseProfile}>
            <Link
              className="flex items-center gap-2 p-1 hover:bg-hover-link"
              href="#"
            >
              <HelpOutlineIcon className="text-primary" />
              <div className="flex flex-col">
                <div className="text-xs">Help Center</div>
              </div>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleCloseProfile}>
            <Link
              className="flex items-center gap-2 p-1 hover:bg-hover-link"
              href="#"
            >
              <ExitToAppIcon className="text-primary" />
              <div className="flex flex-col">
                <div className="text-xs">Logout</div>
              </div>
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};
export default UserProfileDrop;

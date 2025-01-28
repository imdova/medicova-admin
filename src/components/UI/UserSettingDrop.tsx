import { Avatar, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import Link from "next/link";
const UserSettingDrop: React.FC = () => {
  const [anchorElSetting, setAnchorElSetting] = useState<null | HTMLElement>(
    null,
  );
  const openSetting = Boolean(anchorElSetting);
  const handleClickSetting = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSetting(event.currentTarget);
  };
  const handleCloseSetting = () => {
    setAnchorElSetting(null);
  };
  return (
    <>
      {/* Setting content menu */}
      <div>
        <button
          onClick={handleClickSetting}
          type="button"
          className="nav-btn text-textblack relative h-9 w-9 cursor-pointer rounded-lg p-2"
        >
          <span className="sr-only">View setting</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5413 4.42399C14.715 4.42399 14.0451 5.09557 14.0451 5.92399L13.8654 7.1845C13.7046 8.31311 12.3963 8.85641 11.4866 8.17237L10.4705 7.40838C9.88624 6.82259 8.9389 6.82259 8.3546 7.40838L7.29663 8.46905C6.71233 9.05483 6.71233 10.0046 7.29663 10.5904L8.05866 11.609C8.74098 12.5211 8.19907 13.8327 7.07331 13.9939L5.81601 14.174C4.98969 14.174 4.31982 14.8456 4.31982 15.674V17.174C4.31982 18.0024 4.98969 18.674 5.81601 18.674L7.07332 18.8541C8.19908 19.0153 8.74099 20.3269 8.05868 21.2389L7.29663 22.2576C6.71233 22.8435 6.71233 23.7932 7.29663 24.3789L8.3546 25.4396C8.9389 26.0255 9.88624 26.0255 10.4705 25.4396L11.4866 24.6756C12.3963 23.9916 13.7046 24.5349 13.8654 25.6635L14.0451 26.924C14.0451 27.7524 14.715 28.424 15.5413 28.424H17.0374C17.8637 28.424 18.5336 27.7524 18.5336 26.924L18.7133 25.6635C18.8741 24.5349 20.1824 23.9916 21.0921 24.6756L22.1081 25.4396C22.6925 26.0255 23.6398 26.0255 24.2241 25.4396L25.282 24.3789C25.8663 23.7932 25.8663 22.8435 25.282 22.2576L24.52 21.2389C23.8377 20.3269 24.3797 19.0153 25.5053 18.8541L26.7627 18.674C27.589 18.674 28.2589 18.0024 28.2589 17.174V15.674C28.2589 14.8456 27.589 14.174 26.7627 14.174L25.5053 13.9939C24.3797 13.8327 23.8377 12.5211 24.52 11.609L25.282 10.5904C25.8663 10.0046 25.8663 9.05483 25.282 8.46905L24.2241 7.40838C23.6398 6.82259 22.6925 6.82259 22.1081 7.40838L21.0921 8.17237C20.1824 8.85641 18.8741 8.31311 18.7133 7.1845L18.5336 5.92399C18.5336 5.09557 17.8637 4.42399 17.0374 4.42399H15.5413ZM16.2893 19.424C17.9419 19.424 19.2817 18.0808 19.2817 16.424C19.2817 14.7672 17.9419 13.424 16.2893 13.424C14.6368 13.424 13.297 14.7672 13.297 16.424C13.297 18.0808 14.6368 19.424 16.2893 19.424Z"
              fill="#9A9A9A"
            />
          </svg>
        </button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorElSetting}
          open={openSetting}
          onClose={handleCloseSetting}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleCloseSetting}>
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
          <MenuItem onClick={handleCloseSetting}>
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
          <MenuItem onClick={handleCloseSetting}>
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
          <MenuItem onClick={handleCloseSetting}>
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
          <MenuItem onClick={handleCloseSetting}>
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
export default UserSettingDrop;

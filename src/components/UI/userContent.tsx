import useHandleClickOutside from "@/hooks/useHandleClickOutside";
import { Avatar, Button } from "@mui/material";
import { useRef, useState } from "react";
import DiscountIcon from "@mui/icons-material/Discount";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Usercontent: React.FC = () => {
  const [isMessageMenuOpen, setIsMessageMenuOpen] = useState<boolean>(false); // Message menu open  state
  const [isAlertMenuOpen, setIsAlertMenuOpen] = useState<boolean>(false); // Alert menu open  state
  const [isSettingMenuOpen, setIsSettingMenuOpen] = useState<boolean>(false); // Alert menu open  state
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false); // Profile menu open  state
  const messageMenuRef = useRef<HTMLDivElement>(null);
  const alertMenuRef = useRef<HTMLDivElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const settingMenuRef = useRef<HTMLDivElement>(null);

  // This code uses the `useHandleClickOutside` hook to handle clicks outside of multiple menu components.
  // When a click occurs outside the specified references, the corresponding menu's state is set to `false`, closing it.
  // Parameters:
  // - The first array contains the menu references (e.g., messageMenuRef, alertMenuRef).
  // - The second array contains the corresponding callback functions to update the state for each menu.
  useHandleClickOutside(
    [messageMenuRef, alertMenuRef, profileMenuRef, settingMenuRef],
    [
      () => setIsMessageMenuOpen(false),
      () => setIsAlertMenuOpen(false),
      () => setIsProfileMenuOpen(false),
      () => setIsSettingMenuOpen(false),
    ],
  );
  return (
    <div className="relative flex items-center gap-3">
      {/* massege content menu */}
      <div ref={messageMenuRef}>
        <button
          onClick={() => setIsMessageMenuOpen((prev) => !prev)}
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
        {isMessageMenuOpen && (
          <div className="absolute right-0 top-16 w-[250px] rounded-lg bg-primary-foreground p-4 shadow-lg">
            <h2 className="mb-3">Massege</h2>
            <ul className="flex flex-col">
              <li>
                <a
                  className="border-main-border hover:bg-hover-link flex items-center gap-2 border-b p-3"
                  href="#"
                >
                  <span className="h-8 w-8 overflow-hidden rounded-full">
                    <img
                      src="https://remosnextjs.vercel.app/images/avatar/user-12.png"
                      alt=""
                      className="h-full w-full"
                    />
                  </span>
                  <div className="flex flex-1 flex-col">
                    <a className="text-sm" href="#">
                      Ralph Edwards
                    </a>
                    <p className="text-xs text-secondary">
                      Are you there? interested i this...
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  className="border-main-border hover:bg-hover-link flex items-center gap-2 border-b p-3"
                  href="#"
                >
                  <span className="h-8 w-8 overflow-hidden rounded-full">
                    <img
                      src="https://remosnextjs.vercel.app/images/avatar/user-12.png"
                      alt=""
                      className="h-full w-full"
                    />
                  </span>
                  <div className="flex flex-1 flex-col">
                    <a className="text-sm" href="#">
                      Ralph Edwards
                    </a>
                    <p className="text-xs text-secondary">
                      Are you there? interested i this...
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  className="border-main-border hover:bg-hover-link flex items-center gap-2 border-b p-3"
                  href="#"
                >
                  <span className="h-8 w-8 overflow-hidden rounded-full">
                    <img
                      src="https://remosnextjs.vercel.app/images/avatar/user-12.png"
                      alt=""
                      className="h-full w-full"
                    />
                  </span>
                  <div className="flex flex-1 flex-col">
                    <a className="text-sm" href="#">
                      Ralph Edwards
                    </a>
                    <p className="text-xs text-secondary">
                      Are you there? interested i this...
                    </p>
                  </div>
                </a>
              </li>
            </ul>
            <Button className="mt-4 w-full bg-primary" variant="contained">
              Veiw All
            </Button>
          </div>
        )}
      </div>
      {/* alert content menu */}
      <div ref={alertMenuRef}>
        <button
          onClick={() => setIsAlertMenuOpen((prev) => !prev)}
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
        {isAlertMenuOpen && (
          <div className="absolute right-0 top-16 w-[250px] rounded-lg bg-primary-foreground p-4 shadow-lg md:w-[350px]">
            <h2 className="mb-3">Notifications</h2>
            <ul className="flex flex-col">
              <li>
                <a
                  className="border-main-border hover:bg-hover-link flex items-center gap-2 border-b p-3"
                  href="#"
                >
                  <DiscountIcon className="text-primary" />
                  <div className="flex flex-col">
                    <div className="text-xs">Discount available</div>
                    <div className="text-xs text-secondary">
                      Morbi sapien massa, ultricies at rhoncus at, ullamcorper
                      nec diam
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="border-main-border hover:bg-hover-link flex items-center gap-2 border-b p-3"
                  href="#"
                >
                  <DiscountIcon className="text-primary" />
                  <div className="flex flex-col">
                    <div className="text-xs">Discount available</div>
                    <div className="text-xs text-secondary">
                      Morbi sapien massa, ultricies at rhoncus at, ullamcorper
                      nec diam
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="border-main-border hover:bg-hover-link flex items-center gap-2 border-b p-3"
                  href="#"
                >
                  <DiscountIcon className="text-primary" />
                  <div className="flex flex-col">
                    <div className="text-xs">Discount available</div>
                    <div className="text-xs text-secondary">
                      Morbi sapien massa, ultricies at rhoncus at, ullamcorper
                      nec diam
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="border-main-border hover:bg-hover-link flex items-center gap-2 border-b p-3"
                  href="#"
                >
                  <DiscountIcon className="text-primary" />
                  <div className="flex flex-col">
                    <div className="text-xs">Discount available</div>
                    <div className="text-xs text-secondary">
                      Morbi sapien massa, ultricies at rhoncus at, ullamcorper
                      nec diam
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <Button className="mt-4 w-full bg-primary" variant="contained">
              Veiw All
            </Button>
          </div>
        )}
      </div>
      {/* Setting content menu */}
      <div ref={settingMenuRef}>
        <button
          onClick={() => setIsSettingMenuOpen((prev) => !prev)}
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
        {isSettingMenuOpen && (
          <div className="absolute right-0 top-16 max-w-[350px] rounded-lg bg-primary-foreground p-4 shadow-lg">
            <h2 className="mb-3">Profile</h2>
            <ul className="flex flex-col">
              <li>
                <a
                  className="hover:bg-hover-link flex items-center gap-2 p-3"
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
                    <p className="text-xs text-secondary">
                      medicova@example.com
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-hover-link flex items-center gap-2 p-3"
                  href="#"
                >
                  <PersonOutlineIcon className="text-primary" />
                  <div className="flex flex-col">
                    <div className="text-xs">Account setting</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-hover-link flex items-center gap-2 p-3"
                  href="#"
                >
                  <SettingsIcon className="text-primary" />
                  <div className="flex flex-col">
                    <div className="text-xs">setting</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-hover-link flex items-center gap-2 p-3"
                  href="#"
                >
                  <HelpOutlineIcon className="text-primary" />
                  <div className="flex flex-col">
                    <div className="text-xs">Help Center</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="border-main-border hover:bg-hover-link flex items-center gap-2 border-t p-3"
                  href="#"
                >
                  <ExitToAppIcon className="text-primary" />
                  <div className="flex flex-col">
                    <div className="text-xs">Logout</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* Profile content menu */}
      <div className="ml-5" ref={profileMenuRef}>
        <button
          onClick={() => setIsProfileMenuOpen((prev) => !prev)}
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
        {isProfileMenuOpen && (
          <div className="absolute right-0 top-16 max-w-[350px] rounded-lg bg-primary-foreground p-4 shadow-lg">
            <h2 className="mb-3">Profile</h2>
            <ul className="flex flex-col">
              <li>
                <a
                  className="hover:bg-hover-link flex items-center gap-2 p-3"
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
                    <p className="text-xs text-secondary">
                      medicova@example.com
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-hover-link flex items-center gap-2 p-3"
                  href="#"
                >
                  <PersonOutlineIcon className="text-primary" />
                  <div className="flex flex-col">
                    <div className="text-xs">Account setting</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-hover-link flex items-center gap-2 p-3"
                  href="#"
                >
                  <SettingsIcon className="text-primary" />
                  <div className="flex flex-col">
                    <div className="text-xs">setting</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-hover-link flex items-center gap-2 p-3"
                  href="#"
                >
                  <HelpOutlineIcon className="text-primary" />
                  <div className="flex flex-col">
                    <div className="text-xs">Help Center</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="border-main-border hover:bg-hover-link flex items-center gap-2 border-t p-3"
                  href="#"
                >
                  <ExitToAppIcon className="text-primary" />
                  <div className="flex flex-col">
                    <div className="text-xs">Logout</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Usercontent;

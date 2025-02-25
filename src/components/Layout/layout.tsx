"use client";
import { useSession } from "next-auth/react";
import { UserState } from "@/types";
import { usePathname } from "next/navigation";
import { matchRoute } from "./SideBar/LayoutRoutConfigs";
import DynamicSideBar from "./SideBar/dynamic-side-bar";

const DynamicLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const user = session?.user as UserState;

  const pathname = usePathname() || "/";
  const sideBarType = matchRoute(pathname)?.sideBarType || "";
  const getLayout = () => {
    switch (sideBarType) {
      case "full":
        return (
          <div className=" p-4 flex w-full flex-row ">
            <aside className="hidden mx-2 w-1/5 max-w-[250px] rounded-base border border-gray-100 bg-white py-4 shadow-xl lg:block">
              <div className="sticky top-[85px] ">
                <DynamicSideBar user={user} status={status} pathname={pathname} />
              </div>
            </aside>
            <main className="w-full px-0 md:px-6 lg:w-4/5">{children}</main>
          </div>
        );
      case "minimal":
        return children;
      default:
        return children;
    }
  };

  return getLayout();
};

export default DynamicLayout;

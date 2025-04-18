import LogoIcon from "@/components/icons/logo";
import { BaseHeaderProps } from "@/types";
import Link from "next/link";
import { getNavLinks } from "./routeConfigs";
import HeaderAction from "./HeaderAction";
import useScrollDetection from "@/hooks/useScrollDetection";
import { isCurrentPage } from "@/util";

const TransparentHeader: React.FC<BaseHeaderProps> = ({ user, pathname }) => {
  const isScrolled = useScrollDetection();
  const links = getNavLinks(user?.type, pathname);
  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"}`}
    >
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <div className="flex h-[70px] items-center">
          <Link href="/">
            <LogoIcon
              className={`${isScrolled ? "text-primary" : "text-white"} h-[30px] w-auto md:h-[40px]`}
            />
          </Link>
          <nav className="ml-auto flex items-center space-x-8">
            <div className="hidden items-center space-x-8 md:flex">
              {links.map((link, i) => {
                const isPage = isCurrentPage(pathname, link.url);
                return (
                  <Link
                    key={i}
                    href={link.url}
                    className={`font-medium ${isPage ? (isScrolled ? "text-primary" : "text-white") : "hover:text-primary"}`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>

            <HeaderAction user={user} pathname={pathname} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default TransparentHeader;

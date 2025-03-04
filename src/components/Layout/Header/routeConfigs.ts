import { commonLinks, roleBasedLinks } from "@/constants/header";
import { RoleState } from "@/types/next-auth";

type HeaderType = "minimal" | "full" | "centered" | "transparent" | "dark";
type LinksType = "default" | "userType";

interface RouteConfig {
  pattern: string;
  headerType: HeaderType;
  linksType?: LinksType;
}

export const routeConfigs: RouteConfig[] = [
  // default
  { pattern: "/", headerType: "transparent", linksType: "default" },
  { pattern: "/admin/*", headerType: "full", linksType: "userType" },
  { pattern: "/jobs/admin/*", headerType: "full", linksType: "userType" },
  { pattern: "/courses/admin/*", headerType: "full", linksType: "userType" },
  { pattern: "/blogs/*", headerType: "transparent", linksType: "default" },
  { pattern: "/faq/*", headerType: "transparent", linksType: "default" },
  { pattern: "/about_us/*", headerType: "full", linksType: "default" },
  { pattern: "/contact_us/*", headerType: "full", linksType: "default" }, 
];

// DynamicHeader.tsx
export const matchRoute = (pathname: string) => {
  // First, prioritize exact matches (including dynamic segments)
  const exactMatch = routeConfigs.find((route) => {
    // Handle dynamic segments (e.g., "/user/[id]")
    const regexPattern = route.pattern
      .replace(/\[.*?\]/g, "[^/]+")
      .replace(/\//g, "\\/");
    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(pathname);
  });

  if (exactMatch) return exactMatch;

  // If no exact match, check for wildcard patterns
  const wildcardMatch = routeConfigs.find((route) => {
    if (route.pattern.includes("*")) {
      // Convert wildcard pattern into a base path regex
      const wildcardPattern = route.pattern.replace(/\*/g, ".*");
      const regex = new RegExp(`^${wildcardPattern}`);
      return regex.test(pathname);
    }
    return false;
  });

  return wildcardMatch;
};

export function getNavLinks(userType?: RoleState, pathname?: string) {
  if (pathname) {
    const type = matchRoute(pathname)?.linksType;
    if (type === "userType" && userType) {
      return roleBasedLinks[userType];
    }
  }
  return commonLinks.home;
}

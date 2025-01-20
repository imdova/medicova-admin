import { CommonLinks, RoleBasedLinks } from "@/types";

export const roleBasedLinks: RoleBasedLinks = {
  employer: [],
  seeker: [],
  admin: [
    {
      title: "Admin Dashboard",
      url: "/admin/dashboard",
    },
    {
      title: "User Management",
      url: "/admin/users",
    },
    {
      title: "Settings",
      url: "/admin/settings",
    },
  ],
};

export const commonLinks: CommonLinks = {
  home: [
    {
      title: "Admin",
      url: "/admin",
    },
    {
      title: "Admin",
      url: "/admin",
    },
    {
      title: "Admin",
      url: "/admin",
    },
    {
      title: "Admin",
      url: "/admin",
    },
  
  ],
};

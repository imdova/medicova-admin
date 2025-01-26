import { CommonLangouge, CommonLinks, RoleBasedLinks } from "@/types";
import markLang from "@/icons/markLang.png";

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

// Initialize the commonLangouge variable with the correct type
export const commonLangouge: CommonLangouge = [
  {
    id: 1,
    title: "Eng (US)",
    src: markLang,
  },
  {
    id: 2,
    title: "Eng (US)",
    src: markLang,
  },
  {
    id: 3,
    title: "Eng (US)",
    src: markLang,
  },
  {
    id: 4,
    title: "Eng (US)",
    src: markLang,
  },
];

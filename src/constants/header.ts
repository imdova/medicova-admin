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
  "admin jobs": [],
  "admin courses": [],
};

export const commonLinks: CommonLinks = {
  home: [
    {
      title: "Admin",
      url: "/admin",
    },
    {
      title: "Job Admin",
      url: "/jobs/admin",
    },
    {
      title: "Courses Admin",
      url: "/courses/admin",
    },
    {
      title: "Blogs",
      url: "/blogs",
    },
    {
      title: "FAQ",
      url: "/faq",
    },

    {
      title: "About Us",
      url: "/about_us",
    },
    {
      title: "Contact Us",
      url: "/contact_us",
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

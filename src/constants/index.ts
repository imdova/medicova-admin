import { NotificationItem } from "@/types";
import { Book, Build, CheckCircleOutline, Edit, Search } from "@mui/icons-material";

const now = new Date();
const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
const twentyHoursAgo = new Date(now.getTime() - 20 * 60 * 60 * 1000);
const twoDaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
const november11th2024 = new Date(Date.UTC(2024, 10, 11, 0, 0, 0));

export const notifications: NotificationItem[] = [
  {
    title: "5 New Job Matches Found for 'Registered Nurse.'",
    description:
      "We found 5 jobs matching your preferences, including positions at ABC Healthcare and DEF Medical Center.",
    tags: [
      { status: "normal", text: "New" },
      { status: "normal", text: "Full-Time" },
      { status: "normal", text: "Remote" },
    ],
    timeStamp: now,
    isRead: false,
    category: "Job Recommendations",
    icon: Search,
    image:
      "https://www.gravatar.com/avatar/fd2db016ceeecd9303e31266a502d7ab?s=128&d=identicon&r=PG",
    readTime: null,
  },
  {
    title: "Application Submitted to XYZ Hospital.",
    description:
      "Your application for the Nurse position at XYZ Hospital has been successfully submitted. Click to view details.",
    tags: [
      { status: "success", text: "Pending" },
      { status: "normal", text: "Full-Time" },
    ],
    timeStamp: twoHoursAgo,
    isRead: false,
    category: "Application Updates",
    icon: CheckCircleOutline,
    image: "https://media.vanguardcommunications.net/Hospital-exterior.jpg",
    readTime: null,
  },
  {
    title: "ABC Healthcare Viewed Your Profile.",
    description:
      "An employer has viewed your profile. Make sure your profile is complete to increase your chances.",
    tags: [{ status: "warning", text: "Urgent" }],
    timeStamp: twentyHoursAgo,
    isRead: true,
    category: "Profile Updates",
    icon: Edit,
    image: "https://media.vanguardcommunications.net/Hospital-exterior.jpg",
    readTime: twentyHoursAgo,
  },
  {
    title: "Your Profile is 80% Complete.",
    description:
      "Add your certifications to increase your visibility to healthcare employers.",
    tags: [
      { status: "error", text: "Profile" },
      { status: "normal", text: "Action Required" },
    ],
    timeStamp: twoDaysAgo,
    isRead: true,
    category: "Reminders",
    icon: Build,
    image: "https://media.vanguardcommunications.net/Hospital-exterior.jpg",
    readTime: twoDaysAgo,
  },
  {
    title: "3 Steps to Improve Your Resume.",
    description:
      "Follow these steps to make your resume stand out to healthcare employers.",
    tags: [
      { status: "normal", text: "Tip" },
      { status: "normal", text: "Resource" },
    ],
    timeStamp: november11th2024,
    isRead: true,
    category: "Tips & Resources",
    icon: Book,
    image:
      "https://i.iheart.com/v3/re/new_assets/66844a33690c77c14847c03c?ops=contain(1480,0)",
    readTime: november11th2024,
  },
];
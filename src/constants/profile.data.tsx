import { Notification2 } from "@/types/profile";

export const dummyNotifications: Notification2[] = [
  {
    id: 1,
    name: "Bessie Cooper",
    avatar: "https://via.placeholder.com/40",
    message: "Ahmed RAMADANGD didn't update his status for more than 59 days",
    date: new Date(),
    read: false,
  },
  {
    id: 2,
    name: "Marvin McKinney",
    avatar: "https://via.placeholder.com/40",
    message: "Ahmed RAMADANGD didn't update his status for more than 59 days",
    date: new Date(),
    read: true,
  },
  {
    id: 3,
    name: "Courtney Henry",
    avatar: "https://via.placeholder.com/40",
    message: "Ahmed RAMADANGD didn't update his status for more than 59 days",
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
    read: false,
  },
  {
    id: 4,
    name: "Esther Howard",
    avatar: "https://via.placeholder.com/40",
    message: "Ahmed RAMADANGD didn't update his status for more than 59 days",
    date: new Date(new Date().setDate(new Date().getDate() - 2)),
    read: true,
  },
];

export const dummyCourses = [
  {
    id: 1,
    name: "Web Development Bootcamp",
    image:
      "https://img.freepik.com/free-photo/portrait-woman-holding-clip-board-hands-writing-paper-wearing-glasses-isolated-grey-wall_231208-209.jpg?t=st=1741423896~exp=1741427496~hmac=a56ac8f14382138f6ba57b43a568eee52bd8e5b4c9a5554b6a6b469a049e6c76&w=1380",
    mode: "Online",
    date: "20/06/2024",
    students: 250,
  },
  {
    id: 2,
    name: "Data Science Fundamentals",
    image:
      "https://img.freepik.com/free-photo/smiling-woman-holding-laptop_231208-209.jpg",
    mode: "Online",
    date: "15/07/2024",
    students: 180,
  },
  {
    id: 3,
    name: "UI/UX Design Masterclass",
    image:
      "https://img.freepik.com/free-photo/portrait-smiling-young-woman_231208-209.jpg",
    mode: "Online",
    date: "10/08/2024",
    students: 220,
  },
];
// dummy data
export const dummyData = [
  {
    imageUrl:
      "https://img.freepik.com/free-photo/surprised-pretty-businesswoman-chatting-by-phone-standing-isolated_231208-196.jpg?t=st=1741433009~exp=1741436609~hmac=f7b5b0c72a49b998cbf10430f3ecd3314cddde47a567c4e50d3168eec6d4aa97&w=1380",
    title: "Medical Terminology Specialization",
    instructor: "Mohamed Farag",
    instructorImage:
      "https://img.freepik.com/free-photo/medium-shot-woman-posing-indoors_23-2149915935.jpg?t=st=1741433123~exp=1741436723~hmac=951a1a4ed8e3f5826c1573d6c046d95faf461ec5d4dbbe4f62bef0aa54c45384&w=740",
    progress: 70,
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/surprised-pretty-businesswoman-chatting-by-phone-standing-isolated_231208-196.jpg?t=st=1741433009~exp=1741436609~hmac=f7b5b0c72a49b998cbf10430f3ecd3314cddde47a567c4e50d3168eec6d4aa97&w=1380",
    title: "Anatomy Basics",
    instructor: "Sarah Johnson",
    instructorImage:
      "https://img.freepik.com/free-photo/medium-shot-woman-posing-indoors_23-2149915935.jpg?t=st=1741433123~exp=1741436723~hmac=951a1a4ed8e3f5826c1573d6c046d95faf461ec5d4dbbe4f62bef0aa54c45384&w=740",
    progress: 50,
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/surprised-pretty-businesswoman-chatting-by-phone-standing-isolated_231208-196.jpg?t=st=1741433009~exp=1741436609~hmac=f7b5b0c72a49b998cbf10430f3ecd3314cddde47a567c4e50d3168eec6d4aa97&w=1380",
    title: "Pathophysiology Insights",
    instructor: "James Smith",
    instructorImage:
      "https://img.freepik.com/free-photo/medium-shot-woman-posing-indoors_23-2149915935.jpg?t=st=1741433123~exp=1741436723~hmac=951a1a4ed8e3f5826c1573d6c046d95faf461ec5d4dbbe4f62bef0aa54c45384&w=740",
    progress: 85,
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/surprised-pretty-businesswoman-chatting-by-phone-standing-isolated_231208-196.jpg?t=st=1741433009~exp=1741436609~hmac=f7b5b0c72a49b998cbf10430f3ecd3314cddde47a567c4e50d3168eec6d4aa97&w=1380",
    title: "Clinical Procedures",
    instructor: "Emma Brown",
    instructorImage:
      "https://img.freepik.com/free-photo/medium-shot-woman-posing-indoors_23-2149915935.jpg?t=st=1741433123~exp=1741436723~hmac=951a1a4ed8e3f5826c1573d6c046d95faf461ec5d4dbbe4f62bef0aa54c45384&w=740",
    progress: 40,
  },
];

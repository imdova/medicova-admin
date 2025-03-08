"use client";

import MedicalCard from "@/components/UI/MedicalCard";
import MenuCard from "@/components/UI/MenuCard";
import NotficationContent from "@/components/UI/NotficationContent";
import ProgressAvatar from "@/components/UI/ProgressAvatar";
import MentorInstructorTable from "@/components/UI/Tables/MentorInstructorTable";
import { NotificationsNoneOutlined } from "@mui/icons-material";

const dummyData = [
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

export default function StudentProfile() {
  return (
    <div className="p-4">
      <h2 className="mb-6 text-2xl font-bold">Student Profile</h2>
      {/* Top Section with Notifications */}
      <div className="mb-4 flex flex-col gap-4 xl:flex-row">
        {/* Left Column */}
        <div className="flex-1">
          {/* Notifications */}
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                    <NotificationsNoneOutlined />
                  </div>
                  <div>
                    <span className="text-sm text-secondary">2/8 Watched</span>
                    <h2 className="font-semibold">Course Name</h2>
                  </div>
                </div>
                <MenuCard />
              </div>
            ))}
          </div>
          {/* Continue Watching */}
          <div>
            <h2 className="my-6 text-lg font-semibold">Continue Watching</h2>
            <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {dummyData.map((course, index) => (
                <MedicalCard key={index} {...course} />
              ))}
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="w-full max-w-xl xl:w-[300px]">
          <div className="mb-4 box-content">
            <ProgressAvatar
              name="Mohamed Farag"
              email="Mfarag@simmmpple.com"
              location="Cairo, Egypt"
              imageUrl="https://img.freepik.com/free-photo/medium-shot-woman-posing-indoors_23-2149915935.jpg?t=st=1741433123~exp=1741436723~hmac=951a1a4ed8e3f5826c1573d6c046d95faf461ec5d4dbbe4f62bef0aa54c45384&w=740"
              progress={75}
            />
          </div>
          <div className="box-content">
            <NotficationContent />
          </div>
        </div>
      </div>
      {/* Table Section */}
      <div className="box-content">
        <MentorInstructorTable />
      </div>
    </div>
  );
}

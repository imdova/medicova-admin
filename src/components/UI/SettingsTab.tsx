"use client";
import * as React from "react";

import {
  CloudOffOutlined,
  FileDownloadDoneOutlined,
  PaidOutlined,
  PersonOutlineOutlined,
  SettingsOutlined,
  SupportOutlined,
  TextSnippetOutlined,
} from "@mui/icons-material";
import GeneralPanel from "@/app/courses/admin/add-course/panels/GeneralPanel";
import { useState } from "react";
import OfflineCoursesPanel from "@/app/courses/admin/add-course/panels/OfflineCoursesPanel";
import PricingPanel from "@/app/courses/admin/add-course/panels/PricingPanel";
import ExtraInformationPanel from "@/app/courses/admin/add-course/panels/ExtraInformationPanel";
import AssessmentPanel from "@/app/courses/admin/add-course/panels/AssessmentPanel";
import DownloadablePanel from "@/app/courses/admin/add-course/panels/DownloadablePanel";
import AuthorPanel from "@/app/courses/admin/add-course/panels/AuthorPanel";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};
const tabs = [
  {
    label: (
      <div className="flex w-full items-center justify-start gap-3">
        <SettingsOutlined className="text-xl" />
        <span className="text-sm">General</span>
      </div>
    ),
    content: <GeneralPanel />,
  },
  {
    label: (
      <div className="flex w-full items-center justify-start gap-3">
        <CloudOffOutlined className="text-xl" />
        <span className="text-sm">Offline courses</span>
      </div>
    ),
    content: <OfflineCoursesPanel />,
  },
  {
    label: (
      <div className="flex w-full items-center justify-start gap-3">
        <PaidOutlined className="text-xl" />
        <span className="text-sm">Pricing</span>
      </div>
    ),
    content: <PricingPanel />,
  },
  {
    label: (
      <div className="flex w-full items-center justify-start gap-3">
        <TextSnippetOutlined className="text-xl" />
        <span className="text-sm">Extra Information</span>
      </div>
    ),
    content: <ExtraInformationPanel />,
  },
  {
    label: (
      <div className="flex w-full items-center justify-start gap-3">
        <SupportOutlined className="text-xl" />
        <span className="text-sm">Assessment</span>
      </div>
    ),
    content: <AssessmentPanel />,
  },
  {
    label: (
      <div className="flex w-full items-center justify-start gap-3">
        <PersonOutlineOutlined className="text-xl" />
        <span className="text-sm">Author</span>
      </div>
    ),
    content: <AuthorPanel />,
  },
  {
    label: (
      <div className="flex w-full items-center justify-start gap-3">
        <FileDownloadDoneOutlined className="text-xl" />
        <span className="text-sm">Downloadable</span>
      </div>
    ),
    content: <DownloadablePanel />,
  },
];

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex w-full flex-col gap-4 lg:flex-row">
      {/* Tab Buttons */}
      <div className="mb-7 flex flex-col gap-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex h-14 w-full items-center justify-start gap-2 rounded-md p-2 text-center transition-all duration-300 lg:w-[180px] ${
              activeTab === index
                ? "bg-primary font-semibold text-white"
                : "bg-[#eee] text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full rounded-md border p-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;

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
import { UseFormRegister, UseFormSetValue, FieldErrors } from "react-hook-form";

interface TabsProps {
  formData: any;
  onChange: (field: string, value: any) => void;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  errors: FieldErrors<any>;
}

const Tabs: React.FC<TabsProps> = ({
  formData,
  onChange,
  register,
  setValue,
  errors,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const hasErrors = (fields: string[]) => fields.some((field) => errors[field]);

  const tabs = [
    {
      label: (
        <div className="flex w-full items-center justify-start gap-3">
          <SettingsOutlined className="text-xl" />
          <span className="text-sm">General</span>
          {hasErrors([
            "durationWeeks",
            "blockOnCompletion",
            "difficultyLevel",
            "maxStudent",
            "featuredReview",
            "extrnalLink",
          ]) && <span className="text-red-600">*</span>}
        </div>
      ),
      content: (
        <GeneralPanel
          formData={formData}
          onChange={onChange}
          register={register}
          setValue={setValue}
          errors={errors}
        />
      ),
    },
    {
      label: (
        <div className="flex w-full items-center justify-start gap-3">
          <CloudOffOutlined className="text-xl" />
          <span className="text-sm">Offline courses</span>
          {hasErrors(["enableOffline", "deliveryType", "address"]) && (
            <span className="text-red-600">*</span>
          )}
        </div>
      ),
      content: (
        <OfflineCoursesPanel
          formData={formData}
          onChange={onChange}
          register={register}
          setValue={setValue}
          errors={errors}
        />
      ),
    },
    {
      label: (
        <div className="flex w-full items-center justify-start gap-3">
          <PaidOutlined className="text-xl" />
          <span className="text-sm">Pricing</span>
          {hasErrors(["regularPrice", "priceSuffix"]) && (
            <span className="text-red-600">*</span>
          )}
        </div>
      ),
      content: (
        <PricingPanel
          formData={formData}
          onChange={onChange}
          register={register}
          setValue={setValue}
          errors={errors}
        />
      ),
    },
    {
      label: (
        <div className="flex w-full items-center justify-start gap-3">
          <TextSnippetOutlined className="text-xl" />
          <span className="text-sm">Extra Information</span>
          {hasErrors(["requirements", "targetAudience", "keyFeatures"]) && (
            <span className="text-red-600">*</span>
          )}
        </div>
      ),
      content: (
        <ExtraInformationPanel
          formData={formData}
          onChange={onChange}
          register={register}
          setValue={setValue}
          errors={errors}
        />
      ),
    },
    {
      label: (
        <div className="flex w-full items-center justify-start gap-3">
          <SupportOutlined className="text-xl" />
          <span className="text-sm">Assessment</span>
          {hasErrors(["evaluation", "passingGrade"]) && (
            <span className="text-red-600">*</span>
          )}
        </div>
      ),
      content: (
        <AssessmentPanel
          formData={formData}
          onChange={onChange}
          register={register}
          errors={errors}
        />
      ),
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
          {hasErrors(["fileTitle", "method", "linkUrl"]) && (
            <span className="text-red-600">*</span>
          )}
        </div>
      ),
      content: <DownloadablePanel formData={formData} onChange={onChange} />,
    },
  ];

  return (
    <div className="flex w-full flex-col gap-4 lg:flex-row">
      <div className="mb-7 flex flex-col gap-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            type="button"
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
      <div className="w-full rounded-md border p-4">
        {tabs.map((tab, index) => (
          <div className={activeTab === index ? "block" : "hidden"} key={index}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

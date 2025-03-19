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
  formData: any; // Define a proper interface for formData
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
  const tabs = [
    {
      label: (
        <div className="flex w-full items-center justify-start gap-3">
          <SettingsOutlined className="text-xl" />
          <span className="text-sm">General</span>
        </div>
      ),
      content: (
        <GeneralPanel
          formData={{
            durationWeeks: formData.durationWeeks,
            blockOnCompletion: formData.blockOnCompletion,
            blockOnExpire: formData.blockOnExpire,
            allowRepurchase: formData.allowRepurchase,
            repurchaseAction: formData.repurchaseAction,
            difficultyLevel: formData.difficultyLevel,
            roleStudentsEnrolled: formData.roleStudentsEnrolled,
            maxStudent: formData.maxStudent,
            retackeCourse: formData.retackeCourse,
            finishButton: formData.finishButton,
            featuredlist: formData.featuredlist,
            featuredReview: formData.featuredReview,
            extrnalLink: formData.extrnalLink,
          }}
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
        </div>
      ),
      content: (
        <OfflineCoursesPanel
          formData={{
            enableOffline: formData.enableOffline,
            deliveryType: formData.deliveryType,
            lessons: formData.lessons,
            finishButton: formData.finishButton,
            address: formData.address,
          }}
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
        </div>
      ),
      content: (
        <PricingPanel
          formData={{
            finishButton: formData.finishButton,
            enrollmentRequirement: formData.enrollmentRequirement,
            regularPrice: formData.regularPrice,
            priceSuffix: formData.priceSuffix,
          }}
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
        </div>
      ),
      content: (
        <ExtraInformationPanel
          formData={{
            requirements: formData.requirements,
            targetAudience: formData.targetAudience,
            keyFeatures: formData.keyFeatures,
            faqs: formData.faqs,
          }}
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
        </div>
      ),
      content: (
        <AssessmentPanel
          formData={{
            finishButton: formData.finishButton,
            evaluation: formData.evaluation,
            passingGrade: formData.passingGrade,
          }}
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
        </div>
      ),
      content: (
        <DownloadablePanel
          materialFiles={{
            fileTitle: formData.fileTitle || "", // Ensure a string value
            method: (formData.method as "Upload" | "Link") || "Upload", // Ensure the correct type
            selectedFiles: (formData.selectedFiles || []) as File[], // Ensure an array of File objects
          }}
          onChange={onChange}
        />
      ),
    },
  ];
  return (
    <div className="flex w-full flex-col gap-4 lg:flex-row">
      {/* Tab Buttons */}
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

      {/* Tab Content */}
      <div className="w-full rounded-md border p-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;

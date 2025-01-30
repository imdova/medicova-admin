"use client";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import IndustriesSlices from "./IndustriesSlices";
import MoreVertButton from "@/components/UI/MoreVertButton";

const IndustriesPage: React.FC = () => {
  const [activeIndustries, setActiveIndustries] = useState("Healthcare");
  // List of  industries
  const [industries, setIndustries] = useState([
    "Healthcare",
    "Pharmaceutical",
    "Education",
  ]);
  // List of  Categories
  const Categories = [
    "Doctors",
    "Physiotherapists",
    "Pharmacists",
    "Nurses",
    "Administrator",
    "Allied Health Professionals",
    "Research & development",
    "Pharmaceutical sales and Marketing",
    "Quality Management ",
    "Dentists",
  ];
  if (!industries.includes(activeIndustries)) return null;
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="box-content w-full md:w-[400px]">
        <h2 className="mb-3 font-semibold">Industries</h2>
        <div className="flex gap-2">
          <input
            type="text"
            className="w-full rounded-md border p-2 outline-none"
            placeholder="New Industries"
          />
          <button className="h-11 w-12 rounded-md bg-primary text-white">
            <Add />
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {/* Looping for Tabs of industries  */}
          {industries.map((e) => {
            return (
              <button
                key={e}
                onClick={() => setActiveIndustries(e)}
                className={`flex justify-between rounded-md p-2 ${activeIndustries === e ? "bg-primary text-white" : ""}`}
              >
                {e}
                <MoreVertButton />
              </button>
            );
          })}
        </div>
      </div>
      <div className="box-content w-full">
        <div className="mb-5 flex justify-between">
          <h2 className="mb-3 font-semibold">
            Manage Categories for {activeIndustries}
          </h2>
          <div className="flex gap-2">
            <input
              type="text"
              className="w-full rounded-md border p-2 outline-none"
              placeholder="New Category"
            />
            <button className="h-11 w-12 rounded-md bg-primary text-white">
              <Add />
            </button>
          </div>
        </div>
        {/* Looping for Tree View checkbox of Categories  */}

        {industries.map((industrie) => {
          return (
            <div key={industrie}>
              {activeIndustries === industrie && (
                <IndustriesSlices categories={Categories} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default IndustriesPage;

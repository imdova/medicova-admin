"use client";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import MoreVertButton from "@/components/UI/MoreVertButton";
import SpecialtiesSlice from "./SpecialtiesSlice";
import CareerSlice from "./CareerSlice";

const CategoriesPage: React.FC = () => {
  const [activeCategoriess, setActiveCategoriess] = useState("Doctors");
  // list of categories
  const [Categoriess, setCategoriess] = useState([
    "Doctors",
    "Dentists",
    "Physiotherapists",
    "Pharmacists",
    "Nurses",
    "Allied Health Professionals",
    "Research & development",
    "Pharmaceutical sales and Marketing",
    "Quality Management",
  ]);
  // list of Careers
  const Careers = [
    "Doctors",
    "Dentists",
    "Physiotherapists",
    "Pharmacists",
    "Nurses",
    "Allied Health Professionals",
    "Research & development",
    "Pharmaceutical sales and Marketing",
    "Quality Management",
  ];
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="box-content w-full md:w-[350px]">
        <h2 className="mb-3 font-semibold">Categoriess</h2>
        <div className="flex gap-2">
          <input
            type="text"
            className="w-full rounded-md border p-2 outline-none"
            placeholder="New Categoriess"
          />
          <button className="h-11 w-12 rounded-md bg-primary text-white">
            <Add />
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {Categoriess.map((e) => {
            return (
              <button
                key={e}
                onClick={() => setActiveCategoriess(e)}
                className={`flex justify-between rounded-md p-2 ${activeCategoriess === e ? "bg-primary text-white" : ""}`}
              >
                <div className="text-start">{e}</div>
                <MoreVertButton />
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 xl:flex-row">
        <div className="box-content w-full">
          <div className="mb-5 flex flex-col gap-3">
            <h2 className="text-center font-semibold">
              Manage Specialties for Doctors {activeCategoriess}
            </h2>
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="w-full rounded-md border p-2 outline-none"
                placeholder="New Specialty"
              />
              <button className="h-9 w-12 rounded-md bg-primary text-white">
                <Add />
              </button>
            </div>
          </div>
          {Categoriess.map((Category) => {
            return (
              <div key={Category}>
                {activeCategoriess === Category && (
                  <SpecialtiesSlice categories={[]} />
                )}
              </div>
            );
          })}
        </div>
        <div className="box-content w-full">
          <div className="mb-5 flex flex-col gap-3">
            <h2 className="text-center font-semibold">
              Manage Career Leveks for Doctors {activeCategoriess}
            </h2>
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="w-full rounded-md border p-2 outline-none"
                placeholder="New Career Level"
              />
              <button className="h-9 w-12 rounded-md bg-primary text-white">
                <Add />
              </button>
            </div>
          </div>
          {Categoriess.map((Category) => {
            return (
              <div key={Category}>
                {activeCategoriess === Category && (
                  <CareerSlice Careers={Careers} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default CategoriesPage;

"use client";
import CoursesTable from "@/components/UI/Tables/CoursesTable";

export default function CoursesPage() {
  return (
    <div>
      <h2 className="my-6 text-2xl font-bold">Courses</h2>
      <div className="box-content">
        <CoursesTable />
      </div>
    </div>
  );
}

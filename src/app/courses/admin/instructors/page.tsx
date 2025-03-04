"use client";
import InstructorsTable from "@/components/UI/Tables/InstructorsTable";

export default function InstructorsPage() {
  return (
    <div>
      <h2 className="my-6 text-2xl font-bold">Instructors</h2>
      <div className="box-content">
        <InstructorsTable />
      </div>
    </div>
  );
}

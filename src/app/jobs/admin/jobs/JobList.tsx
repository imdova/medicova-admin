"use client";
import OverveiwJobTable from "@/components/UI/Tables/OverveiwJobTable";
const JobList: React.FC = () => {
  return (
    <>
      <div className="box-content !p-0">
        <OverveiwJobTable Filtring={true} />
      </div>
    </>
  );
};

export default JobList;

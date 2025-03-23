"use client";
import OverveiwJobTable from "@/components/UI/Tables/OverveiwJobTable";
const JobList: React.FC = () => {
  const API_GET_JOBS_TABLE_DATA = "/api/employers/table-data";

  return (
    <>
      <div className="box-content !p-0">
        <OverveiwJobTable endPoint={API_GET_JOBS_TABLE_DATA} Filtring={true} />
      </div>
    </>
  );
};

export default JobList;

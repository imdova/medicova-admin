"use client";
import OverviewEmployersTable from "@/components/UI/Tables/OverviewEmployersTable";
const EmployerList: React.FC = () => {
  return (
    <>
      <div className="box-content !p-0">
        <OverviewEmployersTable Filtring={true} />
      </div>
    </>
  );
};

export default EmployerList;

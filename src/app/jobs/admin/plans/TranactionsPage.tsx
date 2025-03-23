import OverviewBillingTable from "@/components/UI/Tables/OverviewBillingTable";

const TranactionsPage: React.FC = () => {
  const API_GET_TrANSACTION_TABLE_DATA = "/api/employers/table-data";
  return (
    <div className="box-content">
      <OverviewBillingTable endPoint={API_GET_TrANSACTION_TABLE_DATA} />
    </div>
  );
};
export default TranactionsPage;

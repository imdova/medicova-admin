import OverviewBillingTable from "@/components/UI/Tables/OverviewBillingTable";
interface TransactionsPageProps {
  endPoint: string;
}
const TranactionsPage: React.FC<TransactionsPageProps> = ({ endPoint }) => {
  return (
    <div className="box-content">
      <OverviewBillingTable endPoint={endPoint} />
    </div>
  );
};
export default TranactionsPage;

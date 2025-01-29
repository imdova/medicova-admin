import { LineChart } from "@mui/x-charts";
import NestedMenu from "../NestedMenu";
type ChartEmployersProps = {
  labelX: string;
  labelY: string;
};
const ChartEmployerReport: React.FC<ChartEmployersProps> = ({
  labelX,
  labelY,
}) => {
  return (
    <>
      <div className="flex w-full items-center justify-between p-4">
        <div>
          <span className="mb-2 text-secondary">Statistics</span>
          <h2>User Report</h2>
        </div>
        <NestedMenu />
      </div>
      <LineChart
        margin={{ top: 30, bottom: 100 }}
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" },
          },
        }} //  Positions the legend at the bottom-middle and aligns it in a row.
        series={[
          {
            curve: "linear",
            data: [0, 5, 2, 6, 3, 9.3],
            label: labelX,
            color: "#FF8743",
          },
          {
            curve: "linear",
            data: [6, 3, 7, 9.5, 4, 2],
            label: labelY,
            color: "#0884FF",
          },
        ]}
        height={400}
        grid={{ horizontal: true }}
        sx={{
          ".MuiChartsAxis-line": {
            display: "none",
          },
          ".MuiChartsAxis-tick": {
            display: "none",
          },
          ".MuiChartsLegend-mark": {
            borderRadius: 100,
          },
          ".MuiChartsAxis-tickLabel tspan": {
            fontSize: "10px",
          },
          ".css-1u0lry5-MuiChartsLegend-root tspan": {
            fontSize: "10px",
          },
        }}
      />
    </>
  );
};

export default ChartEmployerReport;

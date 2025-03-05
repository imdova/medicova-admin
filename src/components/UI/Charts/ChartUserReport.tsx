import { AxisConfig, BarChart, ChartsXAxisProps } from "@mui/x-charts";
import NestedMenu from "../NestedMenu";

type ChartUserProps = {
  labelX: string;
};

const ChartUserReport: React.FC<ChartUserProps> = ({ labelX }) => {
  return (
    <>
      <div className="flex w-full items-center justify-between p-4">
        <div>
          <span className="mb-2 text-secondary">Statistics</span>
          <h2>Employer Report</h2>
        </div>
        <NestedMenu />
      </div>
      <BarChart
        sx={{
          ".MuiChartsAxis-line": {
            display: "none",
          },

          ".MuiChartsAxis-tick": {
            display: "none",
          },
          ".MuiChartsAxis-tickLabel tspan": {
            fontSize: "8px",
          },
        }}
        margin={{ top: 30 }}
        grid={{ horizontal: true }}
        borderRadius={6} // Adds rounded corners
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" },
            hidden: true,
          }, //  Positions the legend at the bottom-middle and aligns it in a row.
        }}
        xAxis={[
          {
            scaleType: "band",
            data: [
              "Doctors",
              "Dentists",
              "Pharmacists",
              "Physiot...",
              "Nurses",
              "Technicians",
            ],
            barGapRatio: 0.8,
            categoryGapRatio: 0.6,
          } as AxisConfig<"band", unknown, ChartsXAxisProps>,
        ]}
        series={[
          {
            label: labelX,
            data: [2423, 2200, 2100, 2500, 1900, 2300], // Data matches each x-axis category
            color: "#2ba149e5",
          },
        ]}
        height={400}
      />
    </>
  );
};

export default ChartUserReport;

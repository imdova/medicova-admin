import { LineChart } from "@mui/x-charts";
import NestedMenu from "../NestedMenu";
import React from "react";

type ChartEmployersProps = {
  labelX: string;
  labelY: string;
  months: string[];
  newEmployers: number[];
  jobApplicants: number[];
  endPoint: string;
};

const ChartEmployerReport: React.FC<ChartEmployersProps> = ({
  labelX,
  labelY,
  months = [],
  newEmployers = [],
  jobApplicants = [],
  endPoint,
}) => {
  const hasData =
    months.length > 0 && newEmployers.length > 0 && jobApplicants.length > 0;

  return (
    <>
      <div className="flex w-full items-center justify-between p-4">
        <div>
          <span className="mb-2 text-secondary">Statistics</span>
          <h2>User Report</h2>
        </div>
        <NestedMenu />
      </div>
      {hasData ? (
        <LineChart
          margin={{ top: 30, bottom: 100 }}
          xAxis={[{ data: months, scaleType: "point" }]}
          slotProps={{
            legend: {
              direction: "row",
              position: { vertical: "bottom", horizontal: "middle" },
            },
          }}
          series={[
            {
              curve: "linear",
              data: newEmployers, // Uses actual data
              label: labelX,
              color: "#FF8743",
            },
            {
              curve: "linear",
              data: jobApplicants, // Uses actual data
              label: labelY,
              color: "#0884FF",
            },
          ]}
          height={400}
          grid={{ horizontal: true }}
          sx={{
            ".MuiChartsAxis-line": { display: "none" },
            ".MuiChartsAxis-tick": { display: "none" },
            ".MuiChartsLegend-mark": { borderRadius: 100 },
            ".MuiChartsAxis-tickLabel tspan": { fontSize: "10px" },
            ".css-1u0lry5-MuiChartsLegend-root tspan": { fontSize: "10px" },
          }}
        />
      ) : (
        <p className="text-center text-secondary">No data available</p>
      )}
    </>
  );
};

export default ChartEmployerReport;

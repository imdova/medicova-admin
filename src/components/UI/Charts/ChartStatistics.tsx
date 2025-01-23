import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { useState } from "react";
import NestedMenu from "../NestedMenu";
import CalendarWithSelect from "../NestedMenu";

const ChartStatistics: React.FC = () => {
  return (
    <>
      <div className="flex w-full justify-between">
        <div className="">
          <span className="mb-2 text-secondary">Statistics</span>
          <h2>Employer Report</h2>
        </div>
        <CalendarWithSelect />
      </div>
      <LineChart
        margin={{ top: 20, bottom: 100 }}
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
            label: "New Employers",
          },
          {
            curve: "linear",
            data: [6, 3, 7, 9.5, 4, 2],
            label: "Apply For job",
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
        }}
      />
    </>
  );
};

export default ChartStatistics;

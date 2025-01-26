"use client";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import EmployerList from "./dashboard/EmployerList";
import OvarviewPage from "./dashboard/Ovarview";
import Link from "next/link";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel" // Accessibility: Defines this as a tab panel
      hidden={value !== index} // Hide the panel if it doesn't match the active tab
      id={`simple-tabpanel-${index}`} // Unique ID for the panel
      aria-labelledby={`simple-tab-${index}`} // Links the panel to its corresponding tab
      {...other}
    >
      {/* Render children only when the panel is active */}
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function aProps(index: number) {
  return {
    id: `simple-tab-${index}`, // Unique ID for the tab
    "aria-controls": `simple-tabpanel-${index}`, // Links the tab to its corresponding panel
  };
}

const page = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="box-content flex flex-col items-start justify-between gap-5 sm:flex-row">
        <Box
          sx={{
            // Styles for the selected tab
            ".css-o37pu0-MuiButtonBase-root-MuiTab-root.Mui-selected": {
              backgroundColor: "#2ba149", // Green background for selected tab
              borderRadius: "30px", // Rounded corners
              color: "white", // White text for selected tab
            },
            // General styles for all tabs
            ".css-o37pu0-MuiButtonBase-root-MuiTab-root": {
              minHeight: 0, // Remove extra height from tabs
              fontSize: 10,
            },
            // Styles for the Tabs container
            ".css-5i28le-MuiTabs-root": {
              minHeight: 0, // Remove extra height from tabs container
            },
            // Styles for the Tabs container
            ".MuiBox-root": {
              padding: 0, // Remove extra height from tabs container
            },
          }}
        >
          {/* Tabs container */}
          <Tabs
            value={value} // Current selected tab index
            onChange={handleChange} // Function to handle tab change
            aria-label="basic tabs example" // Accessibility label
            TabIndicatorProps={{
              style: { display: "none" }, // Hide the default indicator
            }}
            sx={{
              // Styling for all Tab components
              ".MuiTab-root": {
                textTransform: "none", // Disable uppercase text
              },
            }}
          >
            {/* Individual tabs */}
            <Tab label="Overview" {...aProps(0)} /> {/* Tab 1 */}
            <Tab label="Employers List" {...aProps(1)} /> {/* Tab 2 */}
            <Tab label="Setting" {...aProps(2)} /> {/* Tab 3 */}
          </Tabs>
        </Box>
        <Button
          className="rounded-md bg-primary p-2"
          size="small"
          variant="contained"
        >
          <Link
            className="flex items-center gap-3"
            href={"/admin/add-employer"}
          >
            <AddCircleOutlineIcon />
            <span className="text-xs">New Employer</span>
          </Link>
        </Button>
      </div>
      <CustomTabPanel value={value} index={0}>
        <OvarviewPage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <EmployerList />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Setting
      </CustomTabPanel>
    </div>
  );
};

export default page;

"use client";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import EmployerList from "./dashboard/EmployerList";
import OvarviewPage from "./dashboard/Ovarview";
import AddNewEmployer from "./dashboard/add-employer";
import { Add } from "@mui/icons-material";

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
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

function aProps(index: number) {
  return {
    id: `simple-tab-${index}`, // Unique ID for the tab
    "aria-controls": `simple-tabpanel-${index}`, // Links the tab to its corresponding panel
  };
}

const Page = () => {
  const [value, setValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="box-content flex flex-col items-center justify-between gap-5 sm:flex-row md:items-start">
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
          onClick={handleOpenModal}
          className="flex items-center gap-2 rounded-md bg-primary p-2"
          size="small"
          variant="contained"
        >
          <Add />
          <span className="text-xs">New Employer</span>
        </Button>

        <AddNewEmployer
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
        />
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

export default Page;

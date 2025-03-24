"use client";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Add } from "@mui/icons-material";
import EmployeesTableList from "@/components/UI/Tables/EmployeesTableList";
import AddNewEmployee from "./AddNewEmployee";

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

const EmployessPage: React.FC = () => {
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
  // endPoints
  const API_GET_EMPLOYERS_TABLE_DATA = "/api/employers/table-data";
  const API_POST_NEW_EMPLOYERS_DATA = "/api/submit-form";

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
              minWidth: 60,
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
            <Tab label="Employees List" {...aProps(0)} /> {/* Tab 1 */}
            <Tab label="Setting" {...aProps(1)} /> {/* Tab 2 */}
          </Tabs>
        </Box>
        <Button
          onClick={handleOpenModal}
          className="flex w-full gap-2 rounded-md bg-primary p-2 sm:w-fit"
          size="small"
          variant="contained"
        >
          <Add />
          <span className="text-xs">New Employee</span>
        </Button>
        <AddNewEmployee
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
          endPoint={API_POST_NEW_EMPLOYERS_DATA}
        />
      </div>
      <CustomTabPanel value={value} index={0}>
        <div className="box-content">
          <EmployeesTableList
            Filtring={true}
            endPoint={API_GET_EMPLOYERS_TABLE_DATA}
          />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Setting
      </CustomTabPanel>
    </div>
  );
};

export default EmployessPage;

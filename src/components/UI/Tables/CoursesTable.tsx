import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import SearchInput from "@/components/UI/SearchInput";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TableDropMenu from "../TableDropMenu";
import { Add, Tune } from "@mui/icons-material";

import ExportBtnIcon from "../ExportBtnIcon";
import Link from "next/link";

const columns: GridColDef[] = [
  {
    field: "Name",
    headerName: "Name",
    width: 160,
    sortable: true,
  },
  {
    field: "Date",
    headerName: "Date",
    sortable: true,
    flex: 1,
  },
  {
    field: "Category",
    headerName: "Category",
    sortable: true,
    flex: 1,
  },
  {
    field: "Instructor",
    headerName: "Instructor",
    sortable: true,
    flex: 1,
  },
  {
    field: "Students",
    headerName: "Students",
    sortable: true,
    flex: 1,
  },

  {
    field: "Price",
    headerName: "Price",
    sortable: true,
    flex: 1,
  },
  {
    field: "Duration",
    headerName: "Duration",
    sortable: true,
    flex: 1,
  },
  {
    field: "Type",
    headerName: "Type",
    sortable: true,
    flex: 1,
  },
  {
    field: "State",
    headerName: "State",
    sortable: true,
    flex: 1,
    renderCell: (params) =>
      (() => {
        switch (params.row.State) {
          case "Completed":
            return (
              <span className="gap-2 rounded-lg border border-[#4cbc9a79] bg-[#4CBC9A26] p-2 text-xs">
                {params.row.State}
              </span>
            );
          case "Started":
            return (
              <span className="gap-2 rounded-lg border border-[#4cbc9a79] bg-[#4CBC9A26] p-2 text-xs">
                {params.row.State}
              </span>
            );
          case "Not Completed":
            return (
              <span className="gap-2 rounded-lg border border-[#FC6B57] bg-[#FC6B5726] p-2 text-xs">
                {params.row.State}
              </span>
            );
          case "Review":
            return (
              <span className="gap-2 rounded-lg border border-[#FC6B57] bg-[#FC6B5726] p-2 text-xs">
                {params.row.State}
              </span>
            );
          default:
            return (
              <span className="gap-2 rounded-lg border border-[#F8BC24] bg-[#F8BC2426] p-2 text-xs">
                {params.row.State}
              </span>
            );
        }
      })(),
  },
  {
    field: "Action",
    headerName: "Action",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    renderCell: () => (
      <div className="flex items-center gap-2">
        <TableDropMenu />
      </div>
    ),
  },
];

const Courses = [
  {
    id: 1,
    Name: "Medical Terminology Specialization",
    Date: "1-1-2020",
    Category: "Dental",
    Instructor: "Dr. Michael P. M.",
    Students: 200,
    Revenue: "1220 EGP",
    Price: 25,
    Duration: "10 hours 4 Chapters",
    Type: "Online",
    State: "Completed",
  },
  {
    id: 2,
    Name: "Fundamentals of Pharmacology",
    Date: "3-5-2021",
    Category: "Pharmacy",
    Instructor: "Dr. Sarah L.",
    Students: 180,
    Revenue: "4500 EGP",
    Price: 30,
    Duration: "12 hours 5 Chapters",
    Type: "Online",
    State: "Ongoing",
  },
  {
    id: 3,
    Name: "Basic Life Support (BLS)",
    Date: "10-8-2022",
    Category: "Emergency Medicine",
    Instructor: "Dr. Ahmed N.",
    Students: 300,
    Revenue: "7500 EGP",
    Price: 35,
    Duration: "8 hours 3 Chapters",
    Type: "Offline",
    State: "Not Completed",
  },
  {
    id: 4,
    Name: "Dental Anatomy and Physiology",
    Date: "15-2-2023",
    Category: "Dental",
    Instructor: "Dr. Susan K.",
    Students: 220,
    Revenue: "6600 EGP",
    Price: 40,
    Duration: "15 hours 6 Chapters",
    Type: "Online",
    State: "Completed",
  },
  {
    id: 5,
    Name: "Surgical Nursing Essentials",
    Date: "20-6-2023",
    Category: "Nursing",
    Instructor: "Dr. John D.",
    Students: 250,
    Revenue: "8200 EGP",
    Price: 45,
    Duration: "18 hours 7 Chapters",
    Type: "Hybrid",
    State: "Ongoing",
  },
  {
    id: 6,
    Name: "Nutrition and Dietetics",
    Date: "5-9-2023",
    Category: "Nutrition",
    Instructor: "Dr. Emily R.",
    Students: 270,
    Revenue: "9000 EGP",
    Price: 50,
    Duration: "20 hours 8 Chapters",
    Type: "Online",
    State: "Completed",
  },
  {
    id: 7,
    Name: "Orthopedic Rehabilitation",
    Date: "12-11-2023",
    Category: "Physiotherapy",
    Instructor: "Dr. Robert C.",
    Students: 190,
    Revenue: "5700 EGP",
    Price: 30,
    Duration: "14 hours 5 Chapters",
    Type: "Offline",
    State: "Not Completed",
  },
  {
    id: 8,
    Name: "Cardiac Care for Nurses",
    Date: "3-1-2024",
    Category: "Nursing",
    Instructor: "Dr. Linda T.",
    Students: 310,
    Revenue: "9300 EGP",
    Price: 55,
    Duration: "22 hours 9 Chapters",
    Type: "Online",
    State: "Ongoing",
  },
  {
    id: 9,
    Name: "Advanced Radiology Techniques",
    Date: "18-2-2024",
    Category: "Radiology",
    Instructor: "Dr. Kevin B.",
    Students: 150,
    Revenue: "4500 EGP",
    Price: 38,
    Duration: "12 hours 5 Chapters",
    Type: "Hybrid",
    State: "Not Completed",
  },
  {
    id: 10,
    Name: "Mental Health and Psychiatry",
    Date: "1-3-2024",
    Category: "Psychiatry",
    Instructor: "Dr. Sophia W.",
    Students: 280,
    Revenue: "8400 EGP",
    Price: 48,
    Duration: "16 hours 6 Chapters",
    Type: "Online",
    State: "Completed",
  },
];

const CoursesTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filterType, setFilterType] = React.useState<
    "Name" | "Category" | "Instructor"
  >("Name");

  // MUI Menu State
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (type: "Name" | "Category" | "Instructor") => {
    setFilterType(type);
    setAnchorEl(null);
  };
  // Filter data based on selection
  const filteredData = Courses.filter((Course) =>
    Course[filterType].toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <>
      {/* start content table Employers  */}
      <div className="flex flex-col items-end justify-between gap-4 overflow-hidden px-1 py-3 md:flex-row">
        <div className="w-[500px] max-w-[400px]">
          <SearchInput SetSearchQuery={setSearchQuery} />
        </div>
        <div className="flex items-center gap-3">
          <IconButton
            onClick={handleMenuOpen}
            className="h-12 w-12 rounded-md bg-primary text-white hover:bg-primary-900"
          >
            <Tune />
          </IconButton>
          <ExportBtnIcon data={""} />
          {/* MUI Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            {["Name", "Category", "Instructor"].map((type) => (
              <MenuItem
                key={type}
                selected={filterType === type}
                onClick={() => handleMenuClose(type as "Name")}
              >
                {type}
              </MenuItem>
            ))}
          </Menu>
          <Link
            className="flex h-12 items-center gap-2 rounded-md bg-primary px-2 text-sm text-white hover:bg-primary-900"
            href={"/courses/admin/add-course"}
          >
            <Add />
            Add Course
          </Link>
        </div>
      </div>
      <Box sx={{ height: 400, overflowX: "auto" }}>
        <DataGrid
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            minWidth: 800,
            "& .MuiDataGrid-container--top [role=row]": {
              background: "", // Custom header background color
              color: "black", // Custom header text color
              fontSize: "16px", // Optional: Larger header font
              textAlign: "center",
            },
            "& .MuiDataGrid-cell": {
              fontSize: "12px", // Row font size
              textAlign: "center",
            },
          }}
          rows={filteredData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default CoursesTable;

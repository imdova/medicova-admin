import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import SearchInput from "@/components/UI/SearchInput";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TableDropMenu from "../TableDropMenu";
import { Tune } from "@mui/icons-material";
import ExportBtnIcon from "../ExportBtnIcon";

const columns: GridColDef[] = [
  {
    field: "CategoryName",
    headerName: "Category Name",
    width: 160,
    sortable: true,
  },
  {
    field: "Slug",
    headerName: "Slug",
    width: 230,
    sortable: true,
  },
  {
    field: "Parent",
    headerName: "Parent",
    sortable: true,
    flex: 1,
  },
  {
    field: "Courses",
    headerName: "Courses",
    sortable: true,
    flex: 1,
  },
  {
    field: "Students",
    headerName: "Date",
    sortable: true,
    flex: 1,
  },
  {
    field: "Revenue",
    headerName: "Amount",
    sortable: true,
    flex: 1,
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

const Category = [
  {
    id: 1,
    CategoryName: "Medical Terminology Specialization",
    Slug: "/category/medical-terminology/",
    Parent: "Dental",
    Courses: 12,
    Students: 200,
    Revenue: "200EGP",
  },
  {
    id: 2,
    CategoryName: "Orthodontics Essentials",
    Slug: "/category/orthodontics-essentials/",
    Parent: "Dental",
    Courses: 8,
    Students: 150,
    Revenue: "180EGP",
  },
  {
    id: 3,
    CategoryName: "Pharmacology Basics",
    Slug: "/category/pharmacology-basics/",
    Parent: "Pharmacy",
    Courses: 15,
    Students: 300,
    Revenue: "500EGP",
  },
  {
    id: 4,
    CategoryName: "Anatomy for Healthcare",
    Slug: "/category/anatomy-healthcare/",
    Parent: "Medical Science",
    Courses: 10,
    Students: 250,
    Revenue: "350EGP",
  },
  {
    id: 5,
    CategoryName: "Nursing Care Fundamentals",
    Slug: "/category/nursing-fundamentals/",
    Parent: "Nursing",
    Courses: 9,
    Students: 180,
    Revenue: "220EGP",
  },
  {
    id: 6,
    CategoryName: "Mental Health & Psychology",
    Slug: "/category/mental-health-psychology/",
    Parent: "Psychology",
    Courses: 7,
    Students: 140,
    Revenue: "300EGP",
  },
  {
    id: 7,
    CategoryName: "Sports Medicine & Rehabilitation",
    Slug: "/category/sports-medicine/",
    Parent: "Physiotherapy",
    Courses: 6,
    Students: 120,
    Revenue: "280EGP",
  },
  {
    id: 8,
    CategoryName: "Emergency Medical Response",
    Slug: "/category/emergency-response/",
    Parent: "Paramedic",
    Courses: 11,
    Students: 220,
    Revenue: "400EGP",
  },
  {
    id: 9,
    CategoryName: "Dermatology & Skincare",
    Slug: "/category/dermatology-skincare/",
    Parent: "Cosmetology",
    Courses: 5,
    Students: 90,
    Revenue: "150EGP",
  },
  {
    id: 10,
    CategoryName: "Cardiology & Heart Health",
    Slug: "/category/cardiology-heart-health/",
    Parent: "Cardiology",
    Courses: 13,
    Students: 275,
    Revenue: "600EGP",
  },
];

const CoursesCategoryTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filterType, setFilterType] =
    React.useState<"CategoryName">("CategoryName");

  // MUI Menu State
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (type: "CategoryName") => {
    setFilterType(type);
    setAnchorEl(null);
  };
  // Filter data based on selection
  const filteredData = Category.filter((category) =>
    category[filterType].toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <>
      {/* start content table Employers  */}
      <div className="flex flex-col items-center justify-between gap-4 overflow-hidden px-1 py-3 sm:items-center md:flex-row">
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
            {["CategoryName", "Category", "Instructor"].map((type) => (
              <MenuItem
                key={type}
                selected={filterType === type}
                onClick={() => handleMenuClose(type as "CategoryName")}
              >
                {type}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
      <Box sx={{ height: 400, overflowX: "auto" }}>
        <DataGrid
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
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

export default CoursesCategoryTable;

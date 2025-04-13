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
    field: "StaffRoll",
    headerName: "Staff Roll",
    sortable: true,
  },
  {
    field: "MobileNumber",
    headerName: "Mobile Number",
    sortable: true,
    flex: 1,
  },
  {
    field: "Email",
    headerName: "Email",
    sortable: true,
    flex: 1,
  },
  {
    field: "JoinDate",
    headerName: "Date",
    sortable: true,
    flex: 1,
  },
  {
    field: "Address",
    headerName: "Amount",
    sortable: true,
    flex: 1,
  },
  {
    field: "AssignTo",
    headerName: "Assign to",
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

const Staff = [
  {
    id: 1,
    Name: "Tiger Nixon",
    StaffRoll: "Staff Roll",
    MobileNumber: "010234567890",
    Email: "info@example.com",
    JoinDate: "1-2-2020",
    Address: "15 Mostafa Refaat Sheraton Al Matar",
    AssignTo: "M.COM., P.H.D.",
  },
  {
    id: 2,
    Name: "Garrett Winters",
    StaffRoll: "Senior Accountant",
    MobileNumber: "010987654321",
    Email: "garrett@example.com",
    JoinDate: "15-3-2019",
    Address: "23 Tahrir Square, Cairo",
    AssignTo: "M.B.A., C.P.A.",
  },
  {
    id: 3,
    Name: "Ashton Cox",
    StaffRoll: "Junior Developer",
    MobileNumber: "012345678901",
    Email: "ashton@example.com",
    JoinDate: "10-6-2021",
    Address: "5 Zamalek Street, Giza",
    AssignTo: "B.Tech, M.Sc.",
  },
  {
    id: 4,
    Name: "Cedric Kelly",
    StaffRoll: "HR Manager",
    MobileNumber: "015123456789",
    Email: "cedric@example.com",
    JoinDate: "1-5-2018",
    Address: "30 Maadi Corniche, Cairo",
    AssignTo: "M.B.A., P.G.D.",
  },
  {
    id: 5,
    Name: "Airi Satou",
    StaffRoll: "Marketing Executive",
    MobileNumber: "011789456123",
    Email: "airi@example.com",
    JoinDate: "5-7-2020",
    Address: "45 Nasr City, Cairo",
    AssignTo: "B.B.A., M.B.A.",
  },
  {
    id: 6,
    Name: "Brielle Williamson",
    StaffRoll: "Financial Analyst",
    MobileNumber: "014567891234",
    Email: "brielle@example.com",
    JoinDate: "20-9-2017",
    Address: "10 October Street, Alexandria",
    AssignTo: "B.Com, CFA",
  },
  {
    id: 7,
    Name: "Herrod Chandler",
    StaffRoll: "IT Support",
    MobileNumber: "016345678901",
    Email: "herrod@example.com",
    JoinDate: "12-1-2022",
    Address: "12 Mohandessin, Cairo",
    AssignTo: "B.Sc. IT, M.Sc. CS",
  },
  {
    id: 8,
    Name: "Rhona Davidson",
    StaffRoll: "Admin Officer",
    MobileNumber: "010147852369",
    Email: "rhona@example.com",
    JoinDate: "3-4-2016",
    Address: "33 Heliopolis, Cairo",
    AssignTo: "M.Com, P.H.D.",
  },
  {
    id: 9,
    Name: "Colleen Hurst",
    StaffRoll: "Lead Developer",
    MobileNumber: "017258369147",
    Email: "colleen@example.com",
    JoinDate: "28-11-2015",
    Address: "21 Sheikh Zayed, Giza",
    AssignTo: "B.Tech, M.Tech",
  },
  {
    id: 10,
    Name: "Sonya Frost",
    StaffRoll: "Project Manager",
    MobileNumber: "012369258147",
    Email: "sonya@example.com",
    JoinDate: "8-8-2019",
    Address: "55 New Cairo, Cairo",
    AssignTo: "PMP, M.B.A.",
  },
];

const StaffTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filterType, setFilterType] = React.useState<"Name">("Name");

  // MUI Menu State
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (type: "Name") => {
    setFilterType(type);
    setAnchorEl(null);
  };
  // Filter data based on selection
  const filteredData = Staff.filter((Staff) =>
    Staff[filterType].toLowerCase().includes(searchQuery.toLowerCase()),
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
          <Link
            className="flex h-12 items-center gap-2 rounded-md bg-primary px-2 text-sm text-white hover:bg-primary-900"
            href={"/courses/admin/add-staff"}
          >
            <Add />
            Add Staff
          </Link>
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

export default StaffTable;

import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import SearchInput from "@/components/UI/SearchInput";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TableDropMenu from "../TableDropMenu";
import { Add, PlusOne, Tune } from "@mui/icons-material";

import ExportBtnIcon from "../ExportBtnIcon";
import Link from "next/link";

const columns: GridColDef[] = [
  {
    field: "Name",
    headerName: "Name",
    width: 160,
    sortable: true,
    renderCell: (params) => (
      <div className="flex h-full items-center gap-2">
        <Avatar
          src={params.row.image}
          alt="Ralph Edwards"
          sx={{ width: 40, height: 40, mr: 2 }}
          className="rounded-lg"
        />
        <div>
          <h3 className="mb-2 text-xs">{params.row.Name}</h3>
        </div>
      </div>
    ),
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
    field: "Location",
    headerName: "Location",
    sortable: true,
    flex: 1,
  },
  {
    field: "JoinDate",
    headerName: "Join Date",
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
    field: "CourseNumber",
    headerName: "Course Number",
    sortable: true,
    flex: 1,
  },
  {
    field: "AssignTo",
    headerName: "Assign To",
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

const instructors = [
  {
    id: 1,
    Name: "Said Ahmed",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    MobileNumber: "010234567890",
    Email: "info@example.com",
    Location: "Cairo, Egypt",
    JoinDate: "1 - 2 - 2020",
    Type: "Place Name",
    CourseNumber: 25,
    AssignTo: "M.COM., P.H.D.",
  },
  {
    id: 2,
    Name: "Omar Hassan",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    MobileNumber: "010987654321",
    Email: "omar.h@example.com",
    Location: "Alexandria, Egypt",
    JoinDate: "5 - 3 - 2019",
    Type: "Online",
    CourseNumber: 18,
    AssignTo: "M.Sc., P.H.D.",
  },
  {
    id: 3,
    Name: "Amina Khaled",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    MobileNumber: "010345678901",
    Email: "amina.k@example.com",
    Location: "Giza, Egypt",
    JoinDate: "10 - 5 - 2021",
    Type: "Place Name",
    CourseNumber: 22,
    AssignTo: "B.Ed., M.Ed.",
  },
  {
    id: 4,
    Name: "Mahmoud Youssef",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    MobileNumber: "010123456789",
    Email: "mahmoud.y@example.com",
    Location: "Luxor, Egypt",
    JoinDate: "15 - 8 - 2018",
    Type: "Online",
    CourseNumber: 30,
    AssignTo: "B.Sc., M.Sc.",
  },
  {
    id: 5,
    Name: "Nour Adel",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    MobileNumber: "010567890123",
    Email: "nour.a@example.com",
    Location: "Aswan, Egypt",
    JoinDate: "20 - 12 - 2022",
    Type: "Place Name",
    CourseNumber: 15,
    AssignTo: "B.A., M.A.",
  },
  {
    id: 6,
    Name: "Karim Hassan",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    MobileNumber: "010678901234",
    Email: "karim.h@example.com",
    Location: "Port Said, Egypt",
    JoinDate: "7 - 7 - 2017",
    Type: "Online",
    CourseNumber: 28,
    AssignTo: "B.Tech., M.Tech.",
  },
  {
    id: 7,
    Name: "Fatma Mohamed",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    MobileNumber: "010789012345",
    Email: "fatma.m@example.com",
    Location: "Mansoura, Egypt",
    JoinDate: "11 - 6 - 2020",
    Type: "Place Name",
    CourseNumber: 20,
    AssignTo: "B.Sc., M.Sc.",
  },
  {
    id: 8,
    Name: "Tamer Salim",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    MobileNumber: "010890123456",
    Email: "tamer.s@example.com",
    Location: "Suez, Egypt",
    JoinDate: "2 - 4 - 2019",
    Type: "Online",
    CourseNumber: 26,
    AssignTo: "B.Com., M.Com.",
  },
  {
    id: 9,
    Name: "Heba Nasser",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    MobileNumber: "010901234567",
    Email: "heba.n@example.com",
    Location: "Tanta, Egypt",
    JoinDate: "9 - 9 - 2021",
    Type: "Place Name",
    CourseNumber: 19,
    AssignTo: "B.A., M.A.",
  },
  {
    id: 10,
    Name: "Ahmed Sami",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    MobileNumber: "011012345678",
    Email: "ahmed.s@example.com",
    Location: "Ismailia, Egypt",
    JoinDate: "13 - 11 - 2018",
    Type: "Online",
    CourseNumber: 24,
    AssignTo: "M.Sc., P.H.D.",
  },
];

const InstructorsTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filterType, setFilterType] = React.useState<
    "Name" | "Email" | "MobileNumber"
  >("Name");

  // MUI Menu State
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (type: "Name" | "Email" | "MobileNumber") => {
    setFilterType(type);
    setAnchorEl(null);
  };
  // Filter data based on selection
  const filteredData = instructors.filter((instructor) =>
    instructor[filterType].toLowerCase().includes(searchQuery.toLowerCase()),
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
            href={"/courses/admin/add-instructor"}
          >
            <Add />
            Add Instructors
          </Link>
          {/* MUI Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            {["Name", "Email", "MobileNumber"].map((type) => (
              <MenuItem
                key={type}
                selected={filterType === type}
                onClick={() =>
                  handleMenuClose(type as "Name" | "Email" | "MobileNumber")
                }
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

export default InstructorsTable;

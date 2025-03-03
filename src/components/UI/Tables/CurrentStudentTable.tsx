import { Avatar, Box } from "@mui/material";

import SearchInput from "@/components/UI/SearchInput";

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TableDropMenu from "../TableDropMenu";
import { SmsOutlined, VideocamOutlined } from "@mui/icons-material";

const columns: GridColDef[] = [
  {
    field: "Name",
    headerName: "Name",
    width: 160,
    editable: false,
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
          <p className="text-[8px] leading-none">{params.row.Email}</p>
        </div>
      </div>
    ),
  },
  {
    field: "StudentID",
    headerName: "Student ID",
    sortable: true,
    flex: 1,
    editable: true,
  },
  {
    field: "PricePerLesson",
    headerName: "Price Per Lesson",
    sortable: true,
    flex: 1,
    editable: true,
  },
  {
    field: "JoinDate",
    headerName: "Join Date",
    sortable: true,
    flex: 1,
  },
  {
    field: "PrepaidBalance",
    headerName: "Prepaid balance",
    sortable: true,
    flex: 1,
    renderCell: (params) => (
      <span
        className={`rounded-md p-2 text-sm ${params.row.balance === "prepaid" ? "bg-[#4CBC9A26] text-green-700" : "bg-[#FC6B7726] text-red-700"}`}
      >
        {params.row.balance}
      </span>
    ),
  },

  {
    field: "Action",
    headerName: "Action",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    renderCell: () => (
      <div className="flex items-center gap-2">
        <button className="hover:text-primary">
          <VideocamOutlined className="text-xl" />
        </button>
        <button className="hover:text-primary">
          <SmsOutlined className="text-lg" />
        </button>
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
    StudentID: "1234567890",
    PricePerLesson: 20,
    JoinDate: "January 2, 2020",
    balance: "prepaid",
  },
  {
    id: 2,
    Name: "Nour Khaled",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    StudentID: "2345678901",
    PricePerLesson: 25,
    JoinDate: "March 15, 2021",
    balance: "No prepaid",
  },
  {
    id: 3,
    Name: "Youssef Omar",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    StudentID: "3456789012",
    PricePerLesson: 18,
    JoinDate: "July 9, 2022",
    balance: "prepaid",
  },
  {
    id: 4,
    Name: "Lina Hassan",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    StudentID: "4567890123",
    PricePerLesson: 22,
    JoinDate: "August 21, 2020",
    balance: "No prepaid",
  },
  {
    id: 5,
    Name: "Omar Ali",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    StudentID: "5678901234",
    PricePerLesson: 30,
    JoinDate: "November 30, 2021",
    balance: "prepaid",
  },
  {
    id: 6,
    Name: "Hana Mostafa",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    StudentID: "6789012345",
    PricePerLesson: 15,
    JoinDate: "September 12, 2019",
    balance: "No prepaid",
  },
  {
    id: 7,
    Name: "Ahmed Yassin",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    StudentID: "7890123456",
    PricePerLesson: 28,
    JoinDate: "April 5, 2022",
    balance: "prepaid",
  },
  {
    id: 8,
    Name: "Salma Tarek",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    StudentID: "8901234567",
    PricePerLesson: 19,
    JoinDate: "June 27, 2023",
    balance: "No prepaid",
  },
  {
    id: 9,
    Name: "Hassan Mahmoud",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    StudentID: "9012345678",
    PricePerLesson: 24,
    JoinDate: "February 14, 2021",
    balance: "prepaid",
  },
  {
    id: 10,
    Name: "Mariam Nabil",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    StudentID: "0123456789",
    PricePerLesson: 21,
    JoinDate: "December 3, 2022",
    balance: "No prepaid",
  },
];

const CurrentStudentTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  // Filter data based on selection
  const filteredData = instructors.filter((instructor) =>
    instructor.Name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <>
      {/* start content table Employers  */}
      <div className="flex flex-col items-center justify-between gap-4 overflow-hidden px-1 py-3 sm:items-center md:flex-row">
        <h1 className="text-lg font-bold">Current Students</h1>
        <div className="w-[500px] max-w-[400px]">
          <SearchInput SetSearchQuery={setSearchQuery} />
        </div>
      </div>
      <Box sx={{ height: 400, overflowX: "auto" }}>
        <DataGrid
          sx={{
            minWidth: "600px",
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

export default CurrentStudentTable;

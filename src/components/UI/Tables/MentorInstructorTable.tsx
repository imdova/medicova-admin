import { Avatar, Box } from "@mui/material";

import SearchInput from "@/components/UI/SearchInput";

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TableDropMenu from "../TableDropMenu";
import { SmsOutlined, VideocamOutlined } from "@mui/icons-material";

const columns: GridColDef[] = [
  {
    field: "NameAnDate",
    headerName: "Instructor Name & Date",
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
          <p className="text-[8px] leading-none">{params.row.Date}</p>
        </div>
      </div>
    ),
  },
  {
    field: "Date",
    headerName: "Date",
    sortable: true,
    flex: 1,
  },
  {
    field: "CourseType",
    headerName: "CourseType",
    sortable: true,
    flex: 1,
    renderCell: (params) => (
      <span
        className={`rounded-md p-2 text-sm ${params.row.CourseType === "online" ? "bg-[#4CBC9A26] text-green-700" : "bg-[#EBEBEB] text-secondary"}`}
      >
        {params.row.CourseType}
      </span>
    ),
  },
  {
    field: "CourseName",
    headerName: "Course Name",
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
    Date: "25/2/2023",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    CourseType: "online",
    CourseName: "Medical Terminology Specialization",
    JoinDate: "January 2, 2020",
    balance: "prepaid",
  },
  {
    id: 2,
    Name: "Aisha Noor",
    Date: "10/3/2023",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    CourseType: "offline",
    CourseName: "Nursing Fundamentals",
    JoinDate: "March 15, 2021",
    balance: "postpaid",
  },
  {
    id: 3,
    Name: "Mohamed Ali",
    Date: "5/1/2023",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    CourseType: "online",
    CourseName: "Pharmacology Essentials",
    JoinDate: "June 10, 2022",
    balance: "prepaid",
  },
  {
    id: 4,
    Name: "Fatima Hassan",
    Date: "22/4/2023",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    CourseType: "online",
    CourseName: "Anatomy & Physiology",
    JoinDate: "August 8, 2020",
    balance: "postpaid",
  },
  {
    id: 5,
    Name: "Omar Yusuf",
    Date: "18/6/2023",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    CourseType: "offline",
    CourseName: "Emergency Medicine",
    JoinDate: "November 12, 2019",
    balance: "prepaid",
  },
  {
    id: 6,
    Name: "Layla Karim",
    Date: "30/7/2023",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    CourseType: "online",
    CourseName: "Health Informatics",
    JoinDate: "May 5, 2022",
    balance: "postpaid",
  },
  {
    id: 7,
    Name: "Hassan Abdullahi",
    Date: "12/9/2023",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    CourseType: "offline",
    CourseName: "Biomedical Science",
    JoinDate: "February 18, 2021",
    balance: "prepaid",
  },
  {
    id: 8,
    Name: "Zahra Said",
    Date: "28/10/2023",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    CourseType: "online",
    CourseName: "Psychology in Healthcare",
    JoinDate: "July 22, 2020",
    balance: "postpaid",
  },
  {
    id: 9,
    Name: "Abdirahman Warsame",
    Date: "15/11/2023",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    CourseType: "offline",
    CourseName: "Public Health & Policy",
    JoinDate: "September 14, 2018",
    balance: "prepaid",
  },
  {
    id: 10,
    Name: "Nasra Ali",
    Date: "5/12/2023",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    CourseType: "online",
    CourseName: "Medical Research Methods",
    JoinDate: "December 1, 2022",
    balance: "postpaid",
  },
];

const MentorInstructorTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  // Filter data based on selection
  const filteredData = instructors.filter((instructor) =>
    instructor.Name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <>
      {/* start content table Employers  */}
      <div className="flex flex-col items-end justify-between gap-4 overflow-hidden px-1 py-3 md:flex-row">
        <h1 className="text-lg font-bold">Your Mentor</h1>
        <div className="w-[500px] max-w-[400px]">
          <SearchInput SetSearchQuery={setSearchQuery} />
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

export default MentorInstructorTable;

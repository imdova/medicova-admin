import {
  Avatar,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Switch,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import ExportButton from "@/components/UI/ExportButton";
import { useState } from "react";
import { StateType } from "@/types";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";
import {
  FormatListBulleted,
  GridViewOutlined,
  Tune,
} from "@mui/icons-material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CardEmployees from "../CardEmployees";
import TableDropMenu from "../TableDropMenu";

type Employee = {
  id: number;
  Name: string;
  Email: string;
  ApplyDay: string;
  Address: string;
  Department: string;
  Title: string;
  Role: string;
  Age: number;
  employmentType: string;
  Status: "Active" | "On leave" | "Remote";
  phone: string;
  avatar: string;
};

// handel function status of Employers
const handleState = (state: StateType) => {
  const stateStyles: Record<StateType, string> = {
    Active:
      "bg-green-50 text-green-700 ring-green-600/20 dark:border-green-500 dark:bg-inputDark dark:text-green-500",
    Inactive:
      "bg-red-50 text-red-700 ring-red-600/10 dark:border-red-500 dark:bg-inputDark dark:text-red-500",
    Processing:
      "bg-orange-50 text-orange-700 ring-orange-600/10 dark:border-orange-500 dark:bg-inputDark dark:text-orange-500",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
        stateStyles[state]
      }`}
    >
      {state}
    </span>
  );
};

const columns: GridColDef[] = [
  {
    field: "Name",
    headerName: "Full Name",
    width: 160,
    editable: false,
    renderCell: (params) => (
      <div className="flex h-full items-center justify-start gap-2">
        <Avatar
          src={params.row.avatar}
          alt="Ralph Edwards"
          sx={{ width: 32, height: 32, mr: 1 }}
        />
        <div className="flex flex-col items-start">
          <h3 className="mb-2 text-xs">{params.row.Name}</h3>
          <p className="text-[8px] leading-none">{params.row.Email}</p>
        </div>
      </div>
    ),
  },
  {
    field: "ApplyDay",
    headerName: "Applied Day",
    flex: 1,
    editable: true,
  },

  {
    field: "Address",
    headerName: "Address",
    sortable: true,
    flex: 1,
  },
  {
    field: "Department",
    headerName: "Department",
    flex: 1,
    editable: true,
  },
  {
    field: "Title",
    headerName: "Title",
    sortable: true,
    flex: 1,
  },

  {
    field: "Role",
    headerName: "Role ",
    sortable: true,
    flex: 1,
  },

  {
    field: "Age",
    headerName: "Age",
    sortable: true,
    flex: 1,
  },
  {
    field: "employmentType",
    headerName: "employment type",
    sortable: true,
    flex: 1,
  },

  {
    field: "Status",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    renderCell: (params) => handleState(params.row.Status),
  },
  {
    field: "Action",
    headerName: "Action",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    renderCell: () => (
      <div className="flex items-center gap-2">
        <Switch />
        <TableDropMenu />
      </div>
    ),
  },
];

const rows: Employee[] = [
  {
    id: 1,
    Name: "Said Ahmed",
    Email: "said.ahmed@example.com",
    ApplyDay: "13 July, 2021",
    Address: "Cairo, Egypt",
    Department: "Marketing",
    Title: "Account Manager",
    Role: "admin",
    Age: 30,
    employmentType: "remote",
    Status: "Active",
    phone: "(+20) 102-345-6789",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    Name: "Amira Hassan",
    Email: "amira.hassan@example.com",
    ApplyDay: "20 March, 2022",
    Address: "Alexandria, Egypt",
    Department: "Sales",
    Title: "Sales Representative",
    Role: "user",
    Age: 28,
    employmentType: "onsite",
    Status: "Active",
    phone: "(+20) 103-456-7890",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    Name: "Omar Khaled",
    Email: "omar.khaled@example.com",
    ApplyDay: "5 September, 2020",
    Address: "Giza, Egypt",
    Department: "IT",
    Title: "Software Engineer",
    Role: "user",
    Age: 32,
    employmentType: "hybrid",
    Status: "Active",
    phone: "(+20) 104-567-8901",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    Name: "Laila Mostafa",
    Email: "laila.mostafa@example.com",
    ApplyDay: "10 June, 2019",
    Address: "Cairo, Egypt",
    Department: "HR",
    Title: "HR Manager",
    Role: "manager",
    Age: 35,
    employmentType: "onsite",
    Status: "Active",
    phone: "(+20) 105-678-9012",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    Name: "Youssef Ali",
    Email: "youssef.ali@example.com",
    ApplyDay: "15 February, 2023",
    Address: "Mansoura, Egypt",
    Department: "Finance",
    Title: "Financial Analyst",
    Role: "user",
    Age: 29,
    employmentType: "remote",
    Status: "Active",
    phone: "(+20) 106-789-0123",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    Name: "Nourhan Adel",
    Email: "nourhan.adel@example.com",
    ApplyDay: "8 April, 2021",
    Address: "Ismailia, Egypt",
    Department: "Marketing",
    Title: "Content Creator",
    Role: "user",
    Age: 26,
    employmentType: "hybrid",
    Status: "Active",
    phone: "(+20) 107-890-1234",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    Name: "Kareem Mohamed",
    Email: "kareem.mohamed@example.com",
    ApplyDay: "30 December, 2018",
    Address: "Cairo, Egypt",
    Department: "Operations",
    Title: "Operations Manager",
    Role: "manager",
    Age: 40,
    employmentType: "onsite",
    Status: "Active",
    phone: "(+20) 108-901-2345",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    Name: "Dina Samir",
    Email: "dina.samir@example.com",
    ApplyDay: "25 November, 2022",
    Address: "Luxor, Egypt",
    Department: "Customer Support",
    Title: "Support Specialist",
    Role: "user",
    Age: 27,
    employmentType: "remote",
    Status: "Active",
    phone: "(+20) 109-012-3456",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

interface EmployeesTableList {
  Filtring?: boolean;
  endPoint: string;
}
const EmployeesTableList: React.FC<EmployeesTableList> = ({
  Filtring = false,
  endPoint,
}) => {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const [Layout, setLayout] = useState("list");

  //   values of Filters inputs
  const [Role, setRole] = useState("");
  const [Department, setDepartment] = useState("");
  const [Title, setTitle] = useState("");
  const [Status, setStatus] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // State variables
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [EmployeeData, setEmployeeData] = useState<Employee[]>(rows);
  // Fetch data on component mount
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setEmployeeData(rows);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching overview data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  // Loading state
  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        Loading Employee Table data...
      </div>
    );
  }

  return (
    <>
      {/* start content table Employers  */}
      <div className="flex justify-start">
        <Box
          sx={{
            bgcolor: "background.paper",
            width: "100%",
          }}
        >
          <Tabs
            className="mb-2 w-full text-xs md:mb-0"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
          >
            <Tab className="text-xs" label="All (100)" />
            <Tab className="text-xs" label="Key Account (30)" />
            <Tab className="text-xs" label="Marketing (30)" />
            <Tab className="text-xs" label="Sales (30)" />
          </Tabs>
        </Box>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 overflow-hidden px-1 py-3 sm:items-center md:flex-row">
        {Filtring ? (
          <Typography
            className="mb-0 flex w-64 items-center justify-center p-2 font-bold"
            variant="h6"
            gutterBottom
          >
            Total Employees : {EmployeeData.length}
          </Typography>
        ) : (
          <Box
            sx={{
              bgcolor: "background.paper",
              width: "100%",
            }}
          >
            <Tabs
              className="mb-2 w-full text-xs md:mb-0"
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons={false}
              aria-label="scrollable prevent tabs example"
            >
              <Tab className="text-xs" label="New Jobs" />
              <Tab className="text-xs" label="Top Jobs" />
              <Tab className="text-xs" label="Active Jobs" />
              <Tab className="text-xs" label="Inactive Jobs" />
            </Tabs>
          </Box>
        )}
        <div className="flex w-full items-center gap-4 md:w-fit">
          <ExportButton data="Name,Age\nJohn,30\nJane,25" />
          <div className="flex border-l pl-2">
            <button
              onClick={() => setLayout("list")}
              className={`h-10 w-10 rounded-full text-secondary ${Layout === "list" ? "bg-light-primary text-white" : ""}`}
            >
              <FormatListBulleted className="text-lg" />
            </button>
            <button
              onClick={() => setLayout("grid")}
              className={`h-10 w-10 rounded-full text-secondary ${Layout === "grid" ? "bg-light-primary text-white" : ""}`}
            >
              <GridViewOutlined className="text-lg" />
            </button>
          </div>
        </div>
      </div>
      {Filtring ? (
        <div className="my-4 flex flex-col items-center gap-4 px-2 lg:flex-row">
          <Box sx={{ width: "100%" }}>
            <FormControl className="relative" fullWidth>
              <svg
                className="absolute left-3 top-1/2 -translate-y-2/4 text-xl text-primary"
                width="15"
                height="15"
                viewBox="0 0 19 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.8457 0C4.88308 0 0.845703 4.12148 0.845703 9.1875C0.845703 10.8091 1.2654 12.4034 2.05937 13.7979C2.24447 14.123 2.45138 14.4398 2.67445 14.7396L9.45466 24H10.2367L17.017 14.7397C17.24 14.4398 17.4469 14.1231 17.632 13.7979C18.426 12.4034 18.8457 10.8091 18.8457 9.1875C18.8457 4.12148 14.8083 0 9.8457 0ZM9.8457 12.2344C8.19994 12.2344 6.86101 10.8675 6.86101 9.1875C6.86101 7.50745 8.19994 6.14062 9.8457 6.14062C11.4915 6.14062 12.8304 7.50745 12.8304 9.1875C12.8304 10.8675 11.4915 12.2344 9.8457 12.2344Z"
                  fill="#2BA149"
                />
              </svg>

              <Select
                className="pl-6 text-xs md:text-sm"
                id="demo-simple-select"
                value={Role}
                onChange={(e) => setRole(e.target.value as string)}
                displayEmpty
                renderValue={(value) => (value ? value : "Role")}
              >
                <MenuItem className="text-xs md:text-sm" value={"Egypt"}>
                  Role
                </MenuItem>
                <MenuItem className="text-xs md:text-sm" value={"Egypt"}>
                  Role
                </MenuItem>
                <MenuItem className="text-xs md:text-sm" value={"Egypt"}>
                  Role
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "100%" }}>
            <FormControl className="relative" fullWidth>
              <svg
                className="absolute left-3 top-1/2 -translate-y-2/4 text-xl text-primary"
                width="15"
                height="15"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.0746 1H18.3412C19.6927 1 20.7891 2.1059 20.7891 3.47018V6.7641C20.7891 8.12735 19.6927 9.23429 18.3412 9.23429H15.0746C13.722 9.23429 12.6257 8.12735 12.6257 6.7641V3.47018C12.6257 2.1059 13.722 1 15.0746 1ZM3.23798 1H6.50355C7.8561 1 8.95247 2.1059 8.95247 3.47018V6.7641C8.95247 8.12735 7.8561 9.23429 6.50355 9.23429H3.23798C1.88544 9.23429 0.789062 8.12735 0.789062 6.7641V3.47018C0.789062 2.1059 1.88544 1 3.23798 1ZM3.23798 12.7657H6.50355C7.8561 12.7657 8.95247 13.8716 8.95247 15.2369V18.5298C8.95247 19.8941 7.8561 21 6.50355 21H3.23798C1.88544 21 0.789062 19.8941 0.789062 18.5298V15.2369C0.789062 13.8716 1.88544 12.7657 3.23798 12.7657ZM15.0746 12.7657H18.3412C19.6927 12.7657 20.7891 13.8716 20.7891 15.2369V18.5298C20.7891 19.8941 19.6927 21 18.3412 21H15.0746C13.722 21 12.6257 19.8941 12.6257 18.5298V15.2369C12.6257 13.8716 13.722 12.7657 15.0746 12.7657Z"
                  stroke="#2BA149"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <Select
                className="pl-6 text-xs md:text-sm"
                id="demo-simple-select"
                value={Department}
                onChange={(e) => setDepartment(e.target.value as string)}
                displayEmpty
                renderValue={(value) => (value ? value : "Department")}
              >
                <MenuItem className="text-xs md:text-sm" value={"Egypt"}>
                  Department
                </MenuItem>
                <MenuItem className="text-xs md:text-sm" value={"Egypt"}>
                  Department
                </MenuItem>
                <MenuItem className="text-xs md:text-sm" value={"Egypt"}>
                  Department
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "100%" }}>
            <FormControl className="relative" fullWidth>
              <svg
                className="absolute left-3 top-1/2 -translate-y-2/4 text-xl text-primary"
                width="15"
                height="15"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_189_2616)">
                  <path
                    d="M21.6016 6.28906C22.4699 6.74087 23.0718 7.31553 23.5156 8.20313C23.5569 8.91915 23.5789 9.62306 23.584 10.3394C23.5896 10.5341 23.5953 10.7288 23.6011 10.9295C23.6103 12.175 23.4428 12.9441 22.6953 13.9453C22.8508 13.9855 23.0062 14.0257 23.1664 14.0671C24.741 14.5245 26.005 15.1255 27.0703 16.4062C27.6384 17.5245 27.7809 18.6788 27.9248 19.9097C28.0432 20.8825 28.0432 20.8825 28.1641 21.875C30.4199 21.875 32.6758 21.875 35 21.875C35 23.1383 35 24.4016 35 25.7031C34.4586 25.7031 33.9172 25.7031 33.3594 25.7031C33.3594 27.4176 33.3594 29.132 33.3594 30.8984C27.8551 30.8984 22.3508 30.8984 16.6797 30.8984C16.6797 30.5375 16.6797 30.1766 16.6797 29.8047C21.7328 29.8047 26.7859 29.8047 31.9922 29.8047C31.9922 28.4512 31.9922 27.0977 31.9922 25.7031C26.7586 25.7031 21.525 25.7031 16.1328 25.7031C16.1328 25.3422 16.1328 24.9813 16.1328 24.6094C21.9078 24.6094 27.6828 24.6094 33.6328 24.6094C33.6328 24.068 33.6328 23.5266 33.6328 22.9688C27.6773 22.9688 21.7219 22.9688 15.5859 22.9688C15.4055 22.6078 15.225 22.2469 15.0391 21.875C18.8289 21.875 22.6187 21.875 26.5234 21.875C26.2706 18.3365 26.2706 18.3365 25.1562 16.6797C24.8855 16.5443 24.8855 16.5443 24.6094 16.4062C24.6094 16.7672 24.6094 17.1281 24.6094 17.5C24.7447 17.6241 24.8801 17.7481 25.0195 17.876C25.4297 18.3203 25.4297 18.3203 25.5151 19.1406C25.4297 19.9609 25.4297 19.9609 24.8828 20.7812C24.0168 21.1089 23.6325 21.0998 22.7637 20.7642C22.1484 20.2344 22.1484 20.2344 21.875 19.4312C21.875 18.4385 22.104 18.2568 22.6953 17.5C22.7639 16.6339 22.7639 16.6339 22.6953 15.8594C22.5118 16.0962 22.5118 16.0962 22.3247 16.3379C22.0767 16.6424 22.0767 16.6424 21.8237 16.9531C21.6619 17.1562 21.5002 17.3592 21.3335 17.5684C20.7812 18.0469 20.7812 18.0469 20.0977 18.1836C19.1984 18.0037 18.9371 17.6628 18.3716 16.9531C18.2063 16.7501 18.041 16.5471 17.8706 16.3379C17.7483 16.18 17.626 16.0221 17.5 15.8594C17.4098 16.4008 17.3195 16.9422 17.2266 17.5C17.4014 17.579 17.5762 17.6579 17.7563 17.7393C18.3203 18.0469 18.3203 18.0469 18.5938 18.5938C18.6304 19.3245 18.6056 20.0491 18.5938 20.7812C18.1426 20.7812 17.6914 20.7812 17.2266 20.7812C17.1363 20.2398 17.0461 19.6984 16.9531 19.1406C16.6824 19.1406 16.4117 19.1406 16.1328 19.1406C16.0426 19.682 15.9523 20.2234 15.8594 20.7812C15.4082 20.7812 14.957 20.7812 14.4922 20.7812C14.3956 19.3324 14.3956 19.3324 14.4922 18.5938C15.0391 17.9785 15.0391 17.9785 15.5859 17.5C15.5859 17.1391 15.5859 16.7781 15.5859 16.4062C14.5844 17.2588 14.291 17.9333 14.0137 19.209C13.9474 19.5037 13.8811 19.7983 13.8129 20.1019C13.7663 20.3261 13.7198 20.5503 13.6719 20.7812C13.2207 20.6008 12.7695 20.4203 12.3047 20.2344C12.6974 16.612 12.6974 16.612 14.2188 15.3125C16.5339 13.9453 16.5339 13.9453 17.5 13.9453C17.3646 13.7028 17.2293 13.4603 17.0898 13.2104C16.4128 11.6232 16.2818 9.5259 16.8976 7.90192C18.0601 6.08658 19.6261 6.00444 21.6016 6.28906ZM18.5938 8.20313C17.8201 9.36354 17.8687 10.3953 18.0469 11.7578C18.5125 12.5726 18.8328 12.9609 19.6533 13.3984C20.5411 13.3984 21.1257 13.0277 21.875 12.5781C22.2422 11.8438 22.2148 11.2444 22.2339 10.4248C22.2441 10.1379 22.2543 9.85097 22.2649 9.55536C22.1218 8.56573 21.8244 8.27001 21.0547 7.65625C20.0168 7.15405 19.4781 7.55147 18.5938 8.20313ZM18.8672 14.4922C19.2089 15.4911 19.3241 15.7994 20.2344 16.4062C21.0483 15.5604 21.0483 15.5604 21.3281 14.4922C20.516 14.4922 19.7039 14.4922 18.8672 14.4922ZM23.2422 18.8672C23.3324 19.0477 23.4227 19.2281 23.5156 19.4141C23.6961 19.4141 23.8766 19.4141 24.0625 19.4141C24.0625 19.2336 24.0625 19.0531 24.0625 18.8672C23.7918 18.8672 23.5211 18.8672 23.2422 18.8672Z"
                    fill="#2BA149"
                  />
                  <path
                    d="M10.4051 19.8616C12.1608 20.672 13.7856 21.448 15.0386 22.9687C15.4235 24.0255 15.4806 25.1336 15.5854 26.25C15.6067 26.4617 15.6279 26.6735 15.6498 26.8917C15.7165 27.5888 15.7724 28.286 15.8247 28.9844C15.8449 29.21 15.8651 29.4356 15.8859 29.6681C15.8988 29.8824 15.9118 30.0966 15.9251 30.3174C15.9388 30.5084 15.9525 30.6995 15.9666 30.8963C15.8065 31.7122 15.3957 32.015 14.7651 32.5391C14.1097 32.6761 14.1097 32.6761 13.3738 32.6762C13.0974 32.6788 12.8209 32.6814 12.5361 32.684C12.2393 32.6809 11.9424 32.6779 11.6366 32.6747C11.3306 32.6751 11.0245 32.6755 10.7092 32.6759C10.0627 32.6755 9.41613 32.6723 8.7696 32.6666C7.77815 32.6587 6.7871 32.661 5.79563 32.6646C5.16776 32.6629 4.53988 32.6606 3.91201 32.6576C3.61464 32.6584 3.31727 32.6592 3.01089 32.6601C2.73528 32.6566 2.45968 32.6531 2.17572 32.6495C1.8118 32.6473 1.8118 32.6473 1.44052 32.6451C0.6882 32.5166 0.443091 32.3328 -0.000494495 31.7187C-0.303774 28.9925 -0.412965 24.6803 1.12209 22.3791C3.41923 19.8794 7.25908 18.5269 10.4051 19.8616ZM4.57958 21.7725C4.38643 21.863 4.19327 21.9536 3.99426 22.047C2.73025 22.6814 2.11518 23.2171 1.64013 24.6094C1.64013 24.9703 1.64013 25.3312 1.64013 25.7031C3.44482 25.7031 5.24951 25.7031 7.10888 25.7031C7.10888 26.1543 7.10888 26.6055 7.10888 27.0703C5.30419 27.0703 3.49951 27.0703 1.64013 27.0703C1.5499 27.341 1.45966 27.6117 1.36669 27.8906C2.35927 27.9809 3.35185 28.0711 4.37451 28.1641C4.28427 28.4348 4.19404 28.7055 4.10107 28.9844C2.74755 29.1197 2.74755 29.1197 1.36669 29.2578C1.36669 29.8894 1.36669 30.5211 1.36669 31.1719C1.99238 31.4847 2.34653 31.4815 3.04196 31.485C3.27468 31.4868 3.50739 31.4885 3.74715 31.4903C4.12484 31.4908 4.12484 31.4908 4.51016 31.4912C4.76841 31.4921 5.02667 31.4931 5.29276 31.494C5.83958 31.4954 6.38641 31.496 6.93324 31.496C7.77102 31.4966 8.60869 31.5015 9.44645 31.5067C9.97713 31.5075 10.5078 31.5081 11.0385 31.5083C11.4153 31.5113 11.4153 31.5113 11.7998 31.5143C12.0334 31.5134 12.267 31.5126 12.5076 31.5117C12.713 31.5121 12.9184 31.5125 13.13 31.5129C13.7588 31.4754 13.7588 31.4754 14.4917 30.8984C14.4314 29.787 14.36 28.6765 14.2866 27.5659C14.2697 27.2513 14.2528 26.9367 14.2353 26.6126C14.2142 26.3086 14.193 26.0046 14.1713 25.6914C14.1455 25.2725 14.1455 25.2725 14.1192 24.8452C13.9038 23.8785 13.5323 23.4054 12.8511 22.6953C12.1806 22.3001 11.5557 21.969 10.8516 21.6528C10.6769 21.5677 10.5022 21.4826 10.3223 21.3949C8.17874 20.4067 6.614 20.7287 4.57958 21.7725Z"
                    fill="#2BA149"
                  />
                  <path
                    d="M5.46796 2.46094C6.00336 2.4462 6.53887 2.43558 7.0744 2.42676C7.5217 2.41724 7.5217 2.41724 7.97803 2.40753C8.74921 2.46094 8.74921 2.46094 9.29608 3.00781C9.33026 3.8623 9.33026 3.8623 9.29608 4.64844C9.92772 4.64844 10.5594 4.64844 11.2101 4.64844C11.5502 5.32863 11.52 5.80414 11.5178 6.5625C11.5188 6.92626 11.5188 6.92626 11.5199 7.29736C11.4836 7.92969 11.4836 7.92969 11.2101 8.47656C10.5785 8.47656 9.94686 8.47656 9.29608 8.47656C9.30172 8.73599 9.30736 8.99541 9.31317 9.2627C9.29608 10.1172 9.29608 10.1172 9.02264 10.6641C7.8496 10.6641 6.67655 10.6641 5.46796 10.6641C5.09761 9.92338 5.17674 9.29432 5.19452 8.47656C4.72925 8.48502 4.72925 8.48502 4.25458 8.49365C3.28046 8.47656 3.28046 8.47656 3.00702 8.20312C2.98002 7.6568 2.97155 7.10949 2.97284 6.5625C2.97213 6.2636 2.97143 5.9647 2.9707 5.65674C3.00702 4.92188 3.00702 4.92188 3.28046 4.64844C3.91838 4.63725 4.5566 4.63684 5.19452 4.64844C5.18888 4.38901 5.18324 4.12959 5.17743 3.8623C5.19452 3.00781 5.19452 3.00781 5.46796 2.46094ZM6.56171 3.55469C6.56171 4.27656 6.56171 4.99844 6.56171 5.74219C5.83983 5.74219 5.11796 5.74219 4.37421 5.74219C4.37421 6.28359 4.37421 6.825 4.37421 7.38281C5.09608 7.38281 5.81796 7.38281 6.56171 7.38281C6.56171 8.10469 6.56171 8.82656 6.56171 9.57031C7.01288 9.57031 7.46405 9.57031 7.92889 9.57031C7.92889 8.84844 7.92889 8.12656 7.92889 7.38281C8.65077 7.38281 9.37264 7.38281 10.1164 7.38281C10.1164 6.84141 10.1164 6.3 10.1164 5.74219C9.39452 5.74219 8.67264 5.74219 7.92889 5.74219C7.92889 5.02031 7.92889 4.29844 7.92889 3.55469C7.47772 3.55469 7.02655 3.55469 6.56171 3.55469Z"
                    fill="#2BA149"
                  />
                  <path
                    d="M9.0225 13.9453C10.1234 14.5162 10.7742 14.9706 11.21 16.1328C11.2634 16.9574 11.2634 16.9574 11.2442 17.8418C11.2392 18.1365 11.2343 18.4311 11.2292 18.7347C11.2229 18.9589 11.2165 19.1831 11.21 19.4141C10.7588 19.3238 10.3077 19.2336 9.84281 19.1406C9.83576 18.9528 9.82871 18.7649 9.82145 18.5713C9.80594 18.3249 9.79043 18.0786 9.77445 17.8247C9.76176 17.5804 9.74907 17.3362 9.736 17.0845C9.62334 16.3745 9.62334 16.3745 9.07163 15.9053C8.16604 15.4201 7.53132 15.608 6.56156 15.8594C6.00826 16.6893 5.92684 17.0063 5.84378 17.9614C5.82334 18.1824 5.8029 18.4034 5.78183 18.6311C5.76844 18.7993 5.75505 18.9674 5.74125 19.1406C5.29007 19.2309 4.8389 19.3211 4.37406 19.4141C4.21356 16.0734 4.21356 16.0734 5.19437 14.7656C6.40367 13.9219 7.58439 13.6846 9.0225 13.9453Z"
                    fill="#2BA149"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_189_2616">
                    <rect width="35" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <Select
                className="pl-6 text-xs md:text-sm"
                id="demo-simple-select"
                value={Title}
                onChange={(e) => setTitle(e.target.value as string)}
                displayEmpty
                renderValue={(value) => (value ? value : "Title")}
              >
                <MenuItem className="text-xs md:text-sm" value={"Egypt"}>
                  Title
                </MenuItem>
                <MenuItem className="text-xs md:text-sm" value={"Egypt"}>
                  Title
                </MenuItem>
                <MenuItem className="text-xs md:text-sm" value={"Egypt"}>
                  Title
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "100%" }}>
            <FormControl className="relative" fullWidth>
              <svg
                className="absolute left-3 top-1/2 -translate-y-2/4 text-xl text-primary"
                width="15"
                height="15"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2598 7.3V17.2C19.2598 17.2 14.3831 19 11.7598 19C9.13643 19 4.25977 17.2 4.25977 17.2V7.3M21.7598 5.5L11.7598 1L1.75977 5.5L11.7598 10.9L21.7598 5.5ZM21.7598 5.5V13.6"
                  stroke="#2BA149"
                  stroke-width="1.5"
                />
              </svg>
              <Select
                className="pl-6 text-xs md:text-sm"
                id="demo-simple-select"
                value={Status}
                onChange={(e) => setStatus(e.target.value as string)}
                displayEmpty
                renderValue={(value) => (value ? value : "Status")}
              >
                <MenuItem className="text-xs md:text-sm" value={"Status"}>
                  Status
                </MenuItem>
                <MenuItem className="text-xs md:text-sm" value={"Status"}>
                  Status
                </MenuItem>
                <MenuItem className="text-xs md:text-sm" value={"Status"}>
                  Status
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DateField"]}
              sx={{
                width: "100%", // Ensure the container is full-width
                overflow: "visible",

                paddingTop: 0,
                position: "relative",
                "& > :not(style) ~ :not(style)": {
                  marginTop: 0, // Override the default margin-top
                },
              }}
            >
              <svg
                className="absolute left-3 top-1/2 -translate-y-2/4 text-xl text-primary xl:left-8"
                width="15"
                height="15"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3328 1.66666V4.99999M6.66618 1.66666V4.99999M2.49951 8.33332H17.4995M4.16618 3.33332H15.8328C16.7533 3.33332 17.4995 4.07952 17.4995 4.99999V16.6667C17.4995 17.5871 16.7533 18.3333 15.8328 18.3333H4.16618C3.2457 18.3333 2.49951 17.5871 2.49951 16.6667V4.99999C2.49951 4.07952 3.2457 3.33332 4.16618 3.33332Z"
                  stroke="#2BA149"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <DateField
                className="w-full"
                sx={{
                  "& .MuiInputBase-root": {
                    pl: 3,
                    overflow: "hidden",
                  },
                  ".css-10o2lyd-MuiStack-root": {
                    width: "100%",
                  },
                }}
                format="LL"
              />
            </DemoContainer>
          </LocalizationProvider>

          <Box sx={{ width: "100%", height: "100%" }}>
            <FormControl className="relative w-full">
              <Button
                className="text-xs"
                startIcon={<Tune />}
                variant="outlined"
              >
                More Filters
              </Button>
            </FormControl>
          </Box>
        </div>
      ) : (
        ""
      )}
      {Layout === "list" ? (
        <Box sx={{ height: 400, overflowX: "auto" }}>
          <DataGrid
            sx={{
              minWidth: "1000px",
              border: "1px solid rgba(0, 0, 0, 0.12)",
              "& .MuiDataGrid-container--top [role=row]": {
                background: "#2ba149", // Custom header background color
                color: "#ffffff", // Custom header text color
                fontSize: "16px", // Optional: Larger header font
                textAlign: "center",
              },
              "& .MuiDataGrid-cell": {
                fontSize: "12px", // Row font size
                textAlign: "center",
              },
            }}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      ) : (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {rows.map((employee) => {
            return (
              <CardEmployees
                key={employee.id}
                employee={{
                  id: employee.id,
                  name: employee.Name,
                  email: employee.Email,
                  phone: employee.phone,
                  joinDate: employee.ApplyDay,
                  department: employee.Department,
                  title: employee.Title,
                  status: employee.Status,
                  avatar: employee.avatar,
                }}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default EmployeesTableList;

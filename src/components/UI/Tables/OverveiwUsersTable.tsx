import {
  Avatar,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import SearchInput from "@/components/UI/SearchInput";
import ExportButton from "@/components/UI/ExportButton";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";
import { Tune } from "@mui/icons-material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TableDropMenu from "../TableDropMenu";

type rowType = {
  id: number;
  name: string;
  applyDay: string;
  phone: string;
  location: string;
  category: string;
  specialty: string;
  careerLevel: string;
  education: string;
  age: number;
  experience: string;
};
const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 160,
    editable: false,
    renderCell: (params) => (
      <div className="flex h-full items-center gap-2">
        <Avatar
          src="https://s3-alpha-sig.figma.com/img/3d5c/b72f/ae1e058c2ed75ab981a9f8bb62e96a13?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a18VE~FGFT~v8D9-O~88JSK~y9SE~MefKeuzvSlS0w4mGSL22pIspT3NCxcrlQRWIA7Jm9l5T06ss0sTIxZvYVNnjXZsXNS6-vJjjzvlei5he8HJx4rRgyI3A7IhiSRow90EBIWTjk-SHnh0pZ2M6UurtH5ydxPtGDJyLGaG8vjZo86gmxyeJoYXYIHXsyn5~ILsGVMSiXohp5M0oSdpiR4TTYuPpycTV-qtUMqaq9bjDVZNHP9hfy5Ekip9IInRsI8MfB5jJJ-GCtMirfH0lO2s8IX9GjvtB1aSEuV7rcdHolzjeWoLX3KQeTFwAbDCkNZ5NWDVsYYEvhw91DyaJw__"
          alt="Ralph Edwards"
          sx={{ width: 32, height: 32, mr: 2 }}
        />
        <div>
          <h3 className="mb-2 text-xs">{params.row.name}</h3>
        </div>
      </div>
    ),
  },
  {
    field: "applyDay",
    headerName: "Applied Day",
    flex: 1,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
    editable: true,
  },
  {
    field: "location",
    headerName: "Location",
    sortable: true,
    flex: 1,
  },

  {
    field: "category",
    headerName: "Category",
    sortable: true,
    flex: 1,
  },

  {
    field: "specialty",
    headerName: "Specialty ",
    sortable: true,
    flex: 1,
  },

  {
    field: "careerLevel",
    headerName: "CareerLevel",
    sortable: true,
    flex: 1,
  },
  {
    field: "education",
    headerName: "Education",
    sortable: true,
    flex: 1,
  },
  {
    field: "age",
    headerName: "Age",
    sortable: true,
    flex: 1,
    width: 60,
  },
  {
    field: "experience",
    headerName: "Experience",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
  },

  {
    field: "action",
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

const rows: rowType[] = [
  {
    id: 1,
    name: "John Doe",
    applyDay: "05 March, 2022",
    phone: "+11234567890",
    location: "USA",
    category: "Engineer",
    specialty: "Software Development",
    careerLevel: "Senior",
    education: "Master of Computer Science",
    age: 35,
    experience: "10 years",
  },
  {
    id: 2,
    name: "Maria Gonzalez",
    applyDay: "20 June, 2023",
    phone: "+34987654321",
    location: "Spain",
    category: "Designer",
    specialty: "Graphic Design",
    careerLevel: "Mid-Level",
    education: "Bachelor of Fine Arts",
    age: 28,
    experience: "5 years",
  },
  {
    id: 3,
    name: "Ahmed Khan",
    applyDay: "15 September, 2021",
    phone: "+923001234567",
    location: "Pakistan",
    category: "Doctor",
    specialty: "Neurology",
    careerLevel: "Consultant",
    education: "Doctor of Medicine",
    age: 40,
    experience: "15 years",
  },
  {
    id: 4,
    name: "Emily Smith",
    applyDay: "10 December, 2022",
    phone: "+447911223344",
    location: "UK",
    category: "Teacher",
    specialty: "Mathematics",
    careerLevel: "Experienced",
    education: "Master of Education",
    age: 32,
    experience: "8 years",
  },
];

interface OverviewEmployersTableProps {
  Filtring?: boolean;
  endPoint: string;
}
const OverveiwUsersTable: React.FC<OverviewEmployersTableProps> = ({
  Filtring = false,
  endPoint,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);

  // values of Filters inputs
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [sepecialty, setSepecialty] = useState("");
  const [education, setEducation] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // Filter data based on selection
  const filteredData = rows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  // State variables
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [UserData, setUserData] = useState<rowType[]>(filteredData);
  // Fetch data on component mount
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // In a real implementation, these would be actual API calls
        // const statsResponse = await fetch(API_GET_EMPLOYER_STATS);
        // const statsData = await statsResponse.json();
        // setEmployerStats(statsData);
        // const topEmployersResponse = await fetch(API_GET_TOP_EMPLOYERS);
        // const topEmployersData = await topEmployersResponse.json();
        // setTopEmployers(topEmployersData);
        // const chartDataResponse = await fetch(API_GET_CHART_DATA);
        // const chartDataResponseData = await chartDataResponse.json();
        // setChartData(chartDataResponseData);
        // For now, we'll use the dummy data
        setUserData(rows);
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
        Loading Users Table data...
      </div>
    );
  }
  return (
    <>
      {/* start content table Employers  */}
      <div className="flex flex-col items-center justify-between gap-4 overflow-hidden px-1 py-3 sm:items-center md:flex-row">
        {Filtring ? (
          <Typography
            className="mb-0 flex w-60 items-center justify-center p-2 font-bold"
            variant="h6"
            gutterBottom
          >
            Total Users : {rows.length}
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

        <SearchInput SetSearchQuery={setSearchQuery} />
        <ExportButton data="Name,Age\nJohn,30\nJane,25" />
      </div>
      {Filtring ? (
        <div className="my-4 flex flex-col items-center gap-4 px-2 lg:flex-row">
          <Box sx={{ width: "100%" }}>
            <FormControl className="relative" fullWidth>
              <svg
                className="absolute left-3 top-1/2 -translate-y-2/4 text-xl text-primary"
                width="20"
                height="20"
                viewBox="0 0 31 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8457 0C7.88308 0 3.8457 4.12148 3.8457 9.1875C3.8457 10.8091 4.2654 12.4034 5.05937 13.7979C5.24447 14.123 5.45138 14.4398 5.67445 14.7396L12.4547 24H13.2367L20.017 14.7397C20.24 14.4398 20.4469 14.1231 20.632 13.7979C21.426 12.4034 21.8457 10.8091 21.8457 9.1875C21.8457 4.12148 17.8083 0 12.8457 0ZM12.8457 12.2344C11.1999 12.2344 9.86101 10.8675 9.86101 9.1875C9.86101 7.50745 11.1999 6.14062 12.8457 6.14062C14.4915 6.14062 15.8304 7.50745 15.8304 9.1875C15.8304 10.8675 14.4915 12.2344 12.8457 12.2344Z"
                  fill="#2BA149"
                />
              </svg>

              <Select
                className="pl-6 text-xs md:text-sm"
                id="demo-simple-select"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                displayEmpty
                renderValue={(value) => (value ? value : "location")}
              >
                <MenuItem className="text-xs md:text-sm" value={"Egypt"}>
                  Egypt
                </MenuItem>
                <MenuItem className="text-xs md:text-sm" value={"Egypt"}>
                  Egypt
                </MenuItem>
                <MenuItem className="text-xs md:text-sm" value={"Egypt"}>
                  Egypt
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "100%" }}>
            <FormControl className="relative" fullWidth>
              <svg
                className="absolute left-3 top-1/2 -translate-y-2/4 text-xl text-primary"
                width="17"
                height="17"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.0755 1H18.3421C19.6937 1 20.79 2.1059 20.79 3.47018V6.7641C20.79 8.12735 19.6937 9.23429 18.3421 9.23429H15.0755C13.723 9.23429 12.6266 8.12735 12.6266 6.7641V3.47018C12.6266 2.1059 13.723 1 15.0755 1ZM3.23896 1H6.50453C7.85707 1 8.95345 2.1059 8.95345 3.47018V6.7641C8.95345 8.12735 7.85707 9.23429 6.50453 9.23429H3.23896C1.88642 9.23429 0.790039 8.12735 0.790039 6.7641V3.47018C0.790039 2.1059 1.88642 1 3.23896 1ZM3.23896 12.7657H6.50453C7.85707 12.7657 8.95345 13.8716 8.95345 15.2369V18.5298C8.95345 19.8941 7.85707 21 6.50453 21H3.23896C1.88642 21 0.790039 19.8941 0.790039 18.5298V15.2369C0.790039 13.8716 1.88642 12.7657 3.23896 12.7657ZM15.0755 12.7657H18.3421C19.6937 12.7657 20.79 13.8716 20.79 15.2369V18.5298C20.79 19.8941 19.6937 21 18.3421 21H15.0755C13.723 21 12.6266 19.8941 12.6266 18.5298V15.2369C12.6266 13.8716 13.723 12.7657 15.0755 12.7657Z"
                  stroke="#2BA149"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <Select
                className="pl-6 text-xs md:text-sm"
                id="demo-simple-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                displayEmpty
                renderValue={(value) => (value ? value : "category")}
              >
                <MenuItem className="text-xs md:text-sm" value={"Sector"}>
                  Sector
                </MenuItem>
                <MenuItem className="text-xs md:text-sm" value={"Sector"}>
                  Sector
                </MenuItem>
                <MenuItem className="text-xs md:text-sm" value={"Sector"}>
                  Sector
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "100%" }}>
            <FormControl className="relative" fullWidth>
              <svg
                className="absolute left-3 top-1/2 -translate-y-2/4 text-xl text-primary"
                width="18"
                height="18"
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
                value={sepecialty}
                onChange={(e) => setSepecialty(e.target.value)}
                displayEmpty
                renderValue={(value) => (value ? value : "sepecialty")}
              >
                <MenuItem className="text-xs md:text-sm" value={"Type"}>
                  Type
                </MenuItem>
                <MenuItem className="text-xs md:text-sm" value={"Type"}>
                  Type
                </MenuItem>
                <MenuItem className="text-xs md:text-sm" value={"Type"}>
                  Type
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "100%" }}>
            <FormControl className="relative" fullWidth>
              <svg
                className="absolute left-3 top-1/2 -translate-y-2/4 text-xl text-primary"
                width="18"
                height="18"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1866 2.64326C20.2316 2.67846 20.2766 2.71365 20.323 2.74992C20.8843 3.19829 21.4337 3.68789 21.8882 4.24639C21.9259 4.28992 21.9635 4.33345 22.0022 4.3783C23.4415 6.06077 24.3602 8.07345 24.7758 10.2452C24.7843 10.2862 24.7927 10.3272 24.8014 10.3695C25.0802 11.7601 25.0585 13.4084 24.7758 14.796C24.7658 14.8464 24.7559 14.8967 24.7456 14.9486C24.3645 16.8183 23.5944 18.6258 22.4039 20.1225C22.3484 20.193 22.3484 20.193 22.2919 20.2649C21.6964 21.0093 21.0415 21.7077 20.2897 22.2945C20.259 22.3187 20.2283 22.3428 20.1966 22.3677C19.7152 22.7445 19.2244 23.082 18.6913 23.3805C18.6549 23.4012 18.6186 23.4218 18.5812 23.4431C17.4345 24.0908 16.2045 24.5225 14.9174 24.7897C14.8802 24.7975 14.8429 24.8053 14.8046 24.8134C14.0393 24.9622 13.2714 25.0033 12.4939 24.9998C12.4501 24.9997 12.4064 24.9996 12.3613 24.9995C11.6597 24.997 10.9768 24.9619 10.2863 24.8285C10.2414 24.8202 10.1964 24.8118 10.1501 24.8033C8.51843 24.4931 6.90821 23.8705 5.54243 22.9151C5.48469 22.875 5.48469 22.875 5.42579 22.8342C4.87256 22.447 4.36182 22.0322 3.88108 21.5576C3.78844 21.4663 3.69477 21.3762 3.60093 21.2861C1.57833 19.3255 0.388375 16.5941 0.0766467 13.8134C0.0698669 13.7569 0.063087 13.7003 0.0561017 13.6419C-0.256144 10.4639 0.735726 7.17127 2.73542 4.69242C3.02288 4.34261 3.32272 4.00564 3.63457 3.67754C3.67365 3.63621 3.71273 3.59487 3.753 3.55229C4.038 3.25836 4.34525 3.00055 4.66585 2.74669C4.71437 2.70689 4.76289 2.66709 4.81288 2.62609C9.21223 -0.902476 15.7959 -0.853819 20.1866 2.64326ZM4.76595 5.07825C4.18263 5.68742 3.68852 6.36458 3.27513 7.09976C3.24041 7.16145 3.20531 7.22293 3.16978 7.28415C2.60754 8.25389 2.26775 9.30737 2.03608 10.4003C2.02232 10.4606 2.02232 10.4606 2.00828 10.5221C1.43017 13.1099 2.11997 16.0133 3.50495 18.2283C3.67542 18.4883 3.8574 18.7386 4.04708 18.9848C4.06936 19.0138 4.09165 19.0428 4.1146 19.0727C4.72733 19.8574 5.45593 20.5773 6.26433 21.1568C6.30735 21.1883 6.30735 21.1883 6.35124 21.2204C7.83543 22.2984 9.86747 23.1737 11.7301 23.1737C11.7301 22.0815 11.7301 20.9893 11.7301 19.864C11.2707 19.7616 10.8112 19.6592 10.3379 19.5537C9.36214 19.2371 8.49836 18.7603 7.70812 18.1057C7.68075 18.083 7.65337 18.0603 7.62516 18.037C6.18211 16.8225 5.33368 14.9867 5.15651 13.1275C4.98865 11.1552 5.58342 9.1982 6.84443 7.67445C6.95768 7.54586 7.07415 7.42139 7.19248 7.2975C7.254 7.23001 7.254 7.23001 7.31676 7.16115C8.44901 5.96053 10.2021 5.12726 11.8564 5.06737C12.0711 5.06309 12.2856 5.06106 12.5004 5.06088C12.5576 5.06083 12.5576 5.06083 12.6159 5.06078C13.1788 5.06159 13.7096 5.08561 14.2568 5.22895C14.2901 5.23673 14.3234 5.2445 14.3577 5.25251C15.3784 5.49095 16.311 5.99811 17.1443 6.62522C17.4349 6.38278 17.7028 6.12361 17.9692 5.85477C18.0336 5.79 18.0336 5.79 18.0994 5.72392C18.2356 5.58707 18.3716 5.45003 18.5076 5.31299C18.6003 5.21971 18.6931 5.12645 18.7858 5.03321C19.0123 4.80555 19.2386 4.57774 19.4647 4.34982C19.2801 4.10771 19.0849 3.94694 18.8395 3.77127C18.7986 3.74189 18.7577 3.71251 18.7155 3.68225C18.296 3.38647 17.8581 3.13626 17.4022 2.90183C17.3672 2.88352 17.3322 2.86521 17.2962 2.84635C13.1094 0.673987 8.00032 1.7751 4.76595 5.07825ZM20.6507 5.53923C19.902 6.29012 19.1533 7.041 18.3819 7.81464C18.5196 8.05634 18.6568 8.28279 18.8105 8.51278C19.4419 9.48347 19.6816 10.5011 19.9288 11.6415C21.0178 11.6415 22.1069 11.6415 23.2289 11.6415C23.1427 10.842 23.1427 10.842 22.984 10.0642C22.9703 10.0091 22.9565 9.95407 22.9424 9.89734C22.5895 8.50912 21.9083 6.38009 20.6507 5.53923ZM8.37846 8.48692C8.3405 8.52445 8.30255 8.56198 8.26344 8.60065C7.47416 9.43015 6.97317 10.6149 6.83154 11.7449C6.82462 11.7969 6.81771 11.8489 6.81059 11.9025C6.65978 13.3668 7.0917 14.8526 8.00074 16.0046C9.0012 17.2379 10.378 18.0439 11.9601 18.2301C13.551 18.3703 15.0135 17.8888 16.2549 16.8904C16.3457 16.8135 16.436 16.736 16.5256 16.6577C16.5572 16.6304 16.5889 16.603 16.6215 16.5749C17.3587 15.8883 17.8571 14.9291 18.1241 13.9686C18.1405 13.9124 18.157 13.8562 18.174 13.7983C18.3928 12.9154 18.3871 11.841 18.1241 10.9692C18.1135 10.9343 18.103 10.8993 18.0922 10.8634C17.6234 9.34371 16.6285 8.11372 15.2365 7.34922C12.9364 6.13667 10.1819 6.65214 8.37846 8.48692ZM19.9288 13.2963C19.8437 13.6888 19.7586 14.0813 19.671 14.4857C19.0552 16.4483 17.8386 18.0433 16.0197 19.0298C15.1845 19.4621 14.2983 19.6798 13.3802 19.864C13.3802 20.9562 13.3802 22.0484 13.3802 23.1737C14.1737 23.0881 14.1737 23.0881 14.9464 22.9312C15.0009 22.9177 15.0554 22.9041 15.1115 22.8902C16.9138 22.4292 18.5641 21.5487 19.9041 20.2481C19.9834 20.1713 20.0636 20.0958 20.1439 20.0201C21.9602 18.282 22.9509 15.8699 23.2289 13.3997C23.2289 13.3656 23.2289 13.3315 23.2289 13.2963C22.1399 13.2963 21.0508 13.2963 19.9288 13.2963Z"
                  fill="#2BA149"
                />
              </svg>

              <Select
                className="pl-6 text-xs md:text-sm"
                id="demo-simple-select"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                displayEmpty
                renderValue={(value) => (value ? value : "education")}
              >
                <MenuItem className="text-xs md:text-sm" value={"education"}>
                  education
                </MenuItem>
                <MenuItem className="text-xs md:text-sm" value={"education"}>
                  education
                </MenuItem>
                <MenuItem className="text-xs md:text-sm" value={"education"}>
                  education
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
                width="20"
                height="20"
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
                    fontSize: 11,
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
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default OverveiwUsersTable;

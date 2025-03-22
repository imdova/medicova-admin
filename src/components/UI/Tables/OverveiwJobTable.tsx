import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import SearchInput from "@/components/UI/SearchInput";
import ExportButton from "@/components/UI/ExportButton";
import { useState } from "react";
import { StateType } from "@/types";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";
import { Tune } from "@mui/icons-material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TableDropMenu from "../TableDropMenu";

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
    field: "id",
    headerName: "Job Id",
    flex: 1,
    editable: false,
  },
  {
    field: "JobTitle",
    headerName: "Job Title",
    flex: 1,
    editable: true,
  },
  {
    field: "Date",
    headerName: "Date",
    flex: 1,
    editable: true,
  },
  {
    field: "Employer",
    headerName: "Employer",
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
    field: "Views",
    headerName: "Views",
    sortable: true,
    flex: 1,
  },

  {
    field: "Applicants",
    headerName: "Applicants",
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

type JobRow = {
  id: number;
  JobTitle: string;
  Date: string;
  Employer: string;
  Location: string;
  Views: string;
  Applicants: string;
  Status: string;
};

const rows: JobRow[] = [
  {
    id: 1001,
    JobTitle: "Software Engineer",
    Date: "10 March, 2022",
    Employer: "Google",
    Location: "USA",
    Views: "150",
    Applicants: "20",
    Status: "Active",
  },
  {
    id: 1002,
    JobTitle: "Data Scientist",
    Date: "25 May, 2022",
    Employer: "Amazon",
    Location: "UK",
    Views: "180",
    Applicants: "25",
    Status: "Closed",
  },
  {
    id: 1003,
    JobTitle: "Product Manager",
    Date: "17 August, 2022",
    Employer: "Microsoft",
    Location: "Canada",
    Views: "200",
    Applicants: "30",
    Status: "Active",
  },
  {
    id: 1004,
    JobTitle: "UX Designer",
    Date: "5 December, 2022",
    Employer: "Apple",
    Location: "Germany",
    Views: "120",
    Applicants: "15",
    Status: "Pending",
  },
];

interface OverviewEmployersTableProps {
  Filtring?: boolean;
  endPoint: string;
}
const OverveiwJobTable: React.FC<OverviewEmployersTableProps> = ({
  Filtring = false,
  endPoint,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //   values of Filters inputs
  const [Country, setCountry] = useState("");
  const [Industry, setIndustry] = useState("");
  const [Category, setCategory] = useState("");
  const [Employer, setEmployer] = useState("");

  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };
  // Filter data based on selection
  const filteredData = rows.filter((row) =>
    row.JobTitle.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  // State variables
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [JobData, setJobData] = useState<JobRow[]>(filteredData);
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
        setJobData(rows);
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
      <div className="flex flex-col items-start justify-between gap-4 overflow-hidden px-1 py-3 sm:items-center md:flex-row">
        {Filtring ? (
          <Typography
            className="mb-0 flex w-60 items-center justify-center p-2 font-bold"
            variant="h6"
            gutterBottom
          >
            Total Jobs : 19
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
                  d="M12.9995 0C8.03688 0 3.99951 4.12148 3.99951 9.1875C3.99951 10.8091 4.41921 12.4034 5.21318 13.7979C5.39828 14.123 5.60519 14.4398 5.82826 14.7396L12.6085 24H13.3905L20.1708 14.7397C20.3938 14.4398 20.6007 14.1231 20.7858 13.7979C21.5798 12.4034 21.9995 10.8091 21.9995 9.1875C21.9995 4.12148 17.9621 0 12.9995 0ZM12.9995 12.2344C11.3538 12.2344 10.0148 10.8675 10.0148 9.1875C10.0148 7.50745 11.3538 6.14062 12.9995 6.14062C14.6453 6.14062 15.9842 7.50745 15.9842 9.1875C15.9842 10.8675 14.6453 12.2344 12.9995 12.2344Z"
                  fill="#2BA149"
                />
              </svg>

              <Select
                className="pl-6 text-xs md:text-sm"
                id="demo-simple-select"
                value={Country}
                onChange={handleChangeCountry}
                displayEmpty
                renderValue={(value) => (value ? value : "Country")}
              >
                <MenuItem value={"Egypt"}>Egypt</MenuItem>
                <MenuItem value={"Egypt"}>Egypt</MenuItem>
                <MenuItem value={"Egypt"}>Egypt</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "100%" }}>
            <FormControl className="relative" fullWidth>
              <svg
                className="absolute left-3 top-1/2 -translate-y-2/4 text-xl text-primary"
                width="18"
                height="18"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_30_6145)">
                  <path
                    d="M11.3911 2.74219C11.3881 2.88392 11.3852 3.02565 11.3821 3.17167C11.3532 4.66756 11.3427 6.16284 11.3422 7.659C11.3411 8.21526 11.3327 8.77002 11.321 9.32631C11.2475 12.9735 11.5161 15.4634 13.8143 18.3613C14.2804 18.9636 14.6637 19.5983 15.0578 20.25C15.2568 20.569 15.2568 20.569 15.4599 20.8944C15.5877 21.0994 15.7155 21.3044 15.8472 21.5156C16.1157 21.9463 16.3843 22.377 16.653 22.8076C16.7672 22.9909 16.8815 23.1742 16.9992 23.363C17.2338 23.7351 17.4753 24.1028 17.7192 24.4688C17.7324 24.8906 17.7324 24.8906 17.5083 25.3125C15.0664 26.5804 11.6306 26.568 9.01806 25.8003C8.60946 25.6488 8.20442 25.4871 7.80517 25.3125C7.63577 25.2385 7.46637 25.1646 7.29184 25.0884C4.69198 23.7907 2.37547 21.2751 1.26034 18.5988C0.252241 15.3113 0.50702 11.9162 2.10986 8.85938C3.87843 5.86471 6.24093 3.97311 9.52234 2.88226C10.1652 2.73297 10.7335 2.73251 11.3911 2.74219ZM4.85369 6.91892C2.69577 9.15837 1.81071 12.1099 1.82178 15.1437C1.86946 17.4083 2.64377 19.0974 4.0083 20.8828C4.11896 21.0283 4.22963 21.1738 4.34365 21.3236C5.95421 23.298 8.21459 24.728 10.7583 25.1016C11.4177 25.1362 12.0756 25.1406 12.7358 25.1411C12.9969 25.145 12.9969 25.145 13.2632 25.1489C14.3397 25.1515 15.2229 25.0274 16.2427 24.6797C15.9428 23.8628 15.5594 23.1573 15.1006 22.4187C14.9573 22.187 14.814 21.9554 14.6664 21.7167C14.5151 21.4739 14.3638 21.2311 14.2124 20.9883C13.334 19.571 13.334 19.571 13.1145 19.2054C12.7618 18.6225 12.4012 18.0867 11.9665 17.5612C10.1343 15.1942 10.5245 12.2796 10.5474 9.42627C10.5457 8.87983 10.5432 8.3334 10.5399 7.78697C10.5337 6.45684 10.5368 5.12698 10.5474 3.79688C8.48694 3.79688 6.29185 5.61894 4.85369 6.91892Z"
                    fill="#2BA149"
                  />
                  <path
                    d="M25.946 11.1797C26.952 13.9125 26.2328 17.6629 25.1023 20.25C24.0491 22.469 22.1136 24.9611 19.842 26.0244C19.6267 26.0897 19.6267 26.0897 19.407 26.1562C18.8699 25.6625 18.5061 25.1374 18.124 24.5174C17.9983 24.3146 17.8725 24.1118 17.743 23.9029C17.6091 23.685 17.4751 23.4672 17.3371 23.2427C16.4856 21.8636 15.6324 20.4873 14.7449 19.131C14.5409 18.8177 14.5409 18.8177 14.3328 18.4981C14.0726 18.0996 13.8106 17.7024 13.5466 17.3065C13.3709 17.0362 13.3709 17.0362 13.1917 16.7605C13.0363 16.5255 13.0363 16.5255 12.8778 16.2857C12.6205 15.7435 12.6147 15.3587 12.657 14.7656C15.7882 13.7001 18.925 12.6497 22.0868 11.6779C22.3653 11.592 22.6436 11.505 22.9216 11.4171C23.3101 11.2946 23.6998 11.176 24.0896 11.0577C24.3111 10.9894 24.5327 10.9211 24.7609 10.8507C25.3132 10.7578 25.3132 10.7578 25.946 11.1797ZM23.645 12.3093C23.4296 12.3769 23.2143 12.4445 22.9924 12.5141C22.7593 12.589 22.5261 12.6639 22.2859 12.7411C22.0477 12.8163 21.8096 12.8915 21.5642 12.969C20.8007 13.2105 20.0379 13.4541 19.2751 13.6977C18.7588 13.8614 18.2425 14.025 17.726 14.1884C16.4577 14.5901 15.1899 14.9936 13.9226 15.3984C14.1205 15.7645 14.3188 16.1304 14.5172 16.4961C14.6276 16.6999 14.738 16.9036 14.8517 17.1136C15.3399 17.9915 15.8722 18.8377 16.4143 19.6831C16.5226 19.8533 16.6309 20.0234 16.7424 20.1988C17.0672 20.7086 17.3931 21.2177 17.7195 21.7266C17.8187 21.8815 17.9179 22.0364 18.0201 22.196C18.5512 23.0249 19.0837 23.8528 19.6179 24.6797C22.0819 23.5266 23.6552 21.022 24.5749 18.5361C24.6868 18.1954 24.7931 17.8527 24.8913 17.5078C24.9472 17.3165 24.9472 17.3165 25.0042 17.1213C25.1148 16.6057 25.1261 16.1398 25.1229 15.6127C25.1222 15.4155 25.1215 15.2184 25.1208 15.0153C25.119 14.8111 25.1173 14.6069 25.1155 14.3965C25.1145 14.189 25.1136 13.9815 25.1126 13.7678C25.1101 13.2566 25.1066 12.7455 25.1023 12.2344C24.5144 11.9404 24.2658 12.112 23.645 12.3093Z"
                    fill="#2BA149"
                  />
                  <path
                    d="M12.2349 0.84375C16.3703 0.84375 19.2791 1.73801 22.2931 4.56812C23.6992 5.99077 24.8214 7.60563 25.5239 9.49219C25.4543 9.70102 25.3847 9.90984 25.313 10.125C24.9121 10.3183 24.9121 10.3183 24.3761 10.4818C24.1734 10.5451 23.9706 10.6085 23.7617 10.6738C23.4267 10.7741 23.4267 10.7741 23.085 10.8765C22.6068 11.0239 22.1286 11.1714 21.6504 11.3189C21.3925 11.3976 21.1345 11.4762 20.8688 11.5572C19.9849 11.8278 19.1046 12.1096 18.2243 12.3918C17.7668 12.5376 17.3093 12.6833 16.8517 12.8289C16.5522 12.9244 16.2528 13.0203 15.9536 13.1167C15.5307 13.2525 15.1073 13.3864 14.6837 13.5198C14.44 13.5974 14.1963 13.675 13.9452 13.755C13.2896 13.9219 13.2896 13.9219 12.2349 13.9219C12.2349 9.60609 12.2349 5.29031 12.2349 0.84375ZM13.0786 1.89844C13.0786 5.44852 13.0786 8.99859 13.0786 12.6562C14.5221 12.3675 15.8833 12.054 17.2784 11.6156C17.4669 11.5568 17.6554 11.498 17.8496 11.4375C18.2434 11.3142 18.6371 11.1902 19.0305 11.0657C19.6351 10.8751 20.2408 10.6885 20.8466 10.502C21.2305 10.3812 21.6144 10.2602 21.9981 10.139C22.1796 10.0836 22.3611 10.0282 22.548 9.97115C22.7975 9.89091 22.7975 9.89091 23.0521 9.80906C23.2723 9.74 23.2723 9.74 23.4969 9.66955C23.9148 9.50127 23.9148 9.50127 24.0474 8.85938C22.7154 5.8357 20.095 3.71071 17.0732 2.53125C15.6379 2.02027 14.6696 1.89844 13.0786 1.89844Z"
                    fill="#2BA149"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_30_6145">
                    <rect
                      width="27"
                      height="27"
                      fill="white"
                      transform="translate(0.000488281)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <Select
                className="pl-6 text-xs md:text-sm"
                id="demo-simple-select"
                value={Industry}
                onChange={(e) => setIndustry(e.target.value)}
                displayEmpty
                renderValue={(value) => (value ? value : "Industry")}
              >
                <MenuItem value={"Industry"}>Industry</MenuItem>
                <MenuItem value={"Industry"}>Industry</MenuItem>
                <MenuItem value={"Industry"}>Industry</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "100%" }}>
            <FormControl className="relative" fullWidth>
              <svg
                className="absolute left-3 top-1/2 -translate-y-2/4 text-xl text-primary"
                width="18"
                height="18"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.9545 1H19.221C20.5726 1 21.6689 2.1059 21.6689 3.47018V6.7641C21.6689 8.12735 20.5726 9.23429 19.221 9.23429H15.9545C14.6019 9.23429 13.5055 8.12735 13.5055 6.7641V3.47018C13.5055 2.1059 14.6019 1 15.9545 1ZM4.11787 1H7.38344C8.73598 1 9.83236 2.1059 9.83236 3.47018V6.7641C9.83236 8.12735 8.73598 9.23429 7.38344 9.23429H4.11787C2.76532 9.23429 1.66895 8.12735 1.66895 6.7641V3.47018C1.66895 2.1059 2.76532 1 4.11787 1ZM4.11787 12.7657H7.38344C8.73598 12.7657 9.83236 13.8716 9.83236 15.2369V18.5298C9.83236 19.8941 8.73598 21 7.38344 21H4.11787C2.76532 21 1.66895 19.8941 1.66895 18.5298V15.2369C1.66895 13.8716 2.76532 12.7657 4.11787 12.7657ZM15.9545 12.7657H19.221C20.5726 12.7657 21.6689 13.8716 21.6689 15.2369V18.5298C21.6689 19.8941 20.5726 21 19.221 21H15.9545C14.6019 21 13.5055 19.8941 13.5055 18.5298V15.2369C13.5055 13.8716 14.6019 12.7657 15.9545 12.7657Z"
                  stroke="#2BA149"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <Select
                className="pl-6 text-xs md:text-sm"
                id="demo-simple-select"
                value={Category}
                onChange={(e) => setCategory(e.target.value)}
                displayEmpty
                renderValue={(value) => (value ? value : "Category")}
              >
                <MenuItem value={"Category"}>Category</MenuItem>
                <MenuItem value={"Category"}>Category</MenuItem>
                <MenuItem value={"Category"}>Category</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "100%" }}>
            <FormControl className="relative" fullWidth>
              <svg
                className="absolute left-3 top-1/2 -translate-y-2/4 text-xl text-primary"
                width="18"
                height="20"
                viewBox="0 0 23 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.42318 29C1.54473 29 1.66131 28.9522 1.74727 28.8673C1.83322 28.7823 1.88151 28.667 1.88151 28.5468V23.5404C1.88151 22.5496 2.41593 21.616 3.27576 21.1065L6.86359 18.9773L8.83259 21.4111C8.87295 21.4608 8.92343 21.5016 8.98075 21.5308C9.03808 21.56 9.10097 21.577 9.16534 21.5806L9.19101 21.5815C9.31201 21.5815 9.42934 21.5344 9.51551 21.4492L10.5908 20.3859V28.5468C10.5908 28.667 10.639 28.7823 10.725 28.8673C10.811 28.9522 10.9275 29 11.0491 29C11.1707 29 11.2872 28.9522 11.3732 28.8673C11.4591 28.7823 11.5074 28.667 11.5074 28.5468V19.4858L11.5065 19.4803L11.9648 19.0262L12.4241 19.4803L12.4232 19.4858V28.5468C12.4232 28.667 12.4715 28.7823 12.5574 28.8673C12.6434 28.9522 12.76 29 12.8815 29C13.0031 29 13.1196 28.9522 13.2056 28.8673C13.2916 28.7823 13.3398 28.667 13.3398 28.5468V20.3859L14.4151 21.4492C14.4577 21.4912 14.5083 21.5246 14.564 21.5473C14.6197 21.57 14.6794 21.5816 14.7396 21.5815L14.7653 21.5806C14.8296 21.577 14.8925 21.56 14.9499 21.5308C15.0072 21.5016 15.0577 21.4608 15.098 21.4111L17.067 18.9773L20.6558 21.1065C21.0794 21.3601 21.43 21.7171 21.6739 22.1434C21.9177 22.5696 22.0466 23.0507 22.0482 23.5404V28.5468C22.0482 28.667 22.0965 28.7823 22.1824 28.8673C22.2684 28.9522 22.385 29 22.5065 29C22.6281 29 22.7446 28.9522 22.8306 28.8673C22.9166 28.7823 22.9648 28.667 22.9648 28.5468V23.5404C22.9648 22.2324 22.2599 21.0023 21.126 20.3297L17.2522 18.0318L15.8002 16.4364C15.7397 16.3726 15.6615 16.3278 15.5754 16.3078C15.4893 16.2878 15.3991 16.2935 15.3162 16.324V14.7169C16.0335 14.1976 16.617 13.5186 17.0194 12.7348C17.4218 11.951 17.6319 11.0845 17.6326 10.2054V8.06981L18.3467 4.13487C18.4134 3.77695 18.407 3.40944 18.3278 3.05402C18.2486 2.69859 18.0983 2.36245 17.8856 2.06542C17.6747 1.76709 17.4055 1.51354 17.094 1.31972C16.7824 1.1259 16.4348 0.995721 16.0715 0.936871L10.61 0.0367554C10.219 -0.0277176 9.81853 -0.00719008 9.43639 0.0969102C9.05424 0.201011 8.69962 0.386184 8.39718 0.639552C7.8812 1.07269 7.54742 1.68077 7.46126 2.34461C6.92043 2.44432 6.43093 2.72985 6.07801 3.16133C5.85886 3.42836 5.70309 3.74062 5.62219 4.07508C5.54128 4.40955 5.53729 4.75771 5.61051 5.0939L6.28518 8.21666C6.28609 8.22301 6.29068 8.22573 6.29159 8.23026V10.2045C6.29159 12.0546 7.20643 13.6944 8.60801 14.716V16.3222C8.5256 16.2931 8.43639 16.2883 8.35126 16.3084C8.26614 16.3285 8.18877 16.3727 8.12859 16.4355L6.67751 18.03L2.80368 20.3288C2.24419 20.663 1.78113 21.1341 1.45908 21.6965C1.13702 22.259 0.966818 22.894 0.964844 23.5404V28.5468C0.964844 28.667 1.01313 28.7823 1.09909 28.8673C1.18504 28.9522 1.30162 29 1.42318 29ZM16.3575 18.4026L14.7011 20.4503L12.7477 18.5186L15.3483 17.294L16.3575 18.4026ZM6.79026 3.7324C6.92268 3.56978 7.09037 3.43868 7.28093 3.34877C7.47149 3.25887 7.68004 3.21247 7.89118 3.213C8.14418 3.213 8.34951 2.94921 8.34951 2.69903C8.34903 2.46364 8.39554 2.23046 8.48639 2.01288C8.57723 1.7953 8.71062 1.59759 8.8789 1.4311C9.04719 1.26461 9.24705 1.1326 9.46704 1.04266C9.68702 0.952715 9.9228 0.9066 10.1608 0.906958C10.261 0.907034 10.3609 0.915219 10.4597 0.931433L15.9212 1.83155C16.4162 1.91313 16.847 2.18144 17.1358 2.58663C17.4245 2.99273 17.5345 3.48493 17.4438 3.97352L16.8727 7.11984L15.8955 6.02484V5.05039C15.8955 4.93019 15.8472 4.81491 15.7613 4.72991C15.6753 4.64491 15.5587 4.59716 15.4372 4.59716H8.48701C8.36545 4.59716 8.24887 4.64491 8.16292 4.72991C8.07697 4.81491 8.02868 4.93019 8.02868 5.05039V6.02212L6.99284 7.15973L6.50609 4.90536C6.41718 4.4902 6.52076 4.06235 6.79026 3.7324ZM7.20826 10.2045V8.2783L8.82801 6.49892C8.90369 6.41585 8.9455 6.30796 8.94534 6.19616V5.50362H14.9788V6.19616C14.9788 6.30675 15.0192 6.41371 15.0934 6.4962L16.7159 8.31365V10.2045C16.7156 10.9742 16.5242 11.732 16.1585 12.4115C15.7928 13.0909 15.264 13.6712 14.6186 14.1014L14.6168 14.1023C14.3919 14.2488 14.1548 14.3762 13.9082 14.483C13.7954 14.5329 13.6781 14.5719 13.5617 14.6126C13.2844 14.7106 12.9988 14.7838 12.7083 14.8311C12.6239 14.8447 12.5378 14.8483 12.4525 14.8565C12.1258 14.8891 11.7966 14.8891 11.4698 14.8565C11.3855 14.8474 11.2993 14.8447 11.2159 14.8311C10.926 14.7837 10.641 14.7105 10.3643 14.6126C10.247 14.5719 10.1288 14.532 10.0142 14.4821C9.76883 14.3757 9.53302 14.2489 9.30926 14.1032L9.30284 14.0996C8.65817 13.6693 8.1301 13.0892 7.76491 12.4101C7.39973 11.731 7.20859 10.9737 7.20826 10.2045ZM9.99859 15.4584C10.0527 15.4774 10.1049 15.4992 10.159 15.5164C10.7398 15.7111 11.3488 15.8109 11.9621 15.8119C12.5751 15.8109 13.1838 15.7111 13.7643 15.5164C13.8193 15.4983 13.8724 15.4774 13.9274 15.4575C14.053 15.4112 14.1777 15.3623 14.2996 15.3079C14.3326 15.2934 14.3674 15.2825 14.4004 15.2671V16.7356L11.9648 17.8832L9.52468 16.7338V15.268C9.55676 15.2834 9.59068 15.2934 9.62276 15.3079C9.74559 15.3623 9.87118 15.4121 9.99859 15.4584ZM8.58143 17.294L11.182 18.5186L9.22859 20.4503L7.57218 18.4026L8.58143 17.294Z"
                  fill="#2BA149"
                />
              </svg>

              <Select
                className="pl-6 text-xs md:text-sm"
                id="demo-simple-select"
                value={Employer}
                onChange={(e) => setEmployer(e.target.value)}
                displayEmpty
                renderValue={(value) => (value ? value : "Employer")}
              >
                <MenuItem value={"Employer"}>Employer</MenuItem>
                <MenuItem value={"Employer"}>Employer</MenuItem>
                <MenuItem value={"Employer"}>Employer</MenuItem>
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

export default OverveiwJobTable;

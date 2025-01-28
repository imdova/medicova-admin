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
import { MoreVert, Tune } from "@mui/icons-material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

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
    field: "Veiws",
    headerName: "Veiws",
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
        <button>
          <MoreVert />
        </button>
      </div>
    ),
  },
];

const rows = [
  {
    id: 2546,
    JobTitle: "Consultannt Cardiiology",
    Date: "13 July, 2021",
    Employer: "Saudi German",
    Location: "Egypt",
    Veiws: "123",
    Applicants: "12",
    Status: "Active",
  },
  {
    id: 2546,
    JobTitle: "Consultannt Cardiiology",
    Date: "13 July, 2021",
    Employer: "Saudi German",
    Location: "Egypt",
    Veiws: "123",
    Applicants: "12",
    Status: "Active",
  },
  {
    id: 2546,
    JobTitle: "Consultannt Cardiiology",
    Date: "13 July, 2021",
    Employer: "Saudi German",
    Location: "Egypt",
    Veiws: "123",
    Applicants: "12",
    Status: "Active",
  },
  {
    id: 2546,
    JobTitle: "Consultannt Cardiiology",
    Date: "13 July, 2021",
    Employer: "Saudi German",
    Location: "Egypt",
    Veiws: "123",
    Applicants: "12",
    Status: "Active",
  },
];

interface OverviewEmployersTableProps {
  Filtring?: boolean; // `Filtring` is optional
}
const OverveiwJobTable: React.FC<OverviewEmployersTableProps> = ({
  Filtring = false,
}) => {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //   values of Filters inputs
  const [Country, setCountry] = useState("");

  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };
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

        <SearchInput />
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
                className="pl-6"
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
                className="pl-6"
                id="demo-simple-select"
                value={Country}
                onChange={handleChangeCountry}
                displayEmpty
                renderValue={(value) => (value ? value : "Contry")}
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
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 5C7.73478 5 7.48043 5.10536 7.29289 5.29289C7.10536 5.48043 7 5.73478 7 6V26C7 26.2652 7.10536 26.5196 7.29289 26.7071C7.48043 26.8946 7.73478 27 8 27C8.26522 27 8.51957 26.8946 8.70711 26.7071C8.89464 26.5196 9 26.2652 9 26V6C9 5.73478 8.89464 5.48043 8.70711 5.29289C8.51957 5.10536 8.26522 5 8 5Z"
                  fill="#2BA149"
                />
                <path
                  d="M22 17H14C12.3431 17 11 18.3431 11 20V22C11 23.6569 12.3431 25 14 25H22C23.6569 25 25 23.6569 25 22V20C25 18.3431 23.6569 17 22 17Z"
                  fill="#2BA149"
                />
                <path
                  d="M18 7H14C12.3431 7 11 8.34315 11 10V12C11 13.6569 12.3431 15 14 15H18C19.6569 15 21 13.6569 21 12V10C21 8.34315 19.6569 7 18 7Z"
                  fill="#2BA149"
                />
              </svg>

              <Select
                className="pl-6"
                id="demo-simple-select"
                value={Country}
                onChange={handleChangeCountry}
                displayEmpty
                renderValue={(value) => (value ? value : "Contry")}
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
                className="pl-6"
                id="demo-simple-select"
                value={Country}
                onChange={handleChangeCountry}
                displayEmpty
                renderValue={(value) => (value ? value : "Contry")}
              >
                <MenuItem value={"Egypt"}>Egypt</MenuItem>
                <MenuItem value={"Egypt"}>Egypt</MenuItem>
                <MenuItem value={"Egypt"}>Egypt</MenuItem>
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
    </>
  );
};

export default OverveiwJobTable;

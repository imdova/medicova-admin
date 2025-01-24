import {
  Avatar,
  Box,
  Checkbox,
  Paper,
  styled,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
} from "@mui/material";

import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

import SearchInput from "@/components/UI/SearchInput";
import ExportButton from "@/components/UI/ExportButton";
import { useState } from "react";
import { StateType } from "@/types";

const OverviewEmployersTable: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // start styling table
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#2ba149",
      color: theme.palette.common.white,
      fontSize: 12,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 10,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

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
  return (
    <>
      {/* start content table Employers  */}
      <div className="flex flex-col items-start justify-between gap-4 overflow-hidden px-1 py-3 sm:items-center md:flex-row">
        <Box
          sx={{
            maxWidth: { xs: 400, sm: 480 },
            bgcolor: "background.paper",
          }}
        >
          <Tabs
            className="mb-2 w-full md:mb-0"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
          >
            <Tab label="New Employers" />
            <Tab label="Top Employers" />
            <Tab label="Active Employers" />
            <Tab label="Inactive Employers" />
          </Tabs>
        </Box>
        <SearchInput />
        <ExportButton data="Name,Age\nJohn,30\nJane,25" />
      </div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 1100, width: "100%" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">
                <UnfoldMoreIcon className="text-sm" /> Reg Date
              </StyledTableCell>
              <StyledTableCell align="right">
                <UnfoldMoreIcon className="text-sm" />
                Phone
              </StyledTableCell>
              <StyledTableCell align="right">
                <UnfoldMoreIcon className="text-sm" />
                Country
              </StyledTableCell>
              <StyledTableCell align="right">
                <UnfoldMoreIcon className="text-sm" />
                Type
              </StyledTableCell>
              <StyledTableCell align="right">
                <UnfoldMoreIcon className="text-sm" />
                Sector
              </StyledTableCell>
              <StyledTableCell align="right">
                <UnfoldMoreIcon className="text-sm" />
                Plan
              </StyledTableCell>
              <StyledTableCell align="right">
                <UnfoldMoreIcon className="text-sm" />
                Jobs
              </StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <div className="flex items-center gap-2">
                  <Checkbox color="success" />
                  <Avatar
                    src="https://s3-alpha-sig.figma.com/img/39c8/eeff/41c554f6a62904ec9bf12418902c59f3?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QB0DkboDG2NxdJ7XMCnVyueBe242J~mc7bxyzJ9vwSYj5oAQBvZOnCEbBheTOFrhh7kT7TTSEUnMJIr0XdEJJ8de57JmaLm7C9QsKgkA4VSPAnzDjgg3ORcZJZHBWcay2u1yB-iSBMONgplsMXTm2k919bmbDgunsBW2EBZlYDVSnxoQE12OGSDf3A9s-Qobu7rf7jniG5axgGx~NpwbBS0YO0PYVKqNOANq0oKrNlM5xT2q1kUXDsWTOfA91jgRlm2G1R4EUFxBbvyo-hKWUQ~vli3LT6innvyOgo-AZhiM0SOd3U2RB0o3SoIzOhoH6dhvp9~pdGFHlIneilC4hg__"
                    alt="Ralph Edwards"
                    sx={{ width: 32, height: 32, mr: 2 }}
                  />
                  <div>
                    <h3 className="text-xs">Saudi German</h3>
                    <p className="text-[10px]">Saudi_German@gmail.com</p>
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">13 July, 2021</StyledTableCell>
              <StyledTableCell align="right">+201144789587</StyledTableCell>
              <StyledTableCell align="right">Egypt</StyledTableCell>
              <StyledTableCell align="right">X clinic</StyledTableCell>
              <StyledTableCell align="right">general</StyledTableCell>
              <StyledTableCell align="right">General</StyledTableCell>
              <StyledTableCell align="right">25</StyledTableCell>
              <StyledTableCell align="right">
                {handleState("Active")}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Switch />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <div className="flex items-center gap-2">
                  <Checkbox color="success" />
                  <Avatar
                    src="https://s3-alpha-sig.figma.com/img/39c8/eeff/41c554f6a62904ec9bf12418902c59f3?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QB0DkboDG2NxdJ7XMCnVyueBe242J~mc7bxyzJ9vwSYj5oAQBvZOnCEbBheTOFrhh7kT7TTSEUnMJIr0XdEJJ8de57JmaLm7C9QsKgkA4VSPAnzDjgg3ORcZJZHBWcay2u1yB-iSBMONgplsMXTm2k919bmbDgunsBW2EBZlYDVSnxoQE12OGSDf3A9s-Qobu7rf7jniG5axgGx~NpwbBS0YO0PYVKqNOANq0oKrNlM5xT2q1kUXDsWTOfA91jgRlm2G1R4EUFxBbvyo-hKWUQ~vli3LT6innvyOgo-AZhiM0SOd3U2RB0o3SoIzOhoH6dhvp9~pdGFHlIneilC4hg__"
                    alt="Ralph Edwards"
                    sx={{ width: 32, height: 32, mr: 2 }}
                  />
                  <div>
                    <h3 className="text-xs">Saudi German</h3>
                    <p className="text-[10px]">Saudi_German@gmail.com</p>
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">13 July, 2021</StyledTableCell>
              <StyledTableCell align="right">+201144789587</StyledTableCell>
              <StyledTableCell align="right">Egypt</StyledTableCell>
              <StyledTableCell align="right">X clinic</StyledTableCell>
              <StyledTableCell align="right">general</StyledTableCell>
              <StyledTableCell align="right">General</StyledTableCell>
              <StyledTableCell align="right">25</StyledTableCell>
              <StyledTableCell align="right">
                {handleState("Active")}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Switch />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <div className="flex items-center gap-2">
                  <Checkbox color="success" />
                  <Avatar
                    src="https://s3-alpha-sig.figma.com/img/39c8/eeff/41c554f6a62904ec9bf12418902c59f3?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QB0DkboDG2NxdJ7XMCnVyueBe242J~mc7bxyzJ9vwSYj5oAQBvZOnCEbBheTOFrhh7kT7TTSEUnMJIr0XdEJJ8de57JmaLm7C9QsKgkA4VSPAnzDjgg3ORcZJZHBWcay2u1yB-iSBMONgplsMXTm2k919bmbDgunsBW2EBZlYDVSnxoQE12OGSDf3A9s-Qobu7rf7jniG5axgGx~NpwbBS0YO0PYVKqNOANq0oKrNlM5xT2q1kUXDsWTOfA91jgRlm2G1R4EUFxBbvyo-hKWUQ~vli3LT6innvyOgo-AZhiM0SOd3U2RB0o3SoIzOhoH6dhvp9~pdGFHlIneilC4hg__"
                    alt="Ralph Edwards"
                    sx={{ width: 32, height: 32, mr: 2 }}
                  />
                  <div>
                    <h3 className="text-xs">Saudi German</h3>
                    <p className="text-[10px]">Saudi_German@gmail.com</p>
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">13 July, 2021</StyledTableCell>
              <StyledTableCell align="right">+201144789587</StyledTableCell>
              <StyledTableCell align="right">Egypt</StyledTableCell>
              <StyledTableCell align="right">X clinic</StyledTableCell>
              <StyledTableCell align="right">general</StyledTableCell>
              <StyledTableCell align="right">General</StyledTableCell>
              <StyledTableCell align="right">25</StyledTableCell>
              <StyledTableCell align="right">
                {handleState("Processing")}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Switch />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <div className="flex items-center gap-2">
                  <Checkbox color="success" />
                  <Avatar
                    src="https://s3-alpha-sig.figma.com/img/39c8/eeff/41c554f6a62904ec9bf12418902c59f3?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QB0DkboDG2NxdJ7XMCnVyueBe242J~mc7bxyzJ9vwSYj5oAQBvZOnCEbBheTOFrhh7kT7TTSEUnMJIr0XdEJJ8de57JmaLm7C9QsKgkA4VSPAnzDjgg3ORcZJZHBWcay2u1yB-iSBMONgplsMXTm2k919bmbDgunsBW2EBZlYDVSnxoQE12OGSDf3A9s-Qobu7rf7jniG5axgGx~NpwbBS0YO0PYVKqNOANq0oKrNlM5xT2q1kUXDsWTOfA91jgRlm2G1R4EUFxBbvyo-hKWUQ~vli3LT6innvyOgo-AZhiM0SOd3U2RB0o3SoIzOhoH6dhvp9~pdGFHlIneilC4hg__"
                    alt="Ralph Edwards"
                    sx={{ width: 32, height: 32, mr: 2 }}
                  />
                  <div>
                    <h3 className="text-xs">Saudi German</h3>
                    <p className="text-[10px]">Saudi_German@gmail.com</p>
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">13 July, 2021</StyledTableCell>
              <StyledTableCell align="right">+201144789587</StyledTableCell>
              <StyledTableCell align="right">Egypt</StyledTableCell>
              <StyledTableCell align="right">X clinic</StyledTableCell>
              <StyledTableCell align="right">general</StyledTableCell>
              <StyledTableCell align="right">General</StyledTableCell>
              <StyledTableCell align="right">25</StyledTableCell>
              <StyledTableCell align="right">
                {handleState("Inactive")}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Switch />
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OverviewEmployersTable;

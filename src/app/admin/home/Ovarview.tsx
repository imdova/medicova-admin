"use client";
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
  Typography,
} from "@mui/material";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import { LineChart } from "@mui/x-charts";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RoomIcon from "@mui/icons-material/Room";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import icon1 from "@/icons/icon-1.png";
import icon2 from "@/icons/icon-2.png";
import icon3 from "@/icons/icon-3.png";
import Image from "next/image";
import { StateType } from "@/types";
import { useState } from "react";
import { Search } from "@mui/icons-material";
import SearchInput from "@/components/UI/SearchInput";
import ExportButton from "@/components/UI/ExportButton";
import ChartStatistics from "@/components/UI/Charts/ChartStatistics";

const OvarviewPage: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
  // start styling table
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#2ba149",
      color: theme.palette.common.white,
      fontSize: 12,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
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

  return (
    <>
      {/* start Overveiw page */}
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex-1 lg:w-3/5">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="box-content flex items-center justify-between gap-3">
              <div>
                <span className="mb-2 block text-sm text-secondary">
                  Total Employers
                </span>
                <h2 className="mb-2">2,420</h2>
                <span className="flex items-center text-[8px] text-primary">
                  <NorthIcon className="text-xs" />
                  20%
                </span>
              </div>
              <div>
                <Image src={icon3} alt="" />
              </div>
            </div>
            <div className="box-content flex items-center justify-between gap-3">
              <div>
                <span className="mb-2 block text-sm text-secondary">
                  Active Employers
                </span>
                <h2 className="mb-2">1,517</h2>
                <span className="flex items-center text-[8px] text-primary">
                  <NorthIcon className="text-xs" />
                  20%
                </span>
              </div>
              <div>
                <Image src={icon2} alt="" />
              </div>
            </div>
            <div className="box-content flex items-center justify-between gap-3">
              <div>
                <span className="mb-2 block text-sm text-secondary">
                  Inactive Employers
                </span>
                <h2 className="mb-2">2,420</h2>
                <span className="flex items-center text-[8px] text-[#F81D1D]">
                  <SouthIcon className="text-xs" />
                  10%
                </span>
              </div>
              <div>
                <Image src={icon1} alt="" />
              </div>
            </div>
          </div>
          <div className="relative mt-3 box-content">
            <ChartStatistics />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="box-content">
            <div className="mb-3 flex justify-between gap-8 border-b pb-2">
              <Typography>
                Performance Overview
                <span className="ml-1 text-xs text-secondary">(Revenue)</span>
              </Typography>
              <button>
                <MoreVertIcon />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="w-full rounded-lg border p-2">
                <div className="flex gap-3">
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/345b/6e14/32d192aab80fb4aafbfb4096714d63db?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c1bNyyfqI3hFfD4SYCKZxverDayOFc6qP5R6TA1KFPJF0x8P9bhUYUNDMGE4ZjLnNFXeXvLBfnctuV9ndQNoyQmrZhgKwahMln~7KjZcR2jzNRbxLmmuQiIqNIPNdIWXMwPWDBBmA~PrRg1DcI2a4h5jOJWBXBFs0XDfeBRC8tKybDsPvaRoquyItOAFTJwXAp9KsqAPmDl0Qc7XBhGhhE7pFuk8eEvmklxNwbEp7Qo6yP26nCD4Z3Gz62V1wugMHG~4Hq6lHLRJb55C9sGBVxhic7jluSQ6OXd870K4LUhqAek2n76S46HM8~V2en5sygDEnpX0Kzj8z6cB7lFR1w__"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div>
                    <Typography variant="subtitle1">Linkedin</Typography>
                    <p className="text-xs text-secondary">
                      <RoomIcon className="text-lg" /> New Yourk ,us
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <Typography
                    className="text-xs text-secondary"
                    variant="subtitle1"
                  >
                    <MonetizationOnIcon className="mr-2 text-lg" />
                    25,000
                  </Typography>
                  <Typography
                    className="text-xs text-secondary"
                    variant="subtitle1"
                  >
                    25 Open Jobs
                  </Typography>
                </div>
              </div>
              <div className="w-full rounded-lg border p-2">
                <div className="flex gap-3">
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/345b/6e14/32d192aab80fb4aafbfb4096714d63db?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c1bNyyfqI3hFfD4SYCKZxverDayOFc6qP5R6TA1KFPJF0x8P9bhUYUNDMGE4ZjLnNFXeXvLBfnctuV9ndQNoyQmrZhgKwahMln~7KjZcR2jzNRbxLmmuQiIqNIPNdIWXMwPWDBBmA~PrRg1DcI2a4h5jOJWBXBFs0XDfeBRC8tKybDsPvaRoquyItOAFTJwXAp9KsqAPmDl0Qc7XBhGhhE7pFuk8eEvmklxNwbEp7Qo6yP26nCD4Z3Gz62V1wugMHG~4Hq6lHLRJb55C9sGBVxhic7jluSQ6OXd870K4LUhqAek2n76S46HM8~V2en5sygDEnpX0Kzj8z6cB7lFR1w__"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div>
                    <Typography variant="subtitle1">Linkedin</Typography>
                    <p className="text-xs text-secondary">
                      <RoomIcon className="text-lg" /> New Yourk ,us
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <Typography
                    className="text-xs text-secondary"
                    variant="subtitle1"
                  >
                    <MonetizationOnIcon className="mr-2 text-lg" />
                    25,000
                  </Typography>
                  <Typography
                    className="text-xs text-secondary"
                    variant="subtitle1"
                  >
                    25 Open Jobs
                  </Typography>
                </div>
              </div>
              <div className="w-full rounded-lg border p-2">
                <div className="flex gap-3">
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/345b/6e14/32d192aab80fb4aafbfb4096714d63db?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c1bNyyfqI3hFfD4SYCKZxverDayOFc6qP5R6TA1KFPJF0x8P9bhUYUNDMGE4ZjLnNFXeXvLBfnctuV9ndQNoyQmrZhgKwahMln~7KjZcR2jzNRbxLmmuQiIqNIPNdIWXMwPWDBBmA~PrRg1DcI2a4h5jOJWBXBFs0XDfeBRC8tKybDsPvaRoquyItOAFTJwXAp9KsqAPmDl0Qc7XBhGhhE7pFuk8eEvmklxNwbEp7Qo6yP26nCD4Z3Gz62V1wugMHG~4Hq6lHLRJb55C9sGBVxhic7jluSQ6OXd870K4LUhqAek2n76S46HM8~V2en5sygDEnpX0Kzj8z6cB7lFR1w__"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div>
                    <Typography variant="subtitle1">Linkedin</Typography>
                    <p className="text-xs text-secondary">
                      <RoomIcon className="text-lg" /> New Yourk ,us
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <Typography
                    className="text-xs text-secondary"
                    variant="subtitle1"
                  >
                    <MonetizationOnIcon className="mr-2 text-lg" />
                    25,000
                  </Typography>
                  <Typography
                    className="text-xs text-secondary"
                    variant="subtitle1"
                  >
                    25 Open Jobs
                  </Typography>
                </div>
              </div>
              <div className="w-full rounded-lg border p-2">
                <div className="flex gap-3">
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/345b/6e14/32d192aab80fb4aafbfb4096714d63db?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c1bNyyfqI3hFfD4SYCKZxverDayOFc6qP5R6TA1KFPJF0x8P9bhUYUNDMGE4ZjLnNFXeXvLBfnctuV9ndQNoyQmrZhgKwahMln~7KjZcR2jzNRbxLmmuQiIqNIPNdIWXMwPWDBBmA~PrRg1DcI2a4h5jOJWBXBFs0XDfeBRC8tKybDsPvaRoquyItOAFTJwXAp9KsqAPmDl0Qc7XBhGhhE7pFuk8eEvmklxNwbEp7Qo6yP26nCD4Z3Gz62V1wugMHG~4Hq6lHLRJb55C9sGBVxhic7jluSQ6OXd870K4LUhqAek2n76S46HM8~V2en5sygDEnpX0Kzj8z6cB7lFR1w__"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div>
                    <Typography variant="subtitle1">Linkedin</Typography>
                    <p className="text-xs text-secondary">
                      <RoomIcon className="text-lg" /> New Yourk ,us
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <Typography
                    className="text-xs text-secondary"
                    variant="subtitle1"
                  >
                    <MonetizationOnIcon className="mr-2 text-lg" />
                    25,000
                  </Typography>
                  <Typography
                    className="text-xs text-secondary"
                    variant="subtitle1"
                  >
                    25 Open Jobs
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 box-content flex-1">
            <div className="mb-3 flex justify-between gap-8 border-b pb-2">
              <Typography>
                Top Countries
                <span className="ml-1 text-xs text-secondary">(Revenue)</span>
              </Typography>
              <button>
                <MoreVertIcon />
              </button>
            </div>
            <TableContainer>
              <Table
                sx={{
                  minWidth: 300,
                  ".css-y6a65z-MuiTableCell-root": {
                    color: "#2ba149",
                  },
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Country</TableCell>
                    <TableCell align="right">Employers</TableCell>
                    <TableCell align="right">Jobs</TableCell>
                    <TableCell align="right">Revenue</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        boxShadow: 0,
                      }}
                      component="th"
                      scope="row"
                    >
                      <Image
                        alt=""
                        width={25}
                        height={25}
                        src="https://s3-alpha-sig.figma.com/img/7287/73b3/199c69ec2b1d8ca4cbf271947f8b9dd7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L7FvQT5wpJ--YXluadYKCltTwTJjyp37uPuMab5DVsee7krzvCqSOzxaTn3QNAYgZAmxdVEC5Zikif1Ci4hCRO6qahfL~HpUFbMNn6I5GKJJ7QJl60GQ0BGAXWl7GnhpZBMW8I98QCaXVSTzx~YRCtoQjOXjX4copUN1j1iiYIm0UKpJs~5JoZ1weFQwUEkwdF~L6mFzzFVL2SgiCZqaBELtg2DcuLc8jFjGAhF5cJhR~Zl3lA9JwBCWpEgkDIJeVhcWu0ppLxuJLvn5TGEjAgZ8MdRPVnz52RIrbpaNuCyAqtAl4QZFgfWYarUSmhX6yuJPHfCFWQrM-xujElTIgQ__"
                      />
                      Egypt
                    </TableCell>
                    <TableCell align="right">3 Jobs</TableCell>
                    <TableCell align="right">12</TableCell>
                    <TableCell align="right">60k</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                      component="th"
                      scope="row"
                    >
                      <Image
                        alt=""
                        width={25}
                        height={25}
                        src="https://s3-alpha-sig.figma.com/img/7287/73b3/199c69ec2b1d8ca4cbf271947f8b9dd7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L7FvQT5wpJ--YXluadYKCltTwTJjyp37uPuMab5DVsee7krzvCqSOzxaTn3QNAYgZAmxdVEC5Zikif1Ci4hCRO6qahfL~HpUFbMNn6I5GKJJ7QJl60GQ0BGAXWl7GnhpZBMW8I98QCaXVSTzx~YRCtoQjOXjX4copUN1j1iiYIm0UKpJs~5JoZ1weFQwUEkwdF~L6mFzzFVL2SgiCZqaBELtg2DcuLc8jFjGAhF5cJhR~Zl3lA9JwBCWpEgkDIJeVhcWu0ppLxuJLvn5TGEjAgZ8MdRPVnz52RIrbpaNuCyAqtAl4QZFgfWYarUSmhX6yuJPHfCFWQrM-xujElTIgQ__"
                      />
                      Egypt
                    </TableCell>
                    <TableCell align="right">3 Jobs</TableCell>
                    <TableCell align="right">12</TableCell>
                    <TableCell align="right">60k</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
      <div className="mt-3 box-content !p-0">
        {/* start content table Employers  */}
        <div className="flex flex-wrap items-center justify-between gap-4 overflow-hidden px-1 py-3 md:flex-nowrap">
          <Box
            sx={{
              maxWidth: { xs: 320, sm: 480 },
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
                  {handleState("Inactive")}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Switch />
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
export default OvarviewPage;

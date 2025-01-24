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
import SearchInput from "@/components/UI/SearchInput";
import ExportButton from "@/components/UI/ExportButton";
import ChartEmployerReport from "@/components/UI/Charts/ChartEmployerReport";
import OverviewEmployersTable from "@/components/UI/Tables/OverviewEmployersTable";

const OvarviewPage: React.FC = () => {
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
            <ChartEmployerReport />
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
        <OverviewEmployersTable />
      </div>
    </>
  );
};
export default OvarviewPage;

"use client";
import { Typography } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import icon1 from "@/icons/job-1.png";
import icon2 from "@/icons/job-2.png";
import icon3 from "@/icons/job-3.png";
import Image from "next/image";
import ChartEmployerReport from "@/components/UI/Charts/ChartEmployerReport";
import CountiresTable from "@/components/UI/Tables/CountiresTable";
import OverveiwJobTable from "@/components/UI/Tables/OverveiwJobTable";
import {
  LocationOnOutlined,
  MoreVert,
  North,
  South,
} from "@mui/icons-material";

const OvarviewJobs: React.FC = () => {
  return (
    <>
      {/* start Overveiw page */}
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex-1 lg:w-3/5">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="box-content flex items-center justify-between gap-3">
              <div>
                <span className="mb-2 block text-sm text-secondary">
                  All Jobs
                </span>
                <h2 className="mb-2">2,420</h2>
                <span className="flex items-center text-[8px] text-primary">
                  <North className="text-xs" />
                  20%
                </span>
              </div>
              <div>
                <Image src={icon1} alt="" />
              </div>
            </div>
            <div className="box-content flex items-center justify-between gap-3">
              <div>
                <span className="mb-2 block text-sm text-secondary">
                  Active Jobs
                </span>
                <h2 className="mb-2">1,517</h2>
                <span className="flex items-center text-[8px] text-primary">
                  <North className="text-xs" />
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
                  Inactive Jobs
                </span>
                <h2 className="mb-2">2,420</h2>
                <span className="flex items-center text-[8px] text-[#F81D1D]">
                  <South className="text-xs" />
                  10%
                </span>
              </div>
              <div>
                <Image src={icon3} alt="" />
              </div>
            </div>
          </div>
          <div className="relative mt-3 box-content">
            <ChartEmployerReport labelX="new" labelY="Apply for a job" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="box-content">
            <div className="mb-3 flex justify-between gap-8 border-b pb-2">
              <Typography>
                Top Employers
                <span className="ml-1 text-xs text-secondary">(Revenue)</span>
              </Typography>
              <button>
                <MoreVert />
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
                      <LocationOnOutlined className="text-lg" /> New Yourk ,us
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
                <MoreVert />
              </button>
            </div>
            <CountiresTable />
          </div>
        </div>
      </div>
      <div className="mt-3 box-content !p-0">
        <OverveiwJobTable />
      </div>
    </>
  );
};
export default OvarviewJobs;

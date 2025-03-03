"use client";
import ChartEarnings from "@/components/UI/Charts/ChartEarnings";
import CircularProgress from "@/components/UI/CircularProgress";
import CurrentStudentTable from "@/components/UI/Tables/CurrentStudentTable";
import WeeklySalesTable from "@/components/UI/Tables/WeeklySalesTable";
import { Instructors } from "@/constants/instructors.data";
import {
  ArrowCircleUpOutlined,
  MonetizationOnOutlined,
  PlayLessonOutlined,
  SchoolOutlined,
  SmsOutlined,
  VideocamOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="box-content flex flex-col items-center gap-4">
          <h2 className="text-lg font-bold">Total Students</h2>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2EAE7D]">
            <SchoolOutlined className="text-4xl text-white" />
          </div>
          <div className="flex w-full items-center justify-between">
            <h2 className="text-xl font-bold">1200</h2>
            <p className="text-xs text-secondary">
              <span className="mr-1 text-xs text-[#2EAE7D]">5.4%</span>
              than last year
            </p>
          </div>
        </div>
        <div className="box-content flex flex-col items-center gap-4">
          <h2 className="text-lg font-bold">New Students</h2>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6D6C80]">
            <SchoolOutlined className="text-4xl text-white" />
          </div>
          <div className="flex w-full items-center justify-between">
            <h2 className="text-xl font-bold">1000</h2>
            <p className="text-xs text-secondary">
              <span className="mr-1 text-xs text-[#2EAE7D]">5.4%</span>
              than last year
            </p>
          </div>
        </div>
        <div className="box-content flex flex-col items-center gap-4">
          <h2 className="text-lg font-bold">Total Course</h2>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2BA149]">
            <PlayLessonOutlined className="text-4xl text-white" />
          </div>
          <div className="flex w-full items-center justify-center">
            <h2 className="text-xl font-bold">12.258</h2>
          </div>
        </div>
        <div className="box-content flex flex-col items-center gap-4">
          <h2 className="text-lg font-bold">Fees Collection</h2>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E34444]">
            <MonetizationOnOutlined className="text-4xl text-white" />
          </div>
          <div className="flex w-full items-center justify-center">
            <h2 className="text-xl font-bold">12.345</h2>
          </div>
        </div>
      </div>
      <div className="mb-4 flex flex-col gap-4 lg:flex-row">
        <div className="w-full">
          <div className="mb-4 box-content flex flex-col gap-3 !p-0 sm:flex-row">
            <div className="w-[140px] p-4">
              <h2 className="mb-3 text-xl font-bold">Earnings</h2>
              <span className="mb-6 block text-sm text-secondary">
                Dec 1 - Dec 31,2021
              </span>
              <span className="block">This Month</span>
              <h1 className="text-2xl font-bold">$53.668</h1>
              <div className="mt-2 flex items-center justify-start text-primary">
                <ArrowCircleUpOutlined className="text-xl" />
                <span>+15%</span>
              </div>
            </div>
            <ChartEarnings labelX={"Earn"} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 flex items-center sm:col-span-1 lg:col-span-3 xl:col-span-1">
              <div className="flex h-full w-full flex-col justify-between">
                <h2 className="mb-2 p-3 text-xl font-bold">Courses Stats</h2>
                <div className="box-content h-full w-full !p-0">
                  <CircularProgress />
                </div>
              </div>
            </div>
            <div className="col-span-3 sm:col-span-2 lg:col-span-3 xl:col-span-2">
              <div className="flex h-full w-full flex-col justify-between">
                <h2 className="mb-2 p-3 text-xl font-bold">
                  Weekly Sales Stats State
                </h2>
                <div className="box-content h-full !p-0">
                  <WeeklySalesTable />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-content lg:w-[450px]">
          <h2 className="mb-6 text-xl font-bold">Instracturs List</h2>
          <ul className="mt-3">
            {Instructors.map((instructor) => {
              return (
                <li key={instructor.id}>
                  <Link
                    className="mb-4 flex justify-between rounded-lg p-2 transition hover:bg-gray-100"
                    href={"#"}
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        className="h-12 w-12 rounded-lg object-cover"
                        src={instructor.image}
                        width={60}
                        height={60}
                        alt=""
                      />
                      <h1>{instructor.name}</h1>
                    </div>
                    <div className="flex gap-3">
                      <button className="hover:text-primary">
                        <VideocamOutlined className="text-xl" />
                      </button>
                      <button className="hover:text-primary">
                        <SmsOutlined className="text-lg" />
                      </button>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center">
            <Button
              className="w-[200px] rounded-md bg-primary text-white"
              variant="contained"
              size="large"
            >
              Veiw All
            </Button>
          </div>
        </div>
      </div>
      <div className="box-content">
        <CurrentStudentTable />
      </div>
    </div>
  );
}

"use client";
import { Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RoomIcon from "@mui/icons-material/Room";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import icon1 from "@/icons/user-1.png";
import icon2 from "@/icons/user-2.png";
import icon3 from "@/icons/user-3.png";
import Image from "next/image";
import ChartEmployerReport from "@/components/UI/Charts/ChartEmployerReport";
import CountiresTable from "@/components/UI/Tables/CountiresTable";
import OverviewBillingTable from "@/components/UI/Tables/OverviewBillingTable";
import React, { useEffect, useState } from "react";
import {
  LocationOnOutlined,
  MonetizationOn,
  North,
  South,
} from "@mui/icons-material";
import DummyActionMenu from "@/components/UI/DummyActionMenu";
// Type definitions
interface EmployerStats {
  totalEmployers: number;
  totalEmployersGrowth: number;
  activeEmployers: number;
  activeEmployersGrowth: number;
  inactiveEmployers: number;
  inactiveEmployersGrowth: number;
}

interface TopEmployer {
  id: string;
  name: string;
  logo: string;
  location: string;
  country: string;
  revenue: number;
  openJobs: number;
}

interface ChartData {
  newEmployers: number[];
  jobApplicants: number[];
  months: string[];
}

// Mock API endpoints - replace these with actual endpoints
const API_GET_EMPLOYER_STATS = "/api/employers/stats";
const API_GET_TOP_EMPLOYERS = "/api/employers/top";
const API_GET_CHART_DATA = "/api/employers/chart-data";
const API_GET_COUNTRIES_DATA = "/api/countries/stats";
const API_GET_TrANSACTION_TABLE_DATA = "/api/employers/table-data";

// Dummy data
const dummyEmployerStats: EmployerStats = {
  totalEmployers: 2420,
  totalEmployersGrowth: 20,
  activeEmployers: 1517,
  activeEmployersGrowth: 20,
  inactiveEmployers: 903,
  inactiveEmployersGrowth: -10,
};

const dummyTopEmployers: TopEmployer[] = [
  {
    id: "emp-001",
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    location: "New York, US",
    country: "United States",
    revenue: 25000,
    openJobs: 25,
  },
  {
    id: "emp-002",
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
    location: "Mountain View, US",
    country: "United States",
    revenue: 42000,
    openJobs: 38,
  },
  {
    id: "emp-003",
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    location: "Redmond, US",
    country: "United States",
    revenue: 36500,
    openJobs: 29,
  },
  {
    id: "emp-004",
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    location: "Seattle, US",
    country: "United States",
    revenue: 31200,
    openJobs: 41,
  },
];

const dummyChartData: ChartData = {
  newEmployers: [120, 150, 180, 220, 270, 310, 330, 290, 320, 350, 380, 400],
  jobApplicants: [
    1800, 2200, 2600, 3100, 3500, 3800, 4200, 3900, 4300, 4700, 5100, 5500,
  ],
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};
const OvarviewBilling: React.FC = () => {
  // State variables
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [employerStats, setEmployerStats] =
    useState<EmployerStats>(dummyEmployerStats);
  const [topEmployers, setTopEmployers] =
    useState<TopEmployer[]>(dummyTopEmployers);
  const [chartData, setChartData] = useState<ChartData>(dummyChartData);

  // Fetch data on component mount
  useEffect(() => {
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
        setEmployerStats(dummyEmployerStats);
        setTopEmployers(dummyTopEmployers);
        setChartData(dummyChartData);
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
        Loading overview data...
      </div>
    );
  }

  return (
    <>
      {/* start Overveiw page */}
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex-1 lg:w-3/5">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {/* Total Employers */}
            <div className="box-content flex items-center justify-between gap-3 rounded-lg p-4">
              <div>
                <span className="mb-2 block text-sm text-secondary">
                  Total Employers
                </span>
                <h2 className="mb-2 text-lg font-bold">
                  {employerStats.totalEmployers.toLocaleString()}
                </h2>
                <span
                  className={`flex items-center text-xs ${
                    employerStats.totalEmployersGrowth >= 0
                      ? "text-primary"
                      : "text-[#F81D1D]"
                  }`}
                >
                  {employerStats.totalEmployersGrowth >= 0 ? (
                    <North className="text-xs" />
                  ) : (
                    <South className="text-xs" />
                  )}
                  {Math.abs(employerStats.totalEmployersGrowth)}%
                </span>
              </div>
              <div>
                <Image
                  src={icon1}
                  alt="Total Employers Icon"
                  width={48}
                  height={48}
                />
              </div>
            </div>
            {/* Active Employers */}
            <div className="box-content flex items-center justify-between gap-3 rounded-lg p-4">
              <div>
                <span className="mb-2 block text-sm text-secondary">
                  Active Employers
                </span>
                <h2 className="text-lg font-bold">
                  {employerStats.activeEmployers.toLocaleString()}
                </h2>
                <span
                  className={`flex items-center text-xs ${
                    employerStats.activeEmployersGrowth >= 0
                      ? "text-primary"
                      : "text-[#F81D1D]"
                  }`}
                >
                  {employerStats.activeEmployersGrowth >= 0 ? (
                    <North className="text-xs" />
                  ) : (
                    <South className="text-xs" />
                  )}
                  {Math.abs(employerStats.activeEmployersGrowth)}%
                </span>
              </div>
              <div>
                <Image
                  src={icon2}
                  alt="Active Employers Icon"
                  width={48}
                  height={48}
                />
              </div>
            </div>
            {/* Inactive Employers */}
            <div className="box-content flex items-center justify-between gap-3 rounded-lg p-4">
              <div>
                <span className="mb-2 block text-sm text-secondary">
                  Inactive Employers
                </span>
                <h2 className="text-lg font-bold">
                  {employerStats.inactiveEmployers.toLocaleString()}
                </h2>
                <span
                  className={`flex items-center text-xs ${
                    employerStats.inactiveEmployersGrowth >= 0
                      ? "text-primary"
                      : "text-[#F81D1D]"
                  }`}
                >
                  {employerStats.inactiveEmployersGrowth >= 0 ? (
                    <North className="text-xs" />
                  ) : (
                    <South className="text-xs" />
                  )}
                  {Math.abs(employerStats.inactiveEmployersGrowth)}%
                </span>
              </div>
              <div>
                <Image
                  src={icon3}
                  alt="Inactive Employers Icon"
                  width={48}
                  height={48}
                />
              </div>
            </div>
          </div>
          {/* Chart Section */}
          <div className="relative mt-3 box-content rounded-lg p-4">
            <h3 className="mb-4 text-lg font-medium">
              Employer & Job Application Trends
            </h3>
            <ChartEmployerReport
              labelX="New Employers"
              labelY="Job Applications"
              months={chartData.months}
              newEmployers={chartData.newEmployers}
              jobApplicants={chartData.jobApplicants}
              endPoint={API_GET_CHART_DATA}
            />
          </div>
        </div>
        <div className="flex flex-col">
          {/* Performance Overview */}
          <div className="box-content rounded-lg p-4">
            <div className="mb-3 flex items-center justify-between gap-8 border-b pb-2">
              <Typography>
                Performance Overview
                <span className="ml-1 text-xs text-secondary">(Revenue)</span>
              </Typography>
              <DummyActionMenu />
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {topEmployers.map((employer) => (
                <div
                  key={employer.id}
                  className="w-full rounded-lg border p-3 transition-shadow hover:shadow-md"
                >
                  <div className="flex gap-3">
                    <Image
                      src={employer.logo}
                      alt={`${employer.name} logo`}
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                    <div>
                      <Typography variant="subtitle1" className="font-medium">
                        {employer.name}
                      </Typography>
                      <p className="flex items-center text-xs text-secondary">
                        <LocationOnOutlined className="mr-1 text-lg" />{" "}
                        {employer.location}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <h2 className="text-xs text-secondary">
                      <MonetizationOn className="mr-2 text-lg" />
                      {employer.revenue}
                    </h2>
                    <h2 className="text-xs text-secondary">
                      {employer.openJobs} Open Jobs
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 box-content flex-1">
            <div className="mb-3 flex items-center justify-between gap-8 border-b pb-2">
              <Typography>
                Top Countries
                <span className="ml-1 text-xs text-secondary">(Revenue)</span>
              </Typography>
              <DummyActionMenu />
            </div>
            <CountiresTable endPoint={API_GET_COUNTRIES_DATA} />
          </div>
        </div>
      </div>
      <div className="mt-3 box-content !p-0">
        <OverviewBillingTable endPoint={API_GET_TrANSACTION_TABLE_DATA} />
      </div>
    </>
  );
};
export default OvarviewBilling;

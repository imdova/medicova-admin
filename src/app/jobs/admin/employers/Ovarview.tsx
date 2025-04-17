"use client";
import { useState, useEffect } from "react";
import React from "react";
import { Typography } from "@mui/material";
import icon1 from "@/icons/user-1.png";
import icon2 from "@/icons/user-2.png";
import icon3 from "@/icons/user-3.png";
import Image from "next/image";
import ChartEmployerReport from "@/components/UI/Charts/ChartEmployerReport";
import OverviewEmployersTable from "@/components/UI/Tables/OverviewEmployersTable";
import CountriesTable from "@/components/UI/Tables/CountiresTable";
import {
  MonetizationOn,
  North,
  South,
  LocationOnOutlined,
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
const API_GET_EMPLOYERS_TABLE_DATA = "/api/employers/table-data";

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

const OverviewPage: React.FC = () => {
  // State variables
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [employerStats, setEmployerStats] =
    useState<EmployerStats>(dummyEmployerStats);
  const [topEmployers, setTopEmployers] =
    useState<TopEmployer[]>(dummyTopEmployers);
  const [chartData, setChartData] = useState<ChartData>(dummyChartData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const statsRes = await fetch("/api/employer-stats");
        const topRes = await fetch("/api/top-employers");
        const chartRes = await fetch("/api/chart-data");

        if (!statsRes.ok || !topRes.ok || !chartRes.ok) {
          throw new Error("Failed to fetch one or more endpoints");
        }

        const statsData = await statsRes.json();
        const topData = await topRes.json();
        const chartData = await chartRes.json();

        setEmployerStats(statsData);
        setTopEmployers(topData);
        setChartData(chartData);
      } catch (error) {
        console.error("Error fetching overview data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-3">
      {/* Stats Section */}
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
        {/* Right Column */}
        <div className="flex flex-col gap-3 lg:w-2/5">
          {/* Performance Overview */}
          <div className="box-content rounded-lg p-4">
            <div className="mb-3 flex items-center justify-between gap-8 border-b pb-2">
              <Typography variant="h6">
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
          {/* Top Countries */}
          <div className="box-content flex-1 rounded-lg p-4">
            <div className="mb-3 flex justify-between gap-8 border-b pb-2">
              <Typography>
                Top Countries
                <span className="ml-1 text-xs text-secondary">(Revenue)</span>
              </Typography>
              <DummyActionMenu />
            </div>
            <CountriesTable endPoint={API_GET_COUNTRIES_DATA} />
          </div>
        </div>
      </div>
      {/* Employers Table */}
      <div className="mt-3 box-content overflow-hidden rounded-lg !p-0">
        <div className="border-b bg-white p-4">
          <Typography variant="h6">All Employers</Typography>
        </div>
        <OverviewEmployersTable />
      </div>
    </div>
  );
};

export default OverviewPage;

"use client";
import { Avatar, Badge, Rating, styled, Typography } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import icon1 from "@/icons/user-1.png";
import icon2 from "@/icons/user-2.png";
import icon3 from "@/icons/user-3.png";
import Image from "next/image";
import CountiresTable from "@/components/UI/Tables/CountiresTable";
import { LocationOnOutlined, MoreVert } from "@mui/icons-material";
import ChartUserReport from "@/components/UI/Charts/ChartUserReport";
import OverveiwUsersTable from "@/components/UI/Tables/OverveiwUsersTable";
import { useEffect, useState } from "react";
import DummyActionMenu from "@/components/UI/DummyActionMenu";

// Type definitions
interface UserStats {
  totalUsers: number;
  totalUsersGrowth: number;
  activeUsers: number;
  activeUsersGrowth: number;
  inactiveUsers: number;
  inactiveUsersGrowth: number;
}

interface ChartData {
  newEmployers: number[];
  category: string[];
}
type UserType = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  location: string;
  rating: number;
  reviews: number;
};

// Mock API endpoints - replace these with actual endpoints
const API_GET_USERS_STATS = "/api/users/stats";
const API_GET_CHART_DATA = "/api/users/chart-data";
const API_GET_COUNTRIES_DATA = "/api/countries/stats";
const API_GET_USERS_TABLE_DATA = "/api/Users/table-data";
const API_GET_CANDIDATES_DATA = "/api/users/candidates-data";

// Dummy data
const dummyUserStats: UserStats = {
  totalUsers: 2420,
  totalUsersGrowth: 20,
  activeUsers: 1517,
  activeUsersGrowth: 20,
  inactiveUsers: 903,
  inactiveUsersGrowth: -10,
};

const dummyChartData: ChartData = {
  newEmployers: [2423, 2200, 2100, 2500, 1900, 2300],
  category: [
    "Doctors",
    "Dentists",
    "Pharmacists",
    "Physiot...",
    "Nurses",
    "Technicians",
  ],
};

const dummyUsers: UserType[] = [
  {
    id: 1,
    name: "Rebert Fox",
    role: "UI/UX",
    avatar: "https://mui.com/static/images/avatar/3.jpg",
    location: "Chicago, US",
    rating: 4,
    reviews: 65,
  },
  {
    id: 2,
    name: "Sophia Miller",
    role: "Frontend Developer",
    avatar: "https://mui.com/static/images/avatar/2.jpg",
    location: "New York, US",
    rating: 5,
    reviews: 120,
  },
  {
    id: 3,
    name: "Daniel Smith",
    role: "Backend Engineer",
    avatar: "https://mui.com/static/images/avatar/1.jpg",
    location: "San Francisco, US",
    rating: 4.5,
    reviews: 89,
  },
  {
    id: 4,
    name: "Emma Johnson",
    role: "Product Manager",
    avatar: "https://mui.com/static/images/avatar/4.jpg",
    location: "Los Angeles, US",
    rating: 4.2,
    reviews: 75,
  },
];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const OvarviewUsers: React.FC = () => {
  // State variables
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [UsersStats, setUsersStats] = useState<UserStats>(dummyUserStats);
  const [chartData, setChartData] = useState<ChartData>(dummyChartData);
  const [usersData, setUsersData] = useState<UserType[]>(dummyUsers);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setUsersStats(dummyUserStats);
        setChartData(dummyChartData);
        setUsersData(dummyUsers);
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
            {/* Total Users */}
            <div className="box-content flex items-center justify-between gap-3 rounded-lg p-4">
              <div>
                <span className="mb-2 block text-sm text-secondary">
                  Total Users
                </span>
                <h2 className="mb-2 text-lg font-bold">
                  {UsersStats.totalUsers.toLocaleString()}
                </h2>
                <span
                  className={`flex items-center text-xs ${
                    UsersStats.totalUsersGrowth >= 0
                      ? "text-primary"
                      : "text-[#F81D1D]"
                  }`}
                >
                  {UsersStats.totalUsersGrowth >= 0 ? (
                    <NorthIcon className="text-xs" />
                  ) : (
                    <SouthIcon className="text-xs" />
                  )}
                  {Math.abs(UsersStats.totalUsersGrowth)}%
                </span>
              </div>
              <div>
                <Image
                  src={icon1}
                  alt="Total Users Icon"
                  width={48}
                  height={48}
                />
              </div>
            </div>

            {/* Active Users */}
            <div className="box-content flex items-center justify-between gap-3 rounded-lg p-4">
              <div>
                <span className="mb-2 block text-sm text-secondary">
                  Active Users
                </span>
                <h2 className="text-lg font-bold">
                  {UsersStats.activeUsers.toLocaleString()}
                </h2>
                <span
                  className={`flex items-center text-xs ${
                    UsersStats.activeUsersGrowth >= 0
                      ? "text-primary"
                      : "text-[#F81D1D]"
                  }`}
                >
                  {UsersStats.activeUsersGrowth >= 0 ? (
                    <NorthIcon className="text-xs" />
                  ) : (
                    <SouthIcon className="text-xs" />
                  )}
                  {Math.abs(UsersStats.activeUsersGrowth)}%
                </span>
              </div>
              <div>
                <Image
                  src={icon2}
                  alt="Active Users Icon"
                  width={48}
                  height={48}
                />
              </div>
            </div>

            {/* Inactive Users */}
            <div className="box-content flex items-center justify-between gap-3 rounded-lg p-4">
              <div>
                <span className="mb-2 block text-sm text-secondary">
                  Inactive Users
                </span>
                <h2 className="text-lg font-bold">
                  {UsersStats.inactiveUsers.toLocaleString()}
                </h2>
                <span
                  className={`flex items-center text-xs ${
                    UsersStats.inactiveUsersGrowth >= 0
                      ? "text-primary"
                      : "text-[#F81D1D]"
                  }`}
                >
                  {UsersStats.inactiveUsersGrowth >= 0 ? (
                    <NorthIcon className="text-xs" />
                  ) : (
                    <SouthIcon className="text-xs" />
                  )}
                  {Math.abs(UsersStats.inactiveUsersGrowth)}%
                </span>
              </div>
              <div>
                <Image
                  src={icon3}
                  alt="Inactive Users Icon"
                  width={48}
                  height={48}
                />
              </div>
            </div>
          </div>
          <div className="relative mt-3 box-content">
            <ChartUserReport
              endPoint={API_GET_CHART_DATA}
              labelX="new Employers"
              category={chartData.category}
              newEmployers={chartData.newEmployers}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="box-content">
            <div className="mb-3 flex items-center justify-between gap-8 border-b pb-2">
              <Typography>Top Candidates</Typography>
              <DummyActionMenu />
            </div>
            <div>
              {usersData.map((user: UserType) => (
                <div
                  key={user.id}
                  className="mb-2 flex items-center justify-between border-b pb-2"
                >
                  <div className="flex items-center gap-2">
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      <Avatar alt={user.name} src={user.avatar} />
                    </StyledBadge>
                    <div>
                      <h2>{user.name}</h2>
                      <p className="text-xs text-secondary">{user.role}</p>
                    </div>
                  </div>
                  <span className="flex w-[150px] items-center justify-start gap-2 text-sm text-secondary">
                    <span className="w-10">
                      <LocationOnOutlined />
                    </span>
                    {user.location}
                  </span>
                  <div className="flex items-center gap-2">
                    <Rating name="read-only" value={user.rating} readOnly />
                    <span className="text-xs text-secondary">
                      ({user.reviews})
                    </span>
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
        <OverveiwUsersTable Filtring={true} />
      </div>
    </>
  );
};
export default OvarviewUsers;

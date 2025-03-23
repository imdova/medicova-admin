import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

type countryTableProps = {
  endPoint: string;
};
type RowDataCountry = {
  id: number;
  country: string;
  avatar_country: string;
  job: number;
  Employers_jobs: number;
  revenue: string;
};

// Sample data
const DummyCountryData: RowDataCountry[] = [
  {
    id: 1,
    country: "Egypt",
    avatar_country:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png",
    job: 18,
    Employers_jobs: 35,
    revenue: "75k",
  },
  {
    id: 2,
    country: "United States",
    avatar_country:
      "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    job: 25,
    Employers_jobs: 40,
    revenue: "120k",
  },
  {
    id: 3,
    country: "Germany",
    avatar_country:
      "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    job: 20,
    Employers_jobs: 30,
    revenue: "90k",
  },
  {
    id: 4,
    country: "India",
    avatar_country:
      "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    job: 15,
    Employers_jobs: 25,
    revenue: "50k",
  },
  {
    id: 5,
    country: "Canada",
    avatar_country:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
    job: 22,
    Employers_jobs: 38,
    revenue: "110k",
  },
];

const CountiresTable: React.FC<countryTableProps> = ({ endPoint }) => {
  // State variables
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [CountryData, setCountryData] =
    useState<RowDataCountry[]>(DummyCountryData);
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
        setCountryData(DummyCountryData);
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
        Loading Table data...
      </div>
    );
  }
  return (
    <TableContainer
      sx={{
        maxHeight: 250,
      }}
    >
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
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Employers</TableCell>
            <TableCell align="right">Jobs</TableCell>
            <TableCell align="right">Revenue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {CountryData.map((row) => {
            return (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell align="center">{row.id}</TableCell>
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
                    src={row.avatar_country}
                  />
                  {row.country}
                </TableCell>
                <TableCell align="center">{row.Employers_jobs} Jobs</TableCell>
                <TableCell align="center">{row.job}</TableCell>
                <TableCell align="center">{row.revenue}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CountiresTable;

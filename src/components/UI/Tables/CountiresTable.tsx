import { RowDataCountry, RowDataJobs } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";

const CountiresTable: React.FC = () => {
  // Sample data
  const rows: RowDataCountry[] = [
    {
      id: 1,
      country: "egypt",
      avatar_country:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png",
      job: 12,
      Employers_jobs: 22,
      revenue: "60k",
    },
    {
      id: 2,
      country: "egypt",
      avatar_country:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png",
      job: 12,
      Employers_jobs: 22,
      revenue: "60k",
    },
    {
      id: 3,
      country: "egypt",
      avatar_country:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png",
      job: 12,
      Employers_jobs: 22,
      revenue: "60k",
    },
    {
      id: 4,
      country: "egypt",
      avatar_country:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png",
      job: 12,
      Employers_jobs: 22,
      revenue: "60k",
    },
  ];

  return (
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
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Employers</TableCell>
            <TableCell align="right">Jobs</TableCell>
            <TableCell align="right">Revenue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
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

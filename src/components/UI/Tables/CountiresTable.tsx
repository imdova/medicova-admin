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
        "https://s3-alpha-sig.figma.com/img/7287/73b3/199c69ec2b1d8ca4cbf271947f8b9dd7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L7FvQT5wpJ--YXluadYKCltTwTJjyp37uPuMab5DVsee7krzvCqSOzxaTn3QNAYgZAmxdVEC5Zikif1Ci4hCRO6qahfL~HpUFbMNn6I5GKJJ7QJl60GQ0BGAXWl7GnhpZBMW8I98QCaXVSTzx~YRCtoQjOXjX4copUN1j1iiYIm0UKpJs~5JoZ1weFQwUEkwdF~L6mFzzFVL2SgiCZqaBELtg2DcuLc8jFjGAhF5cJhR~Zl3lA9JwBCWpEgkDIJeVhcWu0ppLxuJLvn5TGEjAgZ8MdRPVnz52RIrbpaNuCyAqtAl4QZFgfWYarUSmhX6yuJPHfCFWQrM-xujElTIgQ__",
      job: 12,
      Employers_jobs: 22,
      revenue: "60k",
    },
    {
      id: 2,
      country: "egypt",
      avatar_country:
        "https://s3-alpha-sig.figma.com/img/7287/73b3/199c69ec2b1d8ca4cbf271947f8b9dd7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L7FvQT5wpJ--YXluadYKCltTwTJjyp37uPuMab5DVsee7krzvCqSOzxaTn3QNAYgZAmxdVEC5Zikif1Ci4hCRO6qahfL~HpUFbMNn6I5GKJJ7QJl60GQ0BGAXWl7GnhpZBMW8I98QCaXVSTzx~YRCtoQjOXjX4copUN1j1iiYIm0UKpJs~5JoZ1weFQwUEkwdF~L6mFzzFVL2SgiCZqaBELtg2DcuLc8jFjGAhF5cJhR~Zl3lA9JwBCWpEgkDIJeVhcWu0ppLxuJLvn5TGEjAgZ8MdRPVnz52RIrbpaNuCyAqtAl4QZFgfWYarUSmhX6yuJPHfCFWQrM-xujElTIgQ__",
      job: 12,
      Employers_jobs: 22,
      revenue: "60k",
    },
    {
      id: 3,
      country: "egypt",
      avatar_country:
        "https://s3-alpha-sig.figma.com/img/7287/73b3/199c69ec2b1d8ca4cbf271947f8b9dd7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L7FvQT5wpJ--YXluadYKCltTwTJjyp37uPuMab5DVsee7krzvCqSOzxaTn3QNAYgZAmxdVEC5Zikif1Ci4hCRO6qahfL~HpUFbMNn6I5GKJJ7QJl60GQ0BGAXWl7GnhpZBMW8I98QCaXVSTzx~YRCtoQjOXjX4copUN1j1iiYIm0UKpJs~5JoZ1weFQwUEkwdF~L6mFzzFVL2SgiCZqaBELtg2DcuLc8jFjGAhF5cJhR~Zl3lA9JwBCWpEgkDIJeVhcWu0ppLxuJLvn5TGEjAgZ8MdRPVnz52RIrbpaNuCyAqtAl4QZFgfWYarUSmhX6yuJPHfCFWQrM-xujElTIgQ__",
      job: 12,
      Employers_jobs: 22,
      revenue: "60k",
    },
    {
      id: 4,
      country: "egypt",
      avatar_country:
        "https://s3-alpha-sig.figma.com/img/7287/73b3/199c69ec2b1d8ca4cbf271947f8b9dd7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L7FvQT5wpJ--YXluadYKCltTwTJjyp37uPuMab5DVsee7krzvCqSOzxaTn3QNAYgZAmxdVEC5Zikif1Ci4hCRO6qahfL~HpUFbMNn6I5GKJJ7QJl60GQ0BGAXWl7GnhpZBMW8I98QCaXVSTzx~YRCtoQjOXjX4copUN1j1iiYIm0UKpJs~5JoZ1weFQwUEkwdF~L6mFzzFVL2SgiCZqaBELtg2DcuLc8jFjGAhF5cJhR~Zl3lA9JwBCWpEgkDIJeVhcWu0ppLxuJLvn5TGEjAgZ8MdRPVnz52RIrbpaNuCyAqtAl4QZFgfWYarUSmhX6yuJPHfCFWQrM-xujElTIgQ__",
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

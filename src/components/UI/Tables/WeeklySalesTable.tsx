"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "John Doe",
    sale: 28,
    earnings: 250,
    image:
      "https://img.freepik.com/free-photo/student-class-looking-course_23-2148888810.jpg?t=st=1740912544~exp=1740916144~hmac=d46faa20227779ec57c6d57eabde6d5414684aa83d00babf347c456f0fb01e9b&w=1380",
  },
  {
    id: 2,
    name: "Jane Smith",
    sale: 34,
    earnings: 320,
    image:
      "https://img.freepik.com/free-photo/student-class-looking-course_23-2148888810.jpg?t=st=1740912544~exp=1740916144~hmac=d46faa20227779ec57c6d57eabde6d5414684aa83d00babf347c456f0fb01e9b&w=1380",
  },
  {
    id: 3,
    name: "Sam Wilson",
    sale: 40,
    earnings: 600,
    image:
      "https://img.freepik.com/free-photo/student-class-looking-course_23-2148888810.jpg?t=st=1740912544~exp=1740916144~hmac=d46faa20227779ec57c6d57eabde6d5414684aa83d00babf347c456f0fb01e9b&w=1380",
  },
];

const WeeklySalesTable: React.FC = () => {
  return (
    <TableContainer className="rounded-md">
      <Table>
        <TableHead>
          <TableRow className="bg-gray-100">
            <TableCell>Course</TableCell>
            <TableCell>Sale</TableCell>
            <TableCell>Earnings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-[70px]">
                    <Image
                      className="rounded-lg"
                      src={row.image}
                      width={70}
                      height={70}
                      alt=""
                    />
                  </div>
                  <div>{row.name}</div>
                </div>
              </TableCell>
              <TableCell>{row.sale}</TableCell>
              <TableCell>
                <div className="flex items-center justify-center rounded-lg bg-[#CCEABB40] p-2 text-xs font-semibold text-[#84B99E]">
                  ${row.earnings}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeeklySalesTable;

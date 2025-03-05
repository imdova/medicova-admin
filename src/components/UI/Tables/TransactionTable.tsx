import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import SearchInput from "@/components/UI/SearchInput";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TableDropMenu from "../TableDropMenu";
import { Add, Tune } from "@mui/icons-material";
import ExportBtnIcon from "../ExportBtnIcon";
import Link from "next/link";

const columns: GridColDef[] = [
  {
    field: "InvoiceNumber",
    headerName: "Invoice Number",
    sortable: true,
  },
  {
    field: "Date",
    headerName: "Date",
    sortable: true,
    flex: 1,
  },
  {
    field: "Name",
    headerName: "Name",
    width: 160,
    sortable: true,
  },
  {
    field: "FeesType",
    headerName: "Fees Type",
    sortable: true,
    flex: 1,
  },
  {
    field: "PaymentType",
    headerName: "Payment Type",
    sortable: true,
    flex: 1,
  },
  {
    field: "State",
    headerName: "State",
    sortable: true,
    flex: 1,
    renderCell: (params) =>
      (() => {
        switch (params.row.State) {
          case "Paid":
            return (
              <span className="gap-2 rounded-lg border border-[#4cbc9a79] bg-[#4CBC9A26] px-3 py-2 text-xs">
                {params.row.State}
              </span>
            );

          case "Un Paid":
            return (
              <span className="gap-2 rounded-lg border border-[#FC6B57] bg-[#FC6B5726] px-3 py-2 text-xs">
                {params.row.State}
              </span>
            );

          default:
            return (
              <span className="gap-2 rounded-lg border border-[#F8BC24] bg-[#F8BC2426] px-3 py-2 text-xs">
                {params.row.State}
              </span>
            );
        }
      })(),
  },
  {
    field: "Amount",
    headerName: "Amount",
    sortable: true,
    flex: 1,
  },
  {
    field: "Action",
    headerName: "Action",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    renderCell: () => (
      <div className="flex items-center gap-2">
        <TableDropMenu />
      </div>
    ),
  },
];

const Transactions = [
  {
    id: 1,
    InvoiceNumber: "#54620",
    Date: "1-1-2020",
    Name: "Tiger Nixon",
    FeesType: "Library",
    PaymentType: "Credit Card",
    Amount: "1220 EGP",
    State: "Paid",
  },
  {
    id: 2,
    InvoiceNumber: "#54621",
    Date: "5-3-2020",
    Name: "Garrett Winters",
    FeesType: "Tuition",
    PaymentType: "Bank Transfer",
    Amount: "8500 EGP",
    State: "Pending",
  },
  {
    id: 3,
    InvoiceNumber: "#54622",
    Date: "10-6-2021",
    Name: "Ashton Cox",
    FeesType: "Lab Fees",
    PaymentType: "Cash",
    Amount: "3200 EGP",
    State: "Paid",
  },
  {
    id: 4,
    InvoiceNumber: "#54623",
    Date: "12-8-2021",
    Name: "Cedric Kelly",
    FeesType: "Exam Fees",
    PaymentType: "Credit Card",
    Amount: "1500 EGP",
    State: "Un Paid",
  },
  {
    id: 5,
    InvoiceNumber: "#54624",
    Date: "25-11-2021",
    Name: "Airi Satou",
    FeesType: "Sports",
    PaymentType: "Debit Card",
    Amount: "800 EGP",
    State: "Paid",
  },
  {
    id: 6,
    InvoiceNumber: "#54625",
    Date: "3-3-2022",
    Name: "Brielle Williamson",
    FeesType: "Library",
    PaymentType: "Online Payment",
    Amount: "600 EGP",
    State: "Pending",
  },
  {
    id: 7,
    InvoiceNumber: "#54626",
    Date: "18-7-2022",
    Name: "Herrod Chandler",
    FeesType: "Hostel",
    PaymentType: "Bank Transfer",
    Amount: "4500 EGP",
    State: "Paid",
  },
  {
    id: 8,
    InvoiceNumber: "#54627",
    Date: "9-10-2022",
    Name: "Rhona Davidson",
    FeesType: "Medical",
    PaymentType: "Credit Card",
    Amount: "2500 EGP",
    State: "Un Paid",
  },
  {
    id: 9,
    InvoiceNumber: "#54628",
    Date: "1-1-2023",
    Name: "Colleen Hurst",
    FeesType: "Exam Fees",
    PaymentType: "Cash",
    Amount: "1700 EGP",
    State: "Paid",
  },
  {
    id: 10,
    InvoiceNumber: "#54629",
    Date: "14-2-2023",
    Name: "Sonya Frost",
    FeesType: "Tuition",
    PaymentType: "Online Payment",
    Amount: "9200 EGP",
    State: "Pending",
  },
];

const TransactionsTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filterType, setFilterType] = React.useState<"Name">("Name");

  // MUI Menu State
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (type: "Name") => {
    setFilterType(type);
    setAnchorEl(null);
  };
  // Filter data based on selection
  const filteredData = Transactions.filter((Transaction) =>
    Transaction[filterType].toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <>
      {/* start content table Employers  */}
      <div className="flex flex-col items-end justify-between gap-4 overflow-hidden px-1 py-3 md:flex-row">
        <div className="w-[500px] max-w-[400px]">
          <SearchInput SetSearchQuery={setSearchQuery} />
        </div>
        <div className="flex items-center gap-3">
          <IconButton
            onClick={handleMenuOpen}
            className="h-12 w-12 rounded-md bg-primary text-white hover:bg-primary-900"
          >
            <Tune />
          </IconButton>
          <ExportBtnIcon data={""} />
          <Link
            className="flex h-12 items-center gap-2 rounded-md bg-primary px-2 text-sm text-white hover:bg-primary-900"
            href={"/courses/admin/add-department"}
          >
            <Add />
            Add Department
          </Link>
          {/* MUI Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            {["Name", "Category", "Instructor"].map((type) => (
              <MenuItem
                key={type}
                selected={filterType === type}
                onClick={() => handleMenuClose(type as "Name")}
              >
                {type}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
      <Box sx={{ height: 400, overflowX: "auto" }}>
        <DataGrid
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            minWidth: 800,
            "& .MuiDataGrid-container--top [role=row]": {
              background: "", // Custom header background color
              color: "black", // Custom header text color
              fontSize: "16px", // Optional: Larger header font
              textAlign: "center",
            },
            "& .MuiDataGrid-cell": {
              fontSize: "12px", // Row font size
              textAlign: "center",
            },
          }}
          rows={filteredData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default TransactionsTable;

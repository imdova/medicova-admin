import ExportButton from "@/components/UI/ExportButton";
import PaginatorTemplateDemo from "@/components/UI/Tables/TreeDataCategorytable";

import { Add, FilterAltOutlined, Search } from "@mui/icons-material";
import { Box, Button, Tab, Tabs, TextField } from "@mui/material";
import { useState } from "react";

const SettingPage: React.FC = () => {
  const [value, setValue] = useState(0);
  const [SearchQuery, setSearchQuery] = useState<string>("");
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="box-content">
      <div className="mb-4 flex flex-col items-center justify-between md:flex-row">
        <Box
          sx={{
            bgcolor: "background.paper",
            width: "100%",
          }}
        >
          <Tabs
            className="mb-2 w-full text-xs md:mb-0"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
          >
            <Tab className="text-xs" label="Categories" />
            <Tab className="text-xs" label="Tags / skills" />
            <Tab className="text-xs" label="Emploument type" />
            <Tab className="text-xs" label="Work place" />
            <Tab className="text-xs" label="Specialities" />
          </Tabs>
        </Box>
        <Button
          className="flex h-10 w-full min-w-[140px] gap-3 rounded-md bg-primary p-2 md:w-fit"
          size="small"
          variant="contained"
        >
          <Add />
          <span className="text-xs">New Category</span>
        </Button>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <form className="relative hidden h-[35px] w-3/4 justify-center rounded-lg border lg:flex">
            <TextField
              id="no-border-textfield"
              className="flex w-full justify-center rounded-lg pl-12"
              variant="standard" // Use "standard" or "outlined" as needed
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchQuery(e.target.value);
              }}
              placeholder="Search here..."
              InputProps={{
                disableUnderline: true, // Remove underline for standard variant
              }}
              sx={{
                outline: "none", // No outline
                px: 1, // Optional padding
              }}
            />

            <Search className="absolute left-3 top-1/2 -translate-y-1/2 fill-secondary" />
          </form>
          <Button
            variant="outlined"
            color="secondary"
            className="flex h-10 items-center gap-2 rounded-lg"
          >
            <FilterAltOutlined />
            Filters
          </Button>
        </div>
        <ExportButton data="zzzzzz" />
      </div>
      <PaginatorTemplateDemo />
    </div>
  );
};
export default SettingPage;

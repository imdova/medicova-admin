import { TextField } from "@mui/material";
import { useState } from "react";
import { Search } from "@mui/icons-material";

const SearchInput: React.FC = () => {
  // this is quary data of search
  const [SearchQuery, setSearchQuery] = useState<string>("");
  return (
    <form className="hidden h-[35px] w-4/5 items-center justify-center rounded-lg bg-gray-100 px-4 lg:flex">
      <Search className="text-primary" />
      <TextField
        id="no-border-textfield"
        className="w-full p-2"
        variant="standard" // Use "standard" or "outlined" as needed
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value);
        }}
        placeholder="Search here..."
        InputProps={{
          disableUnderline: true, // Remove underline for standard variant
        }}
        sx={{
          border: "none", // No border
          outline: "none", // No outline
          px: 1, // Optional padding
        }}
      />
    </form>
  );
};
export default SearchInput;

import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchInput: React.FC = () => {
  // this is quary data of search
  const [SearchQuery, setSearchQuery] = useState<string>("");
  return (
    <form className="relative hidden h-[35px] w-[400px] justify-center lg:flex">
      <TextField
        id="no-border-textfield"
        className="flex w-full justify-center rounded-lg bg-gray-100 pl-12"
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

      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 fill-primary" />
    </form>
  );
};
export default SearchInput;

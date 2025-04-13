import { TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

type SearchInputProps = {
  SetSearchQuery: (query: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ SetSearchQuery }) => {
  return (
    <form className="hidden h-[35px] w-4/5 items-center justify-center rounded-lg bg-gray-100 px-4 lg:flex">
      <Search className="text-primary" />
      <TextField
        id="no-border-textfield"
        className="w-full p-2"
        variant="standard"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          SetSearchQuery(e.target.value);
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

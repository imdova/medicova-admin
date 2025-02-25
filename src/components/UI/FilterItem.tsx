import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  TextField,
  Typography,
  Box,
  InputAdornment,
  Collapse,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CheckIcon from "@mui/icons-material/Check";
import { FilterOption, FilterSectionType } from "@/types";

interface FilterItemProps {
  section: FilterSectionType;
  value: string[];
  handleCheckChange: (key: string, value: string[]) => void;
  isSearch: boolean;
  index?: number;
}

function getTotalCount(items: FilterOption[]) {
  return items.reduce((sum, item) => sum + (item.count || 0), 0);
}

const filterOptions = (options: FilterOption[], query: string) => {
  return options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase()),
  );
};

const FilterItem: React.FC<FilterItemProps> = ({
  section,
  value,
  handleCheckChange,
  isSearch,
  index,
}) => {
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(
    index ? index === 0 || index === 1 : true,
  );
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredOptions =
    isSearch && query ? filterOptions(section.options, query) : section.options;

  const isAllSelected = value.length === section.options.length;

  const handleAllChange = () => {
    const newValue = isAllSelected
      ? [] // Deselect all if "All" is checked
      : section.options.map((option) => option.value); // Select all
    handleCheckChange(section.key, newValue);
  };

  const handleCheckboxChange = (optionValue: string) => {
    const newValue = value.includes(optionValue)
      ? value.filter((val) => val !== optionValue)
      : [...value, optionValue];

    handleCheckChange(section.key, newValue);
  };

  return (
    <div className="border-b pb-4 last:border-b-0">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography
          variant="h6"
          className="mb-3 text-[14px] font-bold text-[#25324B]"
        >
          {section.title}
        </Typography>
        <IconButton onClick={toggleExpand} size="small">
          {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>

      <Collapse className="px-1" in={isExpanded}>
        <FormControl component="fieldset">
          {/* All Checkbox */}

          <div className="grid grid-cols-1 gap-1 px-1">
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAllSelected}
                  onChange={handleAllChange}
                  // indeterminate={!isNoneSelected && !isAllSelected}
                  icon={
                    <div className="h-5 w-5 rounded-sm border-2 border-[#D6DDEB]" />
                  }
                  checkedIcon={
                    <div className="flex h-5 w-5 items-center justify-center rounded-sm border-2 border-primary bg-primary">
                      <CheckIcon className="m-auto h-4 w-4 text-primary-foreground" />
                    </div>
                  }
                  sx={{ padding: 0, px: 1 }}
                />
              }
              label={`All (${getTotalCount(filteredOptions)})`}
              className="rounded-md text-[#515B6F] transition-colors hover:bg-gray-50"
            />
            {filteredOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    checked={value.includes(option.value)}
                    onChange={() => handleCheckboxChange(option.value)}
                    icon={
                      <div className="h-5 w-5 rounded-sm border-2 border-[#D6DDEB]" />
                    }
                    checkedIcon={
                      <div className="flex h-5 w-5 items-center justify-center rounded-sm border-2 border-primary bg-primary">
                        <CheckIcon className="m-auto h-4 w-4 text-primary-foreground" />
                      </div>
                    }
                    sx={{ padding: 0, px: 1 }}
                  />
                }
                label={`${option.label} (${option.count})`}
                className="rounded-md text-[#515B6F] transition-colors hover:bg-gray-50"
              />
            ))}
          </div>
        </FormControl>
        {isSearch && (
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            value={query || ""}
            onChange={searchHandler}
            sx={{
              "& .MuiInputBase-input": {
                padding: "8px 8px",
                paddingLeft: 0,
              },
            }}
            className="my-1 py-0"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="text-gray-400" />
                </InputAdornment>
              ),
            }}
          />
        )}
      </Collapse>
    </div>
  );
};

export default FilterItem;

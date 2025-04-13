import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import MoreVertButton from "@/components/UI/MoreVertButton";

type Industry = {
  id: number;
  name: string;
  categories: string[];
};

const IndustriesSidebar: React.FC<{
  onSelect: (industry: string) => void;
  setIndustries: React.Dispatch<React.SetStateAction<Industry[]>>;
  selected: string;
  industriesData: Industry[];
  allCategoriesData: { [key: string]: string[] }; //  Fixed type
  setAllCategories: React.Dispatch<
    React.SetStateAction<{ [key: string]: string[] }>
  >; //  Fixed type
}> = ({
  onSelect,
  selected,
  industriesData,
  setIndustries,
  allCategoriesData,
  setAllCategories,
}) => {
  const [newIndustry, setNewIndustry] = useState("");

  const handleAddIndustry = () => {
    if (
      newIndustry.trim() &&
      !industriesData.some((ind) => ind.name === newIndustry)
    ) {
      const newIndustryData: Industry = {
        id: industriesData.length + 1,
        name: newIndustry,
        categories: [], //  Initialize with an empty array
      };

      setIndustries((prev) => [...prev, newIndustryData]);

      //  Initialize categories for the new industry correctly
      setAllCategories((prevCategories) => ({
        ...prevCategories,
        [newIndustry]: [], //  New industry gets an empty category array
      }));

      setNewIndustry(""); // Reset input
    }
  };

  //  Delete Industry
  const handleDeleteIndustry = (industryToDelete: string) => {
    const updatedIndustries = industriesData.filter(
      (industry) => industry.name !== industryToDelete,
    );
    setIndustries(updatedIndustries);

    // Remove associated categories
    setAllCategories((prev) => {
      const newCategories = { ...prev };
      delete newCategories[industryToDelete];
      return newCategories;
    });
  };

  return (
    <div className="box-content lg:w-[300px]">
      <h3 className="mb-3 text-sm font-semibold md:text-lg">Industries</h3>
      <div className="mb-3 flex gap-2">
        <TextField
          size="small"
          value={newIndustry}
          onChange={(e) => setNewIndustry(e.target.value)}
          placeholder="New Industry"
          variant="outlined"
          fullWidth
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // Prevents form submission (if applicable)
              handleAddIndustry();
            }
          }}
        />
        <IconButton
          className="rounded-lg bg-primary text-white hover:bg-black"
          onClick={handleAddIndustry}
        >
          <Add />
        </IconButton>
      </div>

      <List>
        {industriesData.map((industry) => (
          <ListItemButton
            className="mb-2 rounded-md"
            key={industry.id}
            selected={selected === industry.name}
            onClick={() => onSelect(industry.name)}
            sx={{
              backgroundColor:
                selected === industry.name
                  ? "#2ba149 !important"
                  : "transparent",
              color: selected === industry.name ? "white" : "inherit",
              "&:hover": {
                backgroundColor:
                  selected === industry.name ? "#258c3c" : "#f0f0f0",
              },
              button: {
                color: selected === industry.name ? "white" : "inherit",
              },
            }}
          >
            <ListItemText primary={industry.name} />
            <MoreVertButton
              handleDelete={() => handleDeleteIndustry(industry.name)}
            />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default IndustriesSidebar;

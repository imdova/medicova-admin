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

const industriesList = ["Healthcare", "Pharmaceutical", "Education"];

const IndustriesSidebar: React.FC<{
  onSelect: (industry: string) => void;
  selected: string;
}> = ({ onSelect, selected }) => {
  const [industries, setIndustries] = useState(industriesList);
  const [newIndustry, setNewIndustry] = useState("");

  const handleAddIndustry = () => {
    if (newIndustry.trim()) {
      setIndustries([...industries, newIndustry]);
      setNewIndustry("");
    }
  };
  const handleDeleteIndustry = (industryToDelete: string) => {
    setIndustries((prevIndustries) =>
      prevIndustries.filter((industry) => industry !== industryToDelete),
    );
  };

  return (
    <div className="box-content w-full md:w-[300px]">
      <h3 className="mb-3 text-sm font-semibold md:text-lg">Industries</h3>
      <div className="mb-3 flex gap-2">
        <TextField
          size="small"
          value={newIndustry}
          onChange={(e) => setNewIndustry(e.target.value)}
          placeholder="New Industries"
          variant="outlined"
          fullWidth
        />
        <IconButton
          className="rounded-lg bg-primary text-white hover:bg-black"
          onClick={handleAddIndustry}
        >
          <Add />
        </IconButton>
      </div>

      <List>
        {industries.map((industry) => (
          <ListItemButton
            className="mb-2 rounded-md"
            key={industry}
            selected={selected === industry}
            onClick={() => onSelect(industry)}
            sx={{
              backgroundColor:
                selected === industry ? "#2ba149 !important" : "transparent",
              color: selected === industry ? "white" : "inherit",
              "&:hover": {
                backgroundColor: selected === industry ? "#258c3c" : "#f0f0f0",
              },
              button: {
                color: selected === industry ? "white" : "inherit",
              },
            }}
          >
            <ListItemText primary={industry} />
            <MoreVertButton
              handleDelete={() => handleDeleteIndustry(industry)}
            />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default IndustriesSidebar;

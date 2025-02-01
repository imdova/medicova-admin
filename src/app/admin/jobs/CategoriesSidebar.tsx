import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  TextField,
} from "@mui/material";
import { MoreVert, Add } from "@mui/icons-material";
import MoreVertButton from "@/components/UI/MoreVertButton";

const initialCategories = [
  "Doctors",
  "Dentists",
  "Physiotherapists",
  "Pharmacists",
  "Nurses",
  "Allied Health Professionals",
  "Research & development",
  "Pharmaceutical sales and Marketing",
  "Quality Management",
];

const CategoriesSidebar: React.FC<{
  onSelect: (category: string) => void;
  selected: string;
}> = ({ onSelect, selected }) => {
  const [categories, setCategories] = useState(initialCategories);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  return (
    <div className="box-content h-full">
      <h3 className="mb-3 text-sm font-semibold md:text-lg">Categories</h3>
      <div className="mb-3 flex gap-2">
        <TextField
          size="small"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New Categories"
          variant="outlined"
          fullWidth
        />
        <IconButton
          className="rounded-lg bg-primary text-white hover:bg-black"
          onClick={handleAddCategory}
        >
          <Add />
        </IconButton>
      </div>

      <List>
        {categories.map((category) => (
          <ListItemButton
            className="mb-3 rounded-md"
            key={category}
            selected={selected === category}
            onClick={() => onSelect(category)}
            sx={{
              backgroundColor:
                selected === category ? "#2ba149 !important" : "transparent",
              color: selected === category ? "white" : "inherit",
              "&:hover": {
                backgroundColor: selected === category ? "#258c3c" : "#f0f0f0",
              },
              button: {
                color: selected === category ? "white" : "inherit",
              },
            }}
          >
            <ListItemText primary={category} />
            <MoreVertButton handleDelete={() => console.log("")} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default CategoriesSidebar;

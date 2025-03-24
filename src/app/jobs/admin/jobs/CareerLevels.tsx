import React, { useState, useEffect } from "react";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import MoreVertButton from "@/components/UI/MoreVertButton";

type CategoryData = {
  name: string;
  careerLevels: string[];
};

const CareerLevels: React.FC<{
  category: string;
  categoriesData: CategoryData[];
  checkedItems: { [key: string]: string[] };
  onCheck: (category: string, level: string) => void;
}> = ({ category, categoriesData, checkedItems, onCheck }) => {
  const categoryData = categoriesData.find((cat) => cat.name === category);
  const [newLevel, setNewLevel] = useState("");

  // Handle add career level
  const handleAddLevel = () => {
    if (newLevel.trim() && categoryData) {
      categoryData.careerLevels.push(newLevel); // Directly update categoriesData
      setNewLevel(""); // Clear input
    }
  };

  // Handle delete career level
  const handleDeleteLevel = (levelToDelete: string) => {
    if (categoryData) {
      categoryData.careerLevels = categoryData.careerLevels.filter(
        (level) => level !== levelToDelete,
      );
    }
  };

  return (
    <div className="box-content h-full">
      <h3 className="mb-3 text-sm font-semibold md:text-lg">
        Manage Career Levels for {category}
      </h3>
      <div className="flex gap-2">
        <TextField
          size="small"
          value={newLevel}
          onChange={(e) => setNewLevel(e.target.value)}
          placeholder="New Career Level"
          variant="outlined"
          fullWidth
        />
        <IconButton
          className="rounded-lg bg-primary text-white hover:bg-black"
          onClick={handleAddLevel}
        >
          <Add />
        </IconButton>
      </div>

      <List>
        {categoryData?.careerLevels.map((level) => (
          <ListItem
            className="mb-2 p-0"
            key={level}
            secondaryAction={
              <MoreVertButton handleDelete={() => handleDeleteLevel(level)} />
            }
          >
            <ListItemIcon>
              <Checkbox
                checked={checkedItems[category]?.includes(level) || false}
                onChange={() => onCheck(category, level)}
              />
            </ListItemIcon>
            <ListItemText primary={level} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CareerLevels;

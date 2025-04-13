import React, { useState } from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";
import MoreVertButton from "@/components/UI/MoreVertButton";

type Category = {
  id: number;
  name: string;
};

const CategoriesSidebar: React.FC<{
  categoriesData: Category[];
  selected: string;
  onSelect: (category: string) => void;
  onDeleteCategory: (id: number) => void; // Prop to delete category
}> = ({ categoriesData, selected, onSelect, onDeleteCategory }) => {
  return (
    <div className="h-full border-r p-4">
      {/* Category List */}
      <List>
        {categoriesData.map((category) => (
          <ListItemButton
            key={category.id}
            className="mb-2 rounded-md"
            selected={selected === category.name}
            onClick={() => onSelect(category.name)}
            sx={{
              backgroundColor:
                selected === category.name
                  ? "#2ba149 !important"
                  : "transparent",
              color: selected === category.name ? "white" : "inherit",
              "&:hover": {
                backgroundColor:
                  selected === category.name ? "#258c3c" : "#f0f0f0",
              },
            }}
          >
            <ListItemText primary={category.name} />
            <MoreVertButton
              handleDelete={() => onDeleteCategory(category.id)}
            />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default CategoriesSidebar;

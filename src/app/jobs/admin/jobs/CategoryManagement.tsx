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

type Industry = {
  id: number;
  name: string;
  categories: string[];
};

const CategoryManagement: React.FC<{
  industry: string;
  industriesData: Industry[];
  setIndustries: React.Dispatch<React.SetStateAction<Industry[]>>; // Accept setIndustries
  checkedCategories: { [key: string]: string[] };
  setCheckedCategories: React.Dispatch<
    React.SetStateAction<{ [key: string]: string[] }>
  >;
  setAllCategories: React.Dispatch<
    React.SetStateAction<{ [key: string]: string[] }>
  >;
}> = ({
  industry,
  industriesData,
  setIndustries, // Now we have setIndustries
  checkedCategories,
  setCheckedCategories,
  setAllCategories,
}) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState("");

  // Load categories based on selected industry
  useEffect(() => {
    const industryData = industriesData.find((ind) => ind.name === industry);
    const loadedCategories = industryData ? industryData.categories : [];
    setCategories(loadedCategories);

    setAllCategories((prevCategories) => ({
      ...prevCategories,
      [industry]: loadedCategories,
    }));

    // Load checked categories from localStorage
    const savedChecked = localStorage.getItem("checkedCategories");
    if (savedChecked) {
      setCheckedCategories(JSON.parse(savedChecked));
    }
  }, [industry, industriesData, setCheckedCategories, setAllCategories]);

  // Save checked categories to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      "checkedCategories",
      JSON.stringify(checkedCategories),
    );
  }, [checkedCategories]);

  const handleToggle = (category: string) => {
    setCheckedCategories((prev) => {
      const updatedChecked = prev[industry] ? [...prev[industry]] : [];
      if (updatedChecked.includes(category)) {
        return {
          ...prev,
          [industry]: updatedChecked.filter((c) => c !== category),
        };
      } else {
        return { ...prev, [industry]: [...updatedChecked, category] };
      }
    });
  };
  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      const updatedCategories = [...categories, newCategory];

      // Update the local state for categories
      setCategories(updatedCategories);

      // Update the industriesData with the new category
      setIndustries((prevIndustries) =>
        prevIndustries.map((ind) =>
          ind.name === industry
            ? { ...ind, categories: updatedCategories }
            : ind,
        ),
      );

      // Also update setAllCategories if needed
      setAllCategories((prevCategories) => ({
        ...prevCategories,
        [industry]: updatedCategories,
      }));

      setNewCategory(""); // Reset input
    }
  };

  const handleDeleteCategory = (categoryToDelete: string) => {
    const updatedCategories = categories.filter(
      (category) => category !== categoryToDelete,
    );
    setCategories(updatedCategories);

    setAllCategories((prevCategories) => ({
      ...prevCategories,
      [industry]: updatedCategories, // Only update the selected industry's categories
    }));

    // Also remove from checked categories
    setCheckedCategories((prev) => {
      const updatedChecked = prev[industry]
        ? prev[industry].filter((c) => c !== categoryToDelete)
        : [];
      return { ...prev, [industry]: updatedChecked };
    });
  };

  return (
    <div className="box-content flex-1">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <h3 className="mb-3 w-full text-sm font-semibold md:text-lg">
          Manage Categories for {industry}
        </h3>

        <div className="flex w-full gap-2">
          <TextField
            size="small"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New Category"
            variant="outlined"
            fullWidth
            className="w-full md:min-w-[200px]"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddCategory();
              }
            }}
          />
          <IconButton
            className="rounded-lg bg-primary text-white hover:bg-black"
            onClick={handleAddCategory}
          >
            <Add />
          </IconButton>
        </div>
      </div>

      <List>
        {categories.map((category) => (
          <ListItem
            key={category}
            secondaryAction={
              <MoreVertButton
                handleDelete={() => handleDeleteCategory(category)}
              />
            }
          >
            <ListItemIcon>
              <Checkbox
                checked={
                  checkedCategories[industry]?.includes(category) || false
                }
                onChange={() => handleToggle(category)}
              />
            </ListItemIcon>
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CategoryManagement;

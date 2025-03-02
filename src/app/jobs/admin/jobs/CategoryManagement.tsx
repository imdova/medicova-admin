import React, { useState } from "react";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { MoreVert, Add } from "@mui/icons-material";
import MoreVertButton from "@/components/UI/MoreVertButton";

const initialCategories = [
  "Doctors",
  "Physiotherapists",
  "Pharmacists",
  "Nurses",
  "Administrator",
  "Allied Health Professionals",
  "Research & development",
  "Pharmaceutical sales and Marketing",
  "Quality Management",
  "Dentists",
];

const CategoryManagement: React.FC<{ industry: string }> = ({ industry }) => {
  const [categories, setCategories] = useState(initialCategories);
  const [newCategory, setNewCategory] = useState("");
  const [checked, setChecked] = useState<string[]>([]);

  const handleToggle = (category: string) => {
    setChecked((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };
  const handleDeleteCategory = (CategoryToDelete: string) => {
    setCategories((prevIndustries) =>
      prevIndustries.filter((Category) => Category !== CategoryToDelete),
    );
  };

  return (
    <div className="box-content flex-1">
      <div className="flex items-center justify-between">
        <h3 className="mb-3 text-sm font-semibold md:text-lg">
          Manage Categories for {industry}
        </h3>

        <div className="flex gap-2">
          <TextField
            size="small"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New Category"
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
                checked={checked.includes(category)}
                onChange={() => handleToggle(category)}
              />
            </ListItemIcon>
            <ListItemText primary={category} secondary="(Doctors)" />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CategoryManagement;

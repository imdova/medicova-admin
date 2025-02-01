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
import { Add } from "@mui/icons-material";
import MoreVertButton from "@/components/UI/MoreVertButton";

const initialCareerLevels = [
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

const CareerLevels: React.FC<{ category: string }> = ({ category }) => {
  const [careerLevels, setCareerLevels] = useState(initialCareerLevels);
  const [newLevel, setNewLevel] = useState("");
  const [checked, setChecked] = useState<string[]>([]);

  // handlle checked career level
  const handleToggle = (level: string) => {
    setChecked((prev) =>
      prev.includes(level) ? prev.filter((c) => c !== level) : [...prev, level],
    );
  };
  // handlle add career level
  const handleAddLevel = () => {
    if (newLevel.trim()) {
      setCareerLevels([...careerLevels, newLevel]);
      setNewLevel("");
    }
  };
  // handlle delete career level
  const handleDeleteLevel = (LevelToDelete: string) => {
    setCareerLevels((prevLevels) =>
      prevLevels.filter((Level) => Level !== LevelToDelete),
    );
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
        {careerLevels.map((level) => (
          <ListItem
            className="mb-2 p-0"
            key={level}
            secondaryAction={
              <MoreVertButton handleDelete={() => handleDeleteLevel(level)} />
            }
          >
            <ListItemIcon>
              <Checkbox
                checked={checked.includes(level)}
                onChange={() => handleToggle(level)}
              />
            </ListItemIcon>
            <ListItemText primary={level} secondary="(Doctors)" />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CareerLevels;

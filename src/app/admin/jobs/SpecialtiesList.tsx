import React, { useState } from "react";
import {
  Checkbox,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  IconButton,
} from "@mui/material";
import { ExpandLess, ExpandMore, Add } from "@mui/icons-material";

interface Specialty {
  name: string;
  subSpecialties: string[];
}

const specialties: Specialty[] = [
  {
    name: "Doctors",
    subSpecialties: [
      "Anesthesiology",
      "Cardiology",
      "Colon and Rectal Surgery",
      "Dermatology",
    ],
  },
  { name: "Dentists", subSpecialties: [] },
  { name: "Physiotherapists", subSpecialties: [] },
  { name: "General", subSpecialties: [] },
];

const SpecialtiesList: React.FC<{ category: string }> = ({ category }) => {
  const [openSpecialties, setOpenSpecialties] = useState<
    Record<string, boolean>
  >({});
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [newSpecialty, setNewSpecialty] = useState("");

  const handleToggle = (specialty: string) => {
    setOpenSpecialties((prev) => ({ ...prev, [specialty]: !prev[specialty] }));
  };

  const handleCheck = (specialty: string, subSpecialty?: string) => {
    setCheckedItems((prev) => {
      const newState = { ...prev };

      if (subSpecialty) {
        newState[subSpecialty] = !newState[subSpecialty];
      } else {
        newState[specialty] = !newState[specialty];
        if (
          (specialties.find((s) => s.name === specialty)?.subSpecialties
            .length ?? 0) > 0
        ) {
          specialties
            .find((s) => s.name === specialty)
            ?.subSpecialties.forEach(
              (sub) => (newState[sub] = newState[specialty]),
            );
        }
      }

      return newState;
    });
  };

  const handleAddSpecialty = () => {
    if (newSpecialty.trim()) {
      specialties.push({ name: newSpecialty, subSpecialties: [] });
      setNewSpecialty("");
    }
  };

  return (
    <div className="box-content h-full">
      <h2 className="mb-3 text-sm font-semibold md:text-lg">
        Manage Specialties for {category}
      </h2>
      <div className="flex gap-2">
        <TextField
          size="small"
          value={newSpecialty}
          onChange={(e) => setNewSpecialty(e.target.value)}
          placeholder="New Specialty"
          variant="outlined"
          fullWidth
        />
        <IconButton
          className="rounded-lg bg-primary text-white hover:bg-black"
          onClick={handleAddSpecialty}
        >
          <Add />
        </IconButton>
      </div>

      <List>
        {specialties.map((specialty) => (
          <React.Fragment key={specialty.name}>
            <ListItemButton
              className="mb-2 box-content"
              onClick={() => handleToggle(specialty.name)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checkedItems[specialty.name] || false}
                  onChange={() => handleCheck(specialty.name)}
                />
              </ListItemIcon>
              <ListItemText primary={specialty.name} />
              {specialty.subSpecialties.length > 0 &&
                (openSpecialties[specialty.name] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                ))}
            </ListItemButton>
            <Collapse
              in={openSpecialties[specialty.name]}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {specialty.subSpecialties.map((sub) => (
                  <ListItemButton key={sub} sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <Checkbox
                        checked={checkedItems[sub] || false}
                        onChange={() => handleCheck(specialty.name, sub)}
                      />
                    </ListItemIcon>
                    <ListItemText primary={sub} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default SpecialtiesList;

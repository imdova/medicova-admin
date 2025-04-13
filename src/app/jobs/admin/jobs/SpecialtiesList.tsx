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

type Specialty = {
  name: string;
  subSpecialties: string[];
};

type CategoryData = {
  name: string;
  careerLevels: string[];
  specialties: Specialty[];
};

const SpecialtiesList: React.FC<{
  category: string;
  categoriesData: CategoryData[];
  checkedItems: { [key: string]: Specialty[] };
  onCheck: (
    category: string,
    specialty: Specialty,
    isSubSpecialty?: boolean,
  ) => void;
}> = ({ category, categoriesData, checkedItems, onCheck }) => {
  const [openSpecialties, setOpenSpecialties] = useState<
    Record<string, boolean>
  >({});
  const [newSpecialty, setNewSpecialty] = useState("");

  const categoryData = categoriesData.find((cat) => cat.name === category);
  const specialties = categoryData ? categoryData.specialties : [];

  const handleToggle = (specialty: string) => {
    setOpenSpecialties((prev) => ({ ...prev, [specialty]: !prev[specialty] }));
  };

  return (
    <div className="box-content h-full p-4">
      <h2 className="mb-3 text-sm font-semibold md:text-lg">
        Manage Specialties for {category}
      </h2>
      <div className="mb-3 flex gap-2">
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
          onClick={() => {
            if (newSpecialty.trim()) {
              onCheck(category, { name: newSpecialty, subSpecialties: [] });
              setNewSpecialty(""); // Clear input after adding
            }
          }}
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
                  checked={
                    checkedItems[category]?.some(
                      (s) => s.name === specialty.name,
                    ) || false
                  }
                  onChange={() => onCheck(category, specialty)}
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
                        checked={
                          checkedItems[category]?.some((s) =>
                            s.subSpecialties.includes(sub),
                          ) || false
                        }
                        onChange={() =>
                          onCheck(
                            category,
                            { name: sub, subSpecialties: [] },
                            true,
                          )
                        }
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

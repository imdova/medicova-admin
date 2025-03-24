import React, { useEffect, useState } from "react";
import CategoriesSidebar from "./CategoriesSidebar";
import SpecialtiesList from "./SpecialtiesList";
import CareerLevels from "./CareerLevels";
import { TextField, IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";

export type Specialty = {
  name: string;
  subSpecialties: string[];
};

export type Category = {
  id: number;
  name: string;
  specialties: Specialty[];
  careerLevels: string[];
};

export const initialCategories: Category[] = [
  {
    id: 1,
    name: "Doctors",
    specialties: [
      { name: "Cardiologist", subSpecialties: ["Cardio", "Card"] },
      { name: "Dermatologist", subSpecialties: [] },
      { name: "Neurologist", subSpecialties: [] },
    ],
    careerLevels: ["Junior Doctor", "Consultant", "Senior Specialist"],
  },
  {
    id: 2,
    name: "Engineering",
    specialties: [
      { name: "Mechanical Engineer", subSpecialties: [] },
      { name: "Software Engineer", subSpecialties: [] },
      { name: "Civil Engineer", subSpecialties: [] },
    ],
    careerLevels: ["Intern", "Associate", "Senior Engineer"],
  },
  {
    id: 3,
    name: "Finance",
    specialties: [
      { name: "Investment Banker", subSpecialties: [] },
      { name: "Financial Analyst", subSpecialties: [] },
      { name: "Accountant", subSpecialties: [] },
    ],
    careerLevels: ["Entry-Level", "Mid-Level", "Senior Executive"],
  },
  {
    id: 4,
    name: "Education",
    specialties: [
      { name: "Professor", subSpecialties: [] },
      { name: "High School Teacher", subSpecialties: [] },
      { name: "Tutor", subSpecialties: [] },
    ],
    careerLevels: ["Assistant", "Associate", "Professor"],
  },
];

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategories[0].name,
  );
  const [categoryData, setCategoryData] =
    useState<Category[]>(initialCategories);
  const [newCategoryName, setNewCategoryName] = useState("");

  const [checkedSpecialties, setCheckedSpecialties] = useState<{
    [key: string]: Specialty[];
  }>({});
  const [checkedCareerLevels, setCheckedCareerLevels] = useState<{
    [key: string]: string[];
  }>({});
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    setCheckedItems({
      checkedSpecialties,
      checkedCareerLevels,
    });
  }, [checkedCareerLevels, checkedSpecialties]);

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      const newCategory: Category = {
        id: categoryData.length + 1,
        name: newCategoryName,
        specialties: [],
        careerLevels: [],
      };

      setCategoryData([...categoryData, newCategory]);
      setSelectedCategory(newCategory.name);
      setNewCategoryName("");
    }
  };

  const handleSpecialtyCheck = (
    category: string,
    specialty: Specialty,
    isSubSpecialty = false,
  ) => {
    setCategoryData((prev) =>
      prev.map((cat) => {
        if (cat.name === category) {
          return {
            ...cat,
            specialties: cat.specialties.map((s) =>
              s.name === specialty.name
                ? {
                    ...s,
                    subSpecialties: isSubSpecialty
                      ? s.subSpecialties.includes(specialty.name)
                        ? s.subSpecialties.filter(
                            (sub) => sub !== specialty.name,
                          ) // Remove sub-specialty
                        : [...s.subSpecialties, specialty.name] // Add sub-specialty
                      : s.subSpecialties,
                  }
                : s,
            ),
          };
        }
        return cat;
      }),
    );

    // Remove from checkedItems state if unchecking
    setCheckedSpecialties((prev) => {
      const existingChecked = prev[category] || [];

      // If specialty exists, remove it
      if (existingChecked.some((s) => s.name === specialty.name)) {
        return {
          ...prev,
          [category]: existingChecked.filter((s) => s.name !== specialty.name),
        };
      }

      // Otherwise, add it
      return { ...prev, [category]: [...existingChecked, specialty] };
    });
  };

  // Function to delete category
  const handleDeleteCategory = (id: number) => {
    setCategoryData((prev) => prev.filter((category) => category.id !== id));
  };
  const handleCareerLevelCheck = (category: string, level: string) => {
    setCheckedCareerLevels((prev) => {
      const categoryLevels = prev[category] || [];
      return {
        ...prev,
        [category]: categoryLevels.includes(level)
          ? categoryLevels.filter((l) => l !== level)
          : [...categoryLevels, level],
      };
    });
  };
  console.log(categoryData);
  console.log(checkedItems);
  return (
    <div className="flex flex-col gap-2 xl:flex-row">
      <div className="box-content flex-1">
        <h3 className="mb-3 text-sm font-semibold md:text-lg">Categories</h3>
        <div className="mb-4 flex gap-2">
          <TextField
            size="small"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
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
        <CategoriesSidebar
          categoriesData={categoryData}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          onDeleteCategory={handleDeleteCategory}
        />
      </div>
      <div className="flex-1">
        <SpecialtiesList
          category={selectedCategory}
          categoriesData={categoryData}
          checkedItems={checkedSpecialties}
          onCheck={handleSpecialtyCheck}
        />
      </div>
      <div className="flex-1">
        <CareerLevels
          category={selectedCategory}
          categoriesData={categoryData}
          checkedItems={checkedCareerLevels}
          onCheck={handleCareerLevelCheck}
        />
      </div>
    </div>
  );
};

export default Categories;

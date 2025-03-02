import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import CareerLevels from "./CareerLevels";
import SpecialtiesList from "./SpecialtiesList";
import CategoriesSidebar from "./CategoriesSidebar";

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Doctors");

  return (
    <div className="flex flex-col gap-2 xl:flex-row">
      <div className="flex-1">
        <CategoriesSidebar
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>
      <div className="flex-1">
        <SpecialtiesList category={selectedCategory} />
      </div>
      <div className="flex-1">
        <CareerLevels category={selectedCategory} />
      </div>
    </div>
  );
};

export default Categories;

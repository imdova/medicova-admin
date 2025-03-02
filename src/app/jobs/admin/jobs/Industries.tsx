import React, { useState } from "react";

import { Container, Grid } from "@mui/material";
import IndustriesSidebar from "./IndustriesSidebar";
import CategoryManagement from "./CategoryManagement";

const Industries: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Healthcare");

  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      <IndustriesSidebar
        selected={selectedIndustry}
        onSelect={setSelectedIndustry}
      />
      <CategoryManagement industry={selectedIndustry} />
    </div>
  );
};

export default Industries;

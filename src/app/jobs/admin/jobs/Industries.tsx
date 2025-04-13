import React, { useEffect, useState } from "react";
import IndustriesSidebar from "./IndustriesSidebar";
import CategoryManagement from "./CategoryManagement";

type Industry = {
  id: number;
  name: string;
  categories: string[];
};

const industries: Industry[] = [
  {
    id: 1,
    name: "Healthcare",
    categories: ["Pharmaceuticals", "Medical Devices", "Health Tech"],
  },
  {
    id: 2,
    name: "Finance",
    categories: ["Banking", "Insurance", "Wealth Management"],
  },
  {
    id: 3,
    name: "Technology",
    categories: [
      "Software Development",
      "Cybersecurity",
      "AI & Machine Learning",
    ],
  },
  {
    id: 4,
    name: "Education",
    categories: ["E-Learning", "Higher Education", "EdTech"],
  },
  {
    id: 5,
    name: "Retail",
    categories: ["E-commerce", "Brick & Mortar", "Supply Chain"],
  },
];

const Industries: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Healthcare");
  const [checkedCategories, setCheckedCategories] = useState<{
    [key: string]: string[];
  }>({});

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [industriesData, setIndustriesData] = useState<Industry[]>(industries);
  const [allCategoriesData, setAllCategoriesData] = useState<{
    [key: string]: string[];
  }>(() => {
    // Initialize with industry categories mapped correctly
    const initialCategories: { [key: string]: string[] } = {};
    industries.forEach((ind) => {
      initialCategories[ind.name] = ind.categories;
    });
    return initialCategories;
  });
  console.log(checkedCategories);
  // Fetch data on component mount (simulate API call)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIndustriesData(industries);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching overview data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        Loading data...
      </div>
    );
  }
  console.log(industriesData);
  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      <IndustriesSidebar
        industriesData={industriesData}
        selected={selectedIndustry}
        onSelect={setSelectedIndustry}
        setIndustries={setIndustriesData}
        allCategoriesData={allCategoriesData}
        setAllCategories={setAllCategoriesData}
      />
      <CategoryManagement
        industry={selectedIndustry}
        industriesData={industriesData}
        setIndustries={setIndustriesData}
        checkedCategories={checkedCategories}
        setCheckedCategories={setCheckedCategories}
        setAllCategories={setAllCategoriesData}
      />
    </div>
  );
};

export default Industries;

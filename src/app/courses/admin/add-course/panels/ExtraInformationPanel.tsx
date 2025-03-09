"use client";
import { useState, useCallback } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@mui/material";

type Section = "requirements" | "targetAudience" | "keyFeatures" | "faqs";

export default function ExtraInformationPanel() {
  const [formData, setFormData] = useState({
    requirements: [""],
    targetAudience: [""],
    keyFeatures: [""],
    faqs: [""],
  });

  const handleAddField = useCallback((section: Section) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], ""],
    }));
  }, []);

  const handleRemoveField = useCallback((section: Section, index: number) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  }, []);

  const handleChange = useCallback(
    (section: Section, index: number, value: string) => {
      setFormData((prev) => {
        const updatedSection = [...prev[section]];
        updatedSection[index] = value;
        return { ...prev, [section]: updatedSection };
      });
    },
    [],
  );

  const renderSection = (title: string, section: Section) => (
    <div className="mb-6 w-full flex-1">
      <h3 className="mb-2 font-bold">{title}</h3>
      {formData[section].map((value, index) => (
        <div
          key={index}
          className="mt-2 flex items-center gap-2 rounded-lg border p-4"
        >
          <MenuIcon className="text-gray-500" />
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(section, index, e.target.value)}
            className="flex-1 border-none bg-transparent outline-none"
            placeholder="Enter text..."
          />
          <IconButton
            onClick={() => handleRemoveField(section, index)}
            aria-label="Remove field"
          >
            <CloseIcon className="text-secondary transition hover:text-red-500" />
          </IconButton>
        </div>
      ))}
      <Button
        onClick={() => handleAddField(section)}
        variant="outlined"
        color="primary"
        className="mt-4"
      >
        + Add More
      </Button>
    </div>
  );

  return (
    <>
      <div className="flex w-full flex-col">
        {renderSection("Requirements", "requirements")}
        {renderSection("Target Audience", "targetAudience")}
        {renderSection("Key Features", "keyFeatures")}
        {renderSection("FAQs", "faqs")}
      </div>
      <Button variant="contained" color="primary">
        Save
      </Button>
    </>
  );
}

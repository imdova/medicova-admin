"use client";
import { useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@mui/material";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

type Section = "requirements" | "targetAudience" | "keyFeatures" | "faqs";

interface PanelProps {
  formData: Record<Section, string[]>;
  onChange: (field: Section, value: string[]) => void;
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  errors: FieldErrors<FormData>;
}

export default function ExtraInformationPanel({
  formData,
  onChange,
  register,
  setValue,
  errors,
}: PanelProps) {
  // Prevent adding empty fields
  const handleAddField = useCallback(
    (section: Section) => {
      if (formData[section].some((item) => item.trim() === "")) return;
      const updatedSection = [...formData[section], ""];
      onChange(section, updatedSection);
    },
    [formData, onChange],
  );

  // Remove a field
  const handleRemoveField = useCallback(
    (section: Section, index: number) => {
      const updatedSection = formData[section].filter((_, i) => i !== index);
      onChange(section, updatedSection);
    },
    [formData, onChange],
  );

  // Handle text change
  const handleChange = useCallback(
    (section: Section, index: number, value: string) => {
      const updatedSection = [...formData[section]];
      updatedSection[index] = value;
      onChange(section, updatedSection);
    },
    [formData, onChange],
  );

  // Drag and Drop handler
  const handleDragEnd = useCallback(
    (result: any, section: Section) => {
      if (!result.destination) return;
      const items = [...formData[section]];
      const [movedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, movedItem);
      onChange(section, items);
    },
    [formData, onChange],
  );

  // Render each section
  const renderSection = (title: string, section: Section) => (
    <div key={section} className="mb-6 w-full flex-1">
      <h3 className="mb-2 font-bold">{title}</h3>
      <DragDropContext onDragEnd={(result) => handleDragEnd(result, section)}>
        <Droppable droppableId={section}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {formData[section].map((value, index) => (
                <Draggable
                  key={index}
                  draggableId={`${section}-${index}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="mt-2 flex items-center gap-2 rounded-lg border p-4"
                    >
                      <MenuIcon className="text-gray-500" />
                      <input
                        type="text"
                        value={value}
                        onChange={(e) =>
                          handleChange(section, index, e.target.value)
                        }
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
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
    <div className="flex w-full flex-col">
      {renderSection("Requirements", "requirements")}
      {renderSection("Target Audience", "targetAudience")}
      {renderSection("Key Features", "keyFeatures")}
      {renderSection("FAQs", "faqs")}
    </div>
  );
}

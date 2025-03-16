"use client";
import { useState } from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Typography,
  Radio,
  RadioGroup,
} from "@mui/material";

interface FormData {
  finishButton: boolean;
  evaluation: string;
  passingGrade: number;
}
interface panelProps {
  formData: {
    finishButton: boolean;
    evaluation: string;
    passingGrade: number;
  };
  onChange: (field: string, value: any) => void;
}
export default function AssessmentPanel({ formData, onChange }: panelProps) {
  const handleChange = (field: string, value: any) => {
    onChange(field, value);
  };

  return (
    <div>
      {/* Evaluation Section */}
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Evaluation</Typography>
        <RadioGroup
          value={formData.evaluation}
          onChange={(e) => handleChange("evaluation", e.target.value)}
        >
          {[
            { value: "lessons", label: "Evaluate via lessons." },
            {
              value: "results",
              label: "Evaluate via results of the final quiz",
            },
            { value: "quizzes", label: "Evaluate via passed quizzes" },
            { value: "questions", label: "Evaluate via questions" },
            { value: "mark", label: "Evaluate via mark" },
          ].map(({ value, label }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio />}
              label={label}
            />
          ))}
        </RadioGroup>
        <Typography variant="body2" color="textSecondary">
          The method of evaluating a students performance in a course.
        </Typography>
        <Typography variant="body2" color="error">
          Note: Changing the evaluation type will affect the assessment results
          of student learning.
        </Typography>
      </div>

      {/* Passing Grade Section */}
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Passing Grade (%)</Typography>
        <TextField
          type="number"
          value={formData.passingGrade}
          onChange={(e) =>
            handleChange("passingGrade", Number(e.target.value) || 0)
          }
          fullWidth
        />
        <Typography variant="body2" color="textSecondary">
          How many students have taken this course?
        </Typography>
      </div>
    </div>
  );
}

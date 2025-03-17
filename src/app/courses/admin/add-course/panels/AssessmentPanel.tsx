"use client";
import {
  TextField,
  FormControlLabel,
  Typography,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface FormData {
  finishButton: boolean;
  evaluation: string;
  passingGrade: number;
}

interface PanelProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: any) => void;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export default function AssessmentPanel({
  formData,
  onChange,
  register,
  errors,
}: PanelProps) {
  return (
    <div>
      {/* Evaluation Section */}
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Evaluation</Typography>
        <RadioGroup
          value={formData.evaluation}
          onChange={(e) => onChange("evaluation", e.target.value)}
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
          {...register("passingGrade", {
            required: "Passing grade is required",
            min: { value: 1, message: "Passing grade must be at least 1%" },
            max: { value: 100, message: "Passing grade cannot exceed 100%" },
          })}
          error={!!errors.passingGrade}
          helperText={errors.passingGrade?.message}
          fullWidth
        />
        <Typography variant="body2" color="textSecondary">
          The minimum percentage required to pass the course.
        </Typography>
      </div>
    </div>
  );
}

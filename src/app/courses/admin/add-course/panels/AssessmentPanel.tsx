"use client";
import {
  TextField,
  FormControlLabel,
  Typography,
  Radio,
  RadioGroup,
  FormHelperText,
  FormLabel,
  FormControl,
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
        <FormControl component="fieldset" fullWidth error={!!errors.evaluation}>
          <Typography className="mb-2 font-bold">Evaluation</Typography>
          <RadioGroup
            {...register("evaluation")}
            value={formData.evaluation ?? ""}
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
        </FormControl>

        <Typography className="mt-2 text-sm text-gray-600">
          The method of evaluating a students performance in a course.
        </Typography>
        <Typography className="text-sm text-red-600">
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
            valueAsNumber: true, // Ensures input is treated as a number
          })}
          fullWidth
          placeholder="Enter Passing Grade"
          error={!!errors.passingGrade}
          helperText={errors.passingGrade?.message}
          onChange={(e) => {
            let value = parseInt(e.target.value, 10);
            if (isNaN(value) || value < 1) value = 1;
            if (value > 100) value = 100;
            onChange("passingGrade", value);
          }}
          inputProps={{ min: 1, max: 100 }}
        />
        <Typography variant="body2" color="textSecondary">
          The minimum percentage required to pass the course.
        </Typography>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
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

export default function AssessmentPanel() {
  const [formData, setFormData] = useState<FormData>({
    finishButton: false,
    evaluation: "quizzes",
    passingGrade: 10,
  });

  const handleChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Evaluation</Typography>
        <RadioGroup
          value={formData.evaluation}
          onChange={(e) => handleChange("evaluation", e.target.value)}
        >
          <FormControlLabel
            value="lessons"
            control={<Radio />}
            className="text-sm"
            label={<span className="text-sm">Evaluate via lessons.</span>}
          />
          <FormControlLabel
            value="results"
            control={<Radio />}
            label={
              <span className="text-sm">
                Evaluate via results of the final quiz
              </span>
            }
          />
          <FormControlLabel
            value="quizzes"
            control={<Radio />}
            label={<span className="text-sm">Evaluate via passed quizzes</span>}
          />
          <FormControlLabel
            value="questions"
            control={<Radio />}
            label={<span className="text-sm">Evaluate via questions</span>}
          />
          <FormControlLabel
            value="mark"
            control={<Radio />}
            label={<span className="text-sm">Evaluate via mark</span>}
          />
        </RadioGroup>
        <span className="mt-1 block text-xs text-secondary">
          The method of evaluating a students performance in a course.
        </span>
        <span className="mt-1 block text-xs text-red-500">
          Note: changing the evaluation type will affect the assessment results
          of student learning
        </span>
      </div>
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Passing Grade(%)</Typography>
        <TextField
          type="number"
          value={formData.passingGrade}
          onChange={(e) =>
            handleChange("passingGrade", parseInt(e.target.value, 10))
          }
          fullWidth
        />
        <span className="mt-1 block text-xs text-secondary">
          How many students have taken this course?
        </span>
      </div>
      <Button onClick={onSubmit} variant="contained" color="primary">
        Save
      </Button>
    </div>
  );
}

"use client";
import { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

interface FormData {
  finishButton: boolean;
  enrollmentRequirement: boolean;
  regularPrice: string;
  priceSuffix: string;
}

export default function PricingPanel() {
  const [formData, setFormData] = useState<FormData>({
    finishButton: false,
    enrollmentRequirement: false,
    regularPrice: "",
    priceSuffix: "",
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
        <Typography className="mb-2 font-bold">Regular price</Typography>
        <TextField
          type="text"
          value={formData.regularPrice}
          onChange={(e) => handleChange("regularPrice", e.target.value)}
          fullWidth
        />
        <span className="mt-1 block text-xs text-secondary">
          Set a regular price (USD). Leave it blank for Free.
        </span>
      </div>
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Price Suffix</Typography>
        <TextField
          type="text"
          value={formData.priceSuffix}
          onChange={(e) => handleChange("priceSuffix", e.target.value)}
          fullWidth
        />
        <span className="mt-1 block text-xs text-secondary">
          Show additional information placed before the price such as: Only,
          From, Up to...
        </span>
      </div>
      <div className="mb-4">
        <Typography className="mb-2 font-bold">
          There is no enrollment requirement
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.enrollmentRequirement}
              onChange={(e) =>
                handleChange("enrollmentRequirement", e.target.checked)
              }
            />
          }
          label={
            <span className="text-sm">
              Students can see the content of all course items and take the quiz
              without logging in.
            </span>
          }
        />
      </div>
      <Button onClick={onSubmit} variant="contained" color="primary">
        Save
      </Button>
    </div>
  );
}

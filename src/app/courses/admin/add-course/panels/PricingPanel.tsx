"use client";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

interface panelProps {
  formData: {
    finishButton: boolean;
    enrollmentRequirement: boolean;
    regularPrice: string;
    priceSuffix: string;
  };
  onChange: (field: string, value: any) => void;
}

export default function PricingPanel({ formData, onChange }: panelProps) {
  const handleChange = (field: string, value: any) => {
    onChange(field, value);
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
    </div>
  );
}

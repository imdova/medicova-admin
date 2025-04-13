"use client";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

//  Define FormData explicitly
interface FormData {
  finishButton: boolean;
  enrollmentRequirement: boolean;
  regularPrice: string;
  priceSuffix: string;
}

interface PanelProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: any) => void;
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  errors: FieldErrors<FormData>;
}

export default function PricingPanel({
  formData,
  onChange,
  register,
  errors,
}: PanelProps) {
  const handleChange = (field: keyof FormData, value: any) => {
    onChange(field, value);
  };

  return (
    <div>
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Regular price</Typography>
        <TextField
          type="text"
          {...register("regularPrice", {
            required: "Regular price is required",
            pattern: {
              value: /^[0-9]*\.?[0-9]+$/,
              message: "Invalid price format",
            },
          })}
          value={formData.regularPrice}
          placeholder="Enter Regular price"
          onChange={(e) => handleChange("regularPrice", e.target.value)}
          error={!!errors.regularPrice}
          helperText={errors.regularPrice?.message}
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
          {...register("priceSuffix", {
            required: "Price Suffix is required",
            pattern: {
              value: /^[0-9]*\.?[0-9]+$/,
              message: "Invalid price format",
            },
          })}
          placeholder="Enter Price Suffix"
          value={formData.priceSuffix}
          error={!!errors.priceSuffix}
          helperText={errors.priceSuffix?.message}
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
              {...register("enrollmentRequirement")}
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

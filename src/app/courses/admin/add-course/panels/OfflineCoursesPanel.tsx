"use client";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

interface FormData {
  enableOffline: boolean;
  deliveryType: string;
  lessons: number;
  finishButton: boolean;
  address: string;
}

interface PanelProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: any) => void;
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  errors: FieldErrors<FormData>;
}

export default function OfflineCoursesPanel({
  formData,
  onChange,
  register,
  setValue,
  errors,
}: PanelProps) {
  const handleChange = (field: keyof FormData, value: any) => {
    onChange(field, value);
  };

  return (
    <div>
      <div className="mb-4">
        <h1 className="mb-2 font-bold">Enable offline course</h1>
        <FormControlLabel
          control={
            <Checkbox
              {...register("enableOffline")}
              checked={formData.enableOffline}
              onChange={(e) => handleChange("enableOffline", e.target.checked)}
            />
          }
          label={
            <span className="text-sm">
              When you enable the offline course feature, the system will
              disable certain online course functions, such as curriculum,
              finish button, re-take course, block content, repurchase.
            </span>
          }
        />
      </div>

      <div className="mb-4">
        <h1 className="mb-2 font-bold">Lessons</h1>
        <TextField
          type="number"
          {...register("lessons", {
            required: "Lessons count is required",
            min: { value: 1, message: "Must have at least 1 lesson" },
          })}
          fullWidth
          error={!!errors.lessons}
          helperText={errors.lessons?.message}
          onChange={(e) =>
            setValue("lessons", parseInt(e.target.value, 10) || 1)
          }
        />
        <span className="mt-1 block text-xs text-secondary">
          Total lessons of the course.
        </span>
      </div>

      <div className="mb-4">
        <h1 className="mb-2 font-bold">Delivery Type</h1>
        <FormControl fullWidth size="small">
          <Select
            {...register("deliveryType", {
              required: "Delivery type is required",
            })}
            defaultValue=""
            onChange={(e) => handleChange("deliveryType", e.target.value)}
            error={!!errors.deliveryType}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select a delivery type
            </MenuItem>
            <MenuItem value="Private">Private</MenuItem>
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
          </Select>
        </FormControl>
        {errors.deliveryType && (
          <p className="text-xs text-red-500">{errors.deliveryType.message}</p>
        )}
        <span className="mt-1 block text-xs text-secondary">
          How your content is conveyed to students.
        </span>
      </div>

      <div className="mb-4">
        <h1 className="mb-2 font-bold">Address</h1>
        <TextField
          type="text"
          {...register("address", {
            required: "Address is required",
            minLength: {
              value: 5,
              message: "Address must be at least 5 characters",
            },
          })}
          fullWidth
          placeholder="Enter Address"
          error={!!errors.address}
          helperText={errors.address?.message}
          onChange={(e) => handleChange("address", e.target.value)}
        />
        <span className="mt-1 block text-xs text-secondary">
          You can enter the physical address of your class or specify the
          meeting method (e.g., Zoom, Google Meet, etc.).
        </span>
      </div>
    </div>
  );
}

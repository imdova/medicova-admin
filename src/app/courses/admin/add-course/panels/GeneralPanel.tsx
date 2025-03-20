"use client";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  InputLabel,
} from "@mui/material";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

interface FormData {
  durationWeeks: string;
  blockOnCompletion: boolean;
  blockOnExpire: boolean;
  allowRepurchase: boolean;
  repurchaseAction: string;
  difficultyLevel: string;
  roleStudentsEnrolled: number;
  maxStudent: number;
  retackeCourse: number;
  finishButton: boolean;
  featuredlist: boolean;
  featuredReview: string;
  extrnalLink: string;
  durationQuantity: number;
}

interface GeneralPanelProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: any) => void;
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  errors: FieldErrors<FormData>;
}

export default function GeneralPanel({
  formData,
  onChange,
  register,
  setValue,
  errors,
}: GeneralPanelProps) {
  const handleChange = (field: keyof FormData, value: any) => {
    onChange(field, value);
  };

  return (
    <div>
      <div className="mb-4">
        {/* Duration */}
        <Typography className="mb-2 font-bold">Duration</Typography>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="w-full">
            <TextField
              type="number"
              {...register("durationQuantity", {
                required: "Duration is required",
                min: { value: 0, message: "Duration cannot be negative" },
              })}
              fullWidth
              placeholder="Enter Duration Quantity"
              onChange={(e) =>
                setValue("durationQuantity", parseInt(e.target.value, 10) || 0)
              }
              error={!!errors.durationQuantity}
              helperText={errors.durationQuantity?.message}
            />
          </div>
          <div className="w-full">
            <FormControl fullWidth error={!!errors.durationWeeks}>
              <Select
                {...register("durationWeeks", {
                  required: "Duration is required",
                })}
                defaultValue="weekly"
                onChange={(e) => handleChange("durationWeeks", e.target.value)}
              >
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
              </Select>
            </FormControl>
            {errors.durationWeeks && (
              <Typography color="error">
                {errors.durationWeeks.message}
              </Typography>
            )}
          </div>
        </div>
        <span className="mt-1 block text-xs text-secondary">
          Set to 0 for the lifetime course
        </span>
      </div>

      {/* Block Content */}
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Block Content</Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.blockOnExpire}
              onChange={(e) => handleChange("blockOnExpire", e.target.checked)}
            />
          }
          label="Block the course when the duration expires"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.blockOnCompletion}
              onChange={(e) =>
                handleChange("blockOnCompletion", e.target.checked)
              }
            />
          }
          label="Block the course after the student finishes it"
        />
      </div>

      {/* Repurchase */}
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Allow Repurchase</Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.allowRepurchase}
              onChange={(e) =>
                handleChange("allowRepurchase", e.target.checked)
              }
            />
          }
          label="Allow users to repurchase this course"
        />
      </div>

      {/* Repurchase Action */}
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Repurchase Action</Typography>
        <RadioGroup
          value={formData.repurchaseAction}
          onChange={(e) => handleChange("repurchaseAction", e.target.value)}
        >
          <FormControlLabel
            value="read"
            control={<Radio />}
            label="Read progress"
          />
          <FormControlLabel
            value="write"
            control={<Radio />}
            label="Write progress"
          />
          <FormControlLabel
            value="open-policy"
            control={<Radio />}
            label="Open policy"
          />
        </RadioGroup>
      </div>

      {/* Difficulty Level */}
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Level</Typography>
        <FormControl fullWidth size="small" error={!!errors.difficultyLevel}>
          <Select
            {...register("difficultyLevel", { required: "Level is required" })}
            value={formData.difficultyLevel}
            onChange={(e) => handleChange("difficultyLevel", e.target.value)}
          >
            <MenuItem value="All Levels">All Levels</MenuItem>
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
          </Select>
          {errors.difficultyLevel && (
            <FormHelperText>{errors.difficultyLevel.message}</FormHelperText>
          )}
        </FormControl>
      </div>

      {/* Role Students Enrolled */}
      <div className="mb-4">
        <Typography className="mb-2 font-bold">
          Role Students Enrolled
        </Typography>
        <TextField
          type="number"
          {...register("roleStudentsEnrolled", {
            min: { value: 0, message: "Cannot be negative" },
          })}
          placeholder="Enter Role Students Enrolled"
          fullWidth
          error={!!errors.roleStudentsEnrolled}
          helperText={errors.roleStudentsEnrolled?.message}
        />
      </div>

      {/* Max Student */}
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Max Student</Typography>
        <TextField
          type="number"
          {...register("maxStudent", {
            min: { value: 0, message: "Cannot be negative" },
          })}
          fullWidth
          placeholder="Enter Max Student"
          error={!!errors.maxStudent}
          helperText={errors.maxStudent?.message}
        />
      </div>

      {/* Re-take Course */}
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Re-take Course</Typography>
        <TextField
          type="number"
          {...register("retackeCourse", {
            min: { value: 0, message: "Cannot be negative" },
          })}
          fullWidth
          placeholder="Enter Re-take Course"
          error={!!errors.retackeCourse}
          helperText={errors.retackeCourse?.message}
        />
      </div>

      {/* Featured Review */}
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Featured Review</Typography>
        <TextField
          type="text"
          {...register("featuredReview", { required: "Review is required" })}
          fullWidth
          placeholder="Enter Featured Review"
          error={!!errors.featuredReview}
          helperText={errors.featuredReview?.message}
        />
      </div>

      {/* External Link */}
      <div className="mb-4">
        <Typography className="mb-2 font-bold">External Link</Typography>
        <TextField
          type="text"
          {...register("extrnalLink", {
            required: "External link is required",
            pattern: {
              value: /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*$/,
              message: "Enter a valid URL",
            },
          })}
          fullWidth
          placeholder="Enter External Link"
          error={!!errors.extrnalLink}
          helperText={errors.extrnalLink?.message}
        />
      </div>
    </div>
  );
}

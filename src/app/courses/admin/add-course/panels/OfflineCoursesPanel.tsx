"use client";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

interface PanelProps {
  formData: {
    enableOffline: boolean;
    deliveryType: string;
    lessons: number;
    finishButton: boolean;
    address: string;
  };
  onChange: (field: string, value: any) => void;
}

export default function OfflineCoursesPanel({
  formData,
  onChange,
}: PanelProps) {
  const handleChange = (field: string, value: any) => {
    onChange(field, value);
  };

  const onSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <div className="mb-4">
        <h1 className="mb-2 font-bold">Enable offline course</h1>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.enableOffline}
              onChange={(e) => handleChange("enableOffline", e.target.checked)}
            />
          }
          label={
            <span className="text-sm">
              When you enable the offline course feature, the system will
              disable certain online course functions, such as curriculum,
              finish button, re-take course, block content, repurchase. After
              checking the checkbox, make sure to click the Update button to
              apply the changes successfully.
            </span>
          }
        />
      </div>
      <div className="mb-4">
        <h1 className="mb-2 font-bold">Lessons</h1>
        <TextField
          type="number"
          value={formData.lessons}
          onChange={(e) =>
            handleChange("lessons", parseInt(e.target.value, 10))
          }
          fullWidth
        />
        <span className="mt-1 block text-xs text-secondary">
          Total lessons of the course.
        </span>
      </div>
      <div className="mb-4">
        <h1 className="mb-2 font-bold">Delivery Type</h1>
        <FormControl fullWidth size="small">
          <Select
            value={formData.deliveryType}
            onChange={(e) => handleChange("deliveryType", e.target.value)}
          >
            <MenuItem value="Private">Private</MenuItem>
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
          </Select>
        </FormControl>
        <span className="mt-1 block text-xs text-secondary">
          How your content is conveyed to students.
        </span>
      </div>
      <div className="mb-4">
        <h1 className="mb-2 font-bold">Address</h1>
        <TextField
          type="text"
          value={formData.address}
          onChange={(e) => handleChange("address", e.target.value)}
          fullWidth
        />
        <span className="mt-1 block text-xs text-secondary">
          You can enter the physical address of your class or specify the
          meeting method (e.g., Zoom, Google Meet, etc.).
        </span>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

interface FormData {
  durationWeeks: number;
  blockContent: boolean;
  allowRepurchase: boolean;
  repurchaseAction: string;
  difficultyLevel: string;
  roleStudentsEnrolled: number;
  maxStudent: number;
  retackeCourse: number;
  finishButton: boolean;
  featuredlist: boolean;
}

export default function GeneralPanel() {
  const [formData, setFormData] = useState<FormData>({
    durationWeeks: 10,
    blockContent: false,
    allowRepurchase: false,
    repurchaseAction: "read",
    difficultyLevel: "All Levels",
    roleStudentsEnrolled: 10,
    maxStudent: 10,
    retackeCourse: 10,
    finishButton: false,
    featuredlist: false,
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
        <Typography className="mb-4 font-bold">Duration</Typography>
        <TextField
          label="Duration (Weeks)"
          type="number"
          value={formData.durationWeeks}
          onChange={(e) =>
            handleChange("durationWeeks", parseInt(e.target.value, 10))
          }
          fullWidth
        />
        <span className="mt-1 block text-xs text-secondary">
          Set to 0 for the lifetime course
        </span>
      </div>
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Block Content</Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.blockContent}
              onChange={(e) => handleChange("blockContent", e.target.checked)}
            />
          }
          label="When the duration expires, the course is blocked."
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.blockContent}
              onChange={(e) => handleChange("blockContent", e.target.checked)}
            />
          }
          label="Block the course after the student finished this course."
        />
      </div>

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
          label="Allow users to repurchase this course after a fee has been paid or blocked (not applicable to free courses or Critical Order manual)."
        />
      </div>

      <div className="mb-4">
        <Typography className="mb-2 font-bold">Repurchase Action</Typography>
        <RadioGroup
          value={formData.repurchaseAction}
          onChange={(e) => handleChange("repurchaseAction", e.target.value)}
        >
          <FormControlLabel
            value="read"
            control={<Radio />}
            className="text-sm"
            label="Read course progress: The course progress and results of students will be removed."
          />
          <FormControlLabel
            value="write"
            control={<Radio />}
            label="Write course progress: The course progress and results of students will return."
          />
          <FormControlLabel
            value="open-policy"
            control={<Radio />}
            label="Open-policy for students to see the number of free course progress in all cases with the confirm people."
          />
        </RadioGroup>
      </div>

      <div className="mb-4">
        <Typography className="mb-2 font-bold">Level</Typography>
        <RadioGroup
          value={formData.difficultyLevel}
          onChange={(e) => handleChange("difficultyLevel", e.target.value)}
        >
          <FormControlLabel
            value="All Levels"
            control={<Radio />}
            label="All Levels"
          />
          <FormControlLabel
            value="Beginner"
            control={<Radio />}
            label="Beginner"
          />
          <FormControlLabel
            value="Intermediate"
            control={<Radio />}
            label="Intermediate"
          />
          <FormControlLabel
            value="Advanced"
            control={<Radio />}
            label="Advanced"
          />
        </RadioGroup>
        <span className="mt-1 block text-xs text-secondary">
          Choose a difficulty level.
        </span>
      </div>

      <div className="mb-4">
        <Typography className="mb-2 font-bold">
          Role Students Enrolled
        </Typography>
        <TextField
          label="Role Students Enrolled"
          type="number"
          value={formData.roleStudentsEnrolled}
          onChange={(e) =>
            handleChange("roleStudentsEnrolled", parseInt(e.target.value, 10))
          }
          fullWidth
        />
        <span className="mt-1 block text-xs text-secondary">
          How many students have taken this course?
        </span>
      </div>
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Max Student</Typography>
        <TextField
          label="Max Student"
          type="number"
          value={formData.maxStudent}
          onChange={(e) =>
            handleChange("maxStudent", parseInt(e.target.value, 10))
          }
          fullWidth
        />
        <span className="mt-1 block text-xs text-secondary">
          The maximum number of students that can join a course Set 0 for
          unlimited Not apply for case No enroll requirement
        </span>
      </div>

      <div className="mb-4">
        <Typography className="mb-2 font-bold">Re-take Course</Typography>
        <TextField
          label="Re-take Course"
          type="number"
          value={formData.retackeCourse}
          onChange={(e) =>
            handleChange("retackeCourse", parseInt(e.target.value, 10))
          }
          fullWidth
        />
        <span className="mt-1 block text-xs text-secondary">
          The number of times a user can learn again from this course To disable
          set to 0.
        </span>
      </div>
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Finish Button</Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.finishButton}
              onChange={(e) => handleChange("finishButton", e.target.checked)}
            />
          }
          label="Allow showing the finish button when the student has completed all items but has not passed the course assessment yet."
        />
      </div>

      <div className="mb-4">
        <Typography className="mb-2 font-bold">Featured list</Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.featuredlist}
              onChange={(e) => handleChange("featuredlist", e.target.checked)}
            />
          }
          label="Add the course to the Featured List."
        />
      </div>
      <Button onClick={onSubmit} variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
}

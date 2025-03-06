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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

interface FormData {
  durationWeeks: number;
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
}

export default function GeneralPanel() {
  const [formData, setFormData] = useState<FormData>({
    durationWeeks: 10,
    blockOnCompletion: false,
    blockOnExpire: false,
    allowRepurchase: false,
    repurchaseAction: "read",
    difficultyLevel: "All Levels",
    roleStudentsEnrolled: 10,
    maxStudent: 10,
    retackeCourse: 10,
    finishButton: false,
    featuredlist: false,
    featuredReview: "",
    extrnalLink: "",
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
        <Typography className="mb-2 font-bold">Duration</Typography>
        <TextField
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
              checked={formData.blockOnExpire}
              onChange={(e) => handleChange("blockOnExpire", e.target.checked)}
            />
          }
          label={
            <span className="text-sm">
              When the duration expires, the course is blocked.
            </span>
          }
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
          label={
            <span className="text-sm">
              Block the course after the student finishes this course.
            </span>
          }
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
          label={
            <span className="text-sm">
              Allow users to repurchase this course after a fee has been paid or
              blocked (not applicable to free courses or Critical Order manual).
            </span>
          }
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
            label={
              <span className="text-sm">
                Read course progress: The course progress and results of
                students will be removed.
              </span>
            }
          />
          <FormControlLabel
            value="write"
            control={<Radio />}
            label={
              <span className="text-sm">
                Write course progress: The course progress and results of
                students will return.
              </span>
            }
          />
          <FormControlLabel
            value="open-policy"
            control={<Radio />}
            label={
              <span className="text-sm">
                Open-policy for students to see the number of free course
                progress in all cases with the confirm people.
              </span>
            }
          />
        </RadioGroup>
      </div>
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Level</Typography>
        <FormControl fullWidth size="small">
          <Select
            value={formData.difficultyLevel}
            onChange={(e) => handleChange("difficultyLevel", e.target.value)}
          >
            <MenuItem value="All Levels">All Levels</MenuItem>
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
          </Select>
        </FormControl>
        <span className="mt-1 block text-xs text-secondary">
          Choose a difficulty level.
        </span>
      </div>
      <div className="mb-4">
        <Typography className="mb-2 font-bold">
          Role Students Enrolled
        </Typography>
        <TextField
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
          label={
            <span className="text-sm">
              Allow showing the finish button when the student has completed all
              items but has not passed the course assessment yet.e.
            </span>
          }
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
          label={
            <span className="text-sm">
              Add the course to the Featured List.
            </span>
          }
        />
      </div>
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Featured Review</Typography>
        <TextField
          type="text"
          value={formData.featuredReview}
          onChange={(e) => handleChange("featuredReview", e.target.value)}
          fullWidth
        />
        <span className="mt-1 block text-xs text-secondary">
          A good review to promote the course.
        </span>
      </div>
      <div className="mb-4">
        <Typography className="mb-2 font-bold">Extrnal Link</Typography>
        <TextField
          type="text"
          value={formData.extrnalLink}
          onChange={(e) => handleChange("extrnalLink", e.target.value)}
          fullWidth
        />
        <span className="mt-1 block text-xs text-secondary">
          Normally used for offline classes. Ex: link to a contact page. Format:
          https://google.com
        </span>
      </div>
      <Button onClick={onSubmit} variant="contained" color="primary">
        Save
      </Button>
    </div>
  );
}

"use client";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import "react-phone-number-input/style.css";
import DynamicKeywordContent from "@/components/UI/DynamicKeyword";
import TextEditor from "@/components/editor/editor";
// Define the form data types
interface FormData {
  name: string;
  slug: string;
  email: string;
  metaTitle: string;
  metaDescription: string;
  LocationId: string;
  SectorId: string;
  TypeId: string;
  phone: string;
}

// Assume this function will call the API
const submitFormData = async (data: FormData) => {
  const response = await fetch("/api/submit-form", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};
interface AddNewEmployerProps {
  handleCloseModal: () => void; // Function to close the modal
  isModalOpen: boolean; // State to control the modal's visibility
}

const AddNewCategory: React.FC<AddNewEmployerProps> = ({
  handleCloseModal,
  isModalOpen,
}) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [errorMessage, setErrorMessage] = useState<string>(""); // Error state
  const [phone, setPhone] = useState("");

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    setLoading(true); // Start loading when form is submitted
    setErrorMessage(""); // Reset previous error messages

    try {
      const response = await submitFormData(data);
      if (response.error) {
        setErrorMessage(response.error); // Handle API errors
      } else {
        // Handle successful form submission (e.g., redirect or show success message)
        alert("Form submitted successfully!");
      }
    } catch (error) {
      setErrorMessage(
        "There was an error processing your request. Please try again.",
      );
    } finally {
      setLoading(false); // Stop loading after submission attempt
    }
  };

  function clearErrors(arg0: string) {
    throw new Error("Function not implemented.");
  }
  const [value, setValue] = useState("<p>Job Description ....</p>");
  return (
    <Dialog
      open={isModalOpen}
      onClose={handleCloseModal}
      fullWidth
      maxWidth="sm"
    >
      <Typography
        className="m-3 w-fit border-b-2 border-primary p-3 text-primary"
        variant="h6"
        gutterBottom
      >
        Add New Category
      </Typography>

      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-5 flex flex-col items-center gap-3 border-b pb-5 md:flex-row-reverse">
            <div className="w-full md:w-fit">
              <label
                htmlFor="dropzone-file"
                className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-2 text-gray-400 hover:border-primary hover:text-primary md:h-52 md:w-52"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="mb-3"
                    width="28"
                    height="28"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23 9H23.02H23Z" fill="#A0AEC0" />
                    <path
                      d="M23 9H23.02"
                      stroke="#A0AEC0"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27 1H7C3.68629 1 1 3.68629 1 7V27C1 30.3137 3.68629 33 7 33H27C30.3137 33 33 30.3137 33 27V7C33 3.68629 30.3137 1 27 1Z"
                      stroke="#A0AEC0"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 22.9999L9 14.9999C9.91212 14.1222 10.9468 13.6602 12 13.6602C13.0532 13.6602 14.0879 14.1222 15 14.9999L25 24.9999"
                      stroke="#A0AEC0"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 20.9999L23 18.9999C23.9121 18.1222 24.9468 17.6602 26 17.6602C27.0532 17.6602 28.0879 18.1222 29 18.9999L33 22.9999"
                      stroke="#A0AEC0"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>
                    <span className="text-xs font-semibold">
                      Click to upload
                    </span>
                  </p>
                  <p className="text-center text-[10px]">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  accept="image/*"
                />
              </label>
            </div>
            <div className="w-full">
              <div className="mb-3">
                <InputLabel className="text-sm">Name</InputLabel>
                <TextField
                  placeholder="Example"
                  fullWidth
                  className="mt-2"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </div>
              <div className="mb-3 w-full">
                <InputLabel className="relative mb-2 text-sm">Type</InputLabel>
                <Controller
                  name="TypeId"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Type is required" }}
                  render={({ field }) => (
                    <FormControl error={Boolean(errors.TypeId)} fullWidth>
                      <Select
                        {...field}
                        displayEmpty
                        MenuProps={{
                          disableScrollLock: true,
                        }}
                        renderValue={(selected) => {
                          return selected || <em>Select Type</em>;
                        }}
                      >
                        <MenuItem value="" disabled>
                          <em>Select Type</em>
                        </MenuItem>
                        <MenuItem value="1">Type 1</MenuItem>
                        <MenuItem value="2">Type 2</MenuItem>
                        <MenuItem value="3">Type 3</MenuItem>
                      </Select>
                      {errors.TypeId && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.TypeId.message}
                        </p>
                      )}
                    </FormControl>
                  )}
                />
              </div>
              <div className="mb-3">
                <InputLabel className="text-sm">Slug</InputLabel>
                <TextField
                  placeholder="Example"
                  fullWidth
                  className="mt-2"
                  {...register("slug", {
                    required: "slug is required",
                  })}
                  error={!!errors.slug}
                  helperText={errors.slug?.message}
                />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <InputLabel className="mb-3 py-2 text-sm">
              Job Description
            </InputLabel>
            <TextEditor value={value} onChange={(e) => setValue(e)} />
          </div>

          <div>
            <div className="mb-3">
              <InputLabel className="text-sm">Meta Title</InputLabel>
              <TextField
                placeholder="Enter Meta Title"
                fullWidth
                className="mt-2"
                {...register("metaTitle", {
                  required: "Meta Title is required",
                })}
                error={!!errors.metaTitle}
                helperText={errors.metaTitle?.message}
              />
            </div>
            <div className="mb-3">
              <InputLabel className="text-sm">Meta Description</InputLabel>
              <TextField
                placeholder="Enter Meta Description"
                fullWidth
                className="mt-2"
                {...register("metaDescription", {
                  required: "Meta Title is required",
                })}
                error={!!errors.metaDescription}
                helperText={errors.metaDescription?.message}
              />
            </div>
          </div>
          <DynamicKeywordContent />
          <DialogActions className="mt-4 flex flex-col items-center gap-5 md:flex-row md:items-start">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              className="w-full md:w-48"
            >
              {loading ? <CircularProgress size={24} /> : "Add"}
            </Button>

            <Button
              onClick={handleCloseModal}
              variant="outlined"
              className="w-full md:w-48"
            >
              Cancel
            </Button>
            {errorMessage && (
              <div className="mt-4 text-xs text-red-500">{errorMessage}</div>
            )}
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewCategory;

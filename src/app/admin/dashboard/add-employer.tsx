"use client";
import { countries } from "@/constants";
import { CountryPhone } from "@/types";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Define the form data types
interface FormData {
  name: string;
  email: string;
  password: string | number;
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

const AddNewEmployer: React.FC<AddNewEmployerProps> = ({
  handleCloseModal,
  isModalOpen,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [errorMessage, setErrorMessage] = useState<string>(""); // Error state
  const [selectedCountry, setSelectedCountry] = useState<CountryPhone>(
    countries[0],
  );
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [CompanyType, setCompanyType] = useState("");
  const [Companysector, setCompanysector] = useState("");

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

  // handel phone number changing

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCode = event.target.value;
    const country = countries.find((c) => c.phone === selectedCode);
    if (country) setSelectedCountry(country);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPhoneNumber(event.target.value);
  };

  // handel  Change company Sector
  const handleChangeSector = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompanysector(event.target.value as string);
  };

  // handel  Change company Type
  const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyType(event.target.value as string);
  };

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
        Add New Employer
      </Typography>

      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-5 flex flex-col items-center gap-3 border-b pb-5 md:flex-row">
            <div className="w-full md:w-fit">
              <label
                htmlFor="dropzone-file"
                className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-2 text-gray-400 hover:border-primary hover:text-primary md:h-52 md:w-52"
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
                <InputLabel className="text-sm">Company Name</InputLabel>
                <TextField
                  fullWidth
                  className="mt-2"
                  {...register("name", {
                    required: "Company Name is required",
                  })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="w-full">
                  <InputLabel className="text-sm">Email</InputLabel>
                  <TextField
                    type="email"
                    fullWidth
                    className="mt-2"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </div>
                <div className="w-full">
                  <InputLabel className="text-sm">Password</InputLabel>
                  <TextField
                    fullWidth
                    type="password"
                    className="mt-2"
                    {...register("password", {
                      required: "password is required",
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Box width="100%">
              <FormControl fullWidth>
                <div className="flex w-full gap-3">
                  <div className="w-full">
                    <InputLabel className="relative mb-2 text-sm">
                      Country Code
                    </InputLabel>
                    <TextField
                      fullWidth
                      select
                      value={selectedCountry.phone}
                      onChange={handleCountryChange}
                      margin="normal"
                    >
                      {countries.map((country) => (
                        <MenuItem key={country.code} value={country.phone}>
                          {`${country.label} (${country.phone})`}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div className="w-full">
                    <InputLabel className="relative mb-2 text-sm">
                      Phone Number
                    </InputLabel>
                    <TextField
                      fullWidth
                      type="tel"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      margin="normal"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {selectedCountry.phone}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <InputLabel className="relative mb-2 text-sm">
                        Company Sector
                      </InputLabel>
                      <TextField
                        fullWidth
                        select
                        value={Companysector}
                        onChange={handleChangeSector}
                        margin="normal"
                      >
                        <MenuItem value="company 1">company 1</MenuItem>
                      </TextField>
                    </FormControl>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <InputLabel className="relative mb-2 text-sm">
                        Company Type
                      </InputLabel>
                      <TextField
                        fullWidth
                        select
                        value={CompanyType}
                        onChange={handleChangeType}
                        margin="normal"
                      >
                        <MenuItem value="company 1">company 1</MenuItem>
                      </TextField>
                    </FormControl>
                  </Box>
                </div>
              </FormControl>
            </Box>
          </div>
          <DialogActions>
            <div className="mt-4 flex flex-col items-center gap-5 md:flex-row md:items-start">
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
            </div>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewEmployer;

"use client";
import {
  EmailOutlined,
  FmdGoodOutlined,
  LocalPhoneOutlined,
} from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControlLabel,
  InputLabel,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactUSPage: React.FC = () => {
  const {
    control,
    setValue, // Added to update phone number properly
    clearErrors,
    handleSubmit,
  } = useForm();

  const [firstName, setFirstName] = useState(""); // Fixed typo
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [massege, setMassege] = useState("");

  const onSubmit = (data: any) => {
    console.log("Form Data Submitted:", data);
    setFirstName("");
    setLastName("");
    setEmail("");
    setMassege("");
    setValue("phone", ""); // Reset phone field
  };

  return (
    <main className="py-20">
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Contact Information Section */}
          <div className="w-full p-3">
            <span className="m-auto flex w-fit items-center justify-center rounded-lg bg-[#2ba1482c] p-2 uppercase text-primary md:m-0">
              Contact US
            </span>
            <h1 className="my-3 text-center text-2xl font-semibold md:text-start">
              We’d love to hear from you
            </h1>
            <p className="mb-8 text-center text-secondary md:text-start">
              Need something cleared up? Here are our most frequently asked
              questions.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col items-center md:items-start">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#E6F7F2] text-primary">
                  <EmailOutlined className="text-3xl" />
                </div>
                <h1 className="mb-3 text-xl font-semibold">Email</h1>
                <p className="mb-3 text-secondary">
                  Our friendly team is here to help.
                </p>
                <p className="mb-3 text-primary">contact@medicova.net</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#E6F7F2] text-primary">
                  <FmdGoodOutlined className="text-3xl" />
                </div>
                <h1 className="mb-3 text-xl font-semibold">Office</h1>
                <p className="mb-3 text-secondary">
                  Come say hello at our office HQ.
                </p>
                <p className="mb-3 text-primary">
                  100 Smith Street, Collingwood VIC 3066 AU
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F6F2FF] text-[#9F70FC]">
                  <LocalPhoneOutlined className="text-3xl" />
                </div>
                <h1 className="mb-3 text-xl font-semibold">Phone</h1>
                <p className="mb-3 text-secondary">Call us for assistance.</p>
                <p className="mb-3 text-primary">+1 (123) 456-7890</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full">
            <h1 className="my-3 text-center text-2xl font-semibold md:text-start">
              Get in touch
            </h1>
            <p className="mb-8 text-center text-secondary md:text-start">
              We’d love to hear from you. Please fill out this form.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
              <p className="mb-5 w-full text-xs text-white md:w-1/2">
                Have a project in mind? We’d love to hear about it!
              </p>
              <div className="flex w-full gap-3">
                <div className="w-full">
                  <InputLabel className="mb-2 text-xs text-secondary">
                    First Name
                  </InputLabel>
                  <TextField
                    placeholder="First Name"
                    fullWidth
                    sx={{
                      ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        display: "none",
                      },
                      border: "1px solid #eee",
                    }}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mb-4 rounded-xl bg-white text-xs"
                  />
                </div>
                <div className="w-full">
                  <InputLabel className="mb-2 text-xs text-secondary">
                    Last Name
                  </InputLabel>
                  <TextField
                    placeholder="Last Name"
                    fullWidth
                    sx={{
                      ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        display: "none",
                      },
                      border: "1px solid #eee",
                    }}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mb-4 rounded-xl bg-white"
                  />
                </div>
              </div>
              <div className="w-full">
                <InputLabel className="mb-2 text-xs text-secondary">
                  Email
                </InputLabel>
                <TextField
                  placeholder="Enter your email"
                  fullWidth
                  sx={{
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      display: "none",
                    },
                    border: "1px solid #eee",
                  }}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-4 rounded-xl bg-white"
                />
              </div>

              {/* Phone Input */}
              <div className="w-full">
                <InputLabel className="mb-2 text-xs text-secondary">
                  Phone number
                </InputLabel>
                <Box
                  sx={{
                    mb: 1,
                    padding: 2,
                    border: "1px solid #eee",
                    borderRadius: 2,
                    ".PhoneInputInput": {
                      outline: "none",
                    },
                  }}
                >
                  <Controller
                    name="phone"
                    control={control}
                    rules={{ required: "Phone number is required" }}
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        defaultCountry="EG"
                        placeholder="Enter phone number"
                        onChange={(value) => {
                          clearErrors("phone");
                          setValue("phone", value ?? "");
                        }}
                        international
                      />
                    )}
                  />
                </Box>
              </div>

              {/* Comment Input */}
              <div>
                <label className="mb-2 text-xs text-white">Comment</label>
                <textarea
                  id="Massege"
                  rows={4}
                  value={massege}
                  onChange={(e) => setMassege(e.target.value)}
                  className="w-full resize-none rounded-lg border border-[#eee] p-3 outline-none"
                  placeholder="Leave us a massege..."
                />
              </div>

              {/* Checkbox */}
              <div className="mb-3">
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#eee",
                        "&.Mui-checked": { color: "#2ba149" },
                      }}
                    />
                  }
                  label="You agree to our friendly privacy policy.."
                  sx={{
                    ".MuiFormControlLabel-label": {
                      color: "#6d6c80",
                      fontSize: "12px",
                    },
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md border bg-primary p-3 text-white hover:border-black hover:bg-black"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUSPage;

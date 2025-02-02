"use client";
import {
  Tab,
  Tabs,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";
import Landing from "@/assets/images/FAQ.jpg";
import { Search, ShortcutOutlined } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const FAQPage: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main className="bg-[#F8FAFC]">
      {/* Landing Section  */}
      <section className="mb-10">
        <div className="relative">
          <Image
            className="z-0 min-h-[300px] bg-primary"
            src={Landing}
            layout="responsive"
            width={100}
            height={100}
            alt="Landing Image"
          />
          <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 pt-3">
            <div className="container mx-auto px-6 lg:max-w-[1170px]">
              <div className="relative flex items-center justify-center gap-5 xl:justify-between">
                <div className="flex-1 text-center">
                  <span className="mb-2 block text-lg text-white md:mb-5 md:text-2xl">
                    FAQ
                  </span>
                  <h1 className="mb-3 text-xl font-semibold text-white md:mb-6 md:text-6xl xl:text-8xl">
                    Explore commonly asked questions
                  </h1>
                  <p className="text-xs text-white md:text-lg">
                    Find answers to inquiries about getting started, features,
                    data security, integrations, support, customization, and
                    more.
                  </p>
                  <div className="relative m-auto mt-7 max-w-[500px]">
                    <input
                      type="text"
                      placeholder="Search Questions"
                      aria-label="Search"
                      className="block w-full rounded-md bg-white py-4 pl-10 pr-20 text-base/6 text-neutral-950 outline-none transition placeholder:text-neutral-500"
                    />
                    <div className="absolute inset-y-1 left-1 flex justify-end">
                      <button
                        type="submit"
                        aria-label="Submit"
                        className="flex h-full w-8 items-center justify-center text-primary transition"
                      >
                        <Search />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* start Topics section content  */}
      <section className="my-16">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <h1 className="mb-4 text-primary">Topics</h1>
          <div className="flex flex-col gap-5 md:flex-row">
            <Tabs
              className="w-full md:w-[500px]"
              TabIndicatorProps={{
                style: { display: "none" }, // Hide the default indicator
              }}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              orientation="vertical"
              sx={{
                ".css-o37pu0-MuiButtonBase-root-MuiTab-root": {
                  textAlign: "start",
                  alignItems: "start",
                  marginBottom: "15px",
                },
                ".css-o37pu0-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                  color: "#2ba149",
                  backgroundColor: "white",
                  border: "1px solid #eee",
                  borderRadius: "6px",
                },
              }}
            >
              <Tab label="General" />
              <Tab label="Data Privacy and Security" />
              <Tab label="Integration and Compatibility" />
              <Tab label="Training and Support" />
              <Tab label="Technical Support" />
            </Tabs>
            <div className="mt-4 w-full">
              {value === 0 && (
                <div>
                  <Accordion className="mb-1 box-content">
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>
                        What are the key differences between each pricing plan?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Each plan varies in features, benefits, and pricing. The
                        free plan offers basic features, while paid plans
                        provide more advanced features, increasing target
                        limits, and dedicated support.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className="mb-1 box-content">
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>
                        How do I choose the right pricing plan for my business?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Consider your business needs, such as required features,
                        budget, and support level, to choose the most suitable
                        plan.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
              {value === 1 && (
                <div>
                  <Accordion className="mb-1 box-content">
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>
                        Can I switch between pricing plans later on?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Yes, you can switch between pricing plans based on your
                        evolving business needs.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
              {value === 2 && (
                <div>
                  <Accordion className="mb-1 box-content">
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>
                        Are there any hidden fees or additional charges?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        No, there are no hidden fees. All charges are
                        transparent and outlined in the pricing details.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
              {value === 3 && (
                <div>
                  <Accordion className="mb-1 box-content">
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>
                        Is there a minimum contract period for the paid plans?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        No, there is no minimum contract period. You can cancel
                        or change your plan at any time.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className="mb-1 box-content">
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>
                        Can I try out the paid plans before committing?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Yes, we offer a trial period for you to evaluate the
                        paid plans before making a commitment.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
              {value === 4 && (
                <div>
                  <Accordion className="mb-1 box-content">
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>
                        What kind of technical support is available?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        We provide 24/7 technical support via email, chat, and
                        phone for all paid plans.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
              <div className="mt-10 box-content p-4">
                <h2 className="mb-3">Technical Support</h2>
                <p className="mb-3 text-secondary">
                  if you have some additional question, please contact our Help
                  Center
                </p>
                <Button
                  variant="contained"
                  endIcon={<ShortcutOutlined />}
                  className="rounded-full"
                >
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default FAQPage;

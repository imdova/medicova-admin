"use client";

import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Switch,
  Button,
  Card,
  Select,
  MenuItem,
  Chip,
  List,
  ListItem,
  ListItemText,
  IconButton,
  AccordionSummary,
  Accordion,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {
  Add,
  Book,
  Close,
  Delete,
  Edit,
  ExpandMore,
  Reorder,
} from "@mui/icons-material";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import SettingsTab from "@/components/UI/SettingsTab";
import TextEditor from "@/components/editor/editor";
import Image from "next/image";
import { useState } from "react";

interface Lesson {
  id: string;
  name: string;
  description: string;
}

interface Section {
  id: string;
  name: string;
  lessons: Lesson[];
  description: string;
}

interface FormData {
  courseName: string;
  courseDescription: string;
  excerpt: string;
  newCategory: string;
  parentCategory: string;
  disableCache: boolean;
  disableLazyLoad: boolean;
  disableWi: boolean;
  categories: string[];
  tags: string[];
  newTag: string;
  curriculum: Section[];
  activeTab: "all" | "mostUsed";
  Images: string[];
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
  enableOffline: boolean;
  deliveryType: string;
  lessons: number;
  address: string;
  enrollmentRequirement: boolean;
  regularPrice: string;
  priceSuffix: string;
  requirements: string[];
  targetAudience: string[];
  keyFeatures: string[];
  faqs: string[];

  // AssessmentPanel data
  evaluation: "";
  passingGrade: 3.12;
}

export default function AddCoursePage() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      courseName: "",
      courseDescription: "",
      excerpt: "",
      newCategory: "",
      parentCategory: "",
      disableCache: false,
      disableLazyLoad: false,
      disableWi: true,
      categories: [],
      tags: [],
      Images: [
        "https://img.freepik.com/free-photo/close-up-view-happy-woman-smiling-camera_197531-32299.jpg?t=st=1741520594~exp=1741524194~hmac=f988e62c1747b43abccf65eecd0c1687d22dc74f90b6eeb0bf4d766c85001a34&w=1380",
        "https://img.freepik.com/free-photo/young-woman-wearing-standing-with-folded-arms-looking-with-serious-expression-isolated_231208-204.jpg?t=st=1741520635~exp=1741524235~hmac=8d600bcd4f6a82b848967be2c641a7724facaf8acf289e7434894f20f9cc8fbb&w=1380",
      ],
      newTag: "",
      curriculum: [
        {
          id: "1",
          name: "Section 1",
          lessons: [
            { id: "1", name: "Lesson 1", description: "" },
            { id: "2", name: "Lesson 2", description: "" },
          ],
        },
      ],
      activeTab: "all",
      // GeneralPanel data
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

      // OfflineCoursesPanel data
      enableOffline: true,
      deliveryType: "",
      lessons: 10,
      address: "",

      // PricingPanel data
      enrollmentRequirement: false,
      regularPrice: "",
      priceSuffix: "",

      // ExtraInformationPanel data
      requirements: [""],
      targetAudience: [""],
      keyFeatures: [""],
      faqs: [""],

      // AssessmentPanel data
      evaluation: "",
      passingGrade: 3.12,
    },
  });
  // Handler for updating any field in the form data
  const handleChange = (field: any, value: any) => {
    setValue(field, value); // Update form values using setValue
  };
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  // tags controls
  const tags = watch("tags") || [];
  const newTag = watch("newTag")?.trim(); // Trim whitespace

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setValue("tags", [...tags, newTag]);
      setValue("newTag", ""); // Clear input field
    }
  };

  const removeTag = (tagToRemove: string) => {
    setValue(
      "tags",
      tags.filter((tag) => tag !== tagToRemove),
    );
  };

  // images controls
  const images: string[] = watch("Images") || [];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("Images", [...images, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index: number) => {
    setValue(
      "Images",
      images.filter((_, i) => i !== index),
    );
  };

  // curriculum Controls
  const [sectionName, setSectionName] = useState<string>("");
  const [lessonName, setLessonName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  // Add a new section
  const addSection = () => {
    if (!sectionName.trim()) return; // Prevent empty sections

    setValue("curriculum", [
      ...watch("curriculum"),
      {
        id: Date.now().toString(),
        name: sectionName,
        description: description,
        lessons: [],
      }, // Added description
    ]);

    setSectionName("");
  };

  // Edit section name & description
  const editSection = (id: string, newName: string) => {
    setValue(
      "curriculum",
      watch("curriculum").map((section) =>
        section.id === id
          ? { ...section, name: newName, description: description } // Updated name & description
          : section,
      ),
    );
  };

  // Delete section
  const deleteSection = (id: string) => {
    setValue(
      "curriculum",
      watch("curriculum").filter((section) => section.id !== id),
    );
  };

  // Add a lesson to a section
  const addLesson = (sectionId: string) => {
    if (!lessonName.trim()) return;

    const newLesson: Lesson = {
      id: Date.now().toString(),
      name: lessonName,
      description: "", // Ensure 'description' is included
    };

    setValue(
      "curriculum",
      watch("curriculum").map((section) =>
        section.id === sectionId
          ? {
              ...section,
              lessons: [...section.lessons, newLesson],
            }
          : section,
      ),
    );

    setLessonName("");
  };

  // Edit a lesson
  const editLesson = (sectionId: string, lessonId: string, newName: string) => {
    setValue(
      "curriculum",
      watch("curriculum").map((section) =>
        section.id === sectionId
          ? {
              ...section,
              lessons: section.lessons.map((lesson) =>
                lesson.id === lessonId ? { ...lesson, name: newName } : lesson,
              ),
            }
          : section,
      ),
    );
  };

  // Delete a lesson
  const deleteLesson = (sectionId: string, lessonId: string) => {
    setValue(
      "curriculum",
      watch("curriculum").map((section) =>
        section.id === sectionId
          ? {
              ...section,
              lessons: section.lessons.filter(
                (lesson) => lesson.id !== lessonId,
              ),
            }
          : section,
      ),
    );
  };

  // Handle drag & drop
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;
    let updatedCurriculum = [...watch("curriculum")];

    if (source.droppableId === destination.droppableId) {
      // Reordering within the same section
      const section = updatedCurriculum.find(
        (sec) => sec.id === source.droppableId,
      );
      if (!section) return;

      const [movedLesson] = section.lessons.splice(source.index, 1);
      section.lessons.splice(destination.index, 0, movedLesson);
    } else {
      // Moving lessons between sections
      const sourceSection = updatedCurriculum.find(
        (sec) => sec.id === source.droppableId,
      );
      const destinationSection = updatedCurriculum.find(
        (sec) => sec.id === destination.droppableId,
      );
      if (!sourceSection || !destinationSection) return;

      const [movedLesson] = sourceSection.lessons.splice(source.index, 1);
      destinationSection.lessons.splice(destination.index, 0, movedLesson);
    }

    setValue("curriculum", updatedCurriculum);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="mb-1 text-2xl font-bold">Add a New Course</h1>
        <p className="text-sm text-gray-500">Lets check your update today</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6 grid grid-cols-3 gap-6">
          <div className="col-span-3 flex flex-col gap-6 xl:col-span-2">
            {/* General Information */}
            <Card className="p-4">
              <h2 className="mb-3 font-semibold">General Information</h2>
              <label className="mb-3 text-xs text-secondary">Course Name</label>
              <TextField
                type="text"
                placeholder="Course Name"
                {...register("courseName", {
                  required: "Course Name is required",
                  minLength: {
                    value: 3,
                    message: "Must be at least 3 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Must be 50 characters or less",
                  },
                })}
                className="mb-2 mt-2 w-full rounded border p-2 outline-none"
              />
              {errors.courseName && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.courseName.message}
                </p>
              )}
              <label className="mb-3 mt-4 block text-xs text-secondary">
                Course Description
              </label>
              <Controller
                name="courseDescription"
                control={control}
                rules={{
                  required: "Course Description is required",
                  minLength: {
                    value: 10,
                    message: "Must be at least 10 characters",
                  },
                  maxLength: {
                    value: 500,
                    message: "Must be 500 characters or less",
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <div>
                    <TextEditor
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                    />
                    {error && (
                      <p className="mt-1 text-xs text-red-500">
                        {error.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </Card>
            {/* Excerpt Information */}
            <Card className="p-4">
              <h2 className="font-semibold">Excerpt</h2>
              <p className="mb-6 text-xs">Describe your product in short</p>

              <Controller
                name="excerpt"
                control={control}
                rules={{
                  required: "Excerpt is required",
                  minLength: {
                    value: 10,
                    message: "Must be at least 10 characters",
                  },
                  maxLength: {
                    value: 200,
                    message: "Must be 200 characters or less",
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <div>
                    <TextEditor
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                    />
                    {error && (
                      <p className="mt-1 text-xs text-red-500">
                        {error.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </Card>
            {/* Curriculum with Sections and Lessons */}
            <div className="lg:col-span-2">
              {/* Section Input */}
              <Card className="mb-6 p-4">
                <h2 className="mb-6 border-b pb-2 font-semibold">Curriculum</h2>
                <div className="flex gap-2 p-2">
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Add Section"
                    value={sectionName}
                    onChange={(e) => setSectionName(e.target.value)}
                  />
                  <Button variant="contained" onClick={addSection}>
                    <Add />
                  </Button>
                </div>
              </Card>

              {/* Curriculum Sections */}
              <Card className="mb-6 p-4">
                <h2 className="mb-6 font-semibold">Curriculum</h2>
                <DragDropContext onDragEnd={onDragEnd}>
                  {watch("curriculum").map((section) => (
                    <Accordion
                      key={section.id}
                      className="mt-2 border bg-white shadow-none"
                    >
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <input
                          value={section.name}
                          onChange={(e) =>
                            editSection(section.id, e.target.value)
                          }
                          className="flex-grow rounded-md bg-transparent p-2 outline-none"
                        />
                        <div className="mr-4 flex items-center text-sm text-secondary">
                          {section.lessons.length} items
                        </div>
                        <IconButton
                          onClick={() => deleteSection(section.id)}
                          className="text-secondary hover:text-red-500"
                        >
                          <Delete />
                        </IconButton>
                      </AccordionSummary>
                      <AccordionDetails>
                        {/* Droppable Lessons */}
                        <Droppable droppableId={section.id}>
                          {(provided) => (
                            <List
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                            >
                              <input
                                type="text"
                                placeholder="Section Description..."
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full rounded-md p-3 outline-none focus:border"
                              />
                              {section.lessons.map((lesson, index) => (
                                <Draggable
                                  key={lesson.id}
                                  draggableId={lesson.id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <ListItem
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      className="mt-2 flex items-center gap-2 rounded-lg border bg-white p-2"
                                    >
                                      <IconButton {...provided.dragHandleProps}>
                                        <Reorder />
                                      </IconButton>
                                      <Book className="text-primary" />
                                      <ListItemText primary={lesson.name} />
                                      <IconButton
                                        onClick={() =>
                                          editLesson(
                                            section.id,
                                            lesson.id,
                                            prompt(
                                              "Edit lesson name:",
                                              lesson.name,
                                            ) || lesson.name,
                                          )
                                        }
                                      >
                                        <Edit />
                                      </IconButton>
                                      <IconButton
                                        onClick={() =>
                                          deleteLesson(section.id, lesson.id)
                                        }
                                        className="text-secondary hover:text-red-500"
                                      >
                                        <Delete />
                                      </IconButton>
                                    </ListItem>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </List>
                          )}
                        </Droppable>

                        {/* Add Lesson */}
                        <div className="mt-2 flex gap-2 p-2">
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Add Lesson"
                            value={lessonName}
                            onChange={(e) => setLessonName(e.target.value)}
                          />
                          <Button
                            variant="contained"
                            onClick={() => addLesson(section.id)}
                          >
                            <Add />
                          </Button>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </DragDropContext>
              </Card>
              {/* Discussion */}
              <Card className="p-4">
                <h2 className="mb-6 font-semibold">Discussion</h2>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={
                      <span className="text-xs text-secondary">
                        Allow Comments
                      </span>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span className="text-xs text-secondary">
                        Allow trackbacks and pingbacks
                      </span>
                    }
                  />
                </FormGroup>
              </Card>
            </div>
            {/* Course Setting */}
            <Card className="p-4">
              <h2 className="mb-6 font-semibold">Course Setting</h2>
              <SettingsTab formData={watch()} onChange={handleChange} />
            </Card>
          </div>
          <div className="col-span-3 flex flex-col gap-4 xl:col-span-1">
            {/* Course Categories */}
            <Card className="p-4">
              <div className="mb-3 flex gap-2">
                <button
                  onClick={() => setValue("activeTab", "all")}
                  className={`rounded-md px-3 py-2 text-sm ${watch("activeTab") === "all" ? "bg-primary text-white" : "border border-primary text-primary"} flex-1`}
                >
                  All Categorized
                </button>
                <button
                  onClick={() => setValue("activeTab", "mostUsed")}
                  className={`rounded-md px-3 py-2 text-sm ${watch("activeTab") === "mostUsed" ? "bg-primary text-white" : "border border-primary text-primary"} flex-1`}
                >
                  Most used
                </button>
              </div>
              <button className="mb-2 text-sm text-green-600">
                + Add new category
              </button>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Category name"
                {...register("newCategory")}
                className="mt-2 border-green-500"
              />

              <Select
                fullWidth
                {...register("parentCategory")}
                className="mt-2 border-green-500"
                displayEmpty
              >
                <MenuItem value="">Parent Category</MenuItem>
                <MenuItem value="cat1">Category 1</MenuItem>
                <MenuItem value="cat2">Category 2</MenuItem>
              </Select>

              <Button
                variant="outlined"
                color="success"
                fullWidth
                className="mt-3 w-fit"
              >
                Add new category
              </Button>
            </Card>
            {/* Course Tags */}
            <Card className="p-4">
              <h2 className="mb-2 font-semibold">Course Tags</h2>
              <p className="text-xs text-secondary">Type your Product tag</p>

              <div className="flex gap-2">
                <TextField fullWidth {...register("newTag")} className="mt-2" />
                <Button onClick={addTag} variant="contained" className="mt-2">
                  Add
                </Button>
              </div>

              <p className="mb-6 mt-2 text-xs text-secondary">
                Separate tags with commas
              </p>

              <h2 className="text-sm font-semibold">
                Choose from the used tags
              </h2>

              <div className="mt-2 min-h-[50px] rounded-md border p-2">
                {tags.length > 0 ? (
                  tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      onDelete={() => removeTag(tag)}
                      className="m-1"
                    />
                  ))
                ) : (
                  <span className="flex min-h-[50px] items-center justify-center text-sm text-gray-500">
                    No tags found
                  </span>
                )}
              </div>
            </Card>
            {/* LightSpeed Options */}
            <Card className="p-4">
              <h2 className="mb-6 font-semibold">LightSpeed Options</h2>
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">Disable Cache</span>
                  <Controller
                    name="disableCache"
                    control={control}
                    render={({ field }) => (
                      <Switch
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    )}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">
                    Disable LazyLoad
                  </span>
                  <Controller
                    name="disableLazyLoad"
                    control={control}
                    render={({ field }) => (
                      <Switch
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    )}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">Disable Wi</span>
                  <Controller
                    name="disableWi"
                    control={control}
                    render={({ field }) => (
                      <Switch
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    )}
                  />
                </div>
              </div>
              <div>
                <div className="mb-6">
                  <h2 className="mb-2 text-sm font-semibold">
                    Viewport Images
                  </h2>
                  <div className="h-[100px] rounded-md border"></div>
                </div>
                <div className="mb-6">
                  <h2 className="mb-2 text-sm font-semibold">
                    Viewport Images - Mobile
                  </h2>
                  <div className="h-[100px] rounded-md border"></div>
                </div>
              </div>
            </Card>
            {/* Featured Image */}
            <Card className="p-4">
              <h2 className="mb-6 font-semibold">Featured Image</h2>
              <div className="flex min-h-[100px] rounded-md border p-4">
                <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {images.map((image, index) => (
                    <div key={index} className="group relative">
                      <Image
                        className="h-[160px] w-full rounded-lg object-cover md:h-[100px]"
                        src={image}
                        width={100}
                        height={100}
                        alt="Uploaded Image"
                      />
                      <div className="absolute right-1 top-1 flex w-5 items-center justify-center opacity-0 transition group-hover:opacity-100">
                        <button
                          onClick={() => removeImage(index)}
                          className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-1 text-xs text-white"
                        >
                          <Close className="text-sm" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Upload Button */}
                  <div className="h-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-2 text-gray-400 hover:border-primary hover:text-primary md:h-[100px]"
                    >
                      <div className="flex flex-col items-center justify-center pb-6 pt-5">
                        <svg
                          className="mb-2"
                          width="18"
                          height="18"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M23 9H23.02H23Z" fill="#A0AEC0" />
                          <path
                            d="M23 9H23.02"
                            stroke="#A0AEC0"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M27 1H7C3.68629 1 1 3.68629 1 7V27C1 30.3137 3.68629 33 7 33H27C30.3137 33 33 30.3137 33 27V7C33 3.68629 30.3137 1 27 1Z"
                            stroke="#A0AEC0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 22.9999L9 14.9999C9.91212 14.1222 10.9468 13.6602 12 13.6602C13.0532 13.6602 14.0879 14.1222 15 14.9999L25 24.9999"
                            stroke="#A0AEC0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 20.9999L23 18.9999C23.9121 18.1222 24.9468 17.6602 26 17.6602C27.0532 17.6602 28.0879 18.1222 29 18.9999L33 22.9999"
                            stroke="#A0AEC0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p>
                          <span className="text-[8px] font-semibold">
                            Click to upload
                          </span>
                        </p>
                        <p className="text-center text-[6px]">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <Button type="submit" variant="contained" className="mt-6">
          Submit
        </Button>
      </form>
    </div>
  );
}

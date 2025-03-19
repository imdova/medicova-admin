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
  Modal,
  Box,
  FormControl,
  FormHelperText,
} from "@mui/material";
import {
  Add,
  Close,
  Delete,
  Edit,
  ExpandMore,
  FilterDrama,
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
import useUpdateApi from "@/hooks/useUpdateApi";

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
  featuredImages: string[];
  mobileImages: string[];
  viewportImages: string[];
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
  allowComments: boolean;
  allowTrackbacks: boolean;

  // AssessmentPanel data
  evaluation: "";
  passingGrade: 3.12;

  // downloadable panel
  materialFiles: {
    fileTitle: string;
    method: string;
    selectedFiles: File[];
  };
}

const AddCoursePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      courseName: "",
      courseDescription: "",
      excerpt: "",
      newCategory: "",
      parentCategory: "",
      activeTab: "all",
      categories: ["Category 1", "Category 2"],
      disableCache: false,
      disableLazyLoad: false,
      disableWi: true,
      tags: [],
      featuredImages: [
        "https://img.freepik.com/free-photo/close-up-view-happy-woman-smiling-camera_197531-32299.jpg?t=st=1741520594~exp=1741524194~hmac=f988e62c1747b43abccf65eecd0c1687d22dc74f90b6eeb0bf4d766c85001a34&w=1380",
        "https://img.freepik.com/free-photo/young-woman-wearing-standing-with-folded-arms-looking-with-serious-expression-isolated_231208-204.jpg?t=st=1741520635~exp=1741524235~hmac=8d600bcd4f6a82b848967be2c641a7724facaf8acf289e7434894f20f9cc8fbb&w=1380",
      ],
      mobileImages: [
        "https://img.freepik.com/free-photo/close-up-view-happy-woman-smiling-camera_197531-32299.jpg?t=st=1741520594~exp=1741524194~hmac=f988e62c1747b43abccf65eecd0c1687d22dc74f90b6eeb0bf4d766c85001a34&w=1380",
        "https://img.freepik.com/free-photo/young-woman-wearing-standing-with-folded-arms-looking-with-serious-expression-isolated_231208-204.jpg?t=st=1741520635~exp=1741524235~hmac=8d600bcd4f6a82b848967be2c641a7724facaf8acf289e7434894f20f9cc8fbb&w=1380",
      ],
      viewportImages: [
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
      allowComments: true,
      allowTrackbacks: true,
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
      //downlaodable panel
      materialFiles: {
        fileTitle: "",
        method: "",
        selectedFiles: [],
      },
    },
  });
  // Handler for updating any field in the form data
  const handleChange = (field: any, value: any) => {
    setValue(field, value); // Update form values using setValue
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
  // Handle Enter key in input
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      addTag(); // Add tag
    }
  };

  const removeTag = (tagToRemove: string) => {
    setValue(
      "tags",
      tags.filter((tag) => tag !== tagToRemove),
    );
  };

  // categories controle
  const [categories, setCategories] = useState(watch("categories"));

  //  Function to add a new category
  const addCategory = () => {
    const newCategory = watch("newCategory").trim();
    if (newCategory && !categories.includes(newCategory)) {
      const updatedCategories = [...categories, newCategory];

      setCategories(updatedCategories); // Update state
      setValue("categories", updatedCategories); // Sync with form
      setValue("parentCategory", newCategory); // Select the newly added category
      setValue("newCategory", ""); // Clear input field
    }
  };

  // handel change images
  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof FormData, // Allow dynamic field selection
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type (ensure it's an image)
    if (!file.type.startsWith("image/")) {
      console.error("Only image files are allowed.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      // Get current images from the correct field
      const currentImages = (getValues(fieldName) as string[]) || [];

      // Ensure it's an array (to prevent issues)
      const updatedImages = Array.isArray(currentImages)
        ? [...currentImages, reader.result as string]
        : [reader.result as string];

      // Update the form field with the new images
      setValue(fieldName, updatedImages);
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
  };

  const removeImage = (fieldName: keyof FormData, index: number) => {
    // Get current images from the correct field
    const currentImages = (getValues(fieldName) as string[]) || [];

    // Filter out the image at the specified index
    const updatedImages = currentImages.filter((_, i) => i !== index);

    // Update the form field with the filtered images
    setValue(fieldName, updatedImages);
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
  // Handle Enter key in input
  const handleKeyDownSection = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      addSection(); // Add lesson
    }
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

    setLessonName(""); // Clear input after adding
  };

  // Handle Enter key in input
  const handleKeyDownLesson =
    (sectionId: string) => (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault(); // Prevent form submission
        addLesson(sectionId); // Add lesson
      }
    };

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState({
    sectionId: "",
    lessonId: "",
    name: "",
  });

  const openEditModal = (
    sectionId: string,
    lessonId: string,
    currentName: string,
  ) => {
    setSelectedLesson({ sectionId, lessonId, name: currentName });
    setEditModalOpen(true);
  };

  const handleLessonNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLesson((prev) => ({ ...prev, name: e.target.value }));
  };

  const saveEditedLesson = () => {
    setValue(
      "curriculum",
      watch("curriculum").map((section) =>
        section.id === selectedLesson.sectionId
          ? {
              ...section,
              lessons: section.lessons.map((lesson) =>
                lesson.id === selectedLesson.lessonId
                  ? { ...lesson, name: selectedLesson.name }
                  : lesson,
              ),
            }
          : section,
      ),
    );
    setEditModalOpen(false);
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

  // handel drag & drop
  const onDragEnd = (result: DropResult) => {
    const { source, destination, type } = result;

    // If dropped outside of a droppable area, do nothing
    if (!destination) return;

    const sections = Array.from(watch("curriculum"));

    if (type === "section") {
      if (source.index === destination.index) return; // Avoid unnecessary updates

      const [movedSection] = sections.splice(source.index, 1);
      sections.splice(destination.index, 0, movedSection);
      setValue("curriculum", sections);
    }

    if (type === "lesson") {
      const sourceSectionIndex = sections.findIndex(
        (s) => s.id.toString() === source.droppableId,
      );
      const destSectionIndex = sections.findIndex(
        (s) => s.id.toString() === destination.droppableId,
      );

      if (sourceSectionIndex === -1 || destSectionIndex === -1) return;

      const sourceLessons = Array.from(sections[sourceSectionIndex].lessons);
      const [movedLesson] = sourceLessons.splice(source.index, 1);

      if (source.droppableId === destination.droppableId) {
        // Reorder lessons in the same section
        sourceLessons.splice(destination.index, 0, movedLesson);
        sections[sourceSectionIndex].lessons = sourceLessons;
      } else {
        // Move lesson to a different section
        const destLessons = Array.from(sections[destSectionIndex].lessons);
        destLessons.splice(destination.index, 0, movedLesson);

        sections[sourceSectionIndex].lessons = sourceLessons;
        sections[destSectionIndex].lessons = destLessons;
      }

      setValue("curriculum", sections);
    }
  };
  // handel submit Data
  const { update, isLoading, error } = useUpdateApi<any>();

  const onSubmit = async (formData: FormData) => {
    if (Object.keys(errors).length > 0) {
      console.error("Validation failed, cannot submit.");
      return;
    }
    try {
      await update("/api/update-course", {
        method: "POST",
        body: formData, // Send FormData directly
        headers: {}, // No headers for FormData (browser sets automatically)
      });

      console.log("Course updated successfully!");
    } catch (err) {
      console.error("Failed to update course:", err);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="mb-1 text-2xl font-bold">Add a New Course</h1>
        <p className="text-sm text-gray-500">Lets check your update today</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
      >
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
                className="mt-2 w-full"
                error={!!errors.courseName}
                helperText={errors.courseName?.message}
              />

              <label className="mb-3 mt-4 block text-xs text-secondary">
                Course Description
              </label>
              <Controller
                name="courseDescription"
                control={control}
                rules={{
                  required: "Course Description is required",
                }}
                render={({ field, fieldState: { error } }) => (
                  <div>
                    <TextEditor {...field} value={field.value || ""} />
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
                }}
                render={({ field, fieldState: { error } }) => (
                  <div>
                    <TextEditor
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                    />
                    {error && (
                      <FormHelperText className="text-red-500">
                        {error.message}
                      </FormHelperText>
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
                    onKeyDown={handleKeyDownSection}
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
                  {/* Section Drag and Drop */}
                  <Droppable droppableId="sections" type="section">
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {watch("curriculum").map((section, index) => (
                          <Draggable
                            key={section.id.toString()}
                            draggableId={section.id.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <Accordion
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                className="mt-2 border bg-white shadow-none"
                              >
                                <AccordionSummary
                                  {...provided.dragHandleProps}
                                  expandIcon={<ExpandMore />}
                                >
                                  <IconButton>
                                    <Reorder />
                                  </IconButton>
                                  <input
                                    value={section.name}
                                    onChange={(e) =>
                                      editSection(section.id, e.target.value)
                                    }
                                    className="flex-grow rounded-md bg-transparent p-2 outline-none"
                                  />
                                  <IconButton
                                    onClick={() => deleteSection(section.id)}
                                  >
                                    <Delete />
                                  </IconButton>
                                </AccordionSummary>
                                <AccordionDetails>
                                  {/* Lessons Drag and Drop */}
                                  <DragDropContext onDragEnd={onDragEnd}>
                                    <Droppable
                                      droppableId={section.id.toString()}
                                      type="lesson"
                                    >
                                      {(provided) => (
                                        <List
                                          ref={provided.innerRef}
                                          {...provided.droppableProps}
                                        >
                                          {section.lessons.map(
                                            (lesson, index) => (
                                              <Draggable
                                                key={lesson.id.toString()}
                                                draggableId={lesson.id.toString()}
                                                index={index}
                                              >
                                                {(provided) => (
                                                  <ListItem
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    className="mt-2 flex items-center gap-2 rounded-lg border bg-white p-2"
                                                  >
                                                    <IconButton
                                                      {...provided.dragHandleProps}
                                                    >
                                                      <Reorder />
                                                    </IconButton>
                                                    <ListItemText
                                                      primary={lesson.name}
                                                    />
                                                    <IconButton
                                                      onClick={() =>
                                                        openEditModal(
                                                          section.id,
                                                          lesson.id,
                                                          lesson.name,
                                                        )
                                                      }
                                                    >
                                                      <Edit />
                                                    </IconButton>
                                                    {isEditModalOpen && (
                                                      <Modal
                                                        open={isEditModalOpen}
                                                        onClose={() =>
                                                          setEditModalOpen(
                                                            false,
                                                          )
                                                        }
                                                      >
                                                        <Box
                                                          sx={{
                                                            position:
                                                              "absolute",
                                                            top: "50%",
                                                            left: "50%",
                                                            transform:
                                                              "translate(-50%, -50%)",
                                                            width: 400,
                                                            bgcolor:
                                                              "background.paper",
                                                            boxShadow: 24,
                                                            p: 4,
                                                            borderRadius: 2,
                                                          }}
                                                        >
                                                          <h2 className="mb-4 text-lg font-semibold">
                                                            Edit Lesson
                                                          </h2>
                                                          <TextField
                                                            fullWidth
                                                            value={
                                                              selectedLesson.name
                                                            }
                                                            onChange={
                                                              handleLessonNameChange
                                                            }
                                                          />
                                                          <div className="mt-4 flex justify-end gap-2">
                                                            <Button
                                                              variant="outlined"
                                                              onClick={() =>
                                                                setEditModalOpen(
                                                                  false,
                                                                )
                                                              }
                                                            >
                                                              Cancel
                                                            </Button>
                                                            <Button
                                                              variant="contained"
                                                              onClick={
                                                                saveEditedLesson
                                                              }
                                                            >
                                                              Save
                                                            </Button>
                                                          </div>
                                                        </Box>
                                                      </Modal>
                                                    )}
                                                    <IconButton
                                                      onClick={() =>
                                                        deleteLesson(
                                                          section.id,
                                                          lesson.id,
                                                        )
                                                      }
                                                    >
                                                      <Delete />
                                                    </IconButton>
                                                  </ListItem>
                                                )}
                                              </Draggable>
                                            ),
                                          )}
                                          {provided.placeholder}
                                        </List>
                                      )}
                                    </Droppable>
                                  </DragDropContext>
                                </AccordionDetails>
                                {/* Add Lesson */}
                                <div className="mt-2 flex gap-2 p-2">
                                  <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Add Lesson"
                                    value={lessonName}
                                    onKeyDown={handleKeyDownLesson(section.id)}
                                    onChange={(e) =>
                                      setLessonName(e.target.value)
                                    }
                                  />
                                  <Button
                                    variant="contained"
                                    onClick={() => addLesson(section.id)}
                                  >
                                    <Add />
                                  </Button>
                                </div>
                              </Accordion>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </Card>
              {/* Discussion */}
              <Card className="p-4">
                <h2 className="mb-6 font-semibold">Discussion</h2>
                <FormGroup>
                  {/* Allow Comments */}
                  <FormControlLabel
                    control={<Checkbox {...register("allowComments")} />}
                    label={
                      <span className="text-xs text-secondary">
                        Allow Comments
                      </span>
                    }
                  />

                  {/* Allow Trackbacks & Pingbacks */}
                  <FormControlLabel
                    control={<Checkbox {...register("allowTrackbacks")} />}
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
              <SettingsTab
                register={register}
                setValue={setValue}
                errors={errors}
                formData={watch()}
                onChange={handleChange}
              />

              {Object.keys(errors).length > 0 && (
                <p className="mt-2 text-red-500">
                  Please Complete all tabs before submitting.
                </p>
              )}
            </Card>
          </div>
          <div className="col-span-3 flex flex-col gap-4 xl:col-span-1">
            {/* Course Categories */}
            <Card className="p-4">
              <div className="mb-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setValue("activeTab", "all")}
                  className={`rounded-md px-3 py-2 text-sm ${watch("activeTab") === "all" ? "bg-primary text-white" : "border border-primary text-primary"} flex-1`}
                >
                  All Categorized
                </button>
                <button
                  type="button"
                  onClick={() => setValue("activeTab", "mostUsed")}
                  className={`rounded-md px-3 py-2 text-sm ${watch("activeTab") === "mostUsed" ? "bg-primary text-white" : "border border-primary text-primary"} flex-1`}
                >
                  Most used
                </button>
              </div>

              {/*  Add New Category Input */}
              <h2 className="mb-2 text-sm text-green-600">Add new category</h2>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Category name"
                {...register("newCategory")}
                className="mt-2 border-green-500"
              />

              <Controller
                name="parentCategory"
                control={control}
                rules={{ required: "Category is required" }}
                render={({ field, fieldState: { error } }) => (
                  <FormControl fullWidth error={!!error} className="mt-2">
                    <Select
                      {...field}
                      displayEmpty
                      defaultValue=""
                      className={`border-green-500 ${error ? "border-red-500" : ""}`}
                      renderValue={(selected) =>
                        selected ? selected : "Choose Category"
                      }
                    >
                      <MenuItem value="" disabled>
                        Choose Category
                      </MenuItem>
                      {categories.map((category, index) => (
                        <MenuItem key={index} value={category}>
                          {category}
                        </MenuItem>
                      ))}
                    </Select>
                    {error && (
                      <FormHelperText className="text-red-500">
                        {error.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />

              {/*  Add Category Button */}
              <Button
                variant="outlined"
                color="success"
                fullWidth
                className="mt-3 w-fit"
                type="button"
                onClick={addCategory} // Add new category
              >
                Add new category
              </Button>
            </Card>
            {/* Course Tags */}
            <Card className="p-4">
              <h2 className="mb-2 font-semibold">Course Tags</h2>
              <p className="text-xs text-secondary">Type your Product tag</p>

              <div className="flex gap-2">
                <TextField
                  placeholder="Enter to add tags"
                  fullWidth
                  {...register("newTag")}
                  onKeyDown={handleKeyDown}
                  className="mt-2"
                />
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
                  <div className="p-4">
                    <h2 className="mb-6 font-semibold">Viewport Images</h2>
                    <div className="flex min-h-[100px] rounded-md border p-4">
                      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                        {watch("viewportImages")?.map((img, index) => (
                          <div key={index} className="group relative">
                            <Image
                              className="h-[200px] w-full rounded-lg object-cover transition group-hover:brightness-75 md:h-[100px]"
                              src={img}
                              width={100}
                              height={100}
                              alt="Uploaded Image"
                            />
                            <div className="absolute right-1 top-1 flex w-5 items-center justify-center opacity-0 transition group-hover:opacity-100">
                              <button
                                onClick={() =>
                                  removeImage("viewportImages", index)
                                }
                                className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 p-1 text-xs text-gray-700"
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
                            className="flex h-full min-h-[160px] w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-2 text-gray-400 hover:border-primary hover:text-primary md:h-[100px] md:min-h-full"
                          >
                            <div className="flex flex-col items-center justify-center">
                              <FilterDrama />
                            </div>
                            <input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={(event) =>
                                handleImageChange(event, "viewportImages")
                              }
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="mb-6">
                    <div className="p-4">
                      <h2 className="mb-6 font-semibold">
                        Viewport Images - Mobile
                      </h2>
                      <div className="flex min-h-[100px] rounded-md border p-4">
                        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                          {watch("mobileImages")?.map((img, index) => (
                            <div key={index} className="group relative">
                              <Image
                                className="h-[200px] w-full rounded-lg object-cover transition group-hover:brightness-75 md:h-[100px]"
                                src={img}
                                width={100}
                                height={100}
                                alt="Uploaded Image"
                              />
                              <div className="absolute right-1 top-1 flex w-5 items-center justify-center opacity-0 transition group-hover:opacity-100">
                                <button
                                  onClick={() =>
                                    removeImage("mobileImages", index)
                                  }
                                  className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 p-1 text-xs text-gray-700"
                                >
                                  <Close className="text-sm" />
                                </button>
                              </div>
                            </div>
                          ))}

                          {/* Upload Button */}
                          <div className="h-full">
                            <label
                              htmlFor="dropzone-file2"
                              className="flex h-full min-h-[160px] w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-2 text-gray-400 hover:border-primary hover:text-primary md:h-[100px] md:min-h-full"
                            >
                              <div className="flex flex-col items-center justify-center">
                                <FilterDrama />
                              </div>
                              <input
                                id="dropzone-file2"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(event) =>
                                  handleImageChange(event, "mobileImages")
                                }
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            {/* Featured Image */}
            <Card className="p-4">
              <h2 className="mb-6 font-semibold">Featured Image</h2>
              <div className="flex min-h-[100px] rounded-md border p-4">
                <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {watch("featuredImages")?.map((img, index) => (
                    <div key={index} className="group relative">
                      <Image
                        className="h-[200px] w-full rounded-lg object-cover transition group-hover:brightness-75 md:h-[100px]"
                        src={img}
                        width={100}
                        height={100}
                        alt="Uploaded Image"
                      />
                      <div className="absolute right-1 top-1 flex w-5 items-center justify-center opacity-0 transition group-hover:opacity-100">
                        <button
                          onClick={() => removeImage("featuredImages", index)}
                          className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 p-1 text-xs text-gray-700"
                        >
                          <Close className="text-sm" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Upload Button */}
                  <div className="h-full">
                    <label
                      htmlFor="dropzone-file3"
                      className="flex h-full min-h-[160px] w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-2 text-gray-400 hover:border-primary hover:text-primary md:h-[100px] md:min-h-full"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <FilterDrama />
                      </div>
                      <input
                        id="dropzone-file3"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(event) =>
                          handleImageChange(event, "featuredImages")
                        }
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
};

export default AddCoursePage;

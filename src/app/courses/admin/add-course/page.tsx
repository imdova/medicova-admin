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
  Delete,
  Edit,
  ExpandMore,
  Reorder,
  Visibility,
} from "@mui/icons-material";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import SettingsTab from "@/components/UI/SettingsTab";
import TextEditor from "@/components/editor/editor";

interface Lesson {
  id: string;
  name: string;
  description: string;
}

interface Section {
  id: string;
  name: string;
  lessons: Lesson[];
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
}

export default function AddCoursePage() {
  const { register, handleSubmit, control, setValue, watch } =
    useForm<FormData>({
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
      },
    });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(watch("curriculum"));
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setValue("curriculum", items);
  };

  const addSection = () => {
    const newSection = {
      id: `${watch("curriculum").length + 1}`,
      name: `Section ${watch("curriculum").length + 1}`,
      lessons: [],
    };
    setValue("curriculum", [...watch("curriculum"), newSection]);
  };

  const addLesson = (sectionId: string) => {
    const updatedCurriculum = watch("curriculum").map((section) =>
      section.id === sectionId
        ? {
            ...section,
            lessons: [
              ...section.lessons,
              {
                id: `${section.lessons.length + 1}`,
                name: `Lesson ${section.lessons.length + 1}`,
                description: "",
              },
            ],
          }
        : section,
    );
    setValue("curriculum", updatedCurriculum);
  };

  const deleteLesson = (id: string) => {
    const updatedCurriculum = watch("curriculum").filter(
      (lesson) => lesson.id !== id,
    );
    setValue("curriculum", updatedCurriculum);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Add a New Course</h1>
      <p className="text-gray-500">Lets check your update today</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="col-span-3 flex flex-col gap-4 lg:col-span-2">
            {/* General Information */}
            <Card className="p-4">
              <h2 className="mb-3 font-semibold">General Information</h2>
              <label className="mb-3 text-xs text-secondary">Course Name</label>
              <input
                type="text"
                placeholder="Course Name"
                {...register("courseName")}
                className="mb-4 mt-2 w-full rounded border p-2 outline-none"
              />
              <label className="mb-3 block text-xs text-secondary">
                Course Description
              </label>
              <Controller
                name="courseDescription"
                control={control}
                render={({ field }) => (
                  <TextEditor
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                  />
                )}
              />
            </Card>
            {/* Excerpt Information */}
            <Card className="p-4">
              <h2 className="font-semibold">Excerpt</h2>
              <p className="mb-4 text-xs">Describe your product in short</p>
              <Controller
                name="excerpt"
                control={control}
                render={({ field }) => (
                  <TextEditor
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                  />
                )}
              />
            </Card>
            {/* Curriculum with Sections and Lessons */}
            <Card className="p-4 lg:col-span-2">
              <h2 className="mb-4 font-semibold">Curriculum</h2>
              <DragDropContext onDragEnd={onDragEnd}>
                {watch("curriculum").map((section) => (
                  <Accordion
                    key={section.id}
                    className="mt-2 border shadow-none"
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      {section.name}
                    </AccordionSummary>
                    <AccordionDetails>
                      <Droppable droppableId={section.id}>
                        {(provided) => (
                          <List
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
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
                                    secondaryAction={
                                      <div>
                                        <IconButton
                                          onClick={() =>
                                            alert(`Viewing ${lesson.name}`)
                                          }
                                        >
                                          <Visibility />
                                        </IconButton>
                                        <IconButton
                                          onClick={() =>
                                            alert(`Editing ${lesson.name}`)
                                          }
                                        >
                                          <Edit />
                                        </IconButton>
                                        <IconButton
                                          onClick={() =>
                                            alert(`Deleting ${lesson.name}`)
                                          }
                                        >
                                          <Delete />
                                        </IconButton>
                                        <IconButton
                                          {...provided.dragHandleProps}
                                        >
                                          <Reorder />
                                        </IconButton>
                                      </div>
                                    }
                                    className="mt-2 rounded-lg border bg-white p-2"
                                  >
                                    <ListItemText primary={lesson.name} />
                                  </ListItem>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </List>
                        )}
                      </Droppable>
                      <Button
                        onClick={() => addLesson(section.id)}
                        variant="contained"
                        className="mt-4"
                      >
                        Add Lesson
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </DragDropContext>
              <Button onClick={addSection} variant="contained" className="mt-4">
                Add Section
              </Button>
            </Card>
            {/* Discussion */}
            <Card className="p-4">
              <h2 className="mb-4 font-semibold">Discussion</h2>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Allow Comments"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Allow trackbacks and pingbacks"
                />
              </FormGroup>
            </Card>
            {/* Course Setting */}
            <Card className="p-4">
              <h2 className="mb-4 font-semibold">Course Setting</h2>
              <SettingsTab />
            </Card>
          </div>
          <div className="col-span-3 flex flex-col gap-4 lg:col-span-1">
            {/* Course Categories */}
            <Card className="p-4">
              <div className="mb-3 flex gap-2">
                <Button
                  variant={
                    watch("activeTab") === "all" ? "contained" : "outlined"
                  }
                  onClick={() => setValue("activeTab", "all")}
                  className="flex-1"
                >
                  All Categorized
                </Button>
                <Button
                  variant={
                    watch("activeTab") === "mostUsed" ? "contained" : "outlined"
                  }
                  onClick={() => setValue("activeTab", "mostUsed")}
                  className="flex-1"
                >
                  Most used
                </Button>
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
                className="mt-3"
              >
                Add new category
              </Button>
            </Card>

            {/* Course Tags */}
            <Card className="p-4">
              <h2 className="font-semibold">Course Tags</h2>
              <TextField
                fullWidth
                label="Add Tag"
                {...register("newTag")}
                className="mt-2"
              />
              <Button
                onClick={() =>
                  setValue("tags", [...watch("tags"), watch("newTag")])
                }
                variant="contained"
                className="mt-2"
              >
                Add
              </Button>
              <div className="mt-2">
                {watch("tags").map((tag) => (
                  <Chip key={tag} label={tag} className="m-1" />
                ))}
              </div>
            </Card>
            {/* LightSpeed Options */}
            <Card className="p-4">
              <h2 className="font-semibold">LightSpeed Options</h2>
              <Controller
                name="disableCache"
                control={control}
                render={({ field }) => (
                  <Switch
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                )}
              />{" "}
              Disable Cache
              <Controller
                name="disableLazyLoad"
                control={control}
                render={({ field }) => (
                  <Switch
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                )}
              />{" "}
              Disable LazyLoad
              <Controller
                name="disableWi"
                control={control}
                render={({ field }) => (
                  <Switch
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                )}
              />{" "}
              Disable Wi
            </Card>
            {/* Featured Image */}
            <Card className="p-4">
              <h2 className="mb-4 font-semibold">Featured Image</h2>
              <div>
                <label
                  htmlFor="dropzone-file"
                  className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-2 text-gray-400 hover:border-primary hover:text-primary md:h-28"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-2"
                      width="20"
                      height="20"
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
                    <p className="text-center text-[8px]">
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

"use client";
import { Box } from "@mui/material";
import { TreeViewBaseItem } from "@mui/x-tree-view/models";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";

interface IndustriesSlicesProps {
  categories: string[];
}
const MUI_X_CATEGORIES: TreeViewBaseItem[] = [
  {
    id: "Doctors",
    label: "Doctors",
    children: [
      { id: "Anesthesiology", label: "Anesthesiology" },
      { id: "Cardiology", label: "Cardiology" },
      { id: "Colon and Rectal Surgery", label: "Colon and Rectal Surgery" },
    ],
  },
  {
    id: "Doctors-2",
    label: "Doctors",
    children: [
      { id: "Anesthesiology-1", label: "Anesthesiology" },
      { id: "Cardiology-1", label: "Cardiology" },
      { id: "Colon and Rectal Surgery-1", label: "Colon and Rectal Surgery" },
    ],
  },
  {
    id: "Doctors-3",
    label: "Doctors",
    children: [
      { id: "Anesthesiology-3", label: "Anesthesiology" },
      { id: "Cardiology-3", label: "Cardiology" },
      { id: "Colon and Rectal Surgery-3", label: "Colon and Rectal Surgery" },
    ],
  },
  {
    id: "Doctors-4",
    label: "Doctors",
    children: [
      { id: "Anesthesiology-4", label: "Anesthesiology" },
      { id: "Cardiology-4", label: "Cardiology" },
      { id: "Colon and Rectal Surgery-4", label: "Colon and Rectal Surgery" },
    ],
  },
];

export default function SpecialtiesSlice({
  categories,
}: IndustriesSlicesProps) {
  return (
    <div className="w-full p-3">
      <Box sx={{ minHeight: 352, minWidth: 290 }}>
        {/* Tree View checkbox of Categories  */}
        <RichTreeView
          checkboxSelection
          multiSelect
          items={MUI_X_CATEGORIES}
          sx={{
            ".css-3zcvqs-MuiTreeItem-content": {
              padding: 1,
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              marginBottom: 1,
            },
          }}
        />
      </Box>
    </div>
  );
}

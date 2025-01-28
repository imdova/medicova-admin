import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";

export default function PaginatorBasicDemo() {
  const [nodes, setNodes] = useState<any[]>([]);

  useEffect(() => {
    // Set initial data for the TreeTable
    setNodes([
      {
        key: 1,
        data: {
          name: "Health care",
          slug: "Artificial_intelligence",
          type: "type",
          url: (
            <Button
              className="flex items-center gap-2 rounded-md bg-[#243878] text-[10px]"
              variant="contained"
            >
              <EditOutlined />
              URL
            </Button>
          ),
          jobs: "3 jobs",
          action: (
            <div className="flex gap-3">
              <Button
                className="flex items-center gap-2 rounded-md bg-primary text-[10px]"
                variant="contained"
              >
                <EditOutlined />
                Edit
              </Button>
              <Button
                className="rounded-md bg-[#FAA69FB2] text-[#FF0000] hover:bg-[#f7948bb2]"
                variant="contained"
              >
                <DeleteOutlineOutlined />
              </Button>
            </div>
          ),
        },
        children: [
          {
            key: 2,
            data: {
              name: "Doctors",
              slug: "Artificial_intelligence",
              type: "type",
              url: (
                <Button
                  className="flex items-center gap-2 rounded-md bg-[#243878] text-[10px]"
                  variant="contained"
                >
                  <EditOutlined />
                  URL
                </Button>
              ),
              jobs: "3 jobs",
              action: (
                <div className="flex gap-3">
                  <Button
                    className="flex items-center gap-2 rounded-md bg-primary text-[10px]"
                    variant="contained"
                  >
                    <EditOutlined />
                    Edit
                  </Button>
                  <Button
                    className="rounded-md bg-[#FAA69FB2] text-[#FF0000] hover:bg-[#f7948bb2]"
                    variant="contained"
                  >
                    <DeleteOutlineOutlined />
                  </Button>
                </div>
              ),
            },
          },
        ],
      },
      {
        key: 3,
        data: {
          name: "Pharmaceutical",
          slug: "Artificial_intelligence",
          type: "type",
          url: (
            <Button
              className="flex items-center gap-2 rounded-md bg-[#243878] text-[10px]"
              variant="contained"
            >
              <EditOutlined />
              URL
            </Button>
          ),
          jobs: "3 jobs",
          action: (
            <div className="flex gap-3">
              <Button
                className="flex items-center gap-2 rounded-md bg-primary text-[10px]"
                variant="contained"
              >
                <EditOutlined />
                Edit
              </Button>
              <Button
                className="rounded-md bg-[#FAA69FB2] text-[#FF0000] hover:bg-[#f7948bb2]"
                variant="contained"
              >
                <DeleteOutlineOutlined />
              </Button>
            </div>
          ),
        },
        children: [
          {
            key: 4,
            data: {
              name: "Doctors",
              slug: "Artificial_intelligence",
              type: "type",
              url: (
                <Button
                  className="flex items-center gap-2 rounded-md bg-[#243878] text-[10px]"
                  variant="contained"
                >
                  <EditOutlined />
                  URL
                </Button>
              ),
              jobs: "3 jobs",
              action: (
                <div className="flex gap-3">
                  <Button
                    className="flex items-center gap-2 rounded-md bg-primary text-[10px]"
                    variant="contained"
                  >
                    <EditOutlined />
                    Edit
                  </Button>
                  <Button
                    className="rounded-md bg-[#FAA69FB2] text-[#FF0000] hover:bg-[#f7948bb2]"
                    variant="contained"
                  >
                    <DeleteOutlineOutlined />
                  </Button>
                </div>
              ),
            },
          },
        ],
      },
    ]);
  }, []); // Empty dependency array to run once on component mount

  return (
    <div className="card table-data-tree mt-3">
      {/* <TreeTable
        value={nodes}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25]}
        tableStyle={{ minWidth: "1000px" }}
      >
        <Column field="name" header="Name" expander />
        <Column field="slug" header="Slug" />
        <Column field="url" header="URL" />
        <Column field="type" header="Type" />
        <Column field="jobs" header="Jobs" />
        <Column field="action" header="Action" />
      </TreeTable> */}
    </div>
  );
}

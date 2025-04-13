import { EmailOutlined, LocalPhoneOutlined } from "@mui/icons-material";
import { Avatar, Card, CardActionArea, CardContent } from "@mui/material";
import TableDropMenu from "./TableDropMenu";

type StateType = "Active" | "On leave" | "Remote";

type Employee = {
  id: number;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  department: string;
  title: string;
  status: StateType;
  avatar: string;
};

const handleState = (state: StateType) => {
  const stateStyles: Record<StateType, string> = {
    Active: "bg-green-50 text-green-700 ring-green-600/20",
    "On leave": "bg-[#EEF4FE] text-[#1F74EC] ring-[#1F74EC]-600/20",
    Remote: "bg-[#F3EEFE] text-[#4E1BD9] ring-[#4E1BD9]-600/20",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
        stateStyles[state]
      }`}
    >
      {state}
    </span>
  );
};

const CardEmployees: React.FC<{ employee: Employee }> = ({ employee }) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <div className="mb-3 flex items-center justify-between">
            <label className="container">
              <input
                value={employee.id}
                className="peer hidden cursor-pointer after:opacity-100"
                type="checkbox"
              />
              <span className="relative inline-block h-5 w-5 cursor-pointer border-2 after:absolute after:left-2/4 after:top-2/4 after:h-[10px] after:w-[10px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[2px] after:bg-primary after:opacity-0 after:content-[''] peer-checked:after:opacity-100"></span>
            </label>
            <div className="flex items-center gap-3">
              <div>{handleState(employee.status)}</div>
              <TableDropMenu />
            </div>
          </div>
          <div className="mb-5 flex h-full items-center justify-start gap-2">
            <Avatar
              src={employee.avatar}
              alt={employee.name}
              sx={{ width: 60, height: 60, mr: 1 }}
            />
            <div className="flex flex-col items-start">
              <h3 className="mb-2 text-lg">{employee.name}</h3>
              <p className="text-xs leading-none">{employee.title}</p>
            </div>
          </div>
          <div className="mb-5 flex justify-between">
            <div>
              <div className="text-xs uppercase text-secondary">Department</div>
              <div className="text-xs">{employee.department}</div>
            </div>
            <div>
              <div className="text-xs uppercase text-secondary">
                Date of joining
              </div>
              <div className="text-xs">{employee.joinDate}</div>
            </div>
          </div>
          <div className="mb-5 rounded-lg bg-gray-100">
            <div className="flex items-center gap-2 border-b p-3 text-xs">
              <EmailOutlined />
              {employee.email}
            </div>
            <div className="flex items-center gap-2 p-3 text-xs">
              <LocalPhoneOutlined />
              {employee.phone}
            </div>
          </div>
          <div className="flex gap-3">
            <button className="w-full rounded-md bg-gray-100 px-5 py-1">
              Edit
            </button>
            <button className="w-full rounded-md bg-primary px-5 py-1 text-white">
              View
            </button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardEmployees;

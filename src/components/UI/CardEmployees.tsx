import { EmailOutlined, LocalPhoneOutlined } from "@mui/icons-material";
import { Avatar, Card, CardActionArea, CardContent } from "@mui/material";
import TableDropMenu from "./TableDropMenu";

// Define the type for Status of Employers
type StateType = "Active" | "On leave" | "Remote";

// handel function status of Employers
const handleState = (state: StateType) => {
  const stateStyles: Record<StateType, string> = {
    Active: "bg-green-50 text-green-700 ring-green-600/20",
    "On leave": "bg-[#EEF4FE] text-[#1F74EC] ring-[#1F74EC]-600/20  ",
    Remote: "bg-[#F3EEFE] text-[#4E1BD9] ring-[#4E1BD9]-600/20 ",
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

const CardEmployees: React.FC = () => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center justify-center">
              <label className="container">
                <input
                  value="wedding-gift"
                  className="peer hidden cursor-pointer after:opacity-100"
                  type="checkbox"
                />
                <span className="relative inline-block h-5 w-5 cursor-pointer border-2 after:absolute after:left-2/4 after:top-2/4 after:h-[10px] after:w-[10px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[2px] after:bg-primary after:opacity-0 after:content-[''] peer-checked:after:opacity-100"></span>
              </label>
            </div>
            <div className="flex items-center gap-3">
              <div>{handleState("Remote")}</div>
              <TableDropMenu />
            </div>
          </div>
          <div className="mb-5 flex h-full items-center justify-start gap-2">
            <Avatar
              src="https://s3-alpha-sig.figma.com/img/3d5c/b72f/ae1e058c2ed75ab981a9f8bb62e96a13?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a18VE~FGFT~v8D9-O~88JSK~y9SE~MefKeuzvSlS0w4mGSL22pIspT3NCxcrlQRWIA7Jm9l5T06ss0sTIxZvYVNnjXZsXNS6-vJjjzvlei5he8HJx4rRgyI3A7IhiSRow90EBIWTjk-SHnh0pZ2M6UurtH5ydxPtGDJyLGaG8vjZo86gmxyeJoYXYIHXsyn5~ILsGVMSiXohp5M0oSdpiR4TTYuPpycTV-qtUMqaq9bjDVZNHP9hfy5Ekip9IInRsI8MfB5jJJ-GCtMirfH0lO2s8IX9GjvtB1aSEuV7rcdHolzjeWoLX3KQeTFwAbDCkNZ5NWDVsYYEvhw91DyaJw__"
              alt="Ralph Edwards"
              sx={{ width: 60, height: 60, mr: 1 }}
            />
            <div className="flex flex-col items-start">
              <h3 className="mb-2 text-lg">Kallie Towne</h3>
              <p className="text-xs leading-none">Project Manager</p>
            </div>
          </div>
          <div className="mb-5 flex justify-between">
            <div>
              <div className="text-xs uppercase text-secondary">Department</div>
              <div className="text-xs">Sales & Markiting</div>
            </div>
            <div>
              <div className="text-xs uppercase text-secondary">
                Date of joining
              </div>
              <div className="text-xs">Aug10, 2022</div>
            </div>
          </div>
          <div className="mb-5 rounded-lg bg-gray-100">
            <div className="flex items-center gap-2 border-b p-3 text-xs">
              <span>
                <EmailOutlined />
              </span>
              Example@gmail.com
            </div>
            <div className="flex items-center gap-2 p-3 text-xs">
              <span>
                <LocalPhoneOutlined />
              </span>
              (555) 321 - 254 -5563
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

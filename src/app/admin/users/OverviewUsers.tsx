"use client";
import { Avatar, Badge, Rating, styled, Typography } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import icon1 from "@/icons/icon-1.png";
import icon2 from "@/icons/icon-2.png";
import icon3 from "@/icons/icon-3.png";
import Image from "next/image";
import CountiresTable from "@/components/UI/Tables/CountiresTable";
import { LocationOnOutlined, MoreVert } from "@mui/icons-material";
import ChartUserReport from "@/components/UI/Charts/ChartUserReport";
import OverveiwUsersTable from "@/components/UI/Tables/OverveiwUsersTable";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const OvarviewUsers: React.FC = () => {
  return (
    <>
      {/* start Overveiw page */}
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex-1 lg:w-3/5">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="box-content flex items-center justify-between gap-3">
              <div>
                <span className="mb-2 block text-sm text-secondary">
                  Total Users
                </span>
                <h2 className="mb-2">2,420</h2>
                <span className="flex items-center text-[8px] text-primary">
                  <NorthIcon className="text-xs" />
                  20%
                </span>
              </div>
              <div>
                <Image src={icon3} alt="" />
              </div>
            </div>
            <div className="box-content flex items-center justify-between gap-3">
              <div>
                <span className="mb-2 block text-sm text-secondary">
                  Active Users
                </span>
                <h2 className="mb-2">1,517</h2>
                <span className="flex items-center text-[8px] text-primary">
                  <NorthIcon className="text-xs" />
                  20%
                </span>
              </div>
              <div>
                <Image src={icon2} alt="" />
              </div>
            </div>
            <div className="box-content flex items-center justify-between gap-3">
              <div>
                <span className="mb-2 block text-sm text-secondary">
                  New Users
                </span>
                <h2 className="mb-2">2,420</h2>
                <span className="flex items-center text-[8px] text-[#F81D1D]">
                  <SouthIcon className="text-xs" />
                  10%
                </span>
              </div>
              <div>
                <Image src={icon1} alt="" />
              </div>
            </div>
          </div>
          <div className="s relative mt-3 box-content">
            <ChartUserReport labelX="new" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="box-content">
            <div className="mb-3 flex justify-between gap-8 border-b pb-2">
              <Typography>Top Candidates</Typography>
              <button>
                <MoreVert />
              </button>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-2">
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="https://mui.com/static/images/avatar/3.jpg"
                    />
                  </StyledBadge>
                  <div>
                    <h2>Rebert Fox</h2>
                    <p className="text-xs text-secondary">UI/UX</p>
                  </div>
                </div>
                <span className="flex items-center gap-2 text-sm text-secondary">
                  <LocationOnOutlined />
                  Chicago,US
                </span>
                <div className="flex items-center gap-2">
                  <Rating name="read-only" value={4} readOnly />
                  <span className="text-xs text-secondary">(65)</span>
                </div>
              </div>
              <div className="mb-2 flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-2">
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="https://mui.com/static/images/avatar/3.jpg"
                    />
                  </StyledBadge>
                  <div>
                    <h2>Rebert Fox</h2>
                    <p className="text-xs text-secondary">UI/UX</p>
                  </div>
                </div>
                <span className="flex items-center gap-2 text-sm text-secondary">
                  <LocationOnOutlined />
                  Chicago,US
                </span>
                <div className="flex items-center gap-2">
                  <Rating name="read-only" value={4} readOnly />
                  <span className="text-xs text-secondary">(65)</span>
                </div>
              </div>
              <div className="mb-2 flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-2">
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="https://mui.com/static/images/avatar/3.jpg"
                    />
                  </StyledBadge>
                  <div>
                    <h2>Rebert Fox</h2>
                    <p className="text-xs text-secondary">UI/UX</p>
                  </div>
                </div>
                <span className="flex items-center gap-2 text-sm text-secondary">
                  <LocationOnOutlined />
                  Chicago,US
                </span>
                <div className="flex items-center gap-2">
                  <Rating name="read-only" value={4} readOnly />
                  <span className="text-xs text-secondary">(65)</span>
                </div>
              </div>
              <div className="mb-2 flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="https://mui.com/static/images/avatar/3.jpg"
                    />
                  </StyledBadge>
                  <div>
                    <h2>Rebert Fox</h2>
                    <p className="text-xs text-secondary">UI/UX</p>
                  </div>
                </div>
                <span className="flex items-center gap-2 text-sm text-secondary">
                  <LocationOnOutlined />
                  Chicago,US
                </span>
                <div className="flex items-center gap-2">
                  <Rating name="read-only" value={4} readOnly />
                  <span className="text-xs text-secondary">(65)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 box-content flex-1">
            <div className="mb-3 flex justify-between gap-8 border-b pb-2">
              <Typography>
                Top Countries
                <span className="ml-1 text-xs text-secondary">(Revenue)</span>
              </Typography>
              <button>
                <MoreVert />
              </button>
            </div>
            <CountiresTable />
          </div>
        </div>
      </div>
      <div className="mt-3 box-content !p-0">
        <OverveiwUsersTable Filtring={true} />
      </div>
    </>
  );
};
export default OvarviewUsers;

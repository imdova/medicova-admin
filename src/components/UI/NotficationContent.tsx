import { useState } from "react";
import { Avatar } from "@mui/material";
import Link from "next/link";
import { Notification2 } from "@/types/profile";

interface NotficationContentProps {
  notifications: Notification2[];
}

const filters = ["All Notification", "Unread"];

function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function isYesterday(date: Date): boolean {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  );
}

export default function NotficationContent({
  notifications,
}: NotficationContentProps) {
  const [filter, setFilter] = useState("All Notification");

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "Unread") return !notification.read;
    return true;
  });

  return (
    <div>
      <h2 className="mb-4 border-b pb-2 text-xl font-semibold">Notfiication</h2>
      <div className="mb-4 flex space-x-2">
        {filters.map((f) => (
          <button
            onClick={() => setFilter(f)}
            key={f}
            className={`rounded-full px-4 py-2 text-sm ${filter === f ? "bg-primary text-white" : "bg-[#eee]"}`}
          >
            {f}
          </button>
        ))}
      </div>
      <div>
        <p className="mb-2 text-sm font-semibold text-gray-500">TODAY</p>
        {filteredNotifications
          .filter((n) => isToday(n.date))
          .map((notification) => (
            <Link href={"#"} key={notification.id} className="relative mb-2">
              <div className="flex items-center space-x-3 rounded-md p-3 transition hover:bg-[#f3f3f3]">
                <Avatar src={notification.avatar} alt={notification.name} />
                <div className="flex-grow p-2">
                  <p className="text-sm font-medium">{notification.name}</p>
                  <p className="text-xs text-gray-500">
                    {notification.message}
                  </p>
                </div>
                <p className="absolute right-1 top-1 text-[8px] text-gray-400">
                  {notification.date.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
                {!notification.read && (
                  <div>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        <p className="mb-2 mt-4 text-sm font-semibold text-gray-500">
          YESTERDAY
        </p>
        {filteredNotifications
          .filter((n) => isYesterday(n.date))
          .map((notification) => (
            <Link href={"#"} key={notification.id} className="relative mb-2">
              <div className="flex items-center space-x-3 rounded-md p-3 transition hover:bg-[#f3f3f3]">
                <Avatar src={notification.avatar} alt={notification.name} />
                <div className="flex-grow p-2">
                  <p className="text-sm font-medium">{notification.name}</p>
                  <p className="text-xs text-gray-500">
                    {notification.message}
                  </p>
                </div>
                <p className="absolute right-1 top-1 text-[8px] text-gray-400">
                  {notification.date.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
                {!notification.read && (
                  <div>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                )}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

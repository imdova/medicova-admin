import { useState } from "react";
import { Card, CardContent, Avatar, Chip } from "@mui/material";

interface Notification {
  id: number;
  name: string;
  avatar: string;
  message: string;
  date: Date;
  read: boolean;
}

const dummyNotifications: Notification[] = [
  {
    id: 1,
    name: "Bessie Cooper",
    avatar: "https://via.placeholder.com/40",
    message: "Ahmed RAMADANGD didn't update his status for more than 59 days",
    date: new Date(),
    read: false,
  },
  {
    id: 2,
    name: "Marvin McKinney",
    avatar: "https://via.placeholder.com/40",
    message: "Ahmed RAMADANGD didn't update his status for more than 59 days",
    date: new Date(),
    read: true,
  },
  {
    id: 3,
    name: "Courtney Henry",
    avatar: "https://via.placeholder.com/40",
    message: "Ahmed RAMADANGD didn't update his status for more than 59 days",
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
    read: false,
  },
  {
    id: 4,
    name: "Esther Howard",
    avatar: "https://via.placeholder.com/40",
    message: "Ahmed RAMADANGD didn't update his status for more than 59 days",
    date: new Date(new Date().setDate(new Date().getDate() - 2)),
    read: true,
  },
];

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

export default function NotficationContent() {
  const [filter, setFilter] = useState("All Notification");

  const filteredNotifications = dummyNotifications.filter((notification) => {
    if (filter === "Unread") return !notification.read;
    return true;
  });

  return (
    <div className="h-full max-h-[640px] overflow-y-auto">
      <h2 className="mb-2 text-xl font-semibold">Notfiication</h2>
      <div className="mb-4 flex space-x-2">
        {filters.map((f) => (
          <Chip
            key={f}
            label={f}
            clickable
            color={filter === f ? "success" : "default"}
            onClick={() => setFilter(f)}
          />
        ))}
      </div>
      <div>
        <p className="mb-2 text-sm font-semibold text-gray-500">TODAY</p>
        {filteredNotifications
          .filter((n) => isToday(n.date))
          .map((notification) => (
            <Card key={notification.id} variant="outlined" className="mb-2">
              <CardContent className="flex items-center space-x-3">
                <Avatar src={notification.avatar} alt={notification.name} />
                <div className="flex-grow">
                  <p className="text-sm font-medium">{notification.name}</p>
                  <p className="text-xs text-gray-500">
                    {notification.message}
                  </p>
                </div>
                <p className="text-xs text-gray-400">
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
              </CardContent>
            </Card>
          ))}
        <p className="mb-2 mt-4 text-sm font-semibold text-gray-500">
          YESTERDAY
        </p>
        {filteredNotifications
          .filter((n) => isYesterday(n.date))
          .map((notification) => (
            <Card key={notification.id} variant="outlined" className="mb-2">
              <CardContent className="flex items-center space-x-3">
                <Avatar src={notification.avatar} alt={notification.name} />
                <div className="flex-grow">
                  <p className="text-sm font-medium">{notification.name}</p>
                  <p className="text-xs text-gray-500">
                    {notification.message}
                  </p>
                </div>
                <p className="text-xs text-gray-400">
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
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}

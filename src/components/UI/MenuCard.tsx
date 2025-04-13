"use client";

import { MoreHorizOutlined } from "@mui/icons-material";
import { useState, useRef, useEffect } from "react";

const MenuCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-20 inline-block" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full p-2 hover:bg-gray-200"
      >
        <MoreHorizOutlined />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white p-2 shadow-lg">
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="cursor-pointer rounded px-3 py-2 hover:bg-gray-100">
              Option 1
            </li>
            <li className="cursor-pointer rounded px-3 py-2 hover:bg-gray-100">
              Option 2
            </li>
            <li className="cursor-pointer rounded px-3 py-2 hover:bg-gray-100">
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuCard;

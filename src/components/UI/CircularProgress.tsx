"use client";
import React, { useState } from "react";

const progressData = {
  Daily: 25,
  Weekly: 50,
  Monthly: 75,
};

const getColor = (progress: number) => {
  if (progress <= 30) return "#FF5722";
  if (progress <= 70) return "#ffc107";
  return "#2ba149";
};

const CircularProgress: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] =
    useState<keyof typeof progressData>("Monthly");
  const progress = progressData[selectedPeriod];

  const radius = 50;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex h-full w-full flex-col items-center justify-between space-y-4 p-3">
      <div className="flex w-full flex-col items-center justify-between gap-2 xl:flex-row">
        <div className="flex items-center gap-2">
          <span
            style={{ backgroundColor: getColor(progress) }}
            className="h-4 w-4 rounded-md"
          ></span>
          <span className="text-sm">Point Prograss</span>
        </div>
        {/* Dropdown */}
        <select
          className="rounded-md border px-4 py-2 text-sm focus:outline-none"
          value={selectedPeriod}
          onChange={(e) =>
            setSelectedPeriod(e.target.value as keyof typeof progressData)
          }
        >
          {Object.keys(progressData).map((period) => (
            <option className="text-sm" key={period} value={period}>
              {period}
            </option>
          ))}
        </select>
      </div>
      <div className="relative">
        {/* Circular Progress */}
        <svg
          width="160"
          height="160"
          viewBox="0 0 120 120"
          className="rotate-[-90deg]"
        >
          {/* Background Circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="transparent"
            stroke="rgb(229 231 235)"
            strokeWidth={strokeWidth}
          />
          {/* Progress Circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="transparent"
            stroke={getColor(progress)}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        {/* Progress Label with Color */}
        <span
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold ${getColor(progress)}`}
        >
          {progress}%
        </span>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-2 xl:flex-row">
        <div className="flex items-center gap-2 text-sm">
          <div
            style={{ backgroundColor: getColor(progress) }}
            className="h-3 w-3 rounded-full bg-primary"
          ></div>
          <span className="text-xs">Course Sale {progress}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-secondary"></div>
          <span className="text-xs">Course Watched {100 - progress}</span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;

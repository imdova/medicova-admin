"use client";

import Image from "next/image";
import { Card, CardContent, Chip } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Link from "next/link";

interface MedicalCardProps {
  imageUrl: string;
  title: string;
  instructor: string;
  instructorImage: string;
  progress: number;
}

export default function MedicalCard({
  imageUrl,
  title,
  instructor,
  instructorImage,
  progress,
}: MedicalCardProps) {
  return (
    <Link href={"#"} className="box-content overflow-hidden rounded-xl !p-2">
      <div className="relative h-40 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="p-4">
        <div className="flex h-[140px] flex-col justify-between">
          <div className="w-fit rounded-full bg-[#d3ebdb] px-4 py-1 text-xs text-primary">
            Category
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <div className="mt-4 gap-2">
            <div className="mb-4">
              <LinearProgress
                variant="determinate"
                value={progress}
                className="h-2"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9">
                <Image
                  src={instructorImage}
                  alt={instructor}
                  width={30}
                  height={30}
                  className="h-9 w-9 rounded-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-600">Dr/ {instructor}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

"use client";

import Image from "next/image";
import { Card, CardContent, Chip } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

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
    <Card className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
      <div className="relative h-40 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex h-[150px] flex-col justify-between">
          <Chip
            label="CATEGORY"
            className="mb-2 w-fit bg-[#2BA14933] text-primary"
            size="small"
          />
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <div className="mt-2 flex items-center gap-2">
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
          <div className="mt-4">
            <LinearProgress
              variant="determinate"
              value={progress}
              className="h-2"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

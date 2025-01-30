"use client";
import MoreVertButton from "@/components/UI/MoreVertButton";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

interface CareerSliceProps {
  Careers: string[];
}

export default function CareerSlice({ Careers }: CareerSliceProps) {
  return (
    <div className="w-full rounded-md border p-3">
      <FormGroup>
        {/* Looping for Tree View checkbox of Categories  */}

        {Careers.map((Career) => (
          <div key={Career} className="flex items-center justify-between">
            <FormControlLabel
              control={<Checkbox />}
              label={
                <div className="flex items-center gap-2">
                  {Career}
                  <span className="block text-xs text-gray-500">(Doctors)</span>
                </div>
              }
            />
            <MoreVertButton />
          </div>
        ))}
      </FormGroup>
    </div>
  );
}

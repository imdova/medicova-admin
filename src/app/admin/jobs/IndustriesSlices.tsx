import MoreVertButton from "@/components/UI/MoreVertButton";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

interface IndustriesSlicesProps {
  categories: string[];
}

export default function IndustriesSlices({
  categories,
}: IndustriesSlicesProps) {
  return (
    <div className="w-full rounded-md border p-3">
      <FormGroup>
        {categories.map((category) => (
          <div key={category} className="flex items-center justify-between">
            <FormControlLabel
              control={<Checkbox />}
              label={
                <div className="flex items-center gap-2">
                  {category}
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

import { Button } from "@mui/material";

export default function AuthorPanel() {
  return (
    <div>
      <h3 className="mb-2 text-sm font-medium text-secondary">Author</h3>
      <Button
        variant="outlined"
        color="success"
        className="rounded-lg border-primary px-4 py-2 text-primary"
      >
        courses(#)
      </Button>
    </div>
  );
}

import React, { useState } from "react";
import { Grid, Chip, TextField, Box, Button, Typography } from "@mui/material";

const DynamicKeywordContent: React.FC = () => {
  // State to store the keywords array
  const [keywords, setKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  // Handle adding a new keyword
  const handleAddKeyword = () => {
    if (inputValue.trim() !== "") {
      setKeywords((prev) => [...prev, inputValue.trim()]);
      setInputValue(""); // Reset input field
    }
  };

  // Handle removing a keyword
  const handleRemoveKeyword = (keyword: string) => {
    setKeywords((prev) => prev.filter((k) => k !== keyword));
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg border p-2">
      <Typography className="mb-3" variant="h5" gutterBottom>
        Keywords
      </Typography>

      {/* Display keywords in a grid layout */}
      <Grid container className="mb-3" spacing={2}>
        {keywords.map((keyword, index) => (
          <Grid item key={index}>
            <Chip
              label={keyword}
              onDelete={() => handleRemoveKeyword(keyword)}
              className="bg-[#e3fbe3] text-primary"
            />
          </Grid>
        ))}
      </Grid>

      {/* Input field for adding a keyword */}
      <Box className="mb-3" sx={{ display: "flex", gap: 1 }}>
        <TextField
          label="Add a Keyword"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth
        />
      </Box>

      {/* Displaying the button outside of the content area */}
      <Box className="mb-3" sx={{ marginBottom: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddKeyword}
          disabled={!inputValue.trim()}
        >
          Add Keyword
        </Button>
      </Box>
    </div>
  );
};

export default DynamicKeywordContent;

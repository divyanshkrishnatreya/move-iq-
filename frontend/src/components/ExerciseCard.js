import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography, useTheme } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  // Get the current theme
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark"; // Check if dark mode is enabled

  return (
    <Link
      className="exercise-card"
      to={`/exercise/${exercise.id}`}
      style={{
        textDecoration: "none",
        display: "block",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
        width: "100%",
        maxWidth: "350px", // Ensures card size remains consistent
        margin: "10px", // Space between cards
        backgroundColor: isDarkMode ? "#333" : "#fff", // Background color based on dark mode
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
            objectFit: "cover", // Ensures image fits well
          }}
        />
      </div>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        mt="10px"
        mb="16px"
      >
        <Button
          sx={{
            color: isDarkMode ? "#000" : "#fff", // Text color based on dark mode
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            padding: "6px 16px",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            color: isDarkMode ? "#000" : "#fff", // Text color based on dark mode
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            padding: "6px 16px",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        color={isDarkMode ? "#fff" : "#000"} // Adjust text color for dark mode
        fontWeight="bold"
        sx={{
          fontSize: { lg: "18px", xs: "16px" },
          textAlign: "center",
          textTransform: "capitalize",
          marginBottom: "16px",
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;

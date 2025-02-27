import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import Icon from "../assets/icons/gym.png"; // Custom icon or image for the body part

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Box
    sx={{
      width: "200px",
      height: "250px",
      borderRadius: "15px",
      background: bodyPart === item ? "#FF2625" : "#f4f4f4", // Highlight selected body part
      transition: "background 0.3s ease, transform 0.3s ease", // Smooth transitions
      boxShadow:
        bodyPart === item
          ? "0 8px 15px rgba(0, 0, 0, 0.2)"
          : "0 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow for selected
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.05)", // Scale on hover for a fluid effect
        boxShadow: "0 12px 20px rgba(0, 0, 0, 0.3)", // Enhance shadow on hover
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      gap: "20px",
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img
      src={Icon}
      alt="body-part-icon"
      style={{ width: "60px", height: "60px", objectFit: "contain" }}
    />
    <Typography
      fontSize="22px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color={bodyPart === item ? "#fff" : "#3A1212"} // Change text color when selected
      textAlign="center"
      textTransform="capitalize"
      sx={{ transition: "color 0.3s ease" }} // Smooth text color transition
    >
      {item}
    </Typography>
  </Box>
);

export default BodyPart;

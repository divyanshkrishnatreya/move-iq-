import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  // Log the exerciseVideos prop to check its content
  console.log("exerciseVideos:", exerciseVideos);

  // Handle undefined or empty exerciseVideos gracefully
  if (!exerciseVideos || !exerciseVideos.length) {
    return <Loader />;
  }

  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" }, padding: "20px" }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="var(--text-color)"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{
          flexDirection: { lg: "row", xs: "column" },
          gap: { lg: "110px", xs: "20px" },
        }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "300px",
            }}
          >
            <img
              style={{
                borderTopLeftRadius: "20px",
                width: "100%",
                objectFit: "cover",
              }}
              src={item.video.thumbnails[0]?.url}
              alt={item.video.title}
            />
            <Box sx={{ marginTop: "10px", textAlign: "center" }}>
              <Typography
                sx={{ fontSize: { lg: "20px", xs: "16px" } }}
                fontWeight={600}
                color="var(--text-color)"
              >
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="var(--subtext-color)">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;

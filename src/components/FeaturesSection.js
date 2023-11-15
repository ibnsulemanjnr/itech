import React from "react";
import { Box, Typography } from "@mui/material";

const Feature = ({ title, description }) => {
  return (
    <Box sx={{ margin: '2rem' }}>
      <Typography variant="h4" component="div" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        {description}
      </Typography>
    </Box>
  );
};

const FeaturesSection = () => {
  return (
    <Box>
      <Feature title="Customizable Exam Practice" description="Create personalized exam experiences with customizable subject combinations, difficulty levels, and time constraints." />
      <Feature title="Performance Tracking and Analysis" description="Track your performance in real-time, providing detailed insights and analytics on your strengths and weaknesses." />
      <Feature title="Real-time Exam Results" description="Get instant results after completing an exam, including a breakdown of scores by subject." />
    </Box>
  );
};

export default FeaturesSection;

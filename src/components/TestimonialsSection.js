import React from "react";
import { Box, Typography } from "@mui/material";

const Testimonial = ({ quote, author }) => {
  return (
    <Box sx={{ margin: '2rem' }}>
      <Typography variant="body1" component="div" gutterBottom>
        "{quote}"
      </Typography>
      <Typography variant="subtitle1" component="div" gutterBottom>
        - {author}
      </Typography>
    </Box>
  );
};

const TestimonialsSection = () => {
  return (
    <Box>
      <Testimonial quote="iExam is the best tool for exam preparation. It's easy to use and helped me a lot." author="John Doe" />
      <Testimonial quote="I was able to significantly improve my scores using iExam. Highly recommended!" author="Jane Smith" />
    </Box>
  );
};

export default TestimonialsSection;

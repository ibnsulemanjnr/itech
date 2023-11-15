import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box sx={{ height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <Typography variant="h2" component="div" gutterBottom>
        Welcome to iExam
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        Prepare for your exams with ease and efficiency.
      </Typography>
      <Button variant="contained" color="primary">
        Try iExam for free
      </Button>
    </Box>
  );
};

export default Hero;

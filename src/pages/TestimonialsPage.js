import React from "react";
import { Box, Grid, Card, CardContent, Typography, Avatar } from "@mui/material";

const testimonialsData = [
  {
    text: "The iExam software has significantly improved our students' exam preparation process. Its user-friendly interface and customizable features make it a valuable tool in our institution.",
    author: "John Doe",
    role: "Principal, ABC School",
    photo: "/path/to/photo.jpg", // replace with the actual path to the photo
  },
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        Testimonials
      </Typography>
      <Grid container spacing={3}>
        {testimonialsData.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="body2" paragraph>
                  "{testimonial.text}"
                </Typography>
                <Box display="flex" alignItems="center">
                  <Avatar alt={testimonial.author} src={testimonial.photo} />
                  <Box ml={2}>
                    <Typography variant="body2" color="textSecondary">
                      {testimonial.author}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;

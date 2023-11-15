import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Typography, Box, Card, CardContent, CardMedia, Button } from "@mui/material";

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h3" gutterBottom>
            Our Products
          </Typography>
          <Typography variant="body1" paragraph>
            At IBNSULEMAN TECH LTD, we specialize in educational software solutions. Our flagship product, the iExam software, is designed to facilitate exam preparation for students taking WAEC, JAMB, Post UTME, and higher institution exams.
          </Typography>

          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/path/to/your/image.jpg" // replace with the path to your image
              alt="iExam"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                iExam Software
              </Typography>
              <Typography variant="body2">
                The iExam software is a comprehensive platform that provides students with an efficient and convenient way to practice examinations. It offers customizable subject combinations, performance tracking, real-time exam results, and push notifications for competitions.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* You can add more products using the Card component */}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ProductsPage;

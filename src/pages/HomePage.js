import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h3" gutterBottom>
            Welcome to IBNSULEMAN TECH LTD
          </Typography>
          <Typography variant="body1" paragraph>
            We are a software development company specializing in educational software solutions. 
            Our mission is to revolutionize the educational experience by leveraging technology 
            and providing students with efficient platforms to practice examinations.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="/path/to/your/image.jpg" // replace with the path to your image
                  alt="product"
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Our Products
                  </Typography>
                  <Typography variant="body2">
                    Our flagship product, the iExam software, is designed to facilitate exam preparation 
                    for students taking WAEC, JAMB, Post UTME, and higher institution exams.
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="/path/to/your/image.jpg" // replace with the path to your image
                  alt="service"
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Our Services
                  </Typography>
                  <Typography variant="body2">
                    In addition to our iExam software, we offer a comprehensive range of services tailored 
                    to the needs of our clients.
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h4" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to empower students with the necessary tools and resources to excel 
            in their academic pursuits. With our comprehensive range of services, we cater to 
            the needs of educational institutions, schools, and organizations, offering customized 
            software solutions and platforms to enhance their educational processes and examinations.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;

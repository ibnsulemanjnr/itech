import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Typography, Box } from "@mui/material";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h3" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            IBNSULEMAN TECH LTD is a dynamic and innovative software development company specializing in educational software solutions. Our mission is to revolutionize the educational experience by leveraging technology and providing students with efficient platforms to practice examinations. We envision a world where every student has access to quality educational resources and can unlock their full potential.
          </Typography>
          <Typography variant="body1" paragraph>
            At IBNSULEMAN TECH LTD, we offer a comprehensive range of services tailored to the needs of our clients. Our core services include software development, web apps, server management, database design, websites, mobile apps, networking, and CBT (Computer-Based Testing) management. With our expertise and experience, we provide scalable and customizable solutions that align with the specific requirements of educational institutions, schools, and organizations.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Our Team
          </Typography>
          <Typography variant="body1" paragraph>
            Our success is driven by the expertise, dedication, and collaborative efforts of our key team members. Each member brings unique skills and experience to contribute to the growth and development of IBNSULEMAN TECH LTD.
          </Typography>
          {/* You can add more information about your team members here */}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPage;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Typography, Box, TextField, Button } from "@mui/material";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h3" gutterBottom align="center">
            Contact Us
          </Typography>
          <form noValidate autoComplete="off">
            <Box mb={2}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Subject"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
              />
            </Box>
            <Box mb={2} align="center">
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ContactPage;

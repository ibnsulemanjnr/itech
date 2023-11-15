import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f8f8f8', marginTop: '2rem' }}>
      <Typography variant="body1" component="div" gutterBottom>
        © 2023 IBNSULEMAN TECH LTD
      </Typography>
      <Box>
        <Link to="/about" style={{ marginRight: '1rem', textDecoration: 'none', color: 'inherit' }}>
          About
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
          Contact
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;

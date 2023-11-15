import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>IBNSULEMAN TECH LTD</Link>
        </Typography>
        <Button color="inherit"><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></Button>
        <Button color="inherit"><Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link></Button>
        <Button color="inherit"><Link to="/pricing" style={{ color: 'white', textDecoration: 'none' }}>Pricing</Link></Button>
        <Button color="inherit"><Link to="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link></Button>
        <Button color="inherit"><Link to="/testimonials" style={{ color: 'white', textDecoration: 'none' }}>Testimonials</Link></Button>
        <Button color="inherit"><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

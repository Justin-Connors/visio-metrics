import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  }

  const handleLoginClick = () => {
    navigate("/login");
  }

  const handleSignupClick = () => {
    navigate("/signup");
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ cursor: "pointer" }}
              onClick={handleLogoClick}
            >
              VisioMetrics
            </Typography>
            <Button 
              color="inherit"
              sx={{ marginLeft: "auto" }}
              onClick={handleLoginClick}
            >
              Login
            </Button>
            <Button 
              color="inherit"
              onClick={handleSignupClick}
            >
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar />
    </>
  );
}

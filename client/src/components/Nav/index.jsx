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
                variant="h6" 
                component="div" 
                sx={{ flexGrow: 1, cursor: "pointer" }}
                onClick={handleLogoClick}
            >
              VisioMetrics
            </Typography>
            <Button 
              color="inherit"
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

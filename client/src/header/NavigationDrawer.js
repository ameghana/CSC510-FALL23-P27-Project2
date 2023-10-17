import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../configs/routes";

function NavigationBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">SLASH!!</Typography>
        <div style={{ flexGrow: 1 }} />
        {routes
          .filter((route) => route.name)
          .map((route, index) => (
            <Link to={route.path} key={index} style={{ textDecoration: 'none' }}>
              <Button color="inherit">{route.name}</Button>
            </Link>
          ))}
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;

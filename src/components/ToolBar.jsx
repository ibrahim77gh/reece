import * as React from "react";

import Toolbar from "@mui/material/Toolbar";

import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

function PlannerToolBar({ handleDrawerOpen, open }) {
  const navigate = useNavigate();
  return (
    <Toolbar sx={{ backgroundColor: "#FFF" }}>
      <IconButton
        color="#000"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
          ...(open && { display: "none" }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" color="#000">
        3D Room Planner
      </Typography>
      <Button
        variant="contained"
        sx={{
          width: "200px",
          ml: 170,
          borderRadius: 0,
          backgroundColor: "#6bccb8",
          float: "right",
        }}
        onClick={() => navigate(`/upload-model`)}
      >
        Upload Model
      </Button>
    </Toolbar>
  );
}

export default PlannerToolBar;

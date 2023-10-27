import { Box, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

function SecondDrawer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        height: "-webkit-fill-available",
        backgroundColor: "rgba(255,255,255,0.5)",
        position: "fixed",
        overflowY: "scroll"
      }}
    >
      <Outlet/>
    </Box>
  );
}

export default SecondDrawer;

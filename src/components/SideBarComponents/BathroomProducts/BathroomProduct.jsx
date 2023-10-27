import { Box, Button, Icon, Stack, Typography, Paper } from "@mui/material";
import { cat1, cat2, cat3 } from "./data";
import React from "react";
import Door from "../../../assets/RoomElementIcons/door.svg";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

function BathroomProduct({title, srcImg, category}) {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log(category)
    navigate(`/planner/bathroom/${category}`)
  }

  return (
    <Paper
      onClick = {handleClick}
      elevation={3}
      sx={{
        backgroundColor: "#FFF",
        width: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 2,
      }}
    >

      <img src={srcImg} style={{width:150}} />

      <Typography textAlign='center' sx={{fontWeight: 300, my: 2}}>{title}</Typography>
    </Paper>
  );
}

export default BathroomProduct;

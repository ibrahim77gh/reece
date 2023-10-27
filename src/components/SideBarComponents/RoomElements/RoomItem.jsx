import { Box, Button, Icon, Stack, Typography } from "@mui/material";
import React from "react";
import Door from "../../../assets/RoomElementIcons/door.svg";
import AddIcon from "@mui/icons-material/Add";
function RoomItem({ srcImg, title }) {
  return (
    <Box
      boxShadow={2}
      sx={{
        backgroundColor: "#FFF",
        width: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 2,
      }}
    >
      <Typography
        sx={{ fontWeight: 300, my: 2, width: 100 }}
        textAlign={"center"}
      >
        {title}
      </Typography>

      <img src={srcImg} style={{ width: 150 }} />

      <Button
        p={1}
        sx={{
          borderRadius: 20,
          boxShadow: 2,
          color: "#303030",
          my: 2,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "12px" }}> Add to Plan</Typography>
        <AddIcon ml={1} />
      </Button>
    </Box>
  );
}

export default RoomItem;

import { Box, Typography } from "@mui/material";
import React from "react";
import SideBarHeader from "../SideBarHeader";
import RoomItem from "./RoomItem";
// import { RoomElementData } from "./data";

import { useEffect, useState } from "react";
const fontStyle = {
  fontSize: "18px",
  fontWeight: 300,
};
function RoomElement({ handleDrawerClose }) {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/v1/users/getCategory?type=room-element`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.json();
    setData(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Box>
      <SideBarHeader
        heading="Room Element"
        handleDrawerClose={handleDrawerClose}
      />
      <Typography sx={[fontStyle, { my: 2, mx: 2 }]}>
        Add Room Elements
      </Typography>
      {/* <RoomItem /> */}
      <Box
        sx={{
          display: "flex ",
          flexWrap: "wrap",
          flexDirection: "row",
          margin: 2,
          gap: 2,
          justifyContent: "center",
        }}
      >
        {/* {data?.map((item, idx) => (
          <RoomItem srcImg={item.srcImg} title={item.title} key={idx} />
        ))} */}
        {data?.map((item, idx) => (
          <RoomItem
            srcImg={`${import.meta.env.VITE_BASE_URL}${item?.thumbnailUrl}`}
            title={item?.modelName}
            key={idx}
          />
        ))}
      </Box>
    </Box>
  );
}

export default RoomElement;

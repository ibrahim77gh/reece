import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";
import { closeSecondDrawer } from "../../store/slices/themeSlice";
function SideBarHeader({ heading }) {
  const dispatch = useDispatch();

  return (
    <Stack
      flexDirection="row"
      sx={{
        width: "100%",
        height: "4rem",
        backgroundColor: "#FFF",
        padding: 3,
      }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography sx={{ fontWeight: "300" }}>{heading}</Typography>
      <Button onClick={() => dispatch(closeSecondDrawer())}>
        <CloseIcon />
      </Button>
    </Stack>
  );
}

export default SideBarHeader;

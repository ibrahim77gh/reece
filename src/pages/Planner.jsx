import * as React from "react";

import SecondDrawer from "../components/SecondDrawer";
import PlannerDrawer from "../components/PlannerDrawer";
import PlannerAppBar from "../components/PlannerAppBar";
import { useNavigate } from "react-router-dom";
import RightSideBar from "../components/RightSideBar";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { closeSecondDrawer, openSecondDrawer } from "../store/slices/themeSlice";

export default function MiniDrawer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);
  const secondDrawer = theme?.secondDrawer
  console.log(secondDrawer)
  
  const [open, setOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [roomTitle, setRoomTitle] = React.useState("");

  const openMainDrawer = (title, href) => {
    // setRoomTitle(buttonTitle);
    console.log(title, href)

    // setOpenDrawer(true);
    console.log("OPEN MAIN DRAWER")
    dispatch(openSecondDrawer())
    navigate(href);
  };

  const closeMainDrawer = () => {

    console.log("CLOSE MAIN DRAWER")

    setOpen(false);
    setOpenDrawer(false);
    dispatch(closeSecondDrawer())
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <PlannerAppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <PlannerDrawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        openMainDrawer={openMainDrawer}
      />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          marginTop: "4rem",
        }}
      >
        {secondDrawer && (
          <SecondDrawer
            roomTitle={roomTitle}
            handleDrawerClose={closeMainDrawer}
          />
        )}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "#e5e7eb",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          3JS MODEL
        </Box>
        <RightSideBar />
      </Box>
    </Box>
  );
}

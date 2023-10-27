import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import { Stack, Typography } from "@mui/material";
import HeroBody1 from "../components/HeroBody1";
import HeroBody2 from "../components/HeroBody2";
import Footer from "../components/Footer";
import { heroBody3Description } from "../constants";

function HomePage() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate(`/login`);
  // });
  return (
    <Stack direction='column'>
      <Navbar/>
      <Slider/>
      <HeroBody1/>
      <HeroBody2/>
      <Stack bgcolor='#F4F4F4'  py={10} width='100%' alignItems='center' justifyContent='center'>
        <Typography maxWidth={800} textAlign='center'>{heroBody3Description}</Typography>
      </Stack>
      <Footer/>
    </Stack>
  )
}

export default HomePage;

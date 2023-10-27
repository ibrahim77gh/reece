import React from 'react'
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import { Typography } from '@mui/material';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.png'
import Wrapper from './Wrapper';

const Slider = () => {
  const textShadow = "2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000";

  const textStyle = {
    fontWeight: 700,
    color: "white",
    variant: "h1",
    textShadow: textShadow, // Add the black outline
  };


    return (
        <HeroSlider
          height={"100vh"}
          autoplay
          controller={{
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay: 100,
            onSliding: (nextSlide) =>
              console.debug("onSliding(nextSlide): ", nextSlide),
            onBeforeSliding: (previousSlide, nextSlide) =>
              console.debug(
                "onBeforeSliding(previousSlide, nextSlide): ",
                previousSlide,
                nextSlide
              ),
            onAfterSliding: (nextSlide) =>
              console.debug("onAfterSliding(nextSlide): ", nextSlide)
          }}
        >
          <Overlay>
            <Wrapper>
              <Typography sx={textStyle} fontWeight={700} color='white' variant='h2'>
                  Give Ideas Life
              </Typography>
            </Wrapper>
          </Overlay>
    
          <Slide
            shouldRenderMask
            label="Room 3D"
            background={{
              backgroundImageSrc: image1
            }}
          />
    
          <Slide
            shouldRenderMask
            label="Experience 3D"
            background={{
              backgroundImageSrc: image2
            }}
          />
    
          <MenuNav />
        </HeroSlider>
      );
}

export default Slider
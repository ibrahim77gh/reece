import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import BathroomProduct from './BathroomProduct'
import SideBarHeader from '../SideBarHeader'
import { BathroomProductData } from './data'
import SearchBar from './SearchBar'
import { Outlet } from 'react-router-dom'

const fontStyle = {
    fontSize: "18px",
    fontWeight: 300,
  };

const BathroomProducts = ({handleDrawerClose, data}) => {
  return (
    <Box>
        <SideBarHeader heading="Bathroom Products"  handleDrawerClose={handleDrawerClose} />
        <Typography sx={[fontStyle, { my: 2, mx: 2 }]}>
            Add Bathroom Products
        </Typography>
        <Box p={4}><SearchBar/></Box>
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
            <Outlet/>
        </Box>
  </Box>
  )
}

export default BathroomProducts
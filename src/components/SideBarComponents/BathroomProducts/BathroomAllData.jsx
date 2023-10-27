import React from 'react'
import BathroomProduct from './BathroomProduct'
import { Grid } from '@mui/material'

const BathroomAllData = ({data}) => {
  return (
    <>
        {data?.map((item, idx) => (
            <Grid item xs={12} sm={6} key={idx} sx={{ padding: '0 8px' }}>
                <BathroomProduct srcImg={item.srcImg} title={item.title} category={item.category}/>
            </Grid>
        ))}
    </>
  )
}

export default BathroomAllData
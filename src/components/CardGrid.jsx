import React from 'react';
import Grid from '@mui/material/Grid';
import CustomCard from './CustomCard'; // Import the CustomCard component

const CardGrid = ({cardData}) => {
    return (
        <Grid width='100%' mb={10} alignItems='center' justifyContent='center' container spacing={5}>
            {cardData.map((data, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <CustomCard {...data} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CardGrid;

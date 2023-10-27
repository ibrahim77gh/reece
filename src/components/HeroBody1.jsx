import React from 'react';
import CardGrid from './CardGrid'
import { Stack, Typography } from '@mui/material';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.png'

const cardData = [
    {
        image: image1,
        title: 'Layout',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
    {
        image: image2,
        title: 'Select',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
    // Add more data objects for additional cards
];


const HeroBody1 = () => {
    return (
        <Stack bgcolor='#F4F4F4' alignItems='center' justifyContent='center' width='100%' direction='column'>
            <Typography my={10} variant='h5' fontWeight='700'>Give Ideas Life</Typography>
            <CardGrid cardData={cardData}/>
        </Stack>
    );
};

export default HeroBody1;

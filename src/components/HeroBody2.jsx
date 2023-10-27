import React from 'react'
import CardGrid from './CardGrid'
import { Stack, Typography } from '@mui/material'
import { heroBodyDescription } from '../constants'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.png'

const cardData = [
    {
        image: image1,
        title: 'The Block',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
    {
        image: image2,
        title: 'Three Birds Renovation',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    },
    // Add more data objects for additional cards
];

const HeroBody2 = () => {
    return (
        <Stack spacing={5} my={5} alignItems='center' justifyContent='center' width='100%' direction='column'>
            <Typography variant='h5' fontWeight='700'>Need some inspiration?</Typography>
            <Typography maxWidth={500} textAlign='center'>{heroBodyDescription}</Typography>
            <CardGrid cardData={cardData}/>
            <Stack style={{marginTop:'100px'}} justifyContent='center' alignItems='center' spacing={1} direction='row'>
                <AddCircleOutlineIcon style={{transform: 'scale(1.5)',}}/>
                <Typography>Create your plan</Typography>
            </Stack>
        </Stack>
    );
}

export default HeroBody2
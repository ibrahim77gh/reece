import React from 'react';
import { AppBar, Toolbar, Typography, Container, Stack } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import logo from '../assets/reece-logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar sx={{ backgroundColor: 'white' }}>
            <Container>
                <Toolbar disableGutters>
                    <img style={{ width: '80px', height: '80px' }} src={logo} alt="" />
                    <Stack
                        spacing={1}
                        direction="row"
                        sx={{
                            ml: 'auto', // Move the Stack to the right end
                            alignItems: 'center', // Vertically center the content
                        }}
                    >
                        <NavLink to='/login'><AccountCircle /></NavLink>
                        <NavLink to='/login'><Typography color="black">Login/Register</Typography></NavLink>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;

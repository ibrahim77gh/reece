import React from 'react'
import { Typography, Container, Grid, Link, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Reece
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {

    const footers = [
        {
          title: 'About Us',
          description: ['Team', 'History', 'Contact us', 'Locations'],
        },
        {
          title: 'Follow Us',
          description: [
            <FacebookIcon/>,
            <InstagramIcon/>,
            <TwitterIcon/>,
            <LinkedInIcon/>,
          ],
        },
        {
          title: 'Customer Help',
          description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
        },
        {
          title: 'Our Business Units',
          description: ['Privacy policy', 'Terms of use'],
        },
      ];

  return (
    <Container
        width='100%'
        component="footer"
        sx={{
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color='rgb(24, 33, 109);' fontWeight={700} gutterBottom>
                {footer.title}
              </Typography>
              <Stack direction='column'>
                {footer.description.map((item, index) => (
                  <Stack key={index} direction='column'>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 20}} />
      </Container>
  )
}

export default Footer;
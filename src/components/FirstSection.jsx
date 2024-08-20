import React from 'react';
import { CssBaseline, Container, Box, Typography, Button } from '@mui/material';
import FirstSec from '../assets/first_sec.webp';

export const FirstSection = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container disableGutters="true" maxWidth="xl">
                <Box sx={{ height: '170vh' }}>
                    <Typography variant="h2" component="h1" sx={{ textAlign: 'center', fontSize: 70, pt: 15 }}>
                        TAKE CONTROL OF EVERYDAY WORK.
                    </Typography>
                    <Typography variant="h2" component="h1" sx={{ textAlign: 'center', fontSize: '25px', padding: 5 }}>
                        Simplify scheduling, time clocks, and payroll all in one app. Manage your team with messaging and HR built for small business.
                    </Typography>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button variant="contained" color="secondary" size="large" sx={{ textTransform: 'none', fontWeight: 700, padding: '15px 30px 15px 30px' }}>Get started for free</Button>
                    </Box>

                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        height="auto"
                        maxWidth="100%"
                    >
                        <img src={FirstSec} alt="Centered" />
                    </Box>
                </Box>
            </Container>
        </React.Fragment >
    );
};

import { Box, Container, CssBaseline, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import timeclock from '../assets/timeclock-img-1-1.png.webp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Scheduling from '../assets/scheduling-1-1.png.webp';
import payroll from '../assets/payroll-img@2x.png.webp';
import communication from '../assets/communication-img-1-1.png.webp';

export const ThirdSection = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container disableGutters="true" maxWidth="xl">
                <Box>
                    <Typography variant="h1" component="h1" sx={{ textAlign: 'center', fontSize: '35px', padding: 5 }}>
                        The everything app for hourly teams.
                    </Typography>
                    <Box sx={{ flexGrow: 1, bgcolor: '#f2f2ec', padding: "20px 100px 30px 100px" }}>
                        <Grid container>
                            <Grid item xs={6} md={6} sx={{ position: 'relative' }}>
                                <Box sx={{ margin: 0, position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
                                    <Typography variant="h1" component="h1" sx={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', mb: '10px', letterSpacing: '1px' }}>
                                        TIME CLOCKS
                                    </Typography>
                                    <Typography variant="h2" component="h1" sx={{ fontSize: '32px', fontWeight: 'bold', mb: '40px', lineHeight: '2rem' }}>
                                        Take back your time.
                                    </Typography>
                                    <Typography variant="h3" component="h1" sx={{ fontSize: '16px' }}>
                                        Turn any device into a time clock to track hours, breaks,<br /> and overtime. No paper. No spreadsheets. No nonsense.
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                                        <Link href="#" underline="none" color="#7e3dd4">
                                            <Typography variant="body1">Learn more about time tracking</Typography>
                                        </Link>
                                        <ArrowForwardIcon sx={{ color: '#7e3dd4' }} />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <img width="699" height="674" src={timeclock} style={{ display: "inline-block", height: "auto", maxWidth: '100%' }} alt="Centered" />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={6} md={6}>
                                <img width="650" height="550" src={Scheduling} style={{ display: "inline-block", height: "auto", maxWidth: '100%' }} alt="Centered" />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ paddingLeft: 15, position: 'relative' }}>
                                <Box sx={{ margin: 0, position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
                                    <Typography variant="h1" component="h1" sx={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', mb: '10px', letterSpacing: '1px' }}>
                                        EMPLOYEE SCHEDULING
                                    </Typography>
                                    <Typography variant="h2" component="h1" sx={{ fontSize: '32px', fontWeight: 'bold', mb: '40px', lineHeight: '2rem' }}>
                                        End the scheduling chaos.
                                    </Typography>
                                    <Typography variant="h3" component="h1" sx={{ fontSize: '16px' }}>
                                        Keep your schedule online so it’s always up-to-date for<br /> your team. Adjust it from anywhere—then instantly share<br /> it with one tap.
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                                        <Link href="#" underline="none" color="#7e3dd4">
                                            <Typography variant="body1">Learn more about employee scheduling</Typography>
                                        </Link>
                                        <ArrowForwardIcon sx={{ color: '#7e3dd4' }} />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={6} md={6} sx={{ position: 'relative' }}>
                                <Box sx={{ margin: 0, position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
                                    <Typography variant="h1" component="h1" sx={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', mb: '10px', letterSpacing: '1px' }}>
                                        PAYROLL
                                    </Typography>
                                    <Typography variant="h2" component="h1" sx={{ fontSize: '32px', fontWeight: 'bold', mb: '40px', lineHeight: '2rem' }}>
                                        Run payroll while you’re on<br /> the run.
                                    </Typography>
                                    <Typography variant="h3" component="h1" sx={{ fontSize: '16px' }}>
                                        No more data entry or calculations. With a couple clicks,<br /> your timesheets magically become wages, taxes, and<br /> paychecks. Homebase sends direct deposits to<br /> employees and files your payroll taxes for you.
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                                        <Link href="#" underline="none" color="#7e3dd4">
                                            <Typography variant="body1">Learn more about payroll</Typography>
                                        </Link>
                                        <ArrowForwardIcon sx={{ color: '#7e3dd4' }} />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <img width="1060" height="1060" src={payroll} style={{ display: "inline-block", height: "auto", maxWidth: '100%' }} alt="Centered" />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={6} md={6}>
                                <img width="668" height="668" src={communication} style={{ display: "inline-block", height: "auto", maxWidth: '100%' }} alt="Centered" />
                            </Grid>
                            <Grid item xs={6} md={6} sx={{ paddingLeft: 15, position: 'relative' }}>
                                <Box sx={{ margin: 0, position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
                                    <Typography variant="h1" component="h1" sx={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', mb: '10px', letterSpacing: '1px' }}>
                                        BUILT-IN TEAM MESSAGING
                                    </Typography>
                                    <Typography variant="h2" component="h1" sx={{ fontSize: '32px', fontWeight: 'bold', mb: '40px', lineHeight: '2rem' }}>
                                        Manage the messaging<br /> mayhem.
                                    </Typography>
                                    <Typography variant="h3" component="h1" sx={{ fontSize: '16px' }}>
                                        Ditch the group texts that always miss the newbie.<br /> Communicate with your whole team in Homebase—and<br /> know that they got your messages.
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                                        <Link href="#" underline="none" color="#7e3dd4">
                                            <Typography variant="body1">Learn more about team communication</Typography>
                                        </Link>
                                        <ArrowForwardIcon sx={{ color: '#7e3dd4' }} />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
};

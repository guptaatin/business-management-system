import { Box, Container, CssBaseline, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import Forth from '../assets/Forth-Nomad-team-1-1.png.webp';

export const FourthSection = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container disableGutters="true" maxWidth="xl">
                <Box>
                    <Typography variant="h1" component="h1" sx={{ textAlign: 'center', fontSize: '35px', padding: 5 }}>
                        Managers save 5+ hours a week<br /> with Homebase.
                    </Typography>
                    <Typography variant="h3" component="h3" sx={{ textAlign: 'center', fontSize: '25px' }}>
                        Get everything you need to manage the everyday chaos,<br /> supercharge your team, and level up your business.
                    </Typography>
                    <Box sx={{ flexGrow: 1, padding: "70px 130px 70px 140px" }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid xs={2} sm={4} md={4}>
                                <Box sx={{ bgcolor: '#f2f2ec', borderRadius: '10px', padding: '30px', height: '100%', mr: 3 }}>
                                    <Typography sx={{ fontSize: '30px', fontFamily: 'Druk Web', color: '#7e3dd4', lineHeight: '60px', textTransform: 'uppercase' }}>Get to work.</Typography>
                                    <Typography variant="p" component="p" sx={{ lineHeight: '1.5rem', color: 'inherit', margin: "10px 0" }}>
                                        <Link href="#" underline="none" color="#7e3dd4" sx={{ fontWeight: 'bold' }}>
                                            Scheduling
                                        </Link><br />
                                        Build schedules, track availability,<br /> forecast labor, and optimize your team.
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{ lineHeight: '1.5rem', color: 'inherit', margin: "10px 0" }}>
                                        <Link href="#" underline="none" color="#7e3dd4" sx={{ fontWeight: 'bold' }}>
                                            Time clocks
                                        </Link><br />
                                        Track hours, overtime, and breaks to<br /> make payroll prep a breeze.
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{ lineHeight: '1.5rem', color: 'inherit', margin: "10px 0" }}>
                                        <Link href="#" underline="none" color="#7e3dd4" sx={{ fontWeight: 'bold' }}>
                                            Communication
                                        </Link><br />
                                        Get your team in sync with our<br /> messenger, real-time alerts, reminders,<br /> and more.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={2} sm={4} md={4}>
                                <Box sx={{ bgcolor: '#f2f2ec', borderRadius: '10px', padding: '30px', height: '100%', mr: 3, backgroundImage: 'url(https://joinhomebase.com/wp-content/uploads/2023/12/forth-nomad-2.jpg)', backgroundSize: 'cover' }}>
                                    <img src={Forth} style={{ position: 'relative', top: '80%' }} />
                                    <Typography variant="p" component="p" sx={{ lineHeight: '1.5rem', color: 'inherit', margin: "10px 0", position: 'relative', top: '77%', color: '#fff' }}>
                                        Houston, TX
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={2} sm={4} md={4}>
                                <Box sx={{ bgcolor: '#f2f2ec', borderRadius: '10px', padding: '30px', height: '100%' }}>
                                    <Typography sx={{ fontSize: '30px', fontFamily: 'Druk Web', color: '#7e3dd4', lineHeight: '60px', textTransform: 'uppercase' }}>PAY YOUR TEAM.</Typography>
                                    <Typography variant="p" component="p" sx={{ lineHeight: '1.5rem', color: 'inherit', margin: "10px 0" }}>
                                        <Link href="#" underline="none" color="#7e3dd4" sx={{ fontWeight: 'bold' }}>
                                            Payroll
                                        </Link><br />
                                        Run payroll in just a few clicks when your timesheets and payroll are in one place.
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{ lineHeight: '1.5rem', color: 'inherit', margin: "10px 0" }}>
                                        <Link href="#" underline="none" color="#7e3dd4" sx={{ fontWeight: 'bold' }}>
                                            Early wage access
                                        </Link><br />
                                        Homebase gives your employees early access to their earnings with no cost or liability to you.
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{ lineHeight: '1.5rem', color: 'inherit', margin: "10px 0" }}>
                                        <Link href="#" underline="none" color="#7e3dd4" sx={{ fontWeight: 'bold' }}>
                                            Financial health
                                        </Link><br />
                                        Your employees can forecast their earnings and plan for bills right in the Homebase app.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={2} sm={4} md={4}>
                                <Box sx={{ bgcolor: '#f2f2ec', borderRadius: '10px', padding: '30px', height: '100%', mr: 3, mt: 3 }}>
                                    <Typography sx={{ fontSize: '30px', fontFamily: 'Druk Web', color: '#7e3dd4', lineHeight: '60px', textTransform: 'uppercase' }}>Grow your team.</Typography>
                                    <Typography variant="p" component="p" sx={{ lineHeight: '1.5rem', color: 'inherit', margin: "10px 0" }}>
                                        <Link href="#" underline="none" color="#7e3dd4" sx={{ fontWeight: 'bold' }}>
                                            Hiring
                                        </Link><br />
                                        Post to top job boards and manage your applicants all in one place.
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{ lineHeight: '1.5rem', color: 'inherit', margin: "10px 0" }}>
                                        <Link href="#" underline="none" color="#7e3dd4" sx={{ fontWeight: 'bold' }}>
                                            Onboarding
                                        </Link><br />
                                        Send a welcome packet for new hires to self-onboard and e-sign their forms.
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{ lineHeight: '1.5rem', color: 'inherit', margin: "10px 0" }}>
                                        <Link href="#" underline="none" color="#7e3dd4" sx={{ fontWeight: 'bold' }}>
                                            HR & team roster
                                        </Link><br />
                                        Organize all your employee information in one place.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={2} sm={4} md={4}>
                                <Box sx={{ bgcolor: '#f2f2ec', borderRadius: '10px', padding: '30px', height: '100%', mr: 3, mt: 3 }}>
                                    <Typography sx={{ fontSize: '30px', fontFamily: 'Druk Web', color: '#7e3dd4', lineHeight: '60px', textTransform: 'uppercase' }}>KEEP EMPLOYEES HAPPY.</Typography>
                                    <Typography variant="p" component="p" sx={{ lineHeight: '1.5rem', color: 'inherit', margin: "10px 0" }}>
                                        <Link href="#" underline="none" color="#7e3dd4" sx={{ fontWeight: 'bold' }}>
                                            Time off
                                        </Link><br />
                                        Manage availability, process time-off requests, and track paid-time-off polices.
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{ lineHeight: '1.5rem', color: 'inherit', margin: "10px 0" }}>
                                        <Link href="#" underline="none" color="#7e3dd4" sx={{ fontWeight: 'bold' }}>
                                            Employee happiness
                                        </Link><br />
                                        Perks and tools to help your team be happy and successful.
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{ lineHeight: '1.5rem', color: 'inherit', margin: "10px 0" }}>
                                        <Link href="#" underline="none" color="#7e3dd4" sx={{ fontWeight: 'bold' }}>
                                            Performance & retention
                                        </Link><br />
                                        Know who’s late and who’s on time, and keep a pulse on your team.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={2} sm={4} md={4}>
                                <Box sx={{ bgcolor: '#f2f2ec', borderRadius: '10px', padding: '30px', height: '100%', mt: 3 }}>
                                    <Typography sx={{ fontSize: '30px', fontFamily: 'Druk Web', color: '#7e3dd4', lineHeight: '60px', textTransform: 'uppercase' }}>PROTECT YOUR BUSINESS.</Typography>
                                    <Typography variant="p" component="p" sx={{ lineHeight: '1.5rem', color: 'inherit', margin: "10px 0" }}>
                                        <Link href="#" underline="none" color="#7e3dd4" sx={{ fontWeight: 'bold' }}>
                                            Labor cost controls
                                        </Link><br />
                                        Manage costs, build forecasts, and adapt quickly as demand and budgets change.
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{ lineHeight: '1.5rem', color: 'inherit', margin: "10px 0" }}>
                                        <Link href="#" underline="none" color="#7e3dd4" sx={{ fontWeight: 'bold' }}>
                                            HR & compliance
                                        </Link><br />
                                        Modern tools, certified HR advisors, and expert guides to help you stay compliant.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
};

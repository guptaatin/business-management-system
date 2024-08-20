import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material';
import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import capterra from '../assets/capterra@2x.png.webp';

export const SixthSection = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ textAlign: "center", padding: '4rem 10rem' }}>
                    <Typography variant='h1' component='h1' sx={{ fontWeight: '950', fontSize: '40px', lineHeight: '3rem', mb: '2rem' }}>2,000,000+ workers conquer their workdays with Homebase.</Typography>
                    <Typography variant='h1' component='h1' sx={{ fontSize: '20px', fontWeight: 500 }}>But don’t take our word for it.</Typography>
                </Box>
                <Box sx={{ padding: '0 4rem' }}>
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={3}>
                            <Box sx={{ textAlign: 'center', bgcolor: '#F2F2EC', padding: '80px 30px', height: '100%', width: '100%', borderRadius: '10px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', minHeight: '50px' }}>
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                    <StarHalfIcon />
                                </Box>
                                <Box sx={{ fontSize: '16px', color: "#1E0B3A", mt: '20px', padding: "0 1.75rem" }}><span>4.6 out of 5</span></Box>
                                <Box sx={{ fontSize: '16px', color: "#1E0B3A", mt: '20px', padding: "0 1.75rem" }}><span>Top Performer Time Clock & Scheduling Software 2022</span></Box>
                                <Box sx={{ height: '6rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '160px' }}>
                                    <img src={capterra} style={{ height: 'auto', maxWidth: '100%', WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid xs={3}>
                            <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#F2F2EC', padding: '80px 30px', height: '100%', width: '100%', borderRadius: '10px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', minHeight: '50px' }}>
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                    <StarHalfIcon />
                                </Box>
                                <Box sx={{ fontSize: '16px', color: "#1E0B3A", mt: '20px', padding: "0 1.75rem" }}><span>4.6 out of 5</span></Box>
                                <Box sx={{ fontSize: '16px', color: "#1E0B3A", mt: '20px', padding: "0 1.75rem" }}><span>Top Performer Time Clock & Scheduling Software 2022</span></Box>
                                <Box sx={{ height: '6rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '160px' }}>
                                    <img src={capterra} style={{ height: 'auto', maxWidth: '100%', WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid xs={3}>
                            <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#F2F2EC', padding: '80px 30px', height: '100%', width: '100%', borderRadius: '10px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', minHeight: '50px' }}>
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                    <StarHalfIcon />
                                </Box>
                                <Box sx={{ fontSize: '16px', color: "#1E0B3A", mt: '20px', padding: "0 1.75rem" }}><span>4.6 out of 5</span></Box>
                                <Box sx={{ fontSize: '16px', color: "#1E0B3A", mt: '20px', padding: "0 1.75rem" }}><span>Top Performer Time Clock & Scheduling Software 2022</span></Box>
                                <Box sx={{ height: '6rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '160px' }}>
                                    <img src={capterra} style={{ height: 'auto', maxWidth: '100%', WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid xs={3}>
                            <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#F2F2EC', padding: '80px 30px', height: '100%', width: '100%', borderRadius: '10px' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', minHeight: '50px' }}>
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                    <StarHalfIcon />
                                </Box>
                                <Box sx={{ fontSize: '16px', color: "#1E0B3A", mt: '20px', padding: "0 1.75rem" }}><span>4.6 out of 5</span></Box>
                                <Box sx={{ fontSize: '16px', color: "#1E0B3A", mt: '20px', padding: "0 1.75rem" }}><span>Top Performer Time Clock & Scheduling Software 2022</span></Box>
                                <Box sx={{ height: '6rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '160px' }}>
                                    <img src={capterra} style={{ height: 'auto', maxWidth: '100%', WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
};

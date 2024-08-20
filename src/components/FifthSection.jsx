import { Box, Container, CssBaseline, IconButton, Link, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import Quote from '../assets/quote-back-small.webp';
import Testimonial from '../assets/testimonial-back-small.webp';
import Ashley from '../assets/Ashley-Ortiz.svg';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import reclaim from '../assets/reclaim.webp';

export const FifthSection = () => {
    const [showIframe, setShowTframe] = useState(false);

    const handleIframe = () => {
        setShowTframe(true);
    };

    const handleCloseIframe = () => {
        setShowTframe(false);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container disableGutters maxWidth="xl">
                <Box sx={{ textAlign: 'center', bgcolor: 'rgba(0,0,0,5)', zIndex: 100, padding: '4rem 0', height: '600px', backgroundImage: 'url(https://joinhomebase.com/wp-content/uploads/2023/12/christine-blind-goat-1-1.jpg)', backgroundSize: 'cover' }}>
                    {/* <Box sx={{ left: 0, right: 0, top: 0, bottom: 0,  }}></Box> */}
                    <Box sx={{ display: 'flex', padding: "0 100px", flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 200 }}>
                        <img width='140' height='64' src={Quote} />
                        <Typography sx={{ fontSize: '40px', fontWeight: '800', lineHeight: '120%', mt: '30px', mb: '30px', color: '#fff' }}>Homebase gets everyone on the same page from partners to chefs to management to staff.</Typography>
                        <img width='140' height='64' src={Testimonial} />
                        <Box sx={{ width: '100%', padding: '50px', display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ textAlign: 'left' }}>
                                <img src={Ashley} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                                <Box sx={{ fontSize: 'var(--hb-text-sm)', color: '#ffffff', textAlign: 'left', mt: '10px' }}>Restaurant owner<br /> The Blind Goat & Stuffed<br /> Belly<br /> Houston, TX</Box>
                            </Box>
                            <Box sx={{ display: 'flex', color: "#fff", alignItems: 'center', justifyContent: 'flex-end', height: '100%' }} onClick={handleIframe}>
                                <PlayCircleOutlineIcon sx={{ width: '80px', height: '80px' }} />
                                <Typography variant="p" component="h3">Check out Christine’s story</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Modal
                        open={showIframe}
                        onClose={handleCloseIframe}
                        aria-labelledby="iframe-modal-title"
                        aria-describedby="iframe-modal-description"
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '80%',
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                boxShadow: 24,
                                p: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                            }}
                        >
                            <IconButton onClick={handleCloseIframe} sx={{ alignSelf: 'flex-end' }}>
                                <CloseIcon />
                            </IconButton>
                            <iframe
                                title="example-iframe"
                                src="https://www.youtube.com/embed/H8IjH8dexsk&utm_source=pmp&utm_medium=marketing-partnerships&utm_campaign=pmp-listicle-best-management-software?autoplay=1"
                                width="100%"
                                height="500px"
                                style={{ border: 'none', marginTop: '16px' }}
                            ></iframe>
                        </Box>
                    </Modal>
                </Box>
                <Box sx={{ bgcolor: "#1E0B3A", padding: "4rem 4rem", textAlign: "center" }}>
                    <Box sx={{ width: "100%", padding: "0 1rem", margin: "0 auto" }}>
                        <Box sx={{ textAlign: "left", position: "relative", display: 'flex', justifyContent: "space-between", alignItems: "flex-end" }}>
                            <Typography variant="h2" component="h2" sx={{ color: "#7E3DD4", fontSize: '70px', fontFamily: "Druk Web", lineHeight: 1.5, letterSpacing: "2.7px" }}>
                                <img width='90px' height='67px' src={reclaim} style={{ display: 'inline', marginRight: '25px' }} />
                                TAKE CONTROL.
                                <span style={{ color: "#fff" }}>READY YOUR CREW.</span>
                            </Typography>
                            <Link href="#" underline="none" sx={{ textAlign: "center", padding: "1rem 2rem", margin: 0, borderRadius: "4px", cursor: "pointer", fontFamily: "inherit", fontStyle: "normal", fontSize: "1rem", lineHeight: "1rem", borderBlockColor: "#E0FF00", whiteSpace: "nowrap", display: "inline-block", fontWeight: 'bold', bgcolor: "#E0FF00", color: "#1E0B3A" }}>
                                Get started for free
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
};

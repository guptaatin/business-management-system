import { Box, Container, CssBaseline, Typography } from '@mui/material';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aharon from '../assets/aharon.png.webp';
import antique_taco from '../assets/antique_taco.png.webp';
import barzotto from '../assets/barzotto.png.webp';
import Bliss from '../assets/Bliss-Small-Batch.png.webp';
import Blush from '../assets/blush_teacoffee.png.webp';
import damores_pizza from '../assets/damores_pizza.png.webp';
import gecko_girls from '../assets/gecko_girls.png.webp';
import legacy_farms from '../assets/legacy_farms.png.webp';
import nine_north from '../assets/nine_north.png.webp';
import pokpok from '../assets/pokpok.png.webp';
import space_island from '../assets/space_island_gn.png.webp';
import stella_taco from '../assets/stella_taco.png.webp';
import Fossil from '../assets/the_fossil_cartel.png.webp';

export const SecondSection = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 12,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 11,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <Container disableGutters="true" maxWidth="xl">
                <Box sx={{ height: '45vh' }}>
                    <Typography variant="h2" component="h1" sx={{ textAlign: 'center', fontSize: '25px', padding: 5 }}>
                        Trusted by 100,000+ small businesses and their teams.
                    </Typography>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src={aharon} />
                            </div>
                            <div>
                                <img src={antique_taco} />
                            </div>
                            <div>
                                <img src={barzotto} />
                            </div>
                            <div>
                                <img src={Bliss} />
                            </div>
                            <div>
                                <img src={Blush} />
                            </div>
                            <div>
                                <img src={damores_pizza} />
                            </div>
                            <div>
                                <img src={gecko_girls} />
                            </div>
                            <div>
                                <img src={legacy_farms} />
                            </div>
                            <div>
                                <img src={nine_north} />
                            </div>
                            <div>
                                <img src={pokpok} />
                            </div>
                            <div>
                                <img src={space_island} />
                            </div>
                            <div>
                                <img src={stella_taco} />
                            </div>
                            <div>
                                <img src={Fossil} />
                            </div>
                        </Slider>
                    </div>
                </Box>
            </Container>
        </React.Fragment>
    );
};

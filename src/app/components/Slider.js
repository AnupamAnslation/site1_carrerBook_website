'use client';

import React, { useState } from 'react';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const cardsData = [
    { alt: 'Group of people', src: '/strength/str1.png', title: '3100+', subtitle: 'Publishers' },
    { alt: 'Woman with megaphone', src: '/strength/str1.png', title: '250+', subtitle: 'Advertisers' },
    {
        alt: 'Three women',
        src: '/strength/str1.png',
        title: '5000+ Offers',
        text: 'Our Company offers flexible payment terms for publishers...',
    },
    { alt: 'B2B chart', src: '/strength/str1.png', title: 'Flexible', subtitle: 'Payment Terms' },
    { alt: 'Smiling man', src: '/strength/str1.png', title: 'Dedicated', subtitle: 'Account Manager' },
];

const SliderMode = () => {
    const [currentIndex, setCurrentIndex] = useState(2);
    const isMobile = useMediaQuery('(max-width:600px)');

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % cardsData.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);

    const getTransformStyle = (i) => {
        const total = cardsData.length;
        const pos = (i - currentIndex + total) % total;

        if (isMobile) {
            return {
                transform: `translateX(${(i - currentIndex) * 240}px)`,
                zIndex: i === currentIndex ? 10 : 5,
                opacity: Math.abs(i - currentIndex) > 1 ? 0 : 1,
            };
        }

        switch (pos) {
            case 0:
                return {
                    transform: 'translate(-50%, -50%) translateX(0px) scale(1) rotateY(0deg)',
                    zIndex: 10,
                    filter: 'brightness(1)',
                    border: '3px solid #7B5FFF',
                    boxShadow: '0 20px 40px rgba(123, 95, 255, 0.7)',
                };
            case 1:
                return {
                    transform: 'translate(-50%, -50%) translateX(300px) scale(0.8) rotateY(-20deg)',
                    zIndex: 8,
                };
            case 2:
                return {
                    transform: 'translate(-50%, -50%) translateX(580px) scale(0.7) rotateY(-40deg)',
                    zIndex: 6,
                };
            case total - 1:
                return {
                    transform: 'translate(-50%, -50%) translateX(-300px) scale(0.8) rotateY(20deg)',
                    zIndex: 8,
                };
            case total - 2:
                return {
                    transform: 'translate(-50%, -50%) translateX(-580px) scale(0.7) rotateY(40deg)',
                    zIndex: 6,
                };
            default:
                return {
                    transform: 'translate(-50%, -50%) scale(0.5)',
                    zIndex: 1,
                    opacity: 0,
                };
        }
    };

    return (
        <Box
            sx={{
                background: 'linear-gradient(to right, #1b1631, #2b197a)',
                overflow: 'hidden',
                py: 4,
                px: { xs: 2, sm: 4 },
            }}
        >
            <Typography
                variant="h3"
                fontWeight={700}
                gutterBottom
                sx={{
                    textTransform: 'lowercase',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', textAlign:"center" },
                }}
            >
                Our Strength
            </Typography>

            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 360, sm: 420, md: 480 },
                    perspective: 1200,
                    mx: 'auto',
                }}
            >
                {cardsData.map((card, i) => (
                    <Box
                        key={i}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: isMobile ? '50%' : '50%',
                            width: { xs: 220, sm: 260, md: 320 },
                            height: { xs: 300, sm: 360, md: 450 },
                            borderRadius: 2,
                            overflow: 'hidden',
                            transformStyle: 'preserve-3d',
                            transition: 'transform 0.6s ease, box-shadow 0.6s ease, opacity 0.4s',
                            cursor: 'pointer',
                            backgroundColor: '#000',
                            ...getTransformStyle(i),
                        }}
                    >
                        <Image
                            src={card.src}
                            alt={card.alt}
                            fill
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                p: 2,
                                color: '#fff',
                                background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.9) 100%)',
                                zIndex: 2,
                            }}
                        >
                            <Typography variant="h6" fontWeight={800} lineHeight={1.4}>
                                {card.title}
                                {card.subtitle && <br />}
                                {card.subtitle}
                            </Typography>
                            {card.text && (
                                <Typography
                                    variant="body2"
                                    sx={{
                                        mt: 1,
                                        maxHeight: 90,
                                        overflowY: 'auto',
                                        fontSize: { xs: 12, sm: 14 },
                                    }}
                                >
                                    {card.text}
                                </Typography>
                            )}
                            <Button
                                variant="outlined"
                                size="small"
                                sx={{
                                    mt: 2,
                                    borderRadius: 9999,
                                    px: 3,
                                    py: 0.5,
                                    color: '#fff',
                                    borderColor: '#fff',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    fontSize: '0.875rem',
                                    '&:hover': {
                                        backgroundColor: '#fff',
                                        color: '#000',
                                    },
                                }}
                            >
                                Get in Touch
                            </Button>
                        </Box>
                    </Box>
                ))}

                {/* Navigation Buttons */}
                {!isMobile && (
                    <>
                        <Button
                            onClick={handlePrev}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: 30,
                                transform: 'translateY(-50%)',
                                zIndex: 30,
                                width: 48,
                                height: 48,
                                borderRadius: '9999px',
                                border: '1px solid white',
                                color: 'white',
                                background: 'transparent',
                                '&:hover': {
                                    background: 'white',
                                    color: 'black',
                                },
                            }}
                        >
                            <ArrowBack />
                        </Button>
                        <Button
                            onClick={handleNext}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                right: 30,
                                transform: 'translateY(-50%)',
                                zIndex: 30,
                                width: 48,
                                height: 48,
                                borderRadius: '9999px',
                                border: '1px solid white',
                                color: 'white',
                                background: 'transparent',
                                '&:hover': {
                                    background: 'white',
                                    color: 'black',
                                },
                            }}
                        >
                            <ArrowForward />
                        </Button>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default SliderMode;

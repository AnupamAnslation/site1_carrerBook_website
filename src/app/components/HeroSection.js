'use client';

import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function HeroSection() {
    return (
        <Box
            sx={{
                background: 'linear-gradient(to right, #1b1631, #2b197a)',
                color: 'white',
                py: { xs: 8, md: 10 },
                px: { xs: 3, sm: 6, md: 24 },
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                flexDirection={{ xs: 'column-reverse', md: 'row' }}
                maxWidth="xl"
                margin="auto"
            >
                {/* LEFT CONTENT */}
                <Box flex={1} pr={{ md: 6 }} textAlign={{ xs: 'center', md: 'left' }}>
                    <Typography 
                        variant="h4" 
                        fontWeight={300} 
                        gutterBottom 
                        sx={{ fontSize: { xs: '1.8rem', sm: '2rem', md: '3.5rem' } }}
                    >
                        Pay Only for <span style={{ fontWeight: "bold" }}>Results.</span>
                    </Typography>
                    <Typography 
                        variant="h4" 
                        fontWeight={300} 
                        gutterBottom 
                        sx={{ fontSize: { xs: '1.8rem', sm: '2rem', md: '3.5rem' } }}
                    >
                        Reach <span style={{ fontWeight: "bold" }}>New Customers.</span>
                    </Typography>
                    <Typography 
                        variant="h4" 
                        fontWeight={300} 
                        gutterBottom 
                        sx={{ fontSize: { xs: '1.8rem', sm: '2rem', md: '3.5rem' } }}
                    >
                        Increase <span style={{ fontWeight: "bold" }}>Sales.</span>
                    </Typography>
                    <Typography 
                        variant="subtitle1" 
                        mt={2} 
                        mb={4} 
                        sx={{ color: 'gray.300', fontSize: { xs: '1.8rem', sm: '2rem', md: '1.2rem' }}}
                    >
                        The Performance Marketing Platform You Can Trust
                    </Typography>

                    {/* BUTTONS */}
                    <Stack 
                        direction={{ xs: 'column', sm: 'row' }} 
                        spacing={2} 
                        mb={4} 
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                        alignItems="center"
                    >
                        <Button
                            variant="outlined"
                            sx={{
                                color: 'white',
                                borderColor: '#999',
                                borderRadius: '40px',
                                px: 4,
                                py: 1,
                                fontWeight: 600,
                                width: { xs: '100%', sm: 'auto' }
                            }}
                        >
                            Why us?
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                background: 'linear-gradient(90deg, #f9b233, #f9a602)',
                                color: '#000',
                                borderRadius: '40px',
                                px: 4,
                                py: 1,
                                fontWeight: 600,
                                width: { xs: '100%', sm: 'auto' },
                                boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                                '&:hover': {
                                    background: 'linear-gradient(90deg, #f9a602, #f9b233)',
                                },
                            }}
                        >
                            Contact us
                        </Button>
                    </Stack>

                    {/* SOCIAL ICONS */}
                    <Stack 
                        direction="row" 
                        spacing={2} 
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                        flexWrap="wrap"
                    >
                        <YouTubeIcon
                            sx={{
                                fontSize: 40,
                                color: '#E5E5E5',
                                backgroundColor: '#86BC25',
                                borderRadius: '50%',
                                padding: '8px',
                            }}
                        />
                        <FacebookIcon
                            sx={{
                                fontSize: 40,
                                color: '#E5E5E5',
                                backgroundColor: '#00ABAB',
                                borderRadius: '50%',
                                padding: '8px',
                            }}
                        />
                        <WhatsAppIcon
                            sx={{
                                fontSize: 40,
                                color: '#E5E5E5',
                                backgroundColor: '#26890D',
                                borderRadius: '50%',
                                padding: '8px',
                            }}
                        />
                        <TwitterIcon
                            sx={{
                                fontSize: 40,
                                color: '#E5E5E5',
                                backgroundColor: '#0076A8',
                                borderRadius: '50%',
                                padding: '8px',
                            }}
                        />
                    </Stack>
                </Box>

                {/* RIGHT IMAGE */}
                <Box 
                    flex={1} 
                    mb={{ xs: 6, md: 0 }} 
                    display="flex" 
                    justifyContent="center"
                >
                    <Image
                        src="/hero/hero.png"
                        alt="Hero Image"
                        width={900}
                        height={800}
                        style={{ width: '100%', height: 'auto', maxWidth: 700 }}
                        priority
                    />
                </Box>
            </Box>
        </Box>
    );
}

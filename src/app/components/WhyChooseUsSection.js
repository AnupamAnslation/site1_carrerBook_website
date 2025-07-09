'use client';

import { Box, Typography, Grid, Stack } from '@mui/material';
import Image from 'next/image';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function WhyChooseUsSection() {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 18 },
                px: { xs: 3, md: 20 },
                background: 'linear-gradient(to right, #1b1631, #2b197a)',
                color: 'white',
            }}
        >
            <Grid container spacing={6} alignItems="center">
                {/* LEFT - IMAGE COLLAGE */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                        <Box sx={{
                            flex: '1 1 48%',
                                    maxWidth: '300px',

                            borderTopLeftRadius: '20px',
                            borderTopRightRadius: '0px',
                            borderBottomRightRadius: '20px',
                            borderBottomLeftRadius: '0px',
                            overflow: 'hidden'
                        }}>
                            <Image
                                src="/image.png"
                                alt="Team High-Five"
                                width={400}
                                height={500}

                                style={{
                                    width: '100%', height: 'auto',
                                    borderTopLeftRadius: '30px',
                                    borderTopRightRadius: '0px',
                                    borderBottomRightRadius: '30px',
                                    borderBottomLeftRadius: '0px',
                                }}
                            />
                        </Box>
                        <Box sx={{ flex: '1 1 48%', display: 'flex', flexDirection: 'column', gap: 3,                                    maxWidth: '300px',
 }}>
                            <Image
                                src="/image1.png"
                                alt="Teamwork Tablet"
                                width={500}
                                height={300}
                                style={{
                                    width: '100%', height: '80%',
                                    borderTopLeftRadius: '30px',
                                    borderTopRightRadius: '0px',
                                    borderBottomRightRadius: '30px',
                                    borderBottomLeftRadius: '0px',
                                }}
                            />
                            <Image
                                src="/image2.png"
                                alt="Group Discussion"
                                width={500}
                                height={300}
                                style={{
                                    width: '100%', height: '60%',
                                    borderTopLeftRadius: '30px',
                                    borderTopRightRadius: '0px',
                                    borderBottomRightRadius: '30px',
                                    borderBottomLeftRadius: '0px',
                                }}
                            />
                        </Box>
                    </Box>
                </Grid>

                {/* RIGHT - TEXT CONTENT */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ maxWidth: 650, ml: { md: 8 } }}>
                        <Typography
                            sx={{
                                color: '#aaa',
                                mb: 1,
                                fontSize:"19px",
                                letterSpacing: 1,
                                textTransform: 'uppercase',
                            }}
                        >
                            A few words—
                        </Typography>

                        <Typography
                            variant="h3"
                            fontWeight={700}
                            sx={{ mb: 2, fontSize: { xs: 32, md: 48 }, lineHeight: 1.2 }}
                        >
                            why choose us
                        </Typography>

                        <Typography sx={{ mb: 5, color: '#ccc', lineHeight: 1.6, fontSize:"18px" }}>
                            We've got a lot of awards for our products and services that became popular in the world.
                        </Typography>

                        {/* Feature #1 */}
                        <Stack direction="row" alignItems="flex-start" spacing={2} mb={4}>
                            <CheckBoxIcon sx={{ color: '#00ff61', fontSize: 28, mt: '3px' }} />
                            <Box>
                                <Typography fontWeight={700} mb={0.5}sx={{fontSize:"18px"}}>
                                    Modern Technologies
                                </Typography>
                                <Typography color="grey.400" sx={{ lineHeight: 1.6, fontSize:"18px" }}>
                                    Discussion is an important thing in the development process. <br />
                                    Thus new ideas and ingenious solutions are born.
                                </Typography>
                            </Box>
                        </Stack>

                        {/* Feature #2 */}
                        <Stack direction="row" alignItems="flex-start" spacing={2}>
                            <CheckBoxIcon sx={{ color: '#00ff61', fontSize: 28, mt: '3px' }} />
                            <Box>
                                <Typography fontWeight={700} mb={0.5} sx={{fontSize:"18px"}}>
                                    Huge Digital Experience
                                </Typography>
                                <Typography color="grey.400" sx={{ lineHeight: 1.6, fontSize:"18px" }}>
                                    Our company has been developing digital products for 15 years. <br />
                                    We've got a lot of awards for our work.
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

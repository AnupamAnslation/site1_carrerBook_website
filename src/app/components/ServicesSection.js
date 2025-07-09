'use client';

import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import Image from 'next/image';

const services = [
    { title: 'Mobile\nMarketing', icon: '/icon/mobile.png' },
    { title: 'Display\nAdvertising', icon: '/icon/display.png' },
    { title: 'Email\nMarketing', icon: '/icon/email.png' },
    { title: 'Social\nMedia', icon: '/icon/social.png' },
    { title: 'SMS\nMarketing', icon: '/icon/sms.png' },
    { title: 'Native\nAdvertising', icon: '/icon/native.png' },
    { title: 'Notification\nMarketing', icon: '/icon/notification.png' },
    { title: 'Incentive\nMarketing', icon: '/icon/incentive.png' },
];

export default function ServicesSection() {
    return (
        <Box
            sx={{
                background: 'linear-gradient(to right, #1b1631, #2b197a)',
                color: 'white',
                textAlign: 'center',
                py: { xs: 8, md: 4 },
                px: 2,
            }}
        >
            {/* HEADER */}
            <Typography variant="h6" gutterBottom sx={{ color: '#aaa', letterSpacing: 1 }}>
                — OUR SERVICES —
            </Typography>

            <Typography
                variant="h3"
                fontWeight={700}
                gutterBottom
                sx={{ textTransform: 'lowercase' }}
            >
                we do everything.
            </Typography>

            <Box
                sx={{
                    width: '80%',
                    margin: '0 auto',
                    // borderBottom: '2px solid #a259ff',
                    mt: 1,
                    mb: 3,
                }}
            />

            <Typography
                // variant="subtitle1"
                sx={{ maxWidth: 900, mx: 'auto', color: '#ccc', mb: 6 , fontSize:"18px"}}
            >
                Our dedicated team represents some of the top leaders in the online marketing space. We
                offer cutting-edge marketing strategies that produce high-performing leads for our
                advertisers' campaigns.
            </Typography>

            {/* SERVICES GRID */}
            <Grid container spacing={6} justifyContent="center">
                {services.map((service) => (
                    <Grid item xs={12} sm={6} md={3} key={service.title}>
                        <Box
                        >
                            <Box sx={{ textAlign: 'center' }}>
                                {/* Icon in a circle */}
                                <Box
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        mx: 'auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 2,
                                    }}
                                >
                                    <Image src={service.icon} alt={service.title} width={60} height={60} />
                                </Box>

                                {/* Title in bordered box */}
                                <Box
                                    sx={{
                                        display: 'inline-block',
                                        px: 5,
                                        py: 1,
                                        border: '1px solid #FFFFFF4D',
                                        borderRadius: '5px',
                                        backgroundColor: 'transparent',
                                        whiteSpace: 'pre-line', textAlign: 'center'
                                    }}
                                >
                                    <Typography variant="subtitle2" fontWeight={600} color="white">
                                        {service.title}
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

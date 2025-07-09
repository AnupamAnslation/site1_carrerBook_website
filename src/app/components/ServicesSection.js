'use client';

import { Box, Typography, Grid } from '@mui/material';
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
                py: { xs: 8, md: 12 },
                px: { xs: 2, sm: 4, md: 8 },
            }}
        >
            {/* HEADER */}
            <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                    color: '#aaa',
                    letterSpacing: 1,
                    fontSize: { xs: '14px', sm: '16px' },
                }}
            >
                — OUR SERVICES —
            </Typography>

            <Typography
                variant="h3"
                fontWeight={700}
                gutterBottom
                sx={{
                    textTransform: 'lowercase',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                }}
            >
                we do everything.
            </Typography>

            <Box
                sx={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: '#a259ff',
                    margin: '16px auto 32px',
                    borderRadius: 4,
                }}
            />

            <Typography
                sx={{
                    maxWidth: 900,
                    mx: 'auto',
                    color: '#ccc',
                    mb: { xs: 6, md: 8 },
                    fontSize: { xs: '16px', sm: '17px', md: '18px' },
                    px: { xs: 2, sm: 4 },
                }}
            >
                Our dedicated team represents some of the top leaders in the online marketing space.
                We offer cutting-edge marketing strategies that produce high-performing leads for our
                advertisers' campaigns.
            </Typography>

            {/* SERVICES GRID */}
            <Grid container spacing={4} justifyContent="center">
                {services.map((service) => (
                    <Grid item xs={12} sm={6} md={3} key={service.title}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}
                        >
                            {/* Icon in circle */}
                            <Box
                                sx={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: '50%',
                                    backgroundColor: '#ffffff1a',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 2,
                                }}
                            >
                                <Image src={service.icon} alt={service.title} width={40} height={40} />
                            </Box>

                            {/* Title */}
                            <Box
                                sx={{
                                    display: 'inline-block',
                                    px: 4,
                                    py: 1,
                                    border: '1px solid #FFFFFF4D',
                                    borderRadius: '6px',
                                    backgroundColor: 'transparent',
                                    whiteSpace: 'pre-line',
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    fontWeight={600}
                                    sx={{ fontSize: { xs: '14px', sm: '16px' } }}
                                >
                                    {service.title}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

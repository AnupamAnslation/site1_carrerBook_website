'use client';

import Link from 'next/link';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    useMediaQuery,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

const navLinks = [
    'Advertisers',
    'Publishers',
    'Clients',
    'Blog',
    'About us',
    'Careers',
    'Contact us',
];

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <AppBar position="static" elevation={0} sx={{
            background: 'linear-gradient(to right, #1b1631, #2b197a)',
        }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 4, px: { xs: 2, md: 24 } }}>
                {/* Logo */}
                <Typography variant="h6" component="div" sx={{ fontSize: "30px" }}>
                    Career<span style={{ fontWeight: "bold" }}>Book</span>
                </Typography>

                {/* Desktop Nav - Left Aligned */}
                <Box className={`space-x-4 ${isMobile ? 'hidden' : 'flex'}`}>
                    {navLinks.map((label) => (
                        <Link key={label} href={`#${label.toLowerCase().replace(/\s/g, '-')}`}>
                            <Button sx={{ color: "white", textTransform: "capitalize", fontSize: "18px" }}>
                                {label}
                            </Button>
                        </Link>
                    ))}
                </Box>

                {/* Mobile Menu Button */}
                {isMobile && (
                    <>
                        <Box sx={{ flexGrow: 1 }} /> {/* Push mobile button to right */}
                        <IconButton onClick={toggleDrawer(true)} edge="end" sx={{ color: 'white' }}>
                            <MenuIcon />
                        </IconButton>

                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                            PaperProps={{ sx: { bgcolor: '#111' } }}
                        >
                            <Box
                                sx={{ width: 250 }}
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <List>
                                    {navLinks.map((label) => (
                                        <ListItem key={label} disablePadding>
                                            <ListItemButton component={Link} href={`#${label.toLowerCase().replace(/\s/g, '-')}`}>
                                                <ListItemText
                                                    primary={label}
                                                    primaryTypographyProps={{ sx: { color: 'white' } }}
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}

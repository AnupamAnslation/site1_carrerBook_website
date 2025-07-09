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
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: 'linear-gradient(to right, #1b1631, #2b197a)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 2, md: 12 },
          py: 2,
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontSize: { xs: '24px', sm: '28px', md: '30px' },
            flexShrink: 0,
            color: 'white',
          }}
        >
          Career<span style={{ fontWeight: 'bold' }}>Book</span>
        </Typography>

        {/* Desktop Nav */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 3 }}>
            {navLinks.map((label) => (
              <Link
                key={label}
                href={`#${label.toLowerCase().replace(/\s/g, '-')}`}
                passHref
              >
                <Button
                  sx={{
                    color: 'white',
                    textTransform: 'capitalize',
                    fontSize: '16px',
                  }}
                >
                  {label}
                </Button>
              </Link>
            ))}
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            onClick={toggleDrawer(true)}
            edge="end"
            sx={{ color: 'white' }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{ sx: { bgcolor: '#1b1631' } }}
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
                  <ListItemButton
                    component={Link}
                    href={`#${label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    <ListItemText
                      primary={label}
                      primaryTypographyProps={{
                        sx: { color: 'white', fontSize: '16px' },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

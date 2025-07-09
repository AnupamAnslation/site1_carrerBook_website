'use client';
import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
  Link,
  IconButton,
} from '@mui/material';
import {
  YouTube,
  Facebook,
  Instagram,
  Twitter,
  ContactPhone,
} from '@mui/icons-material';
import { useState } from 'react';

const bgGradient = "linear-gradient(to right, #1b1631, #2b197a)";

export default function ContactForm() {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const commonFieldStyles = {
    bgcolor: "transparent",
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: "rgba(156,163,175,0.3)",
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: "#f59e0b",
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: "#f59e0b",
    },
    '& .MuiInputBase-input': {
      color: "#9ca3af",
    },
  };

  return (
    <Box
      sx={{
        // minHeight: "100vh",
        background: bgGradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <Container maxWidth="lg" sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        {/* Left form */}
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            minWidth: 320,
            maxWidth: 900,
            bgcolor: "rgba(31,31,31,0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: 3,
            p: 5,
          }}
        >
          <Typography variant="h4" fontWeight="900" color="white" mb={4} component="h2">
            Get In Touch
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 3,
            }}
          >
            <TextField variant="outlined" placeholder="Name" fullWidth sx={commonFieldStyles} />
            <TextField variant="outlined" placeholder="Email" type="email" fullWidth sx={commonFieldStyles} />
            <TextField variant="outlined" placeholder="Your Website" fullWidth sx={commonFieldStyles} />
            <TextField variant="outlined" placeholder="Skype ID" fullWidth sx={commonFieldStyles} />
            <TextField variant="outlined" placeholder="Company Name" fullWidth sx={commonFieldStyles} />
            <Box>
              <InputLabel id="query-label" sx={{ color: "#9ca3af", mb: 0.5 }}>
              </InputLabel>
              <Select
                labelId="query-label"
                value={query}
                onChange={handleQueryChange}
                displayEmpty
                fullWidth
                sx={{
                  ...commonFieldStyles,
                  '& .MuiSelect-icon': {
                    color: "#9ca3af",
                  },
                }}
                inputProps={{ 'aria-label': 'Nature of Query' }}
              >
                <MenuItem value="" disabled>
                  Nature of Query
                </MenuItem>
                <MenuItem value="general">General Inquiry</MenuItem>
                <MenuItem value="support">Support</MenuItem>
                <MenuItem value="sales">Sales</MenuItem>
              </Select>
            </Box>
            <TextField
              variant="outlined"
              placeholder="Type your message"
              multiline
              rows={4}
              fullWidth
              sx={{ gridColumn: "span 2", ...commonFieldStyles }}
            />
          </Box>
          <Box mt={6}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f59e0b",
                fontWeight: "bold",
                borderRadius: "9999px",
                px: 8,
                py: 1.5,
                textTransform: "none",
                '&:hover': {
                  backgroundColor: "#d48806",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Paper>

        {/* Right info */}
        <Paper
          elevation={3}
          sx={{
            width: 320,
            bgcolor: "rgba(31,31,31,0.8)",
            backdropFilter: "blur(20px)",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box p={5} color="white" sx={{ flexGrow: 1 }}>
            <Box mb={5}>
              <Typography
                variant="h6"
                fontWeight="900"
                display="flex"
                alignItems="center"
                gap={1}
                mb={1}
              >
                <ContactPhone fontSize="medium" />
                Our Address
              </Typography>
              <Typography fontWeight={400} fontSize="1rem" color="#e5e7eb">
                Level 13, 2 colony road name
                <br />
                Bangalore, India
              </Typography>
            </Box>
            <Box mb={5}>
              <Typography variant="h6" fontWeight="900" mb={1}>
                Open Hours
              </Typography>
              <Typography fontWeight={400} fontSize="1rem" color="#e5e7eb">
                Monday - Saturday
                <br />
                08:00 AM - 10:00 PM
              </Typography>
            </Box>
            <Link
              href="mailto:moreply@gmail.com"
              underline="hover"
              color="#00a67e"
              fontSize="1rem"
              fontWeight={400}
            >
              moreply@gmail.com
            </Link>
          </Box>
          <Box
            bgcolor="rgba(42,42,42,0.5)"
            borderBottomLeftRadius={12}
            borderBottomRightRadius={12}
            p={3}
            display="flex"
            justifyContent="center"
            gap={2}
          >
            <IconButton aria-label="YouTube" sx={{ bgcolor: "#8bc53f", color: "white", '&:hover': { bgcolor: "#7bb230" } }}>
              <YouTube />
            </IconButton>
            <IconButton aria-label="Facebook" sx={{ bgcolor: "#1db9d9", color: "white", '&:hover': { bgcolor: "#17a2c6" } }}>
              <Facebook />
            </IconButton>
            <IconButton aria-label="Instagram" sx={{ bgcolor: "#3a8e00", color: "white", '&:hover': { bgcolor: "#327700" } }}>
              <Instagram />
            </IconButton>
            <IconButton aria-label="Twitter" sx={{ bgcolor: "#1d8ed1", color: "white", '&:hover': { bgcolor: "#1876b3" } }}>
              <Twitter />
            </IconButton>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
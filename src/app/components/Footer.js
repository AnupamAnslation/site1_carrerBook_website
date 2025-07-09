'use client';

import {
  Box,
  Button,
  CssBaseline,
  InputBase,
  Typography,
  createTheme,
  ThemeProvider,
  IconButton,
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontWeight: 900,
      fontSize: "3.75rem",
      lineHeight: 1.1,
      color: "#fff",
      '@media (max-width:600px)': {
        fontSize: "2.5rem",
      },
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1rem",
      color: "#fff",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      color: "#fff",
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.875rem",
      color: "#fff",
      letterSpacing: "0.05em",
    },
  },
});

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 3, sm: 6, md: 12 },
          py: { xs: 8, md: 20 },
          background: "linear-gradient(to right, #1b1631, #2b197a)",
          gap: { xs: 6, md: 0 },
        }}
      >
        {/* Left Column */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            maxWidth: 600,
            color: "white",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box sx={{ borderTop: "1px solid white", width: 64, mr: 2 }} />
            <Typography sx={{ whiteSpace: "nowrap", fontSize: "20px" }}>
              STAY UPDATED
            </Typography>
          </Box>
          <Typography variant="h1" sx={{fontSize:"84px"}} gutterBottom>
            Be Always
            <br />
            In Touch
            <Box component="span" sx={{ color: "#6B3BDB", fontWeight: 900 }}>
              .
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ mb: 5, fontSize: "1rem" }}>
            You may be interested in what we can offer you. More services
            you can find below. We do everything at a high level.
          </Typography>

          {/* Email Input */}
          <Box
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              maxWidth: "100%",
              borderRadius: "12px",
              backgroundColor: "#2C2C2C",
              border: "1px solid rgba(255,255,255,0.5)",
              px: 2,
              py: 1,
              boxShadow: "6px 6px 15px rgba(0,0,0,0.5)",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}
            noValidate
            autoComplete="off"
          >
            <InputBase
              placeholder="Email ID"
              type="email"
              fullWidth
              sx={{
                color: "white",
                fontSize: "1rem",
                flexGrow: 1,
                width: "100%",
                "& .MuiInputBase-input": {
                  p: 1.5,
                  "::placeholder": {
                    color: "rgba(255,255,255,0.7)",
                  },
                },
              }}
            />
            <IconButton
              type="submit"
              sx={{
                color: "white",
                border: "1px solid rgba(255,255,255,0.5)",
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(107,59,219,0.2)",
                  borderColor: "#6B3BDB",
                },
              }}
              aria-label="Submit email"
            >
              <img
                src="/icon/footico.png"
                alt="Submit"
                style={{ width: 40, height: 40 }}
              />
            </IconButton>
          </Box>
        </Box>

        {/* Right Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/footimg.png"
            alt="Illustration"
            sx={{
              width: "100%",
              maxWidth: 550,
              height: "auto",
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;

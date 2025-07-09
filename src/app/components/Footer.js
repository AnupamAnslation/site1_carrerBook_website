'use client';

import {
    Box,
    Button,
    CssBaseline,
    InputBase,
    Typography,
    createTheme,
    ThemeProvider,
    alpha,
    styled,
} from "@mui/material"; // Use package import if this runs in Next.js project
import IconButton from "@mui/material/IconButton";


const theme = createTheme({
    typography: {
        fontFamily: "'Inter', sans-serif",
        h1: {
            fontWeight: 900,
            fontSize: "3.75rem",
            lineHeight: 1.1,
            color: "#fff",
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

// const Input = styled(InputBase)(({ theme }) => ({
//     color: "white",
//     fontSize: "1.125rem",
//     flexGrow: 1,
//     "& .MuiInputBase-input": {
//         padding: theme.spacing(1.5, 2),
//         transition: theme.transitions.create("width"),
//         width: "100%",
//         background:
//             "linear-gradient(90deg, rgba(59,59,59,0.3) 0%, rgba(107,59,219,0.3) 100%)",
//         borderRadius: theme.shape.borderRadius,
//         boxShadow:
//             "0 4px 6px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3), inset 0 0 10px rgba(255,255,255,0.1)",
//         border: "1px solid rgba(255,255,255,0.3)",
//         color: "white",
//         "&::placeholder": {
//             color: "rgba(255,255,255,0.7)",
//         },
//     },
// }));

function Footer() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    // minHeight: "100vh",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                    px: { xs: 4, md: 20 },
                    py: 15,
                    background:
                        "linear-gradient(to right, #1b1631, #2b197a)",
                    // backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    fontFamily: "'Inter', sans-serif",
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
                    <Typography variant="h1" fontSize={"82px"} gutterBottom>
                        Be Always
                        <br />
                        In Touch
                        <Box component="span" sx={{ color: "#6B3BDB", fontWeight: 900 }}>
                            .
                        </Box>
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 6, fontSize: "18px" }}>
                        You may be interested in what we can offer you. More services
                        you can find below. We do everything at a high level.
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            maxWidth: 480,
                            width: "100%",
                            borderRadius: "12px",
                            backgroundColor: "#2C2C2C",
                            border: "1px solid rgba(255,255,255,0.5)",
                            px: 2,
                            py: 1,
                            boxShadow: "6px 6px 15px rgba(0,0,0,0.5)",
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <InputBase
                            placeholder="Email ID"
                            type="email"
                            sx={{
                                color: "white",
                                fontSize: "1rem",
                                flexGrow: 1,
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
                                ml: 1,
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                backgroundColor: "transparent",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
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
                        width: { xs: "100%", md: "50%" },
                        mt: { xs: 12, md: 0 },
                        display: "flex",
                        justifyContent: "right",
                    }}
                >
                    <img
                        src="/footimg.png"
                        alt="Illustration of two people holding a shield with a checkmark"
                        style={{ maxWidth: "100%", height: "auto" }}
                        width={550}
                        height={400}
                    />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Footer;

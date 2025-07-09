'use client';


import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const faqItems = [
    {
        question: 'Lorem ipsum dolor sit amet',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        question: 'Lorem ipsum dolor sit amet',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
        question: 'Lorem ipsum dolor sit amet',
        answer: '' // No answer, acts like a toggle only
    },
    {
        question: 'Lorem ipsum dolor sit amet',
        answer: ''
    }
];

export default function FaqAccordion() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: 'linear-gradient(to right, #1b1631, #2b197a)',
                color: 'white',
                // minHeight: '100vh',
                px: 2,
                py: 15,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'sans-serif'
            }}
        >
            {/* Custom gradient background */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '40vw',
                    height: '40vh',
                    // background: 'linear-gradient(to right, #1b1631, #2b197a)',
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            />

            {/* Header */}
            <Box sx={{ zIndex: 1, textAlign: 'center', maxWidth: '40rem', width: '100%' }}>
                <Typography variant="h3"
                    align="center"
                    color="#fff"
                    fontWeight={800}
                    sx={{ mb: 1 }}>
                    FAQ
                </Typography>
                <Typography
                    sx={{ maxWidth: 800, mx: 'auto', color: '#ccc', fontSize: "18px" }}>
                    Her you can find Frequantly asked question.
                </Typography>
            </Box>

            {/* Accordion */}
            <Box sx={{ mt: 5, width: '100%', maxWidth: '50rem', zIndex: 1 }}>
                {faqItems.map((item, index) => (
                    <Accordion
                        key={index}
                        expanded={expanded === index}
                        onChange={handleChange(index)}
                        sx={{
                            backgroundColor: index === 2
                                ? '#EDA504' // golden blur background
                                : 'rgba(102, 99, 99, 0.2)', // default dark blur background
                            backdropFilter: 'blur(2px)',
                            WebkitBackdropFilter: 'blur(2px)',
                            padding: 2,
                            color: 'white',
                            boxShadow: index === 2
                                ? '0 0 15px 0 rgba(231,159,15,0.5)'
                                : '0 0 10px 0 rgba(0,0,0,0.2)',
                            borderRadius: '0.5rem',
                            mb: 2,
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        >
                            <Typography fontWeight="bold">{item.question}</Typography>
                        </AccordionSummary>
                        {item.answer && (
                            <AccordionDetails>
                                <Typography variant="body2">{item.answer}</Typography>
                            </AccordionDetails>
                        )}
                    </Accordion>
                ))}
            </Box>

        </Box>
    );
}

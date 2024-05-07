import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import Footer from '../MainDashboard/Footer'; // Importing Footer component
import Header from '../MainDashboard/Header'; // Importing Header component
import '../../dist/main.css'; // Importing custom styles
import { useTranslation } from 'react-i18next'; // Importing useTranslation hook for translation
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; // Importing ExpandMoreIcon
import Accordion from '@material-ui/core/Accordion'; // Importing Accordion component
import AccordionSummary from '@material-ui/core/AccordionSummary'; // Importing AccordionSummary component
import AccordionDetails from '@material-ui/core/AccordionDetails'; // Importing AccordionDetails component

// FAQPage component
const FAQPage = () => {
    const [expanded, setExpanded] = React.useState(false); // State for controlling expanded accordion panels

    // Function to handle accordion panel expansion
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false); // Set the expanded state based on the current panel
    };

    // Array of FAQs with question and answer
    const faqs = [
        { id: 'panel1', question: 'How do I apply for refugee status?', answer: 'You can apply for refugee status by filing a Form I-589, Application for Asylum and for Withholding of Removal, with the appropriate agency.' },
        { id: 'panel2', question: 'What benefits are available to refugees?', answer: 'Refugees may be eligible for various benefits including medical assistance, financial aid, and housing support depending on the country they are in.' },
        { id: 'panel3', question: 'How long does the refugee status determination process take?', answer: 'The duration can vary widely depending on the country and specific circumstances, but it generally takes several months to a few years.' },
        { id: 'panel4', question: 'Where can I find legal assistance?', answer: 'Legal assistance for refugees may be available through local NGOs, legal aid societies, or via referrals from the United Nations High Commissioner for Refugees (UNHCR).' },
        { id: 'panel5', question: 'Are there educational programs available for refugees?', answer: 'Many countries offer specific educational programs for refugees, often including language classes, integration courses, and sometimes access to higher education.' },
        { id: 'panel6', question: 'How can refugees find employment?', answer: 'Refugees can often find employment through job placement services, refugee-specific job fairs, or local employment agencies that collaborate with refugee assistance programs.' }
    ];

    return (
        <>
            <Header /> {/* Rendering Header component */}
            <div className="root">
                <Paper elevation={3} className="paper-container"> {/* Paper container for FAQ section */}
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom>
                                Frequently Asked Questions
                            </Typography>
                            {/* Mapping over FAQs array to render Accordion for each FAQ */}
                            {faqs.map((faq) => (
                                <Accordion
                                    key={faq.id}
                                    expanded={expanded === faq.id}
                                    onChange={handleChange(faq.id)}
                                    className="faq-accordion"
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />} // Expand icon
                                        aria-controls={`${faq.id}-content`}
                                        id={`${faq.id}-header`}
                                        className="faq-summary"
                                        style={{ color: '#fff', backgroundColor: '#76ABAE', paddingRight: '50px', width: 'calc(100% - 50px)' }} // Styling for AccordionSummary
                                    >
                                        <Typography>{faq.question}</Typography> {/* Displaying FAQ question */}
                                    </AccordionSummary>
                                    <AccordionDetails className="faq-details" style={{ backgroundColor: '#fff', paddingRight: '50px', width: 'calc(100% - 50px)' }}> 
                                        <Typography>{faq.answer}</Typography> {/* Displaying FAQ answer */}
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Grid>
                    </Grid>
                </Paper>
                <Footer /> {/* Rendering Footer component */}
            </div>
        </>
    );
};

export default FAQPage; // Exporting FAQPage component

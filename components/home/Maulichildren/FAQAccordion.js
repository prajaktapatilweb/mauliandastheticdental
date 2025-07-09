import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import Heading from '../Heading';
import { headList14 } from '../../constants/titlefile';

const faqData = [
    {
        question: 'Do you offer vaccination for all age groups?',
        answer: 'Yes, we offer a full range of vaccinations from birth to adolescent age.',
    },
    {
        question: 'Is NICU available 24x7?',
        answer: 'Yes, our NICU and PICU are operational round-the-clock with trained staff.',
    },
    {
        question: 'Do you accept insurance or cashless payments?',
        answer: 'We are partnered with multiple TPAs and provide cashless services. Contact reception for full list.',
    },
    {
        question: 'Can we get diet counseling for children with obesity or food allergies?',
        answer: 'Absolutely! We provide custom dietary counselling for various child health conditions.',
    },
     {
        question: ' Is emergency care available for infants and children?',
        answer: 'Yes, we provide emergency pediatric services including intensive care.',
    },
];

export default function FAQAccordion() {
    return (
            <section style={{backgroundColor:'#f5f5f5'}}>
        <Container sx={{py:5}}>
                        <Heading data={headList14}></Heading>
        <div style={{  margin: '0 auto', padding: '20px' }}>
            {faqData.map((item, index) => (
                <Accordion
                    key={index}
                    sx={{
                        mb: 2,
                        border:'1px solid',
                        borderColor:'secondary.main',
                        borderRadius: '5px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': { boxShadow: '0 6px 15px rgba(0,0,0,0.2)' },
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'secondary.dark' }} />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <Typography sx={{ fontWeight: 600, fontSize: '18px', color: '#333' }}>
                            {item.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '16px', color: '#555' }}>
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
        </Container>
        </section>
    );
}

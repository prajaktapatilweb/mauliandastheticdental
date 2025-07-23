import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import Heading from './Heading';
import { headList6, headList7 } from '../constants/titlefile';

const faqData = [
    {
        question: 'What age should my child first visit a dentist?',
        answer: 'As early as their first tooth erupts or by their first birthday.',
    },
    {
        question: 'Are pediatric dental treatments painful?',
        answer: 'We use gentle, child-friendly techniques and modern tools to keep treatments pain-free.',
    },
    {
        question: 'Do you treat anxious or special-needs children?',
        answer: 'Yes! Our clinic is designed for comfort, and we customise care for every child.',
    },
    {
        question: 'Is preventive care really necessary if baby teeth fall out?',
        answer: 'Absolutely! Healthy baby teeth support speech, chewing, and guide permanent teeth.',
    },
     {
        question: 'Why is general anesthesia used for dental treatment in special kids?',
        answer: 'General anesthesia helps ensure complete safety, comfort, and cooperation during dental procedures, especially for children with special healthcare needs who may not tolerate treatment under normal conditions.',
    },
    {
        question:'Is general anesthesia safe for my child?',
        answer:'Yes. When administered by qualified anesthesiologists in a hospital or specialized dental setup, general anesthesia is generally safe. Pre-treatment evaluation and monitoring help minimize risks.'
    },
    {
        question:'Do you treat children with special needs at your dental clinic?',
        answer:'Yes, we provide compassionate, specialized dental care for children with physical, developmental, behavioral, or emotional conditions. Our team is trained to ensure a calm, safe, and supportive environment.'
    },
    {
        question:'How do you manage dental treatment for children who are uncooperative or anxious?',
        answer:'We use behavior management techniques, a child-friendly setup, and in some cases, conscious sedation or general anesthesia to ensure a positive and stress-free experience.'
    }
];

export default function FAQAccordion() {
    return (
        <Container sx={{pt:7,pb:1}}>
                        <Heading data={headList7}></Heading>
        <div style={{  margin: '0 auto', padding: '20px' }}>
            {faqData.map((item, index) => (
                <Accordion
                    key={index}
                    sx={{
                        mb: 2,
                        border:'1px solid',
                        borderColor:'primary.dark',
                        borderRadius: '5px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': { boxShadow: '0 6px 15px rgba(0,0,0,0.2)' },
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'primary.dark' }} />}
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
    );
}

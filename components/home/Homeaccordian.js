import React, { useRef } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion, useInView } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Homeaccordian() {
  const faqData = [
    ['Where is your clinic located?', 'We’re located at Shop no. 30/31, 1st Floor, Amarante CHS, Sector 9E, near D Mart Road, Kalamboli, Navi Mumbai – easily accessible with ample parking space.'],
    ['Do I need to book an appointment before visiting?', 'While walk-ins are accepted, we recommend scheduling an appointment to minimize waiting time and ensure dedicated care.'],
    ['Are both the dental and pediatric services available under one roof?', 'Yes, we offer both dental and pediatric/multispeciality services at a single location for convenient, family-centered care.'],
    ['What are your clinic hours?', 'We are open Monday to Saturday, 10:00 AM to 9:00 PM. For Sunday or emergency visits, please call to check availability.'],
    ['Do you accept digital payments or offer cashless facilities?', 'Yes, we accept UPI, credit/debit cards, net banking, and also offer cashless facility for select insurance providers. Please contact our front desk for assistance with insurance or reimbursement queries.'],
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'white' }}>
      <Container id="faq" sx={{ py: 6 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ color: '#1b3898', pb: 3 }}
        >
          Frequently Asked Questions
        </Typography>

        {faqData.map(([question, answer], i) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: '-100px' });

          return (
            <motion.div
              key={i}
              ref={ref}
              variants={fadeUpVariant}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i}
            >
              <Accordion
                sx={{
                  mb: 2,
                  border: '1.5px solid',
                  borderColor: 'secondary.main',
                  borderRadius: '5px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': { boxShadow: '0 6px 15px rgba(0,0,0,0.2)' },
                  backgroundColor: '#f9f9f9',
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#d4af37' }} />}>
                  <Typography>{question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ textAlign: 'left' }}>{answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          );
        })}
      </Container>
    </Box>
  );
}

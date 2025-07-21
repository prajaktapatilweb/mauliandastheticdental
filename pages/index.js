import React from 'react';
import {
  AppBar,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Link,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  MedicalServices,
  PrecisionManufacturing,
  Favorite,
  LocalOffer,
} from "@mui/icons-material";
import Navbarindex from '../components/header/navbarindex';
import { motion } from 'framer-motion';
import Mainslider from '../components/home/Mainslider';
import Cliniclinks from '../components/home/Cliniclinks';

export default function Home() {
  const uspData = [
    {
      title: "Experienced Doctors",
      icon: <MedicalServices sx={{ fontSize: 40, color: "#1b3898" }} />,
      description: " Highly qualified dentist and pediatrician with 17+ years of trusted clinical experience.",
    },
    {
      title: "Dual-Specialty Setup",
      icon: <PrecisionManufacturing sx={{ fontSize: 40, color: "#1b3898" }} />,
      description: "Complete dental and pediatric/multispecialty services — serving both children and adults in one location.",
    },
    {
      title: "Modern Equipment",
      icon: <Favorite sx={{ fontSize: 40, color: "#1b3898" }} />,
      description: "Equipped with advanced diagnostic and treatment tools for accurate, efficient, and safe care.",
    },
    {
      title: "Affordable & Cashless",
      icon: <LocalOffer sx={{ fontSize: 40, color: "#1b3898", }} />,
      description: " Cost-effective treatment plans with support for UPI, digital payments, and cashless facilities.",
    },
  ];
  return (
    <>
      <Box component="section">
        <AppBar position="static" sx={{ backgroundColor: '#152C79',py:1 }}>
          <Navbarindex />
        </AppBar>
        <Mainslider/>

        {/* Hero Section */}
        <Box sx={{ py: 7, textAlign: 'center', bgcolor: 'white' }}>
          <Container>
            <Box sx={{ py: 2, px: { xs: 2, md: 4 }, textAlign: 'center' }}>
              <Typography variant="h2" gutterBottom sx={{ color: '#1b3898', fontWeight: 600 }}>
               About Us
              </Typography>
{/* 
              <Typography variant="h6" sx={{ color: '#1b3898', fontWeight: 300, mt: -1, fontSize: 17 }}>
                Two expert-led clinics under one roof in Kalamboli,Navi Mumbai — providing complete dental and pediatric care for all age groups.
              </Typography> */}

              {/* Description */}
              <Box sx={{ mt: 4, textAlign: 'justify',pb:2 }}>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Welcome to our dual-specialty healthcare center, where compassionate care meets clinical excellence.
                 I'm a paragraph. Click here to add your own text and edit me. It’s easy.
Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                 Explore our dedicated service pages to know more.</Typography>    
              </Box>
            </Box>

               <Cliniclinks/>
                {/* <HeroSection
        title="Expert Dental Care for All Ages"
        description=" Dental Clinic in Kalamboli, Navi Mumbai - Aesthetic"
        buttonText="Let’s Perfect Your Smile"
        link='/astheticdental'
        bgImage="/images/headerback1.jpg"
        gradient="to right, rgba(179, 129, 90, 0.6), rgba(210, 162, 125, 0.6)"
      />
  
      <HeroSection
        title="Caring for Your Little Ones"
        description="Compassionate pediatric care for infants, toddlers, and kids."
        buttonText="Let’s Nurture Their Health"
         link='/maulichildren'
        bgImage="/images/headerback3.jpg"
        gradient="to right, rgba(30,144,255, 0.6), rgba(30,144,255, 0.6)"
      /> */}

             
           

          </Container>
        </Box>
        {/* USP Section */}
        <Box id="usp" sx={{ bgcolor: "#f4f6ff", py: 7 }}>
          <Container>
            <Typography variant="h3" align="center" gutterBottom sx={{ color: '#1b3898' }}>
              Why Choose Us?
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              {uspData.map((item, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Card
                    elevation={6}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      textAlign: "center",
                      height: "100%",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{item.icon}</Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography  color="text.secondary" sx={{textAlign:'justify'}}>
                      {item.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Box sx={{ py: 8,  bgcolor: 'white' }}>

          {/* FAQ Section */}
          <Container id="faq" sx={{ py: 6 }}>
            <Typography variant="h3" align="center" gutterBottom sx={{ color: '#1b3898', pb: 3 }}>
              Frequently Asked Questions
            </Typography>
            {[
              ['Where is your clinic located?', 'We’re located at Shop no. 30/31, 1st Floor, Amarante CHS, Sector 9E, near D Mart Road, Kalamboli, Navi Mumbai – easily accessible with ample parking space.'],
              ['Do I need to book an appointment before visiting?', 'While walk-ins are accepted, we recommend scheduling an appointment to minimize waiting time and ensure dedicated care.'],
              [' Are both the dental and pediatric services available under one roof?', 'Yes, we offer both dental and pediatric/multispeciality services at a single location for convenient, family-centered care.'],
              [' What are your clinic hours?', 'We are open Monday to Saturday, 10:00 AM to 9:00 PM. For Sunday or emergency visits, please call to check availability.'],
              ['Do you accept digital payments or offer cashless facilities?', 'Yes, we accept UPI, credit/debit cards, net banking, and also offer cashless facility for select insurance providers. Please contact our front desk for assistance with insurance or reimbursement queries.'],


            ].map(([question, answer], i) => (
              <Accordion key={i} sx={{ mb: 2, border: '1px solid lightgrey' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ textAlign: 'left' }}>{answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Container>
        </Box>
        {/* Footer */}
                <Box id="contact" sx={{ bgcolor: '#0A163C', color: 'white', py: 5, textAlign: 'left' }}>

        <Container>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                         
                            <Grid item xs={12} sm={12} md={5}>
             <Typography variant="h6"> Mauli Children & Multispeciality Hospital</Typography><br></br>

          <Typography variant="body1">
Shop no. 30, 1st Floor, Amarante CHS, Sector 9E,<br></br>
Near D-Mart, Kalamboli, Navi Mumbai – 410218<br></br>
Phone: +91- 74985 57098/022 3544 1475

            {/* © {new Date().getFullYear()} Aesthetic & Mauli Clinics. All rights reserved. */}
          </Typography><br></br>
          <Typography variant="h6">Aesthetic Dental Clinic</Typography> <br></br>
          <Typography variant="body1">
Shop no. 31, 1st Floor, Amarante CHS, Sector 9E,<br></br>
Near D-Mart, Kalamboli, Navi Mumbai – 410218<br></br>
Phone: +91 94211 09516
</Typography>
</Grid>
                            <Grid item xs={12} sm={12} md={7}>
                            

    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3771.6024009891453!2d73.1026188!3d19.0372341!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9e7de496295%3A0x72cbdfd2adfed0a9!2sMauli%20Children%20%26%20Multispeciality%20Hospital%20%26%20Aesthetic%20Dental%20Clinic%2C%20Kalamboli%2C%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1753003444987!5m2!1sen!2sin" width="100%" height="250px"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{border:'4px solid white',borderRadius:5}}
             ></iframe>

              </Grid>
              </Grid>
          {/* <Typography variant="body2">
            Contact: <Link href="mailto:info@clinic.com" color="inherit">info@clinic.com</Link>
          </Typography> */}
</Container>

        </Box>
        
      </Box>
    </>
  )
}







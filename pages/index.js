import HeroSection from '../components/home/HeroSection';
import React from 'react';
import {
  AppBar,
  Toolbar,
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
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { StyledButton } from '../components/styled-button';
import {
  MedicalServices,
  PrecisionManufacturing,
  Favorite,
  LocalOffer,
} from "@mui/icons-material";
import Navbarindex from '../components/header/navbarindex';
import { motion } from 'framer-motion';


export default function Home() {
  const uspData = [
  {
    title: "Experienced Doctors",
    icon: <MedicalServices sx={{ fontSize: 40, color: "#1b3898" }} />,
    description: "Highly qualified dentist and pediatrician with years of trusted care.",
  },
  {
    title: "Modern Equipment",
    icon: <PrecisionManufacturing sx={{ fontSize: 40, color: "#1b3898" }} />,
    description: "Advanced technology for accurate diagnosis and treatment.",
  },
  {
    title: "Patient-Centered Care",
    icon: <Favorite sx={{ fontSize: 40, color: "#1b3898" }} />,
    description: "We prioritize comfort, safety, and a caring approach for every patient.",
  },
  {
    title: "Affordable Packages",
    icon: <LocalOffer sx={{ fontSize: 40, color: "#1b3898" }} />,
    description: "Cost-effective solutions without compromising on quality.",
  },
];
const MotionButton = motion(Button);
  return (
    <>
    <Box component="section">
          <AppBar position="static" sx={{ backgroundColor: '#1b3898' }}>
            <Navbarindex/>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ py: 3, textAlign: 'center', bgcolor: 'white'}}>
        <Container>
        <Box sx={{ py: 6, px: { xs: 2, md: 4 }, textAlign: 'center' }}>
     <Typography variant="h2" gutterBottom sx={{ color: '#1b3898', fontWeight: 600 }}>
        One Destination. Two Specialties. Total Family Care.
      </Typography>

      <Typography variant="h6" sx={{ color: '#1b3898', fontWeight: 300, mt: -1,fontSize:17 }}>
     Two expert-led clinics under one roof in Kalamboli,Navi Mumbai — providing complete dental and pediatric care for all age groups.
      </Typography>

      {/* Description */}
      <Box sx={{ mt: 4, textAlign: 'left', maxWidth: 900, mx: 'auto' }}>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          Welcome to our dual-specialty healthcare center, where compassionate care meets clinical excellence. <br />
          We bring together:
        </Typography>

        {/* Bullet Points */}
        <Box component="ul" sx={{ pl: 3, mt: 2 }}>
          <li>
            <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
              A trusted Children & Multispeciality Hospital led by a senior pediatrician with 17+ years of experience in child health, neonatal care, and general medicine.
            </Typography>
          </li>
          <li style={{ marginTop: '0.75rem' }}>
            <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
              A state-of-the-art Dental Clinic led by a highly experienced dental professional with over 15 years of expertise in cosmetic and restorative dentistry.
            </Typography>
          </li>
        </Box>
      </Box>

      {/* CTA Heading */}
      <Typography
        variant="h4"
        sx={{
          mt: 6,
          fontWeight: 700,
          color: '#1b3898',
          textAlign: 'center',
        }}
      >
        Explore our dedicated service pages to know more.
      </Typography>
    </Box>
     
        <Grid container spacing={4} sx={{ pb: 5 }}>
  {/* Aesthetic Dental Clinic Card */}
  <Grid item xs={12} md={6}>
    <Card
      sx={{
        p: 3,
        bgcolor: '#fff8f6',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: 2,
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 10px 28px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardContent>
        <Typography variant="h4" sx={{ color: '#b75c1c', fontWeight: 700 }}>
          Aesthetic Dental Clinic
        </Typography>

        <Typography variant="body1" sx={{ mt: 1.5, textAlign: 'justify' }}>
          From preventive checkups and painless root canals to smile designing and implants, Aesthetic Dental Clinic offers modern, personalized dental care using advanced techniques and equipment.
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 3, backgroundColor: '#b75c1c', '&:hover': { backgroundColor: '#994a15',color:'white' },letterSpacing:1,fontSize:14 }}
          href="/astheticdental"
        >
         <Box sx={{ display: "flex", alignItems: "center", gap: 1,letterSpacing:1 }}>
                Visit Website
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
                  </motion.span>
                </Box>
        </Button>
      </CardContent>
    </Card>
  </Grid>

  {/* Mauli Pediatric Clinic Card */}
  <Grid item xs={12} md={6}>
    <Card
      sx={{
        p: 3,
        bgcolor: '#eaf4ff',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: 2,
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 10px 28px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardContent>
        <Typography variant="h4" sx={{ color: '#1b3898', fontWeight: 700 }}>
          Mauli Pediatric Clinic
        </Typography>

        <Typography variant="body1" sx={{ mt: 1.5, textAlign: 'justify' }}>
          Mauli Hospital offers complete pediatric care — including NICU, vaccinations, child development, and adolescent health — along with general and emergency medical services for families.
        </Typography>
             <Button
  variant="contained"
  size="medium"
   href="/maulichildren"
  sx={{
   mt:3,
   backgroundColor:'#1b3898',
  gap: 1.5,
  '&:hover': { backgroundColor: '#12276A',color:'white' }

  }}
>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1,letterSpacing:1 }}>
                Visit Website
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
                  </motion.span>
                </Box>
              </Button>
          
         
      </CardContent>
    </Card>
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
  
  </Grid>
</Grid>

      </Container>
</Box>
      {/* USP Section */}
      <Box id="usp" sx={{ bgcolor: "#f4f6ff", py: 7 }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom sx={{color:'#1b3898'}}>
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
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
      <Box sx={{ py: 8, textAlign: 'center', bgcolor: 'white' }}>

      {/* FAQ Section */}
      <Container id="faq" sx={{ py: 6 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{color:'#1b3898',pb:3}}>
          Frequently Asked Questions
        </Typography>
        {[
          ['What are your clinic timings?', 'Both clinics are open from 10am – 7pm, Monday to Saturday.'],
          ['Do you accept walk-ins?', 'Yes, but appointments are preferred to avoid waiting.'],
          ['Are there any consultation charges?', 'First consultation is free. Follow-ups are charged nominally.'],
        ].map(([question, answer], i) => (
          <Accordion key={i} sx={{ mb: 2,border:'1px solid lightgrey' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{textAlign:'left'}}>{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
</Box>
      {/* Footer */}
      <Box id="contact" sx={{ bgcolor: '#0A163C', color: 'white', py: 4, textAlign: 'center' }}>
        <Typography variant="body1">
          © {new Date().getFullYear()} Aesthetic & Mauli Clinics. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Contact: <Link href="mailto:info@clinic.com" color="inherit">info@clinic.com</Link>
        </Typography>
      </Box>
  </Box>
  
    </>
  )
}







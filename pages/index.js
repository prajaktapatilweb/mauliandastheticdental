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
import {
  MedicalServices,
  PrecisionManufacturing,
  Favorite,
  LocalOffer,
} from "@mui/icons-material";
import Navbarindex from '../components/header/navbarindex';


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
  return (
    <>
    <Box component="section">
   

          <AppBar position="static" sx={{ backgroundColor: '#1b3898' }}>
            
            <Navbarindex/>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ py: 8, textAlign: 'center', bgcolor: '#f4f6ff' }}>
        <Container>
        <Typography variant="h2" gutterBottom sx={{color:'#1b3898'}}>
          Welcome to Our Clinics
        </Typography>
        <Typography variant="h6" sx={{color:'#1b3898',fontWeight:200,mt:-2}}> 
          Choose the best care for your Dental and Pediatric needs.
        </Typography>
        <p>At our unique dual-specialty hospital, we combine expert dental care and compassionate pediatric services under one roof. Led by a dedicated husband-wife team — a skilled dentist and a caring pediatrician — we ensure that both children and adults receive personalized, professional care in a warm, family-friendly environment.</p>
     
        <Grid container spacing={4} sx={{py:5}}>
          {/* <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, bgcolor: '#fff3e0' }}>
              <CardContent>
                <Typography variant="h5">Aesthetic Dental Clinic</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Specializing in cosmetic and general dentistry with modern facilities and expert care.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }} href="/aesthetic">
                  Visit Clinic
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, bgcolor: '#ede7f6' }}>
              <CardContent>
                <Typography variant="h5">Mauli Pediatric Clinic</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Focused on your child’s health with love, care, and professional pediatric expertise.
                </Typography>
                <Button variant="contained" color="secondary" sx={{ mt: 2 }} href="/mauli">
                  Visit Clinic
                </Button>
              </CardContent>
            </Card>
          </Grid> */}
          
      <HeroSection
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
      />
  
        </Grid>
      </Container>
</Box>
      {/* USP Section */}
      <Box id="usp" sx={{ bgcolor: "white", py: 7 }}>
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
      <Box sx={{ py: 8, textAlign: 'center', bgcolor: '#f4f6ff' }}>

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







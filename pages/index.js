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

export default function Home() {
  return (
    <>
    <Box component="section">
   

          <AppBar position="static" sx={{ backgroundColor: '#00695f' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Our Clinics
          </Typography>
          <Button color="inherit" href="#clinics">Clinics</Button>
          <Button color="inherit" href="#usp">Why Us</Button>
          <Button color="inherit" href="#faq">FAQs</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ py: 8, textAlign: 'center', bgcolor: '#e0f7fa' }}>
        <Container>
        <Typography variant="h3" gutterBottom>
          Welcome to Our Clinics
        </Typography>
        <Typography variant="h6">
          Choose the best care for your Dental and Pediatric needs.
        </Typography>
        <p>At our unique dual-specialty hospital, we combine expert dental care and compassionate pediatric services under one roof. Led by a dedicated husband-wife team — a skilled dentist and a caring pediatrician — we ensure that both children and adults receive personalized, professional care in a warm, family-friendly environment.</p>
      </Container>
      </Box>

      {/* Clinics Section */}
      <Container id="clinics" sx={{ py: 6 }}>
        <Grid container spacing={4}>
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

      {/* USP Section */}
      <Box id="usp" sx={{ bgcolor: '#f1f8e9', py: 6 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Why Choose Us?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {['Experienced Doctors', 'Modern Equipment', 'Patient-Centered Care', 'Affordable Packages'].map((usp, i) => (
              <Grid item xs={12} md={3} key={i}>
                <Card sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6">{usp}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container id="faq" sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        {[
          ['What are your clinic timings?', 'Both clinics are open from 10am – 7pm, Monday to Saturday.'],
          ['Do you accept walk-ins?', 'Yes, but appointments are preferred to avoid waiting.'],
          ['Are there any consultation charges?', 'First consultation is free. Follow-ups are charged nominally.'],
        ].map(([question, answer], i) => (
          <Accordion key={i} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      {/* Footer */}
      <Box id="contact" sx={{ bgcolor: '#263238', color: 'white', py: 4, textAlign: 'center' }}>
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







import React from 'react';
import {
  AppBar,
  Typography,
  Container,
  Grid,
  Box,
} from '@mui/material';
import Navbarindex from '../components/header/navbarindex';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Mainslider from '../components/home/Mainslider';
import Cliniclinks from '../components/home/Cliniclinks';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import Homeservices from '../components/home/Homeservices';
import Homeaccordian from '../components/home/Homeaccordian';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};


export default function Home() {
  const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <>
      <Box component="section">
        <AppBar position="static" sx={{ backgroundColor: '#152C79' }}>
          <Navbarindex />
        </AppBar>
        <Mainslider/>

        {/* Hero Section */}
        <Box sx={{ py: 7, textAlign: 'center', bgcolor: 'white' }}>
          <Container>
            <Box   ref={ref} sx={{ py: 2, px: { xs: 2, md: 4 }, textAlign: 'center' }}>
                  <motion.div
    variants={fadeUpVariant}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
  >
              <Typography variant="h2" gutterBottom sx={{ color: '#1b3898', fontWeight: 600 }}>
               About Us
              </Typography>
              </motion.div>
{/* 
              <Typography variant="h6" sx={{ color: '#1b3898', fontWeight: 300, mt: -1, fontSize: 17 }}>
                Two expert-led clinics under one roof in Kalamboli,Navi Mumbai — providing complete dental and pediatric care for all age groups.
              </Typography> */}

              {/* Description */}
              <Box sx={{ mt: 4, textAlign: 'justify',pb:2 }}>
                  <motion.div
    variants={fadeUpVariant}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    transition={{ delay: 0.5 }}
  >
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Welcome to our dual-specialty healthcare center, where compassionate care meets clinical excellence.
                 I'm a paragraph. Click here to add your own text and edit me. It’s easy.
Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                 Explore our dedicated service pages to know more.</Typography>    
              </motion.div>
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
        <Homeservices/>
        <Homeaccordian/>
        {/* Footer */}
                <Box id="contact" sx={{ bgcolor: '#0A163C', color: 'white', py: 5, textAlign: 'left' }}>

        <Container>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                         
                            <Grid item xs={12} sm={12} md={5}>
             <Typography variant="h6" sx={{color:'#d4af37',textShadow: "2px 2px 6px rgba(0,0,0,0.6)",}}> Mauli Children & Multispeciality Hospital</Typography><br></br>
 <Box display="flex" alignItems="center" mb={2}>
                  <LocationOnIcon color="white" sx={{ mr: 1 }} />
                <Typography variant="body1">

Shop no. 30, 1st Floor, Amarante CHS, Sector 9E,<br></br>
Near D-Mart, Kalamboli, Navi Mumbai – 410218<br></br>
</Typography>
</Box>
 <Box display="flex" alignItems="center" mb={2}>
 <CallTwoToneIcon color="white" sx={{ mr: 2,ml:0.5,fontSize:19 }} />

<Typography variant="body1"> +91- 74985 57098/022 3544 1475</Typography>

</Box>

            {/* © {new Date().getFullYear()} Aesthetic & Mauli Clinics. All rights reserved. */}
          
          
          <Typography variant="h6" sx={{color:'#d4af37',textShadow: "2px 2px 6px rgba(0,0,0,0.6)"}}>Aesthetic Dental Clinic</Typography> <br></br>
 <Box display="flex" alignItems="center" mb={2}>
                  <LocationOnIcon color="white" sx={{ mr: 1 }} />
                <Typography variant="body1">

Shop no. 30, 1st Floor, Amarante CHS, Sector 9E,<br></br>
Near D-Mart, Kalamboli, Navi Mumbai – 410218<br></br>
</Typography>
</Box>
 <Box display="flex" alignItems="center">
 <CallTwoToneIcon color="white" sx={{ mr: 2,ml:0.5,fontSize:19 }} />
  <Typography variant="body1">
+91 94211 09516
</Typography>
</Box>
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







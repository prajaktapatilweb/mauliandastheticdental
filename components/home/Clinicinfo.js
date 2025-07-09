import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Drgallery from "./Drgallery";
import Heading from "./Heading";
import { headList1 } from "../constants/titlefile";


 // Define the fade-up animation variants
 const fadeUpVariants = {
  hidden: { opacity: 0, y: 100 },  // Initial state: invisible and below the viewport
  visible: { 
    opacity: 1, 
    y: 0,  // Moves up to its original position
    transition: {
      duration: 0.8, // Duration of the animation
      ease: 'easeInOut', // Easing function
    },
  },
};

const fadeLeftVariants = {
  hidden: { opacity: 0, x: -100, y: 0 }, // Fade from left
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Clinicinfo = () => {
  
  return (
    <Grid
    container
    spacing={0}
    alignItems="center"
    justifyContent="center"
    id="aboutus"
    sx={{py:8 }}
  >


    <Grid item xs={12} md={5} sx={{ p: 1 }}  alignItems="center"
    justifyContent="center">
          <motion.div
            variants={fadeLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Optionally only animate once
          >
            <Drgallery />
          </motion.div>
        </Grid>

        {/* Right Side (Text Content) */}
        <Grid item xs={12} md={7} textAlign="justify" sx={{ p: 2}}  alignItems="center"
    justifyContent="center">
        <motion.div
  className="textcontainer"
  variants={fadeUpVariants}
  initial="hidden"         // Start in the hidden state
  whileInView="visible"    // Animate to the visible state when in view
  viewport={{ once: true }} // Optionally only animate once
>

<Typography
    variant="h1"
    sx={{
        // fontSize: { xs: 27, md: 33 },
        fontWeight: "600",
        color:'primary.dark'
      

    }}
>
From First Tooth to Forever Smiles


</Typography>
<Typography
    component="h1"
    sx={{
        fontSize: { sm: 18, md: 20 },
        fontWeight: "400",
        color: 'primary.light',
        pb:1

    }}
>
Gentle pediatric dentistry and complete dental solutions for your entire family.

</Typography>

            <Typography
            
              style={{
                marginTop: 4,
                marginBottom: 0,
                marginRight:2
               
              }}
            >
              <b>Aesthetic Dental Clinic</b> in Kalamboli, Navi Mumbai, headed by Dr. Sunita Taware (15+ years exp.), is dedicated to delivering comprehensive dental care under one roof. We provide a wide range of treatments including Single Sitting RCT, dental implants, cosmetic veneers, braces & clear aligners, teeth whitening, and painless wisdom tooth removal. 
 <br /><br/>
Our clinic’s modern yet soothing ambiance is thoughtfully designed to reduce dental anxiety and create a comfortable experience for every patient. Blending advanced dental technology with a patient-first, ethical approach, we ensure personalized care for children, adults, and seniors alike. At Aesthetic Dental Clinic, we focus on helping you and your family enjoy healthy, beautiful smiles for life.
            </Typography>
          </motion.div>
          
        </Grid>
        
      </Grid>
    // </Container>
  );
};

export default Clinicinfo;

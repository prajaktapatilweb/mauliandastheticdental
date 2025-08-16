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
            
              sx={{
                marginTop: 1,
                marginBottom: 0,
                marginRight:2,
                px:2
               
              }}
            >
              Welcome to <b>Aesthetic Dental Clinic</b>, Kalamboli – your trusted destination for advanced and compassionate dental care. Led by <b>Dr. Sunita Taware</b>, a highly experienced <b>Pediatric Dentist in Kalamboli</b> with over 15 years of expertise, our clinic offers comprehensive dental services for patients of all ages.
<br></br><br></br>Whether you’re looking for a caring <b>Kids Dentist in Navi Mumbai</b> or need specialized treatments like <b>Single Sitting RCT</b>, dental implants, cosmetic veneers, braces and clear aligners, teeth whitening, or painless wisdom tooth removal – we provide it all under one roof.
<br></br><br></br>As a leading <b>Pedodontist in Navi Mumbai</b>, Dr. Taware ensures that children receive gentle, age-appropriate dental care in a warm, friendly environment. Our modern clinic is thoughtfully designed to ease dental anxiety and promote a stress-free experience for children, adults, and seniors alike.
<br></br><br></br>Combining cutting-edge dental technology with a personalized, ethical approach, Aesthetic Dental Clinic is committed to helping you and your family achieve healthy, beautiful smiles for life.
    </Typography>
          </motion.div>
          
        </Grid>
        
      </Grid>
    // </Container>
  );
};

export default Clinicinfo;

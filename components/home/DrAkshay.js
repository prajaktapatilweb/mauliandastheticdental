import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from 'framer-motion';
import Heading from "./Heading";
import { headList3, headList9 } from "../constants/titlefile";



const DrDombe = () => {

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

  // Define the fade-left animation variants
  const fadeLeftVariants = {
    hidden: { opacity: 0, x: -100, y: 0 },  // Start from the left (-100px offset) and slightly below (50px down)
    visible: {
      opacity: 1,
      x: 0,  // Move to original position horizontally
      y: 0,  // Move to original position vertically
      transition: {
        duration: 0.8,  // Duration of the animation
        ease: 'easeInOut',  // Easing function for a smooth motion

      },
    },
  };

  return (
    <>
      <Box id="Doctors" sx={{ py: 8,textAlign:'center' }}>
        <Container>
   <Heading  data={headList3}/>
        </ Container>

        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
        >


          <Grid item xs={12} sm={5} sx={{ p: 4}}>
            {/* Framer Motion div with whileInView to trigger zoom and position shift */}
            <motion.div
              initial={{ scale: 0.3, y: 0 }} // Start with normal scale and no shift
              whileInView={{ scale: 1, y: 20 }} // Zoom and move the image slightly upwards
              transition={{
                scale: { duration: 0.6, ease: 'easeInOut' }, // Zoom effect
                y: { duration: 0.6, ease: 'easeInOut', delay: 0.6 }, // Move down after zoom
              }}
              viewport={{ once: true }} // Animation triggers only once
            >
              
               <div className='wrappers'>
                <div className='blob'></div>
                <div className='imageContainer'>
                  <Image
                    src="/images/asthetic/dr/dr1.jpg"
                    alt="Doctor"
                    fill
                    className='image'
                  />
                </div>
              </div>

            </motion.div>
          </Grid>
          <Grid item xs={12} sm={7}>
            <motion.div
              className="textcontainer"
              variants={fadeUpVariants}
              initial="hidden"         // Start in the hidden state
              whileInView="visible"    // Animate to the visible state when in view
              viewport={{ once: true }} // Optionally only animate once
            >
              <Box sx={{ px: 2 }}>

              
              

                <Box
                  sx={{

                    color: "text.primary",
                    lineHeight: 1.5,
                    marginBottom: 2.5,
                    fontSize: 17,
                    textAlign: "justify",
                    mt: 2

                  }}
                >
                  <Typography>
                    <b>Dr. Sunita Taware</b><br></br>
BDS - Paedodontics<br></br>
MDS – Medicine And Radiology<br></br><br></br>

<b>Dr. Sunita Taware</b> is an experienced dentist and the founder of Aesthetic Dental Clinic in Kalamboli, Navi Mumbai, with over 15 years of dedicated practice. She holds a B.D.S from MGV Dental College, Nashik, and an M.D.S in Oral Medicine and Radiology (OMDR) from Government Dental College & Hospital, Mumbai. Additionally, she has completed a Fellowship in Restorative Pediatric Dentistry (FRPD) from YMT Dental College, Kharghar, Mumbai.
<br></br><br></br>
A proud member of the Indian Dental Association, Dr. Taware combines her advanced clinical expertise with a gentle, patient-friendly approach. While she has specialized training in pediatric and restorative dentistry, she provides comprehensive dental care to patients of all age groups — including preventive, restorative, cosmetic, and oral medicine services.
<br></br><br></br>
At Aesthetic Dental Clinic, Dr. Taware is committed to delivering ethical, high-quality, and comfortable dental care for the whole family.


                   </Typography>

                </Box>

                {/* <input type="checkbox" class="check" /> */}

              </Box>
            </motion.div>
          </Grid>



         
         


        </Grid>

      </Box>
    </>
  );
};
export default DrDombe;

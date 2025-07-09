import React from 'react'
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Avatar,  Box,  Typography } from "@mui/material";
import CountUp from 'react-countup';
import { motion} from "framer-motion";

export default function Countdown() { 
     var Details = [
    {
      startnumber: '1',
      numbers: '15',
      title: 'Years of Experience',
    },
    {
      startnumber: '100',
      numbers: '500',
      title: 'Dental Implants',
    },
    {
      startnumber: '500',
      numbers: '2000 ',
      title: 'Successful Root Canals',
    },
    {
      startnumber: '70',
      numbers: '100',
      title: 'Sterilization Standards',
      //   decimals: 1,
    },
  ];

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

    return (
        <div>
            <Box sx={{mx:2,zIndex:1,position:'relative'}}>
           <motion.div
  className="textcontainer"
  variants={fadeUpVariants}
  initial="hidden"         // Start in the hidden state
  whileInView="visible"    // Animate to the visible state when in view
  viewport={{ once: true }} // Optionally only animate once
>

            <Container sx={{
                width:'100%',
                backgroundColor: 'white',  py:{xs:3,sm:3,md:7},
                mt: -15, borderRadius: {xs:5,sm:3,md:5}, 
                boxShadow:
                'rgba(100, 50, 93, 0.25) 0px 50px 60px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 1px -2px 3px 1px inset',
              
                '&:hover': {
                   
                    transition: 'box-shadow 0.3s ease',
                },
            }}>

                <Grid container spacing={0} alignItems='center' justifyContent='center' textAlign='center'>
                     {Details.map((item, i) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={i}
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                >
                  <CountUp
                    end={item.numbers}
                    duration={5}
                    start={item.startnumber}
                    suffix={i === Details.length - 1 ? '%' : '+'} // 👈 Dynamic suffix
                    // decimals={item.decimals ? item.decimals : 0}
                    className="paras"
                  />{' '}
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#333333',
                      cursor: 'pointer',
                      fontSize: { xs: 18, sm: 20, md: 24 },
                      mt: 1,
                      transition: 'color 0.3s ease',
                      '&:hover': { color: '#fcb950' }, // gold hover effect
                    }}
                  >
                    {item.title}
                  </Typography>
                </Grid>
              ))}


                </Grid>

            </Container>
            </motion.div>
            </Box>
        </div>
    );
}

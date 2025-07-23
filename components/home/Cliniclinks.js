import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // stagger delay based on index
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
export default function Cliniclinks() {

    const details=[ {
          title:"Aesthetic Dental Clinic",
        description:"From preventive checkups and painless root canals to smile designing and implants, Aesthetic Dental Clinic offers modern, personalized dental care using advanced techniques and equipment.",
        buttonText:" Visit Website",
         link:'/astheticdental'},
         {
          title:"Mauli Pediatric Clinic",
        description:"Mauli Hospital offers complete pediatric care — including NICU, vaccinations, child development, and adolescent health — along with general and emergency medical services for families.",
        buttonText:" Visit Website",
         link:'/maulichildren'},
    ]
  return (
    <div>
   <Grid container spacing={4} id='clinics'>
  {details.map((item, i) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <Grid item xs={12} sm={6} key={i}>
        <motion.div
          ref={ref}
          variants={cardVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={i} // pass index for staggered delay
        >
          <Card className="cards">
            <div className="lines"></div>
            <Box sx={{ zIndex: 99, position: "relative" }}>
              <CardContent sx={{ px: 3, pt: 3 }}>
                <Typography
                  variant="h4"
                  sx={{ color: "#1b3898", fontWeight: 700 }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ mt: 1.5, textAlign: "justify" }}
                >
                  {item.description}
                </Typography>

                <Button
                  variant="contained"
                  size="medium"
                  href="/maulichildren"
                  sx={{
                    mt: 3,
                    backgroundColor: "#1b3898",
                    gap: 1.5,
                    "&:hover": {
                      backgroundColor: "#12276A",
                      color: "white",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      letterSpacing: 1,
                    }}
                  >
                    {item.buttonText}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
                    </motion.span>
                  </Box>
                </Button>
              </CardContent>
            </Box>
          </Card>
        </motion.div>
      </Grid>
    );
  })}
</Grid>

    </div>
  )
}

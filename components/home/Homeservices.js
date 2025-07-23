import { Box, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import {
  MedicalServices,
  PrecisionManufacturing,
  Favorite,
  LocalOffer,
} from "@mui/icons-material";
import { motion, useInView } from "framer-motion";
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

export default function Homeservices() {
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
        const ref = useRef(null);
      const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div>
        <Box id="usp" sx={{ bgcolor: "#f4f6ff", py: 7 }}>
          <Container ref={ref}>
                            <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
            <Typography variant="h3" align="center" gutterBottom sx={{ color: '#1b3898' }}>
              Why Choose Us?
            </Typography>
            </motion.div>   
            <Grid container spacing={4} sx={{ mt: 2 }}>
  {uspData.map((item, i) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <Grid item xs={12} sm={6} md={3} key={i} ref={ref}>
        <Card
          component={motion.div}
          variants={cardVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={i}
          elevation={6}
          sx={{
            p: 3,
            borderRadius: 3,
            borderBottom: "4px solid #152C79",
            textAlign: "center",
            height: "100%", // ✅ ensures equal height
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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
          <Typography color="text.secondary" sx={{ textAlign: "justify" }}>
            {item.description}
          </Typography>
        </Card>
      </Grid>
    );
  })}
</Grid>

          </Container>
        </Box>
    </div>
  )
}

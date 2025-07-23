import React from "react";
import Slider from "react-slick";
import { Box, Button, Typography, Grid, Hidden } from "@mui/material";
import Image from "next/image";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};


const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        right: 2,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        // backgroundColor: "rgba(0,0,0,0.4)",
        color: "#fff",
       
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        left: 2,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        // backgroundColor: "rgba(0,0,0,0.4)",
        color: "#fff",
      
      }}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
};

const slides = [
  {
    backgroundImage: "/images/hero2.jpg",
    title:  <span style={{ color: 'white' }}> One Destination. Two Specialties. <span style={{color:'#d4af37'}}>Total Family Care.</span></span>,
    description:
      "A state-of-the-art Dental Clinic led by a highly experienced dental professional with over 15 years of expertise in cosmetic and restorative dentistry.",

    },
  {
    backgroundImage: "/images/hero1.jpg",
    title: "Mauli Pediatric Clinic",
    description:
      "A trusted Children & Multispeciality Hospital led by a senior pediatrician with 17+ years of experience in child health, neonatal care, and general medicine.",
 btn:'visit clinic'
    },
  {
    backgroundImage: "/images/hero4.jpg",
        title: "Aesthetic Dental Clinic",

    description:
      "A trusted Children & Multispeciality Hospital led by a senior pediatrician with 17+ years of experience in child health, neonatal care, and general medicine.",
  btn:'visit clinic'
    },
];

const Mainslider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
     nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  };

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "visible" }}>
      
      {/* Background Image Slider */}
      <Slider {...settings}>
  {slides.map((slide, index) => (
    <Box
      key={index}
      sx={{
        position: "relative",
        height: { xs: '70vh', md: '80vh' },
        width: "100%",
      }}
    >
      {/* Background Image */}
      <Image
        src={slide.backgroundImage}
        alt={`Slide ${index + 1}`}
        layout="fill"
        objectFit="cover"
        priority={index === 0}
        style={{ zIndex: 1, backgroundPosition: "center" }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6))",
          zIndex: 2,
        }}
      />

      {/* Text Content */}
      <Box
        sx={{
          position: "absolute",
          top:'30%',
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          width: { xs: "90%", md: "80%" },
        }}
      >
        <motion.div
  variants={fadeUpVariant}
  initial="hidden"
  animate="visible"
  custom={0} // delay: 0s
>
        <Typography
          variant="h1"
          sx={{
            mb: 4,
            fontWeight: 800,
            fontSize: { xs: "1.8rem", md: "3rem" },
            color: "#d4af37",
            textAlign: "center",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
            px: { xs: 1, md: 4 },
            lineHeight: 1.3,
          }}
        >
 {slide.title}
         
        </Typography>
</motion.div>
<motion.div
  variants={fadeUpVariant}
  initial="hidden"
  animate="visible"
  custom={0.5} // delay: 0.5s
>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "white",
            px:{xs:1,sm:4,md:10,lg:15},
            textAlign:'center',
            letterSpacing: 1,
            lineHeight:1.5,
            textShadow: "2px 2px 6px rgba(133, 132, 132, 0.4)",
          }}
        >
          {slide.description}
        </Typography>
        </motion.div>
        {/* <Box sx={{textAlign:'center',mt:3}}>
        <Button variant="contained" size="large" sx={{color:'white',backgroundColor:'#d4af37'}}> {slide.btn}</Button>
        </Box> */}

      </Box>
    </Box>
  ))}
</Slider>

      {/* Static Glassmorphism Cards */}
    
    </Box>
  );
};

export default Mainslider;

import React from "react";
import Slider from "react-slick";
import { Box, Button, Typography, Grid, Hidden } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        right: 10,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        backgroundColor: "rgba(0,0,0,0.4)",
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
        left: 10,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        backgroundColor: "rgba(0,0,0,0.4)",
        color: "#fff",
      }}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
};



const backgroundImages = [
  "/images/headerback1.jpg",
  "/images/headerback3.jpg",
  // Add more if needed
];

const cardData = [
  {
    title: "Aesthetic Dental Clinic",
    description: "A state-of-the-art Dental Clinic led by a highly experienced dental professional with over 15 years of expertise in cosmetic and restorative dentistry.",
   
  },
  {
    title: "Mauli Pediatric Clinic",
    description: "A trusted Children & Multispeciality Hospital led by a senior pediatrician with 17+ years of experience in child health, neonatal care, and general medicine.",
   
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
        {backgroundImages.map((img, index) => (
         <Box
  key={index}
  sx={{
    position: "relative",
    height: { xs: '80vh', md: '90vh' },
    width: "100%",
  }}
>
  {/* Next.js Image */}
  <Image
    src={img}
    alt={`Background ${index + 1}`}
    layout="fill"
    objectFit="cover"
    priority={index === 0}
    style={{ zIndex: 1,backgroundPosition:'center' }}
  />

  {/* Gradient Overlay */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: {
        xs: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
        md: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
      },
      zIndex: 2,
    }}
  />
</Box>

        ))}
      </Slider>
      {/* Static Glassmorphism Cards */}
      <Box
        sx={{
          position: "absolute",
          bottom: {xs:0,sm:40},
          top:150,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          width: { xs: '90%', md: '80%' },
        }}
      >
       <Typography
  variant="h1"
  sx={{
    mb: 4,
    fontWeight: 800, // Extra bold
    fontSize: { xs: '1.8rem', md: '3rem' }, // Responsive size
    color: "#ffffff", // High contrast white
    textAlign: 'center',
    textShadow: "2px 2px 6px rgba(0,0,0,0.6)", // Deeper shadow for emphasis
    px: { xs: 2, md: 4 },
    lineHeight: 1.3,
  }}
>
  One Destination. Two Specialties. <span style={{ color: '#d4af37' }}>Total Family Care.</span>
</Typography>
<Hidden smDown>
        <Grid container spacing={3} justifyContent="center">
          {cardData.map((card, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Box
                sx={{
                  px: 3,
                  py: 3,
                  borderRadius: 3,
                  backdropFilter: 'blur(8px)',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  color: '#fff',
  textAlign: 'center',
  transition: '0.3s',
  mt:2,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ color: "#fff",fontWeight:700,letterSpacing:1}}>
                  {card.title}
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ color: "#f0f0f0", mb: 2,textAlign:'justify',fontFamily:'Open Sans',fontSize:17,letterSpacing:0.6 }}>
                  {card.description}
                </Typography>
                {/* <Link href={card.link} passHref>
                  <Button variant="contained" color="primary" size="medium">
                    {card.buttonText}
                  </Button>
                </Link> */}
              </Box>
            </Grid>
          ))}
        </Grid>
        </Hidden>
      </Box>
    </Box>
  );
};

export default Mainslider;

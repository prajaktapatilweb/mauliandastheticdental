import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";
import Heading from "./Heading";
import { useTheme, styled } from "@mui/material/styles";
import {  useMediaQuery } from "@mui/material";
import { headList6 } from "../constants/titlefile";

const StyledDots = styled("ul")(({ theme }) => ({
  "&.slick-dots": {
    position: "relative",
    left: 0,
    paddingLeft: theme.spacing(1),
    textAlign: "center",
    marginBottom:35,
   
    "& li": {
      marginRight: theme.spacing(1),
    
      "&.slick-active>div": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));

const Equipment = () => {

 const { breakpoints } = useTheme();
   // Breakpoints for screen sizes
   const matchMobileView = useMediaQuery(breakpoints.down("sm"));  // xs or smaller
   const matchSmallView = useMediaQuery(breakpoints.between("sm", "md"));  // between sm and md
   const matchMediumView = useMediaQuery(breakpoints.up("md"));  // md and above
  // const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const sliderConfig = {
    infinite: true,
    autoplay: true,
    arrows:false,
    adaptiveheight: false,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : matchSmallView ? 2 : 4, // 1 slide for xs, 2 for sm, 3 for md+
    // slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box
        sx={{
          height: 20,
          width: 20,
          backgroundColor: "divider",
          display: "flex",
          borderRadius: 4,
         
      
        }}
      />
    ),
  };

  const Details = [
    { img: "/images/equip/eqip21.jpg", desc: "Dental Scanner" },
    { img: "/images/equip/xray2.jpg", desc: "Digital X Ray" },
    { img: "/images/equip/equip23.jpg", desc: "Dental Loupes" },
    { img: "/images/equip/cbct.jpg", desc: "CBCT Machine" },
    { img: "/images/equip/laser4.webp", desc: "Laser" },
  ];

  const settings = {
    dots: true,
   appendDots: (dots) => <StyledDots>{dots}</StyledDots>,

    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 400,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section style={{ background: "#f3ece8", padding: "60px 0" }}>
      <Container>
        <Heading data={headList6} />
       <Slider {...sliderConfig}>
          {Details.map((item, i) => (
            <Box
  key={i}
  sx={{
    px: 1,           // Horizontal padding between slides
    py: 4,           // Vertical padding
  }}
>
  <Box
    sx={{
      backgroundColor: "white",     // ✅ Card background
      borderRadius: 3,
      overflow: "hidden",
      p: 0,                         // ✅ Inner padding for content spacing
      boxShadow: 3,                 // Optional: soft shadow
      height: "100%",               // Optional: consistent height
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <Box
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        border: "5px solid white",   // ✅ White border around image
        mb: 2,
      }}
    >
    <Image
  src={item.img}
  alt={item.desc}
  width={350}
  height={250}
  style={{
    width: "100%",
    height: "230px",        // ✅ Fixed height for consistency
    objectFit: "cover",     // ✅ Ensures uniform cropping
    display: "block"
  }}
/>
    </Box>
    <Typography
      variant="h6"
      sx={{ textAlign: "center", fontWeight: 500 }}
    >
      {item.desc}
    </Typography>
  </Box>
</Box>

          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Equipment;

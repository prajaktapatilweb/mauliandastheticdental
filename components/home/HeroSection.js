import * as React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { StyledButton } from "../styled-button";
import PropTypes from "prop-types";
import Link from "next/link";

const HeroSection = ({ title, description, buttonText, link, bgImage, gradient, }) => {
  return (
    <Grid
      item
      xs={12}
      md={6}
    >
      <Box   
      component={motion.div}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundImage: `linear-gradient(${gradient}), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        borderRadius:3,
        p:1
      }}>
      {/* Glassmorphism Overlay Full Cover */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(3px)",
          backgroundColor: "rgba(255, 255, 255, 0.001)",
          zIndex: 1,
           borderRadius:5,
        }}
      />

      {/* Content Box */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: 600,
          textAlign: "center",
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 6 },
        }}
      >
        {/* <Box sx={{ mb: 3 }}>
          <Image src={logos} alt="Clinic Logo" layout="responsive" width={100} height={100} priority />
        </Box> */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography variant="h2" fontWeight={800} gutterBottom sx={{ textShadow: "2px 2px 8px rgba(0,0,0,0.4)" }}>
            {title}
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            {description}
          </Typography>
          <Link href={link} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
             <StyledButton
  variant="outlined"
  size="large"
  sx={{
    borderRadius: 10,
    border: "2px solid white",
    backgroundColor: "transparent",
    fontWeight: 700,
    color: "white",
    fontSize: 17,
    px: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    gap: 1.5,
    minWidth: "fit-content",
    mx: "auto", // <-- Center the button horizontally
  }}
>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {buttonText}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
                  </motion.span>
                </Box>
              </StyledButton>
            </a>
          </Link>
        </motion.div>
      </Box>
      </Box>
    </Grid>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
  gradient: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default HeroSection;

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import Link from 'next/link';


export default function Home() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Box
  sx={{
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // vertical centering
    alignItems: 'center',     // horizontal centering
    textAlign: 'center',

  }}
>

      {/* Background image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/images/home_back.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // adjust opacity as needed
          zIndex: -1, // should be above background but below content
        }}
      />


      {/* Particles */}
      <Particles
        init={particlesInit}
        options={{
          background: { color: 'transparent' },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: ['#0099ff', '#ff1a1a'] },
            links: { color: '#4db8ff', distance: 120, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1, outModes: { default: 'bounce' } },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.4 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
        style={{ position: 'absolute', inset: 0, zIndex: -1 }}
      />

      <Container sx={{ position: 'relative', zIndex: 1, py: 8 }}>
      <motion.div
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
>
<Box sx={{ textAlign: 'center', mb: { xs: 4, md: 10 }}}>
<Typography
  variant="h2"
  sx={{
    fontWeight: 'bold',
    fontSize: 25,
    mb: 2,
    fontFamily: '"Iceberg", sans-serif',
    color: '#fff',
    textAlign: 'center',
  }}
>
  <Box
    component="span"
    sx={{ display: { xs: 'block', md: 'inline' } }}
  >
    One Destination
    <Box component="span" sx={{ color: 'red', mx: 0.5 }}>.</Box>
  </Box>{' '}

  <Box
    component="span"
    sx={{ display: { xs: 'block', md: 'inline' } }}
  >
    <Box
      component="span"
      sx={{
        background: 'linear-gradient(to left bottom, rgb(56, 189, 248), rgb(30, 64, 175))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      Two Specialties
    </Box>
    <Box component="span" sx={{ color: 'red', mx: 0.5 }}>.</Box>
  </Box>{' '}

  <Box
    component="span"
    sx={{ display: { xs: 'block', md: 'inline' } }}
  >
    Total Family Care
    <Box component="span" sx={{ color: 'red', mx: 0.5 }}>.</Box>
  </Box>
</Typography>


  <Typography
    sx={{
      color: 'rgba(255,255,255,0.8)',
      mb: 4,
      fontSize: 20,
      fontWeight: 400,
      display: { xs: 'none', sm: 'block' },
    }}
  >
    Two expert-led clinics under one roof in Kalamboli, Navi Mumbai — offering complete dental care and specialized pediatric & multispeciality services for all age groups.
  </Typography>
</Box>

</motion.div>

        <Grid container spacing={{ xs: 4, sm: 8, md: 14 }}  justifyContent="center">
          {/* Firm One */}
<Grid item xs={12} sm={6} md={6}>
  <Link href="/astheticdental" passHref legacyBehavior>
    <motion.a
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}

      whileHover={{ scale: 1.05 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '34px',
        color: '#fff',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
        border: '2px solid rgba(255, 255, 255, 0.18)',
        transition: 'all 0.3s ease',
      }}
      sx={{
        p: { xs: 0, sm: 4 }, // 👈 responsive padding: smaller on xs (mobile), larger on sm+
      }}
    >
     <Box
  sx={{
    position: 'relative',
    width: 150,
    height: 150,
    mb: 2,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: 'rgba(251, 113, 133, 0.6)', // glow color
      animation: 'pulse 2s infinite',
      zIndex: 0,
    },
    '@keyframes pulse': {
      '0%': { transform: 'scale(1)', opacity: 0.7 },
      '50%': { transform: 'scale(1.3)', opacity: 0 },
      '100%': { transform: 'scale(1)', opacity: 0.7 },
    },
  }}
>
  <Box
    component="img"
    src="/astheticlogo.jpg"
    alt="Firm One Logo"
    sx={{
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      position: 'relative',
      zIndex: 1,
    }}
  />
</Box>

      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 ,fontFamily:'"Cairo Play", sans-serif'}}>
        Asthetic Dental Clinic
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
      Healthy Smiles Begin with Gentle Dental Care
      </Typography>
      <Box
  sx={{
    display: 'inline-block',
    background: 'conic-gradient(at left bottom, rgb(136, 19, 55), rgb(146, 64, 14), rgb(251, 113, 133))',
    color: '#fff',
    px: 2,
    py: 1,
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    '&:hover': {
      boxShadow: '0 0 15px rgba(251, 113, 133, 0.6), 0 0 25px rgba(146, 64, 14, 0.4)',
      transform: 'scale(1.05)',
    },
  }}
>
  Visit Website
</Box>

    </motion.a>
  </Link>
</Grid>

{/* Firm Two */}
<Grid item xs={12} sm={6} md={6}>
  <Link href="/maulichildren" passHref legacyBehavior>
    <motion.a
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}

      whileHover={{ scale: 1.05 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '34px',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '20px',
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
        border: '2px solid rgba(255, 255, 255, 0.18)',
        transition: 'all 0.3s ease',
      }}
      sx={{
        p: { xs: 2, sm: 4 }, // 👈 responsive padding: smaller on xs (mobile), larger on sm+
      }}
    >
<Box
  sx={{
    position: 'relative',
    width: 150,
    height: 150,
    mb: 2,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: 'rgba(56, 189, 248, 0.8)', // sky blue glow
      animation: 'pulse 2s infinite',
      zIndex: 0,
    },
    '@keyframes pulse': {
      '0%': { transform: 'scale(1)', opacity: 0.7 },
      '50%': { transform: 'scale(1.3)', opacity: 0 },
      '100%': { transform: 'scale(1)', opacity: 0.7 },
    },
  }}
>
  <Box
    component="img"
    src="/maulilogo1.png"
    alt="Firm Two Logo"
    sx={{
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      position: 'relative',
      zIndex: 1,
    }}
  />
</Box>

      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1,fontFamily:'"Cairo Play", sans-serif' }}>
        Mauli Children Hospital
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
      Nurturing Your Child’s Health, Every Step of the Way
      </Typography>
      <Box
  sx={{
    display: 'inline-block',
    background: 'linear-gradient(to left bottom, rgb(56, 189, 248), rgb(30, 64, 175))',
    color: '#fff',
    px: 2,
    py: 1,
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    '&:hover': {
      boxShadow: '0 0 15px rgba(56, 189, 248, 0.7), 0 0 25px rgba(30, 64, 175, 0.5)',
      transform: 'scale(1.05)',
    },
  }}
>
  Visit Website
</Box>


    </motion.a>
  </Link>
</Grid>
        </Grid>
      </Container>
    </Box>
  );
}

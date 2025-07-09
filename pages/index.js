import { Box, Grid } from '@mui/material';
import HeroSection from '../components/home/HeroSection';

export default function Home() {
  return (
    <>
    <Box component="section">
    <Grid container sx={{ height: "100vh" }}>
      <HeroSection
        title="Expert Dental Care for All Ages"
        description=" Dental Clinic in Kalamboli, Navi Mumbai - Aesthetic"
        buttonText="Let’s Perfect Your Smile"
        link='/astheticdental'
        bgImage="/images/headerback1.jpg"
        gradient="to right, rgba(179, 129, 90, 0.6), rgba(210, 162, 125, 0.6)"
      />
  
      <HeroSection
        title="Caring for Your Little Ones"
        description="Compassionate pediatric care for infants, toddlers, and kids."
        buttonText="Let’s Nurture Their Health"
         link='/maulichildren'
        bgImage="/images/headerback3.jpg"
        gradient="to right, rgba(30,144,255, 0.6), rgba(30,144,255, 0.6)"
      />
    </Grid>
  </Box>
  
    </>
  )
}


import React from 'react';
import Box from '@mui/material/Box';
import { Footer } from '../footer';
import { Header } from '../header';
import AppThemeSetting from './AppThemeSetting';
const MainLayout = ({ children }) => {
  return (<Box component="main">
     <Head>
        <link rel="icon" href="/astheticlogo.jpg" />
          <title>
                                Dental Clinic in Kalamboli, Navi Mumbai - Aesthetic
                                </title>
                                <meta name="title" content=" Dental Clinic in Kalamboli, Navi Mumbai - Aesthetic"></meta>
                                 <meta name='description' content="Achieve a healthy, confident smile at Aesthetic Dental Clinic in Kalamboli. We provide modern, family-friendly dental care with a focus on your comfort and long-term oral health."></meta>
                                {/* OG Tags -  */}
                               <meta property="og:title" content="Dental Clinic in Kalamboli, Navi Mumbai - Aesthetic" />
<meta property="og:description" content="Achieve a healthy, confident smile at Aesthetic Dental Clinic in Kalamboli. We provide modern, family-friendly dental care with a focus on your comfort and long-term oral health." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://maulichildrenhealth.vercel.app/" />
<meta property="og:image" content="https://maulichildrenhealth.vercel.app/_next/image?url=%2Fimages%2Fasthetic%2Fdr%2Fdr1.jpg&w=1920&q=75" />
<meta property="og:site_name" content="Aesthetic Dental Clinic" />
<meta property="og:locale" content="en_US" />


 </Head>
    <Header />
    <AppThemeSetting/>
    {children}
    <Footer />
  </Box>);
};
export default MainLayout;

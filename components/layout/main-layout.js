import React from 'react';
import Box from '@mui/material/Box';
import { Footer } from '../footer';
import { Header } from '../header';
import AppThemeSetting from './AppThemeSetting';
import Head from 'next/head';


const MainLayout = ({ children }) => {
  return (<Box component="main">
     <Head>
        <link rel="icon" href="/astheticlogo.jpg" />
          <title>
                              Dentist in Kalamboli |  Kids Dental Clinic in Navi Mumbai
                                </title>
                                <meta name="title" content="Dentist in Kalamboli |  Kids Dental Clinic in Navi Mumbai"></meta>
                                 <meta name='description' content="Dr. Sunita Taware is a trusted pediatric dentist in Kalamboli, Navi Mumbai, offering gentle, expert dental care for children of all ages."></meta>
                               <link rel="canonical" href="https://www.maulihospitalanddentalcare.com/astheticdental"/>

                               
                               
                                {/* OG Tags -  */}
                              <meta property="og:title" content="Aesthetic Dental Clinic in Kalamboli, Navi Mumbai" />
<meta property="og:description" content="Looking for a top dental clinic in Kalamboli, Navi Mumbai? We offer RCT, implants, braces, veneers, whitening & painless tooth removal." />
<meta property="og:image" content="https://www.maulihospitalanddentalcare.com/_next/image?url=%2Fimages%2Fasthetic%2Fassclinic%2Fclinic3.jpg&w=1920&q=75" />
<meta property="og:url" content="https://www.maulihospitalanddentalcare.com/astheticdental" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Aesthetic Dental Clinic in Kalamboli, Navi Mumbai" />
<meta name="twitter:description" content="Looking for a top dental clinic in Kalamboli, Navi Mumbai? We offer RCT, implants, braces, veneers, whitening & painless tooth removal." />
<meta name="twitter:image" content="https://www.maulihospitalanddentalcare.com/_next/image?url=%2Fimages%2Fasthetic%2Fassclinic%2Fclinic3.jpg&w=1920&q=75" />
<meta name="twitter:site" content="@clinic_den54181" />


<script type="application/ld+json"
                                 dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Aesthetic Dental Clinic",
  "image": "https://www.maulihospitalanddentalcare.com/_next/image?url=%2Fimages%2Fasthetic%2Fassclinic%2Fclinic3.jpg&w=1920&q=75",
  "@id": "",
  "url": "https://www.maulihospitalanddentalcare.com/astheticdental",
  "telephone": "9421109516",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop no 30/31, 1st Floor, Amarante CHS, Sector 9E, near D Mart Road, Kalamboli",
    "addressLocality": "Navi Mumbai",
    "postalCode": "410218",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.037238,
    "longitude": 73.102688
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "09:30"
  },
  "sameAs": [
    "https://www.facebook.com/aesthetic.dental.cliniic/",
    "https://www.instagram.com/aesthetic.dental.cliniic",
    "https://www.youtube.com/@aesthetic.dental.cliniic",
    "https://www.threads.net/@aesthetic.dental.cliniic",
    "https://x.com/clinic_den54181",
    "https://www.pinterest.com/aestheticdentalclinic_mumbai/",
    "https://www.linkedin.com/in/aesthetic-dental-clinic-3637b8372/",
    "https://www.practo.com/navi-mumbai/clinic/aesthetic-dental-clinic-4-kalamboli?specialization=Dentist"
  ] 
}
),
}}
/>

<script type="application/ld+json"
                                 dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Dr. Sunita Taware",
  "image": "https://www.maulihospitalanddentalcare.com/_next/image?url=%2Fimages%2Fasthetic%2Fdr%2Fdr2.jpg&w=1920&q=75",
  "url": "https://www.maulihospitalanddentalcare.com/astheticdental",
  "telephone": "+919421109516",
  "priceRange": "$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop no 30/31, 1st Floor, Amarante CHS, Sector 9E, near D Mart Road, Kalamboli",
    "addressLocality": "Navi Mumbai",
    "postalCode": "410218",
    "addressCountry": "IN"
  },
  "founder": {
    "@type": "Dentist",
    "name": "Dr. Sunita Taware"
  }
}
),
}}
/>



 </Head>
    <Header />
    <AppThemeSetting/>
    {children}
    <Footer />
  </Box>);
};
export default MainLayout;

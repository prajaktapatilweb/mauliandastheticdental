import React from 'react';
import Box from '@mui/material/Box';
import Mauliheader from '../header/mauliheader';
import Footer1 from '../footer/footer1';
import AppThemeSetting1 from './AppThemeSetting1';
import Head from 'next/head';

const MainLayout1 = ({ children }) => {
  return (<Box component="main">
      <Head>
           <link rel="icon" href="/maulilogo1.jpg" />
        <title>Mauli Children & Multispeciality Hospital in Kalamboli, Navi Mumbai</title>
                <meta name="title" content="Mauli Children & Multispeciality Hospital in Kalamboli, Navi Mumbai"/>
                <meta name="description" content="From newborns to teens, we’ve got every stage covered — NICU, PICU, vaccines, growth care & more. See why parents call us their ‘second home’ for child health." />
                <link rel="canonical" href="https://www.maulihospitalanddentalcare.com/maulichildren"/>
                <meta property="og:title" content="Mauli Children & Multispeciality Hospital in Kalamboli, Navi Mumbai" />
<meta property="og:description" content="Children’s hospital in Kalamboli, Navi Mumbai – Mauli Children & Multispeciality Hospital led by Dr. Parmeshwar Taware, 17+ yrs exp, expert pediatric care." />
<meta property="og:image" content="https://www.maulihospitalanddentalcare.com/_next/image?url=%2Fimages%2Fpatients%2Fpatient1.jpg&w=1920&q=75" />
<meta property="og:url" content="https://www.maulihospitalanddentalcare.com/maulichildren" />
<meta property="og:type" content="website" />

{/* <!-- Twitter Card --> */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Mauli Children & Multispeciality Hospital in Kalamboli, Navi Mumbai"/>
<meta name="twitter:description" content="Children’s hospital in Kalamboli, Navi Mumbai – Mauli Children & Multispeciality Hospital led by Dr. Parmeshwar Taware, 17+ yrs exp, expert pediatric care." />
<meta name="twitter:image" content="https://www.maulihospitalanddentalcare.com/_next/image?url=%2Fimages%2Fpatients%2Fpatient1.jpg&w=1920&q=75" />
<meta name="twitter:site" content="@mauli_hospital" />

<script type="application/ld+json"
                                 dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mauli Children & Multispeciality Hospital",
  "image": "https://www.maulihospitalanddentalcare.com/_next/image?url=%2Fimages%2Fpatients%2Fpatient1.jpg&w=1920&q=75",
  "@id": "",
  "url": "https://www.maulihospitalanddentalcare.com/maulichildren",
  "telephone": "7498557098",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop no 30/31, 1st Floor, Amarante CHS, Sector 9E, near D Mart Road, Kalamboli",
    "addressLocality": "Navi Mumba",
    "postalCode": "410218",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.0378194,
    "longitude": 73.1026188
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
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/mauli.children.hospital/",
    "https://www.instagram.com/mauli_children_hospital",
    "https://www.youtube.com/@mauli_children_hospital",
    "https://www.threads.net/@mauli_children_hospital",
    "https://x.com/mauli_hospital",
    "linkedin.com/in/mauli-children-and-multi-speciality-hospital-286106373",
    "https://www.practo.com/navi-mumbai/doctor/parmeshwar-taware-pediatrician"
  ] 
}
),
}}
/>
<script type="application/ld+json"
                                 dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Doctor",
  "name": "Dr. Parmeshwar Taware",
  "image": "https://www.maulihospitalanddentalcare.com/_next/image?url=%2Fimages%2Fdr%2Fdr2.jpg&w=1920&q=75",
  "url": "https://www.maulihospitalanddentalcare.com/maulichildren",
  "telephone": "+917498557098",
  "priceRange": "$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop no 30/31, 1st Floor, Amarante CHS, Sector 9E, near D Mart Road, Kalamboli",
    "addressLocality": "Navi Mumbai",
    "postalCode": "410218",
    "addressCountry": "IN"
  },
  "founder": {
    "@type": "Doctor",
    "name": "Dr. Parmeshwar Taware"
  }
}
),
}}
/>



                </Head>

    <Mauliheader/>
    <AppThemeSetting1/>
    {children}
    <Footer1 />
  </Box>);
};
export default MainLayout1;

import { Suspense, lazy } from "react";
const Photogallery = lazy(() => import('../components/home/photo-gallery'))
import { MainLayout } from '../components/layout';
import Dentalservices from '../components/home/Dentalservices';
import Contact from '../components/home/Contact';
import Countdown from "../components/home/Countdown";
import Clinicinfo from "../components/home/Clinicinfo";
import DrDombe from "../components/home/DrAkshay";
import FAQAccordion from "../components/home/FAQAccordion";
import Equipment from "../components/home/Equipment";
const Testimonial = lazy(() => import('../components/home/Testimonial'))

export default function Home() {
  return (
    <>
      <Countdown />
      <Clinicinfo></Clinicinfo>
      {/* <Countup></Countup> */}
      <Dentalservices/>
      <DrDombe></DrDombe>
      <Suspense fallback=
        {<div>Component are loading please wait...</div>}>
        <Photogallery />
        {/* <Awards/> */}
        <Testimonial></Testimonial>
        <Equipment/>
      </Suspense>
      <FAQAccordion/>
      <Contact></Contact> 
    </>
  )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;


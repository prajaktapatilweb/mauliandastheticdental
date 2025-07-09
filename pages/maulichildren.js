import Countdown from '../components/home/Countdown';
import Clinicinfomauli from '../components/home/Maulichildren/Clinicinfomauli';
import Mauliservices from '../components/home/Maulichildren/Mauliservices';
import DrParmeshwar from '../components/home/Maulichildren/DrParmeshwar ';
import InsurerLogos from '../components/home/Maulichildren/InsurerLogos';
import Photogallery from '../components/home/Maulichildren/photo-gallery';
import Testimonial from '../components/home/Maulichildren/Testimonial';
import FAQAccordion from '../components/home/Maulichildren/FAQAccordion';
import MainLayout1 from '../components/layout/main-layout 1';
import Countup from '../components/home/Countup';
import Contactmauli from '../components/home/Maulichildren/Contactmauli';

export default function Home() {
  return (
    <>
 <Countup/>
<Clinicinfomauli/>
<Mauliservices/>
<DrParmeshwar/>
<InsurerLogos/>
<Photogallery/>
<Testimonial/>
<FAQAccordion/>
<Contactmauli/>
    </>
  )
}
Home.getLayout = (page) => <MainLayout1>{page}</MainLayout1>;


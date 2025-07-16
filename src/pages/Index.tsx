import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Treatments from '../components/Treatments';
import AffiliateHospitals from '../components/AffiliateHospitals';
import Appointment from '../components/Appointment';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dr. Datta Sonawane - Urology Specialist | Advanced Urological Treatments</title>
        <meta name="description" content="Dr. Datta Sonawane provides comprehensive urological care including kidney stone treatment, prostate disorders, male infertility, and minimally invasive surgeries. Book your appointment today." />
        <meta name="keywords" content="urology, urologist, kidney stones, prostate treatment, male infertility, laparoscopic surgery, endourology, Dr. Datta Sonawane" />
        <meta property="og:title" content="Dr. Datta Sonawane - Urology Specialist" />
        <meta property="og:description" content="Comprehensive urological care with advanced treatments and personalized patient care" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <About />
        <Treatments />
        <AffiliateHospitals />
        <Appointment />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;

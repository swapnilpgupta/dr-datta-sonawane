
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleSheetsSetup from '../components/GoogleSheetsSetup';

const GoogleSheetsSetupPage = () => {
  return (
    <>
      <Helmet>
        <title>Google Sheets Setup - Dr. Datta Sonawane</title>
        <meta name="description" content="Setup guide for integrating Google Sheets with the appointment booking system" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          <GoogleSheetsSetup />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GoogleSheetsSetupPage;

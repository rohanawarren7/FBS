import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Fallow Building Services | Building Contractor Havering &amp; Essex</title>
        <meta name="description" content="Building contractor in Havering & Essex. Extensions, loft conversions, renovations, roofing, property maintenance. CIS-registered. Call 0203 576 5962." />
        <link rel="canonical" href="https://fallowbuildingservices.co.uk/" />
      </Helmet>
      <div className="landing-page">
        <HeroSection />
        <ServicesSection />
      </div>
    </>
  );
};

export default LandingPage;
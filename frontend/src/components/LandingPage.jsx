import React from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
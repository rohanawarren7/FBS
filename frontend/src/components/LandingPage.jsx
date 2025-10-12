import React from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <ServicesSection />
    </div>
  );
};

export default LandingPage;
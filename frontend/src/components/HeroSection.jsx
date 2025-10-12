import React from 'react';
import './HeroSection.css';
import { Button } from './ui/button';

const HeroSection = () => {
  const handleGetQuote = () => {
    window.location.href = 'mailto:rwarreninfo@gmail.com?subject=Free Quote Request';
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1599707254554-027aeb4deacd" 
          alt="Construction site" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-logo">
          <img 
            src="https://customer-assets.emergentagent.com/job_fbs-renovations/artifacts/7outxkf3_Black%20and%20White%20Geometric%20Building%20Construction%20Company%20Logo%20%282%29.png" 
            alt="Fallow Building Services" 
            className="logo-image"
          />
        </div>
        
        <h1 className="hero-title">
          BUILDING EXCELLENCE ACROSS LONDON
        </h1>
        
        <p className="hero-description">
          Expert construction and property management services for residential and commercial projects
        </p>
        
        <div className="hero-cta">
          <Button onClick={handleGetQuote} className="btn-primary">
            GET A FREE QUOTE
          </Button>
          <a href="tel:07459627464" className="btn-secondary">
            CALL US NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
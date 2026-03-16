import React from 'react';
import './HeroSection.css';
import { Button } from './ui/button';

const HeroSection = () => {
  const handleGetQuote = () => {
    window.location.href = '/contact#enquiry-form';
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="/images/hero-construction.jpg"
          alt="Building contractor working in Havering, Essex"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-logo">
          <img 
            src="/images/logo-large.png"
            alt="Fallow Building Services" 
            className="logo-image"
          />
        </div>
        
        <h1 className="hero-title">
          BUILDING EXCELLENCE ACROSS HAVERING & ESSEX
        </h1>
        
        <p className="hero-description">
          Expert construction and property management services for residential and commercial projects
        </p>
        
        <div className="hero-cta">
          <Button onClick={handleGetQuote} className="btn-primary">
            GET A FREE QUOTE
          </Button>
          <a href="https://wa.me/+447459627464" className="btn-secondary" target="_blank" rel="noopener noreferrer">
            WHATSAPP US
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
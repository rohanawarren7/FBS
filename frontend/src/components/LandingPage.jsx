import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ProjectGallery from './ProjectGallery';
import CTABlock from './CTABlock';
import TestimonialsSection from './TestimonialsSection';
import { staggerContainer, fadeInUp } from '../lib/animations';

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Fallow Building Services | Building Contractor Havering &amp; Essex</title>
        <meta name="description" content="Building contractor in Havering & Essex. Extensions, loft conversions, renovations, roofing, property maintenance. CIS-registered. Call 0203 576 5962." />
        <meta property="og:title" content="Fallow Building Services | Building Contractor Havering & Essex" />
        <meta property="og:description" content="Expert construction and property management services across Havering and Essex. 15+ years experience, 500+ projects completed." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fallowbuildingservices.co.uk/" />
        <link rel="canonical" href="https://fallowbuildingservices.co.uk/" />
      </Helmet>
      
      <motion.div 
        className="landing-page"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Hero Section - Already has its own animations */}
        <section>
          <HeroSection />
        </section>

        {/* Services Section with scroll animation */}
        <motion.section 
          variants={fadeInUp}
          className="landing-section"
        >
          <ServicesSection />
        </motion.section>

        {/* Project Gallery Placeholder */}
        <motion.section 
          variants={fadeInUp}
          className="landing-section"
        >
          <ProjectGallery />
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          variants={fadeInUp}
          className="landing-section"
        >
          <TestimonialsSection />
        </motion.section>

        {/* CTA Block */}
        <motion.section 
          variants={fadeInUp}
          className="landing-section landing-section-cta"
        >
          <CTABlock />
        </motion.section>
      </motion.div>
    </>
  );
};

export default LandingPage;

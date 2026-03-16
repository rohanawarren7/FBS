import React from 'react';
import ServicePage from '../ServicePage';

const HomeRenovations = () => {
  const pageData = {
    title: 'Home Renovations',
    h1: 'Home Renovations in Havering & Essex',
    pageTitle: 'Home Renovations Havering | Full Refurbishment Essex',
    metaDescription: 'Complete home renovations in Havering & Essex. Full refurbishments, modernisation, property upgrades. CIS-registered. Call 0203 576 5962.',
    canonicalUrl: 'https://fallowbuildingservices.co.uk/home-renovations',
    heroImage: '/images/hero-home-renovations.jpg',
    description: 'Breathe new life into your property with our comprehensive home renovation services. From minor updates to complete refurbishments, we handle it all.',
    keywords: 'home renovations London, house refurbishment, property renovation, home improvement, complete renovation, London builders',
    benefits: [
      {
        title: 'Complete Renovation Service',
        description: 'From structural work to decorative finishes, we provide end-to-end renovation services tailored to your needs.'
      },
      {
        title: 'Modernization Experts',
        description: 'We bring older properties up to modern standards with updated systems, energy efficiency improvements, and contemporary design.'
      },
      {
        title: 'Minimal Disruption',
        description: 'Our efficient project management ensures renovations are completed on time with minimal disruption to your daily life.'
      },
      {
        title: 'Quality Guarantee',
        description: 'All our renovation work comes with comprehensive guarantees, giving you peace of mind in the quality of our workmanship.'
      }
    ],
    process: [
      {
        title: 'Property Assessment',
        description: 'We conduct a thorough assessment of your property to identify all renovation needs and opportunities.'
      },
      {
        title: 'Detailed Quote',
        description: 'Receive a comprehensive, itemized quote covering all aspects of your renovation project.'
      },
      {
        title: 'Renovation Work',
        description: 'Our skilled team carries out all renovation work to the highest standards, keeping you updated throughout.'
      },
      {
        title: 'Final Handover',
        description: 'We complete a detailed handover process, ensuring you are completely satisfied with your renovated home.'
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default HomeRenovations;
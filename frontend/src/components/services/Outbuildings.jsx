import React from 'react';
import ServicePage from '../ServicePage';

const Outbuildings = () => {
  const pageData = {
    // SEO Fields
    title: 'Outbuildings',
    pageTitle: 'Garden Rooms & Outbuildings Havering & Essex | Fallow Building Services',
    metaDescription: 'Custom garden offices, studios & outbuildings in Havering, Romford & Essex. Home offices, gyms, studios. Free quotes, CIS-registered, fully insured. CIS registered.',
    canonicalUrl: 'https://fallowbuildingservices.co.uk/outbuildings',
    h1: 'Bespoke Garden Rooms & Outbuildings Across Havering & Essex',
    
    // Content
    heroImage: '/images/hero-outbuildings.jpg',
    heroAlt: 'Custom garden office built by Fallow Building Services in Essex',
    description: 'Expand your property with custom-built outbuildings designed for modern living. Perfect for garden offices, creative studios, home gyms, or additional storage - built to the highest standards with full utilities and year-round comfort.',
    
    keywords: 'garden office Havering, garden room Romford, outbuildings Essex, garden studio, home office pod, garden gym, bespoke outbuilding',
    
    // Benefits
    benefits: [
      {
        title: 'Versatile Spaces',
        description: 'Create the perfect garden office, art studio, home gym, workshop, or guest accommodation. We design and build outbuildings tailored to your specific requirements and lifestyle.',
        image: null
      },
      {
        title: 'Year-Round Comfort',
        description: 'Our outbuildings are fully insulated with proper foundations, quality windows, and optional heating. Use your space comfortably in any season.',
        image: null
      },
      {
        title: 'Property Investment',
        description: 'A well-built garden room adds significant value to your property while providing practical additional space without extending your house footprint.',
        image: null
      },
      {
        title: 'Complete Utilities',
        description: 'We can install full electrical systems, internet connectivity, plumbing, and climate control to make your outbuilding fully functional for any purpose.',
        image: null
      }
    ],
    
    // Process
    process: [
      {
        title: 'Site Assessment',
        description: 'We evaluate your garden space, assess access, and discuss your requirements to determine the best outbuilding solution for your needs.',
        duration: '1-2 hours'
      },
      {
        title: 'Design & Planning',
        description: 'Our team creates custom designs and handles any necessary planning permissions or building regulations for your outbuilding project.',
        duration: '2-4 weeks'
      },
      {
        title: 'Construction',
        description: 'Expert builders construct your outbuilding with quality materials, proper foundations, insulation, and weatherproofing for longevity.',
        duration: '3-6 weeks'
      },
      {
        title: 'Final Fit-Out',
        description: 'We complete all interior finishing, install utilities, and ensure your outbuilding is ready for immediate use with all the features you need.',
        duration: '1-2 weeks'
      }
    ],
    
    // Service areas
    serviceAreas: [
      'Romford', 'Hornchurch', 'Rainham', 'Upminster', 
      'Havering', 'Barking & Dagenham', 'Redbridge', 
      'Dagenham', 'Chadwell Heath', 'Elm Park'
    ],
    
    // Testimonials
    testimonials: [],
    
    // FAQs
    faqs: [
      {
        question: 'Do I need planning permission for a garden room?',
        answer: 'Most garden rooms fall under permitted development rights if they meet certain criteria (under 2.5m height, not covering more than 50% of garden, not used as sleeping accommodation). We\'ll assess your situation and handle any required applications.'
      },
      {
        question: 'Can I use a garden room as an office year-round?',
        answer: 'Yes, our garden rooms are fully insulated with proper foundations, double glazing, and optional heating systems. They\'re designed for comfortable year-round use as offices, studios, or gyms regardless of weather.'
      },
      {
        question: 'Can you install electricity and internet?',
        answer: 'Yes, we can install full electrical systems including lighting, sockets, and heating. We also run data cables for reliable internet connectivity, ensuring your garden room is fully connected and functional.'
      },
      {
        question: 'How long does a garden room take to build?',
        answer: 'Most garden rooms take 4-8 weeks from start to finish, depending on size and specification. We\'ll provide a detailed timeline during your consultation and work efficiently to minimize disruption to your garden.'
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default Outbuildings;

import React from 'react';
import ServicePage from '../ServicePage';

const BathroomRefurbishments = () => {
  const pageData = {
    // SEO Fields
    title: 'Bathroom Refurbishments',
    pageTitle: 'Bathroom Refurbishments Havering & Essex | Fallow Building Services',
    metaDescription: 'Expert bathroom renovation and refurbishment in Havering, Romford & Essex. Modern installations, luxury finishes, full refits. CIS-registered. Free quotes available.',
    canonicalUrl: 'https://fallowbuildingservices.co.uk/bathroom-refurbishments',
    h1: 'Professional Bathroom Refurbishments Across Havering & Essex',
    
    // Content
    heroImage: '/images/hero-bathroom.jpg',
    heroAlt: 'Luxury bathroom refurbishment completed by Fallow Building Services in Essex',
    description: 'Create your dream bathroom with our professional refurbishment services. From contemporary wet rooms to traditional family bathrooms, we deliver exceptional results with premium fixtures, expert tiling, and flawless finishes.',
    
    keywords: 'bathroom refurbishment Havering, bathroom renovation Romford, bathroom installation Essex, luxury bathroom, bathroom fitters, en-suite, wet room',
    
    // Benefits
    benefits: [
      {
        title: 'Luxury Finishes',
        description: 'Choose from a wide range of premium fixtures, tiles, and finishes to create a bathroom that reflects your style. We work with leading suppliers to ensure quality that lasts.',
        image: null
      },
      {
        title: 'Space Optimization',
        description: 'We maximize every inch of your bathroom with clever design, storage solutions, and layouts that work for your needs. Perfect for both compact en-suites and spacious family bathrooms.',
        image: null
      },
      {
        title: 'Complete Installation Service',
        description: 'Our comprehensive service includes plumbing, electrical work, tiling, fixture installation, and final decoration. One team handles everything for a seamless result.',
        image: null
      },
      {
        title: 'Expert Waterproofing',
        description: 'Professional waterproofing and tanking ensure your bathroom is fully protected against moisture and leaks. Our work meets all building regulations for your peace of mind.',
        image: null
      }
    ],
    
    // Process
    process: [
      {
        title: 'Design Consultation',
        description: 'We discuss your vision, practical requirements, and budget. Our team provides expert advice on layouts, fixtures, and finishes to create your ideal bathroom.',
        duration: '1-2 hours'
      },
      {
        title: 'Detailed Planning',
        description: 'Receive detailed designs and a comprehensive quote covering all materials, fixtures, and labour. We help you select the perfect products from our trusted suppliers.',
        duration: '1-2 weeks'
      },
      {
        title: 'Professional Installation',
        description: 'Our skilled tradespeople complete all removal, plumbing, electrical, tiling, and installation work. We protect your home and work efficiently to minimize disruption.',
        duration: '2-3 weeks'
      },
      {
        title: 'Final Handover',
        description: 'We thoroughly test all fixtures, ensure perfect finishes, and provide a complete walkthrough. Your new bathroom is ready to enjoy with our quality guarantee.',
        duration: '1-2 days'
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
        question: 'How long does a bathroom refurbishment take?',
        answer: 'A typical bathroom refurbishment takes 2-3 weeks from start to finish. This includes removal of the old bathroom, all plumbing and electrical work, tiling, and installation of new fixtures. We\'ll provide a specific timeline during your consultation.'
      },
      {
        question: 'Can you help with bathroom design?',
        answer: 'Yes, we offer complete design services. Our team will discuss your requirements, assess your space, and create a design that maximizes functionality and style. We can show you samples of tiles, fixtures, and finishes to help you make the perfect choices.'
      },
      {
        question: 'Do you handle plumbing and electrical work?',
        answer: 'Yes, we provide a complete service including all plumbing, electrical work, tiling, and installation. Our qualified tradespeople handle everything, so you don\'t need to coordinate multiple contractors. All work complies with current building regulations.'
      },
      {
        question: 'Can you work with small bathrooms?',
        answer: 'Absolutely. We specialize in maximizing space in bathrooms of all sizes. Clever design, space-saving fixtures, and smart storage solutions can transform even the smallest bathroom into a functional, stylish space.'
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default BathroomRefurbishments;

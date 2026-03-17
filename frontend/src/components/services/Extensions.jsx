import React from 'react';
import ServicePage from '../ServicePage';

const Extensions = () => {
  const pageData = {
    // SEO Fields
    title: 'Home Extensions',
    pageTitle: 'Home Extensions Havering & Essex | Fallow Building Services',
    metaDescription: 'Expert home extension services in Havering, Romford & Essex. Single & double-storey extensions, rear & side returns. Free quotes, 15+ years experience. CIS registered.',
    canonicalUrl: 'https://fallowbuildingservices.co.uk/extensions',
    h1: 'Expert Home Extensions Across Havering & Essex',
    
    // Content
    heroImage: '/images/hero-extensions.jpg',
    heroAlt: 'Modern home extension in Romford, Essex by Fallow Building Services',
    description: 'Transform your home with a professionally designed and built extension. From single-storey additions to double-storey expansions, we create beautiful, functional spaces that add value to your property and enhance your lifestyle.',
    
    keywords: 'home extensions Havering, house extensions Romford, building extensions Essex, rear extensions, side extensions, single storey extension, double storey extension, extension builder',
    
    // Benefits with images (optional)
    benefits: [
      {
        title: 'Expert Design & Planning',
        description: 'Our experienced team handles all aspects of design and planning permission to ensure your extension meets building regulations and matches your vision perfectly. We work with trusted architects and navigate the planning process on your behalf.',
        image: null // Add image path when available
      },
      {
        title: 'Quality Craftsmanship',
        description: 'We use only the finest materials and employ skilled tradespeople to deliver extensions that stand the test of time. Every detail is finished to the highest standard, from foundations to final fixtures.',
        image: null
      },
      {
        title: 'Maximum Value Addition',
        description: 'A well-designed extension can add significant value to your property while providing the extra space your family needs. We focus on designs that enhance both your lifestyle and your property investment.',
        image: null
      },
      {
        title: 'Complete Project Management',
        description: 'From initial consultation to final handover, we manage every aspect of your project. Regular updates, clear timelines, and a dedicated point of contact ensure a smooth building experience.',
        image: null
      }
    ],
    
    // Process steps with duration
    process: [
      {
        title: 'Initial Consultation',
        description: 'We visit your property to discuss your vision, assess the site, and provide initial guidance on design possibilities, budget considerations, and planning requirements.',
        duration: '1-2 hours'
      },
      {
        title: 'Design & Planning',
        description: 'Our team creates detailed architectural drawings and submits planning applications. We handle all communication with the local authority and address any queries that arise.',
        duration: '8-12 weeks'
      },
      {
        title: 'Construction Phase',
        description: 'Once approved, our skilled builders begin construction. We maintain the highest standards of workmanship while keeping disruption to your daily life to a minimum.',
        duration: '8-16 weeks'
      },
      {
        title: 'Completion & Handover',
        description: 'We complete a thorough inspection, address any snagging items, and provide all necessary certification. You receive a comprehensive handover pack with warranties and documentation.',
        duration: '1-2 weeks'
      }
    ],
    
    // Service areas
    serviceAreas: [
      'Romford', 'Hornchurch', 'Rainham', 'Upminster', 
      'Havering', 'Barking & Dagenham', 'Redbridge', 
      'Dagenham', 'Chadwell Heath', 'Elm Park'
    ],
    
    // Testimonials (manual entry for this service)
    testimonials: [
      {
        name: 'The Thompson Family',
        location: 'Romford, Essex',
        rating: 5,
        text: 'Fallow Building Services created the perfect kitchen-diner extension for our family home. The team was professional, tidy, and completed the work exactly on schedule. We couldn\'t be happier with the result.'
      },
      {
        name: 'Sarah & James Wilson',
        location: 'Hornchurch, Essex',
        rating: 5,
        text: 'From the initial design consultation to the final handover, the entire process was seamless. Our double-storey extension has transformed how we live in our home. Highly recommend their services.'
      }
    ],
    
    // FAQs for this service
    faqs: [
      {
        question: 'Do I need planning permission for a home extension?',
        answer: 'Many extensions fall under permitted development rights and don\'t require planning permission. However, this depends on factors like the size, location, and your property type. We\'ll assess your specific situation and handle all planning applications if required.'
      },
      {
        question: 'How long does a typical extension take to build?',
        answer: 'The construction phase typically takes 8-16 weeks depending on the size and complexity of the project. Single-storey extensions are usually quicker, while double-storey projects take longer. We\'ll provide a detailed timeline during the consultation.'
      },
      {
        question: 'Can you help with the design of my extension?',
        answer: 'Yes, we work with experienced architects who can help design your extension. We\'ll discuss your requirements, budget, and style preferences to create a design that perfectly suits your needs and complements your existing property.'
      },
      {
        question: 'Will an extension add value to my property?',
        answer: 'A well-designed and built extension typically adds significant value to your property. According to industry estimates, extensions can add 15-20% to your home\'s value, often more than the cost of construction. We focus on designs that maximise both your living space and property value.'
      },
      {
        question: 'How much does a home extension cost?',
        answer: 'Extension costs vary depending on size, specification, and location. As a guide, single-storey extensions typically start from £1,800-£2,500 per square metre. We provide detailed, transparent quotes with no hidden costs following our free site survey.'
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default Extensions;

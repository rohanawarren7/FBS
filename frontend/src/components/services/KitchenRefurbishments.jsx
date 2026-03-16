import React from 'react';
import ServicePage from '../ServicePage';

const KitchenRefurbishments = () => {
  const pageData = {
    title: 'Kitchen Refurbishments',
    h1: 'Kitchen Refurbishments in Havering & Romford',
    pageTitle: 'Kitchen Refurbishments Havering | Kitchen Fitters Romford',
    metaDescription: 'Kitchen installations & refurbishments across Havering. Supply & fit or fit-only. CIS-registered. Call 0203 576 5962 for free quote.',
    canonicalUrl: 'https://fallowbuildingservices.co.uk/kitchen-refurbishments',
    heroImage: '/images/hero-kitchen.jpg',
    description: 'Transform your kitchen into a modern, functional space with our expert refurbishment services. From design to installation, we handle everything.',
    keywords: 'kitchen refurbishment London, kitchen renovation, modern kitchen, kitchen installation, kitchen fitters London, Redbridge, Newham',
    benefits: [
      {
        title: 'Bespoke Design',
        description: 'We create custom kitchen designs that maximize space, functionality, and style to suit your lifestyle and budget.'
      },
      {
        title: 'Quality Fittings',
        description: 'We work with leading suppliers to provide high-quality cabinets, worktops, and appliances that stand the test of time.'
      },
      {
        title: 'Complete Service',
        description: 'From removal of old units to plumbing, electrical, tiling, and installation, we handle every aspect of your kitchen refurbishment.'
      },
      {
        title: 'Expert Installation',
        description: 'Our skilled fitters ensure precise installation with attention to detail, creating a kitchen you\'ll love for years to come.'
      }
    ],
    process: [
      {
        title: 'Design Consultation',
        description: 'We discuss your needs, style preferences, and budget to create the perfect kitchen design for your home.'
      },
      {
        title: 'Quotation & Planning',
        description: 'Receive a detailed quote and timeline for your kitchen refurbishment project with no hidden costs.'
      },
      {
        title: 'Installation',
        description: 'Our team removes old units and expertly installs your new kitchen, including all plumbing, electrical, and finishing work.'
      },
      {
        title: 'Final Check',
        description: 'We ensure everything is perfect, all appliances are working, and you\'re completely satisfied with your new kitchen.'
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default KitchenRefurbishments;
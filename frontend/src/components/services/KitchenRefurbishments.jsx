import React from 'react';
import ServicePage from '../ServicePage';

const KitchenRefurbishments = () => {
  const pageData = {
    title: 'Kitchen Refurbishments',
    metaDescription: 'Professional kitchen renovation and refurbishment services in London. Modern kitchen installations by Fallow Building Services. Get your free quote today.',
    heroImage: 'https://images.unsplash.com/photo-1601760561441-16420502c7e0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxraXRjaGVuJTIwcmVub3ZhdGlvbnxlbnwwfHx8fDE3NjAyODE0NDN8MA&ixlib=rb-4.1.0&q=85',
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
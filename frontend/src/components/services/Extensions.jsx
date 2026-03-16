import React from 'react';
import ServicePage from '../ServicePage';

const Extensions = () => {
  const pageData = {
    title: 'Home Extensions',
    metaDescription: 'Expert home extension services in London. Expand your living space with professionally built extensions. Free quotes available from Fallow Building Services.',
    heroImage: '/images/hero-extensions.jpg',
    heroAlt: 'Home extension in Romford, Essex by Fallow Building Services',
    description: 'Transform your home with a professionally designed and built extension that adds valuable space and increases your property value.',
    keywords: 'home extensions London, house extensions, building extensions, rear extensions, side extensions, Waltham Forest, Redbridge, Enfield',
    benefits: [
      {
        title: 'Expert Design & Planning',
        description: 'Our experienced team handles all aspects of design and planning permission to ensure your extension meets building regulations and your vision.'
      },
      {
        title: 'Quality Craftsmanship',
        description: 'We use only the finest materials and employ skilled tradespeople to deliver extensions that stand the test of time.'
      },
      {
        title: 'Value Enhancement',
        description: 'A well-built extension can significantly increase your property value while providing the extra space your family needs.'
      },
      {
        title: 'Project Management',
        description: 'From start to finish, we manage every aspect of your project, keeping you informed and ensuring timely completion.'
      }
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'We meet with you to discuss your vision, budget, and requirements for your home extension.'
      },
      {
        title: 'Design & Planning',
        description: 'Our team creates detailed designs and handles all planning permission applications on your behalf.'
      },
      {
        title: 'Construction',
        description: 'Expert builders begin work, maintaining high standards and regular communication throughout the build.'
      },
      {
        title: 'Final Inspection',
        description: 'We complete a thorough inspection and walkthrough to ensure everything meets your expectations and building standards.'
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default Extensions;
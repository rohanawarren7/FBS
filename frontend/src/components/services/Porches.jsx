import React from 'react';
import ServicePage from '../ServicePage';

const Porches = () => {
  const pageData = {
    title: 'Porches',
    metaDescription: 'Professional porch installation and construction in London. Enhance your home entrance with beautiful, durable porches from Fallow Building Services.',
    heroImage: 'https://images.unsplash.com/photo-1699720435235-e1a4a7ac71e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxwb3JjaCUyMGVudHJhbmNlfGVufDB8fHx8MTc2MDI4MTQ2MHww&ixlib=rb-4.1.0&q=85',
    description: 'Add character and practical space to your home with a beautifully crafted porch that enhances curb appeal and provides shelter.',
    keywords: 'porch installation London, porch construction, front porch, entrance porch, porch builders London',
    benefits: [
      {
        title: 'Enhanced Curb Appeal',
        description: 'A well-designed porch dramatically improves your home\'s street appeal and creates a welcoming entrance.'
      },
      {
        title: 'Weather Protection',
        description: 'Protect your front door and entrance from rain, wind, and weather while creating a practical space for storage.'
      },
      {
        title: 'Custom Designs',
        description: 'We create bespoke porch designs that complement your home\'s architecture and match your personal style.'
      },
      {
        title: 'Added Security',
        description: 'A porch provides an additional layer of security to your home while adding insulation to your entrance area.'
      }
    ],
    process: [
      {
        title: 'Design Consultation',
        description: 'We discuss your requirements and create a porch design that suits your home and budget.'
      },
      {
        title: 'Planning & Permissions',
        description: 'We handle any necessary planning applications and ensure all building regulations are met.'
      },
      {
        title: 'Construction',
        description: 'Our experienced builders construct your porch using quality materials and expert craftsmanship.'
      },
      {
        title: 'Finishing Touches',
        description: 'We complete all finishing work including glazing, doors, and decorative elements to perfection.'
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default Porches;
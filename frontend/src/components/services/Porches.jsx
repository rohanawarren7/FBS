import React from 'react';
import ServicePage from '../ServicePage';

const Porches = () => {
  const pageData = {
    title: 'Porches',
    pageTitle: 'Porch Installation Havering | Porch Builders Essex',
    metaDescription: 'Professional porch installations in Havering & Essex. Open, closed, and storm porches. CIS-registered. Call 0203 576 5962.',
    canonicalUrl: 'https://fallowbuildingservices.co.uk/porches',
    heroImage: '/images/hero-porches.jpg',
    description: 'Add character and practical space to your home with a beautifully crafted porch that enhances kerb appeal and provides shelter.',
    keywords: 'porch installation London, porch construction, front porch, entrance porch, porch builders London',
    benefits: [
      {
        title: 'Enhanced Kerb Appeal',
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
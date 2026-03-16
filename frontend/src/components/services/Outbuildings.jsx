import React from 'react';
import ServicePage from '../ServicePage';

const Outbuildings = () => {
  const pageData = {
    title: 'Outbuildings',
    pageTitle: 'Garden Rooms & Outbuildings Havering | Essex',
    metaDescription: 'Custom garden offices, studios & outbuildings in Havering. CIS-registered builder. Call 0203 576 5962.',
    canonicalUrl: 'https://fallowbuildingservices.co.uk/outbuildings',
    heroImage: 'https://images.unsplash.com/photo-1685633225252-40efb423c15f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBvZmZpY2V8ZW58MHx8fHwxNzYwMjgxNDY2fDA&ixlib=rb-4.1.0&q=85',
    description: 'Expand your property with custom-built outbuildings. Perfect for garden offices, studios, gyms, or storage - built to the highest standards.',
    keywords: 'outbuildings London, garden office, garden room, garden studio, shed construction, outdoor building London',
    benefits: [
      {
        title: 'Versatile Spaces',
        description: 'Create the perfect garden office, studio, gym, workshop, or storage space tailored to your specific needs.'
      },
      {
        title: 'Property Value',
        description: 'A well-built outbuilding adds significant value to your property while providing practical additional space.'
      },
      {
        title: 'Quality Construction',
        description: 'We use durable materials and proven construction methods to ensure your outbuilding withstands all weather conditions.'
      },
      {
        title: 'Full Utilities',
        description: 'We can install electrical, plumbing, heating, and internet connectivity to make your outbuilding fully functional.'
      }
    ],
    process: [
      {
        title: 'Site Assessment',
        description: 'We evaluate your garden space and discuss your requirements to determine the best outbuilding solution.'
      },
      {
        title: 'Design & Planning',
        description: 'Our team creates custom designs and handles any necessary planning permissions or building regulations.'
      },
      {
        title: 'Construction',
        description: 'Expert builders construct your outbuilding with quality materials, proper foundations, and weatherproofing.'
      },
      {
        title: 'Final Installation',
        description: 'We complete all finishing work, utilities installation, and ensure your outbuilding is ready to use.'
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default Outbuildings;
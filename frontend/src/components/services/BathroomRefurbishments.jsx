import React from 'react';
import ServicePage from '../ServicePage';

const BathroomRefurbishments = () => {
  const pageData = {
    title: 'Bathroom Refurbishments',
    metaDescription: 'Expert bathroom renovation and refurbishment in London. Modern bathroom installations, luxury finishes. Free quotes from Fallow Building Services.',
    heroImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHJlbm92YXRpb258ZW58MHx8fHwxNzYwMjgxNDQ4fDA&ixlib=rb-4.1.0&q=85',
    description: 'Create your dream bathroom with our professional refurbishment services. From contemporary to traditional styles, we deliver exceptional results.',
    keywords: 'bathroom refurbishment London, bathroom renovation, bathroom installation, luxury bathroom, bathroom fitters London, Barking & Dagenham',
    benefits: [
      {
        title: 'Luxury Finishes',
        description: 'Choose from a wide range of premium fixtures, tiles, and finishes to create a bathroom that reflects your style and needs.'
      },
      {
        title: 'Space Optimization',
        description: 'We maximize every inch of your bathroom space with clever design and storage solutions, regardless of size.'
      },
      {
        title: 'Full Installation',
        description: 'Our comprehensive service includes plumbing, electrical work, tiling, and all fixtures to deliver a complete bathroom renovation.'
      },
      {
        title: 'Waterproofing Expertise',
        description: 'Professional waterproofing and tanking ensures your bathroom is fully protected against moisture and leaks.'
      }
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'We discuss your vision, budget, and practical requirements to design your ideal bathroom.'
      },
      {
        title: 'Design & Quote',
        description: 'Receive detailed designs and a comprehensive quote covering all materials and labor.'
      },
      {
        title: 'Installation',
        description: 'Expert tradespeople complete all removal, plumbing, electrical, tiling, and installation work to perfection.'
      },
      {
        title: 'Quality Check',
        description: 'We ensure all fixtures work properly, finishes are perfect, and your new bathroom exceeds expectations.'
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default BathroomRefurbishments;
import React from 'react';
import ServicePage from '../ServicePage';

const Porches = () => {
  const pageData = {
    // SEO Fields
    title: 'Porches',
    pageTitle: 'Porch Installation Havering & Essex | Fallow Building Services',
    metaDescription: 'Professional porch installations in Havering, Romford & Essex. Open, closed, and storm porches built to enhance your home. Free quotes, 15+ years experience.',
    canonicalUrl: 'https://fallowbuildingservices.co.uk/porches',
    h1: 'Expert Porch Installation Across Havering & Essex',
    
    // Content
    heroImage: '/images/hero-porches.jpg',
    heroAlt: 'Beautiful porch installation completed by Fallow Building Services',
    description: 'Add character and practical space to your home with a beautifully crafted porch. From open canopies to fully enclosed entrances, our porches enhance kerb appeal while providing weather protection and additional security.',
    
    keywords: 'porch installation Havering, porch builders Romford, front porch Essex, entrance porch, storm porch, open porch, closed porch',
    
    // Benefits
    benefits: [
      {
        title: 'Enhanced Kerb Appeal',
        description: 'A well-designed porch dramatically improves your home\'s street appeal and creates a welcoming entrance that adds character and value to your property.',
        image: null
      },
      {
        title: 'Weather Protection',
        description: 'Protect your front door and entrance from rain, wind, and harsh weather while creating a practical transitional space for removing coats and shoes.',
        image: null
      },
      {
        title: 'Custom Design',
        description: 'We create bespoke porch designs that complement your home\'s architecture, using materials that match or enhance your existing exterior.',
        image: null
      },
      {
        title: 'Added Security',
        description: 'A porch provides an additional layer of security to your home, creating a physical barrier while also adding extra insulation to your entrance area.',
        image: null
      }
    ],
    
    // Process
    process: [
      {
        title: 'Design Consultation',
        description: 'We discuss your requirements, assess your property, and create a porch design that suits your home\'s style and your practical needs.',
        duration: '1 hour'
      },
      {
        title: 'Planning & Permissions',
        description: 'We handle any necessary planning applications and ensure all building regulations are met for a compliant, safe installation.',
        duration: '2-4 weeks'
      },
      {
        title: 'Expert Construction',
        description: 'Our experienced builders construct your porch using quality materials and expert craftsmanship, with attention to every detail.',
        duration: '1-2 weeks'
      },
      {
        title: 'Finishing Touches',
        description: 'We complete all finishing work including glazing, doors, lighting, and decorative elements to create a perfect entrance.',
        duration: '2-3 days'
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
        question: 'Do I need planning permission for a porch?',
        answer: 'Most porches fall under permitted development rights and don\'t require planning permission, provided they meet certain criteria (maximum 3m2 ground area, under 3m height, at least 2m from any boundary). We\'ll assess your specific situation and handle any applications if required.'
      },
      {
        question: 'What types of porches can you build?',
        answer: 'We build all types of porches including open canopies, enclosed porches with walls and windows, storm porches, and bespoke designs. We work with various materials including brick, UPVC, timber, and aluminium to match your home\'s style.'
      },
      {
        question: 'How long does porch installation take?',
        answer: 'Most porch installations take 1-2 weeks from start to finish. The exact timeline depends on the size and complexity of your porch design. We\'ll provide a specific schedule during your consultation.'
      },
      {
        question: 'Can a porch add value to my home?',
        answer: 'Yes, a well-built porch typically adds 3-5% to your property value while also improving kerb appeal and providing practical benefits. It\'s an investment that enhances both the appearance and functionality of your home.'
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default Porches;

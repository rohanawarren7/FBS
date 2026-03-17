import React from 'react';
import ServicePage from '../ServicePage';

const LoftConversions = () => {
  const pageData = {
    // SEO Fields
    title: 'Loft Conversions',
    pageTitle: 'Loft Conversions Havering & Essex | Fallow Building Services',
    metaDescription: 'Expert loft conversion services in Havering, Romford & Essex. Dormer, Velux, hip-to-gable & mansard conversions. Transform your attic space. Free quotes available.',
    canonicalUrl: 'https://fallowbuildingservices.co.uk/loft-conversions',
    h1: 'Professional Loft Conversions Across Havering & Essex',
    
    // Content
    heroImage: '/images/hero-loft-conversions.jpg',
    heroAlt: 'Beautiful loft conversion bedroom in Havering, Essex by Fallow Building Services',
    description: 'Transform your unused attic space into a stunning bedroom, home office, or additional living area. Our expert loft conversions add valuable space and significantly increase your property value without extending your footprint.',
    
    keywords: 'loft conversions Havering, loft conversion Romford, attic conversion Essex, dormer loft conversion, Velux conversion, hip-to-gable, mansard conversion, loft bedroom',
    
    // Benefits
    benefits: [
      {
        title: 'Cost-Effective Space Creation',
        description: 'Loft conversions typically cost less than moving to a larger property and can add 15-20% to your home\'s value. Make the most of space you already own without the costs and stress of relocating.',
        image: null
      },
      {
        title: 'Maximum Property Value',
        description: 'A professionally executed loft conversion is one of the best investments you can make in your home. Our conversions consistently add significant value while providing the extra space your family needs.',
        image: null
      },
      {
        title: 'No Garden Space Required',
        description: 'Unlike ground-floor extensions, loft conversions utilize existing roof space without reducing your garden or outdoor areas. Perfect for properties with limited outdoor space.',
        image: null
      },
      {
        title: 'Minimal Disruption',
        description: 'Most of the construction work happens in the loft space, keeping disruption to your daily routine to a minimum. We use dust protection and work efficiently to complete your conversion quickly.',
        image: null
      }
    ],
    
    // Process
    process: [
      {
        title: 'Feasibility Assessment',
        description: 'We visit your property to assess your loft space, check head height, and determine the most suitable conversion type. We\'ll discuss your requirements and provide initial guidance on design possibilities and costs.',
        duration: '1-2 hours'
      },
      {
        title: 'Design & Planning',
        description: 'Our architectural partners create detailed plans for your approval. We handle all planning permissions if required and ensure full building regulations compliance for your peace of mind.',
        duration: '6-10 weeks'
      },
      {
        title: 'Structural Conversion',
        description: 'Our skilled team installs structural supports, floor joists, windows, and stairs. We ensure your loft is properly insulated and meets all safety standards throughout the build.',
        duration: '6-10 weeks'
      },
      {
        title: 'Interior Fit-Out',
        description: 'We complete all electrical work, plumbing if required, plastering, and final decoration. Your new room is finished to the highest standard, ready for you to enjoy.',
        duration: '2-3 weeks'
      }
    ],
    
    // Service areas
    serviceAreas: [
      'Romford', 'Hornchurch', 'Rainham', 'Upminster', 
      'Havering', 'Barking & Dagenham', 'Redbridge', 
      'Dagenham', 'Chadwell Heath', 'Elm Park'
    ],
    
    // Testimonials
    testimonials: [
      {
        name: 'Emma Richardson',
        location: 'Rainham, Essex',
        rating: 5,
        text: 'We now have a beautiful master bedroom with en-suite in what was previously unused attic space. The team was professional, tidy, and finished on time. The dormer conversion has completely transformed our home.'
      },
      {
        name: 'David & Lisa Cooper',
        location: 'Upminster, Essex',
        rating: 5,
        text: 'Excellent work on our Velux loft conversion. The natural light is incredible, and it\'s become the perfect home office. Great communication throughout and impeccable finish quality.'
      }
    ],
    
    // FAQs
    faqs: [
      {
        question: 'What types of loft conversions do you offer?',
        answer: 'We specialise in several types: Velux (roof light) conversions, Dormer conversions, Hip-to-Gable conversions, and Mansard conversions. The best option depends on your property type, available space, and budget. We\'ll recommend the most suitable solution during our free assessment.'
      },
      {
        question: 'Will I need planning permission for a loft conversion?',
        answer: 'Many loft conversions fall under permitted development rights and don\'t require planning permission. However, this depends on factors like the type of conversion, your property location, and whether you live in a conservation area. We\'ll handle all necessary applications if required.'
      },
      {
        question: 'How much head height do I need for a loft conversion?',
        answer: 'Ideally, you need at least 2.2m of head height at the tallest point of your loft for a comfortable conversion. However, we can sometimes work with slightly less space using techniques like lowering the floor or raising the roof. We\'ll assess this during our initial visit.'
      },
      {
        question: 'How long does a loft conversion take?',
        answer: 'Most loft conversions take 8-12 weeks from start to finish. Velux conversions tend to be quicker (6-8 weeks), while more complex conversions like mansards may take longer. We\'ll provide a detailed timeline before work begins.'
      },
      {
        question: 'Can I use my loft conversion as a bedroom?',
        answer: 'Yes, loft conversions make excellent bedrooms. We ensure all work meets building regulations for safety, including proper insulation, ventilation, fire safety measures, and structural integrity. This means your conversion can be officially classified as a bedroom, adding maximum value to your home.'
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default LoftConversions;

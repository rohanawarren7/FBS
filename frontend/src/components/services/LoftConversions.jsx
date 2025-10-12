import React from 'react';
import ServicePage from '../ServicePage';

const LoftConversions = () => {
  const pageData = {
    title: 'Loft Conversions',
    metaDescription: 'Expert loft conversion services in London. Transform your unused attic space into a beautiful, functional room. Free consultation from Fallow Building Services.',
    heroImage: 'https://images.unsplash.com/photo-1610565816661-9aa6f77b3e71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxsb2Z0JTIwY29udmVyc2lvbnxlbnwwfHx8fDE3NjAyODE0NTV8MA&ixlib=rb-4.1.0&q=85',
    description: 'Maximize your home\'s potential by converting unused loft space into a stunning bedroom, office, or living area with expert craftsmanship.',
    keywords: 'loft conversion London, attic conversion, loft bedroom, loft extension, loft builders London, Waltham Forest, Enfield',
    benefits: [
      {
        title: 'Cost-Effective Space',
        description: 'Loft conversions are often more affordable than moving house and can add significant value to your property.'
      },
      {
        title: 'Maximize Property Value',
        description: 'A professional loft conversion can increase your property value by up to 20% while providing essential extra space.'
      },
      {
        title: 'No Land Required',
        description: 'Unlike extensions, loft conversions utilize existing space without reducing your garden or outdoor areas.'
      },
      {
        title: 'Quick Completion',
        description: 'Most loft conversions can be completed in 6-8 weeks with minimal disruption to your daily routine.'
      }
    ],
    process: [
      {
        title: 'Feasibility Assessment',
        description: 'We assess your loft space to determine the best conversion option for your property and needs.'
      },
      {
        title: 'Design & Planning',
        description: 'Our team creates detailed plans and secures any necessary planning permissions and building regulations approval.'
      },
      {
        title: 'Conversion Work',
        description: 'Expert tradespeople carry out structural work, insulation, windows, stairs, and all building work to the highest standards.'
      },
      {
        title: 'Final Fit-Out',
        description: 'We complete electrical, plumbing, plastering, and decorating to deliver your perfect new living space.'
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default LoftConversions;
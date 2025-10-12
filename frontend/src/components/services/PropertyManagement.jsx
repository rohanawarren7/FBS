import React from 'react';
import ServicePage from '../ServicePage';

const PropertyManagement = () => {
  const pageData = {
    title: 'Property Management',
    metaDescription: 'Professional property management services for landlords across London. Comprehensive management in Waltham Forest, Redbridge, Enfield, Newham, and Barking & Dagenham.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNzYwMjgxNDcxfDA&ixlib=rb-4.1.0&q=85',
    description: 'Comprehensive property management services for landlords. We handle everything from tenant finding to maintenance, giving you peace of mind.',
    keywords: 'property management London, landlord services, letting agent, property maintenance, Waltham Forest, Redbridge, Enfield, Newham, Barking Dagenham',
    benefits: [
      {
        title: 'Full Property Management',
        description: 'We handle all aspects of property management including tenant relations, rent collection, and maintenance coordination.'
      },
      {
        title: 'Tenant Finding',
        description: 'Professional tenant vetting and selection to ensure you have reliable, quality tenants in your property.'
      },
      {
        title: 'Maintenance Services',
        description: 'Quick response to maintenance issues with our network of trusted tradespeople, protecting your property investment.'
      },
      {
        title: 'Compliance Management',
        description: 'We ensure your property meets all legal requirements including safety certificates, deposits, and tenancy agreements.'
      }
    ],
    process: [
      {
        title: 'Property Assessment',
        description: 'We evaluate your property and discuss your management requirements and expectations.'
      },
      {
        title: 'Marketing & Letting',
        description: 'Professional photography, marketing, viewings, and tenant selection to find the perfect tenants.'
      },
      {
        title: 'Tenancy Management',
        description: 'We handle all tenant communications, rent collection, inspections, and maintenance throughout the tenancy.'
      },
      {
        title: 'Ongoing Support',
        description: 'Regular updates, financial reporting, and proactive property care to maximize your investment returns.'
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default PropertyManagement;
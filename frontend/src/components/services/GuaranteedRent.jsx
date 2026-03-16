import React from 'react';
import ServicePage from '../ServicePage';

const GuaranteedRent = () => {
  const pageData = {
    title: 'Guaranteed Rent',
    h1: 'Guaranteed Rent Scheme — Havering & Essex Landlords',
    pageTitle: 'Guaranteed Rent Havering | Landlord Scheme Essex',
    metaDescription: 'Guaranteed rent scheme for Havering & Essex landlords. Hassle-free, no voids, full management. Call 0203 576 5962.',
    canonicalUrl: 'https://fallowbuildingservices.co.uk/guaranteed-rent',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNzYwMjgxNDcxfDA&ixlib=rb-4.1.0&q=85',
    description: 'Enjoy stress-free, guaranteed rental income every month regardless of voids or tenant issues. Perfect for landlords who want hassle-free property investment.',
    keywords: 'guaranteed rent London, guaranteed rent scheme, rent guarantee, landlord services, hassle-free rent, Waltham Forest, Redbridge, Enfield',
    benefits: [
      {
        title: 'Guaranteed Income',
        description: 'Receive your rent every month without fail, regardless of whether the property is occupied or experiencing tenant issues.'
      },
      {
        title: 'Zero Hassle',
        description: 'We handle all tenant management, maintenance, and property issues - you simply receive your rental income.'
      },
      {
        title: 'No Void Periods',
        description: 'Eliminate the risk of void periods eating into your rental income. We pay you even when the property is empty.'
      },
      {
        title: 'Long-Term Agreements',
        description: 'Secure your investment with long-term guaranteed rent agreements, providing financial stability and peace of mind.'
      }
    ],
    process: [
      {
        title: 'Property Valuation',
        description: 'We assess your property and provide a competitive guaranteed rent offer based on market conditions.'
      },
      {
        title: 'Agreement Setup',
        description: 'Sign a guaranteed rent agreement with clear terms, duration, and payment schedule.'
      },
      {
        title: 'Property Handover',
        description: 'We take full responsibility for your property, including tenant placement and all management duties.'
      },
      {
        title: 'Monthly Payments',
        description: 'Receive guaranteed monthly rent payments on time, every time, with no surprises or deductions.'
      }
    ]
  };

  return <ServicePage {...pageData} />;
};

export default GuaranteedRent;
import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';
import { Home, Wrench, Building2, PaintBucket, Warehouse, Key } from 'lucide-react';

const ServicesSection = () => {
  const buildingServices = [
    {
      icon: <Building2 size={40} />,
      title: 'Extensions',
      description: 'Single & double-storey extensions across Havering & Romford',
      path: '/extensions'
    },
    {
      icon: <Home size={40} />,
      title: 'Loft Conversions',
      description: 'Dormer, hip-to-gable, Velux & mansard conversions',
      path: '/loft-conversions'
    },
    {
      icon: <Home size={40} />,
      title: 'Home Renovations',
      description: 'Full refurbishments and property upgrades across Essex',
      path: '/services/home-renovations'
    },
    {
      icon: <PaintBucket size={40} />,
      title: 'Kitchen Refurbishments',
      description: 'Kitchen installations across Havering & Romford',
      path: '/services/kitchen-refurbishments'
    },
    {
      icon: <PaintBucket size={40} />,
      title: 'Bathroom Refurbishments',
      description: 'Full refits, en-suites & wet rooms across Havering',
      path: '/bathroom-refurbishments'
    },
    {
      icon: <Wrench size={40} />,
      title: 'External Wall Insulation',
      description: 'EWI for solid-wall properties. ECO4 support available.',
      path: '/external-wall-insulation'
    },
    {
      icon: <Warehouse size={40} />,
      title: 'Roofing',
      description: 'Pitched & flat roofs, repairs, emergency call-out',
      path: '/roofing'
    },
    {
      icon: <Warehouse size={40} />,
      title: 'Porches',
      description: 'Open, closed & storm porch installations in Havering',
      path: '/services/porches'
    },
    {
      icon: <Warehouse size={40} />,
      title: 'Outbuildings',
      description: 'Custom garden offices, studios & storage solutions',
      path: '/services/outbuildings'
    }
  ];

  const propertyServices = [
    {
      icon: <Wrench size={40} />,
      title: 'Property Maintenance',
      description: 'Planned & reactive maintenance for property managers, care homes & housing associations',
      path: '/maintenance'
    },
    {
      icon: <Key size={40} />,
      title: 'Property Management',
      description: 'Full property management for Havering & East London landlords',
      path: '/services/property-management'
    },
  ];

  const serviceAreas = ['Romford', 'Hornchurch', 'Rainham', 'Upminster', 'Havering', 'Barking & Dagenham', 'Redbridge'];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Building Services */}
        <div className="service-category">
          <div className="category-header">
            <h2 className="category-title">BUILDING SERVICES</h2>
            <p className="category-description">
              From small renovations to major extensions, we deliver quality craftsmanship across all building projects
            </p>
          </div>
          
          <div className="services-grid">
            {buildingServices.map((service, index) => (
              <Link 
                key={index} 
                to={service.path} 
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Property Services */}
        <div className="service-category">
          <div className="category-header">
            <h2 className="category-title">PROPERTY SERVICES</h2>
            <p className="category-description">
              Property maintenance and management services for landlords and property professionals across Havering and East London
            </p>
          </div>
          
          <div className="services-grid">
            {propertyServices.map((service, index) => (
              <Link 
                key={index} 
                to={service.path} 
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </Link>
            ))}
          </div>
          
          <div className="service-areas">
            <h4 className="areas-title">SERVICE AREAS</h4>
            <div className="areas-list">
              {serviceAreas.map((area, index) => (
                <span key={index} className="area-badge">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import React from 'react';
import './ServicesSection.css';
import { Home, Wrench, Building2, PaintBucket, Warehouse, Key } from 'lucide-react';

const ServicesSection = () => {
  const buildingServices = [
    { icon: <Building2 size={40} />, title: 'Extensions', description: 'Expand your living space with expertly crafted extensions' },
    { icon: <Home size={40} />, title: 'Home Renovations', description: 'Complete home transformations to modernize your property' },
    { icon: <Warehouse size={40} />, title: 'Porches', description: 'Beautiful porch installations to enhance your entrance' },
    { icon: <Home size={40} />, title: 'Loft Conversions', description: 'Transform unused attic space into functional rooms' },
    { icon: <PaintBucket size={40} />, title: 'Kitchen & Bathroom Refurbishments', description: 'Modern upgrades for kitchens and bathrooms' },
    { icon: <Warehouse size={40} />, title: 'Outbuildings', description: 'Custom garden offices, studios, and storage solutions' }
  ];

  const propertyServices = [
    { icon: <Key size={40} />, title: 'Property Management', description: 'Comprehensive property management services for landlords' },
    { icon: <Wrench size={40} />, title: 'Guaranteed Rent', description: 'Hassle-free guaranteed rent schemes for peace of mind' }
  ];

  const serviceAreas = ['Waltham Forest', 'Redbridge', 'Enfield', 'Newham', 'Barking & Dagenham'];

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
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Property Services */}
        <div className="service-category">
          <div className="category-header">
            <h2 className="category-title">PROPERTY SERVICES</h2>
            <p className="category-description">
              Professional property management and guaranteed rent services across London boroughs
            </p>
          </div>
          
          <div className="services-grid">
            {propertyServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
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
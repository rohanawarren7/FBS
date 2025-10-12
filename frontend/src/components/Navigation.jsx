import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBuildingOpen, setIsBuildingOpen] = useState(false);
  const [isPropertyOpen, setIsPropertyOpen] = useState(false);

  const buildingServices = [
    { name: 'Extensions', path: '/services/extensions' },
    { name: 'Home Renovations', path: '/services/home-renovations' },
    { name: 'Porches', path: '/services/porches' },
    { name: 'Loft Conversions', path: '/services/loft-conversions' },
    { name: 'Kitchen Refurbishments', path: '/services/kitchen-refurbishments' },
    { name: 'Bathroom Refurbishments', path: '/services/bathroom-refurbishments' },
    { name: 'Outbuildings', path: '/services/outbuildings' }
  ];

  const propertyServices = [
    { name: 'Property Management', path: '/services/property-management' },
    { name: 'Guaranteed Rent', path: '/services/guaranteed-rent' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img 
            src="https://customer-assets.emergentagent.com/job_fbs-renovations/artifacts/cbhivvi4_Menu%20Logo.png" 
            alt="Fallow Building Services" 
            className="nav-logo-img"
          />
        </Link>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setIsBuildingOpen(true)}
            onMouseLeave={() => setIsBuildingOpen(false)}
          >
            <button className="nav-link dropdown-toggle">
              Building Services <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${isBuildingOpen ? 'show' : ''}`}>
              {buildingServices.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.path} 
                  className="dropdown-item"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div 
            className="nav-dropdown"
            onMouseEnter={() => setIsPropertyOpen(true)}
            onMouseLeave={() => setIsPropertyOpen(false)}
          >
            <button className="nav-link dropdown-toggle">
              Property Services <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu ${isPropertyOpen ? 'show' : ''}`}>
              {propertyServices.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.path} 
                  className="dropdown-item"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <a href="tel:07459627464" className="nav-link nav-cta">Call Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
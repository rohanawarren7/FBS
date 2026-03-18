import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './DesktopNav.css';

const DesktopNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`desktop-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="desktop-nav-container">
        <Link to="/" className="nav-logo">
          <img src="/images/logo-nav.png" alt="Fallow Building Services" />
        </Link>

        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/extensions">Extensions</Link></li>
          <li><Link to="/loft-conversions">Loft Conversions</Link></li>
          <li><Link to="/bathroom-refurbishments">Bathrooms</Link></li>
          <li><Link to="/roofing">Roofing</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <Link to="/contact" className="nav-cta">
          <Phone size={18} />
          Get a Free Quote
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNav;

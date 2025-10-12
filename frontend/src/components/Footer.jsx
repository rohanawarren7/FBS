import React, { useEffect } from 'react';
import './Footer.css';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  useEffect(() => {
    // Load Bark widget script
    const script = document.createElement('script');
    script.src = 'https://www.bark.com/assets/js/frontend-v2/widgets-v2.eab06aaee7c9d78cba9ae3ee88f0ad94.v2.js';
    script.defer = true;
    script.id = 'bark-widget-footer-script';
    
    if (!document.getElementById('bark-widget-footer-script')) {
      document.body.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById('bark-widget-footer-script');
      if (existingScript && document.body.contains(existingScript)) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const serviceAreas = ['Waltham Forest', 'Redbridge', 'Enfield', 'Newham', 'Barking & Dagenham'];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <img 
              src="https://customer-assets.emergentagent.com/job_fbs-renovations/artifacts/7outxkf3_Black%20and%20White%20Geometric%20Building%20Construction%20Company%20Logo%20%282%29.png" 
              alt="Fallow Building Services" 
              className="footer-logo"
            />
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-title">GET IN TOUCH</h3>
            <div className="contact-items">
              <a href="tel:07459627464" className="contact-item">
                <Phone size={20} />
                <span>07459 627464</span>
              </a>
              <a href="mailto:rwarreninfo@gmail.com" className="contact-item">
                <Mail size={20} />
                <span>rwarreninfo@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="footer-areas">
            <h3 className="footer-title">AREAS WE SERVE</h3>
            <div className="footer-areas-list">
              {serviceAreas.map((area, index) => (
                <span key={index} className="footer-area-item">{area}</span>
              ))}
            </div>
          </div>

          <div className="footer-reviews">
            <h3 className="footer-title">OUR REVIEWS</h3>
            <div className="footer-bark-widget">
              <a 
                href='https://www.bark.com/en/gb/company/fallow-building-services/Gw6Nv/' 
                target='_blank' 
                rel='noopener noreferrer'
                className='bark-widget' 
                data-type='reviews' 
                data-id='Gw6Nv' 
                data-image='medium-navy' 
                data-version='3.0'
              >
                Fallow Building Services
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-company">
            Fallow Business Group Ltd trading as Fallow Building Services
          </p>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Fallow Building Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
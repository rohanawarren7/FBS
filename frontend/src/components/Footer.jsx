import React from 'react';
import './Footer.css';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <img 
              src="https://customer-assets.emergentagent.com/job_d7a7b886-39b7-4daa-a499-83a75610cbfc/artifacts/w8ezth0f_Fallow%20Building%20Services-logos__transparent.png" 
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
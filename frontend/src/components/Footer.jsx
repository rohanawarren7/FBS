import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MessageCircle,
  MapPin,
  Clock,
  Shield,
  Award,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Placeholder for newsletter subscription
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const trustBadges = [
    { icon: Shield, text: 'CIS Registered' },
    { icon: Award, text: '150+ Projects Delivered' },
    { icon: CheckCircle2, text: 'Fully Insured' },
    { icon: Clock, text: 'Reliable Service' }
  ];

  const quickLinks = [
    { name: 'Extensions', path: '/extensions' },
    { name: 'Loft Conversions', path: '/loft-conversions' },
    { name: 'Kitchen Refurbishments', path: '/kitchen-refurbishments' },
    { name: 'Bathroom Refurbishments', path: '/bathroom-refurbishments' },
    { name: 'Home Renovations', path: '/home-renovations' },
    { name: 'Property Maintenance', path: '/maintenance' }
  ];

  const serviceAreas = [
    'Romford', 'Hornchurch', 'Rainham', 'Upminster', 
    'Havering', 'Barking & Dagenham', 'Redbridge', 
    'Essex', 'East London'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      {/* Trust Badges Bar */}
      <div className="trust-badges-bar">
        <div className="trust-badges-container">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div 
                key={index}
                className="trust-badge-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon size={20} />
                <span>{badge.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand & Newsletter Column */}
            <div className="footer-brand-column">
              <Link to="/" className="footer-logo-link">
                <img 
                  src="/images/logo-large.png" 
                  alt="Fallow Building Services" 
                  className="footer-logo"
                />
              </Link>
              
              <p className="footer-tagline">
                Havering's trusted building contractor — delivering quality extensions, loft conversions, and renovations across Essex. 
                Professionally managed, reliably delivered.
              </p>

              {/* Newsletter Signup */}
              <div className="footer-newsletter">
                <h4 className="newsletter-title">Stay Updated</h4>
                <p className="newsletter-text">
                  Get tips, advice, and updates on our latest projects.
                </p>
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <div className="newsletter-input-wrapper">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="newsletter-input"
                      required
                    />
                    <button type="submit" className="newsletter-btn">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                  {isSubscribed && (
                    <motion.p 
                      className="newsletter-success"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Thanks for subscribing!
                    </motion.p>
                  )}
                </form>
              </div>

              {/* Social Links */}
              <div className="footer-social">
                <h4 className="social-title">Follow Us</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        className="social-link"
                        aria-label={social.label}
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-links-column">
              <h4 className="footer-column-title">Our Services</h4>
              <ul className="footer-links-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-quick-link">
                      <span>{link.name}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas Column */}
            <div className="footer-areas-column">
              <h4 className="footer-column-title">Areas We Serve</h4>
              <div className="footer-areas-grid">
                {serviceAreas.map((area, index) => (
                  <span key={index} className="footer-area-tag">
                    <MapPin size={12} />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Column */}
            <div className="footer-contact-column">
              <h4 className="footer-column-title">Contact Us</h4>
              
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <div className="contact-icon-wrapper">
                    <Phone size={18} />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Phone</span>
                    <a href="tel:02035765962" className="contact-value">
                      0203 576 5962
                    </a>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <div className="contact-icon-wrapper">
                    <MessageCircle size={18} />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">WhatsApp</span>
                    <a 
                      href="https://wa.me/+447459627464" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-value"
                    >
                      Message Us
                    </a>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <div className="contact-icon-wrapper">
                    <Mail size={18} />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <a href="mailto:info@fallowbuildingservices.co.uk" className="contact-value">
                      info@fallowbuildingservices.co.uk
                    </a>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <div className="contact-icon-wrapper">
                    <Clock size={18} />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Hours</span>
                    <span className="contact-value">Mon-Fri: 8am-6pm</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link to="/contact" className="footer-cta-btn">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <p className="footer-company">
                Fallow Business Group Ltd trading as Fallow Building Services
              </p>
              <p className="footer-registration">
                Company No: 16532814 | CIS Registered
              </p>
            </div>
            
            <div className="footer-legal-links">
              <Link to="/privacy-policy" className="legal-link">
                Privacy Policy
              </Link>
              <span className="legal-divider">|</span>
              <Link to="/terms-conditions" className="legal-link">
                Terms & Conditions
              </Link>
            </div>
          </div>
          
          <p className="footer-copyright">
            © {new Date().getFullYear()} Fallow Building Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

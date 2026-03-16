import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import './CTABlock.css';

const CTABlock = () => {
  return (
    <section className="cta-block">
      <div className="cta-block-container">
        <h2 className="cta-block-heading">Get Your Free Site Survey</h2>
        <p className="cta-block-body">
          We'll visit your property, assess what's possible, and provide clear budget
          guidance before you commit to anything.
        </p>
        <div className="cta-block-buttons">
          <a href="tel:02035765962" className="cta-btn cta-btn-primary">
            <Phone size={20} />
            Call 0203 576 5962
          </a>
          <a
            href="https://wa.me/447459627464"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn-whatsapp"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
          <Link to="/contact#enquiry-form" className="cta-btn cta-btn-secondary">
            <FileText size={20} />
            Complete Our Enquiry Form
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;

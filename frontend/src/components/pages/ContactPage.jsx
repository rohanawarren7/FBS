import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import '../ServicePage.css';
import '../CTABlock.css';

const ContactPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Contact Fallow Building Services | Free Site Survey</title>
        <meta name="description" content="Contact Fallow Building Services for a free site survey. Call 0203 576 5962, WhatsApp, or complete our enquiry form. Based in Rainham, serving Havering & Essex." />
        <link rel="canonical" href="https://fallowbuildingservices.co.uk/contact" />
      </Helmet>

      <div className="service-page">
        <section className="service-hero" style={{ background: 'linear-gradient(135deg, #0a1628 60%, #1a2e50)', minHeight: '40vh', display: 'flex', alignItems: 'center' }}>
          <div className="service-hero-content" style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <h1 className="service-hero-title">Contact Fallow Building Services</h1>
            <p className="service-hero-subtitle" style={{ color: '#e8e8e8', marginTop: '16px' }}>Get in touch for a free, no-obligation site survey.</p>
          </div>
        </section>

        <section className="service-benefits">
          <div className="service-container">
            <div className="benefits-grid">
              <div className="benefit-card">
                <Phone size={32} style={{ color: '#c9a84c', marginBottom: '12px' }} />
                <h3 className="benefit-title">Call Us</h3>
                <p className="benefit-description">
                  <a href="tel:02035765962" style={{ color: '#c9a84c', fontSize: '1.2rem', fontWeight: '700' }}>0203 576 5962</a><br />
                  Monday–Friday, 8:00am–6:00pm
                </p>
              </div>
              <div className="benefit-card">
                <MessageCircle size={32} style={{ color: '#25D366', marginBottom: '12px' }} />
                <h3 className="benefit-title">WhatsApp</h3>
                <p className="benefit-description">
                  <a href="https://wa.me/447459627464" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: '700' }}>Message us on WhatsApp</a><br />
                  Quick responses during business hours
                </p>
              </div>
              <div className="benefit-card">
                <Mail size={32} style={{ color: '#c9a84c', marginBottom: '12px' }} />
                <h3 className="benefit-title">Email</h3>
                <p className="benefit-description">
                  <a href="mailto:info@fallowbuildingservices.co.uk" style={{ color: '#c9a84c', fontWeight: '700' }}>info@fallowbuildingservices.co.uk</a>
                </p>
              </div>
              <div className="benefit-card">
                <MapPin size={32} style={{ color: '#c9a84c', marginBottom: '12px' }} />
                <h3 className="benefit-title">Address</h3>
                <p className="benefit-description">
                  6 Sunningdale Road<br />
                  Rainham, Essex<br />
                  RM13 7BD
                </p>
              </div>
            </div>

            <div id="enquiry-form" style={{ marginTop: '60px', background: '#f8f8f8', padding: '40px', borderRadius: '8px' }}>
              <h2 className="section-title" style={{ marginTop: 0 }}>Enquiry Form</h2>
              <p style={{ marginBottom: '24px', color: '#555' }}>
                Our full online enquiry form is coming soon. In the meantime, please call <a href="tel:02035765962" style={{ color: '#c9a84c', fontWeight: '700' }}>0203 576 5962</a>, message us on <a href="https://wa.me/447459627464" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: '700' }}>WhatsApp</a>, or email <a href="mailto:info@fallowbuildingservices.co.uk" style={{ color: '#c9a84c', fontWeight: '700' }}>info@fallowbuildingservices.co.uk</a>.
              </p>
              <p style={{ color: '#555' }}>When getting in touch, please let us know:</p>
              <ul style={{ margin: '12px 0 0 20px', lineHeight: '2', color: '#555' }}>
                <li>Your name and property address</li>
                <li>Type of work you're considering (e.g. extension, loft conversion, roofing)</li>
                <li>Approximate timescale</li>
                <li>Any planning permission questions</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;

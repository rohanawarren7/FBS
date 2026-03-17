import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import PageLayout from '../PageLayout';

const ContactPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Contact Fallow Building Services | Free Site Survey</title>
        <meta name="description" content="Contact Fallow Building Services for a free site survey. Call 0203 576 5962, WhatsApp, or use our enquiry form. Rainham-based, serving Havering & Essex." />
        <link rel="canonical" href="https://fallowbuildingservices.co.uk/contact" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"LocalBusiness","name":"Fallow Building Services","telephone":"02035765962","email":"info@fallowbuildingservices.co.uk","url":"https://fallowbuildingservices.co.uk/contact","address":{"@type":"PostalAddress","streetAddress":"6 Sunningdale Road","addressLocality":"Rainham","addressRegion":"Essex","postalCode":"RM13 7BD","addressCountry":"GB"},"openingHours":"Mo-Fr 08:00-18:00","contactPoint":[{"@type":"ContactPoint","telephone":"02035765962","contactType":"sales","contactOption":"TollFree"},{"@type":"ContactPoint","telephone":"+447459627464","contactType":"customer service","contactOption":"HearingImpairedSupported"}]}`}</script>
      </Helmet>

      <PageLayout 
        heroTitle="Contact Fallow Building Services"
        heroSubtitle="Get in touch for a free, no-obligation site survey"
        heroImage="/images/hero-construction.jpg"
      >
        <section className="service-benefits">
          <div className="service-container">
            <div className="benefits-grid">
              <div className="benefit-card">
                <Phone size={32} style={{ colour: '#c9a84c', marginBottom: '12px' }} />
                <h3 className="benefit-title">Call Us</h3>
                <p className="benefit-description">
                  <a href="tel:02035765962" style={{ colour: '#c9a84c', fontSize: '1.2rem', fontWeight: '700' }}>0203 576 5962</a><br />
                  Monday–Friday, 8:00am–6:00pm
                </p>
              </div>
              <div className="benefit-card">
                <MessageCircle size={32} style={{ colour: '#25D366', marginBottom: '12px' }} />
                <h3 className="benefit-title">WhatsApp</h3>
                <p className="benefit-description">
                  <a href="https://wa.me/447459627464" target="_blank" rel="noopener noreferrer" style={{ colour: '#25D366', fontWeight: '700' }}>Message us on WhatsApp</a><br />
                  Quick responses during business hours
                </p>
              </div>
              <div className="benefit-card">
                <Mail size={32} style={{ colour: '#c9a84c', marginBottom: '12px' }} />
                <h3 className="benefit-title">Email</h3>
                <p className="benefit-description">
                  <a href="mailto:info@fallowbuildingservices.co.uk" style={{ colour: '#c9a84c', fontWeight: '700' }}>info@fallowbuildingservices.co.uk</a>
                </p>
              </div>
              <div className="benefit-card">
                <MapPin size={32} style={{ colour: '#c9a84c', marginBottom: '12px' }} />
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
              <p style={{ marginBottom: '24px', colour: '#555' }}>
                Our full online enquiry form is coming soon. In the meantime, please call <a href="tel:02035765962" style={{ colour: '#c9a84c', fontWeight: '700' }}>0203 576 5962</a>, message us on <a href="https://wa.me/447459627464" target="_blank" rel="noopener noreferrer" style={{ colour: '#25D366', fontWeight: '700' }}>WhatsApp</a>, or email <a href="mailto:info@fallowbuildingservices.co.uk" style={{ colour: '#c9a84c', fontWeight: '700' }}>info@fallowbuildingservices.co.uk</a>.
              </p>
              <p style={{ colour: '#555' }}>When getting in touch, please let us know:</p>
              <ul style={{ margin: '12px 0 0 20px', lineHeight: '2', colour: '#555' }}>
                <li>Your name and property address</li>
                <li>Type of work you're considering (e.g. extension, loft conversion, roofing)</li>
                <li>Approximate timescale</li>
                <li>Any planning permission questions</li>
              </ul>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default ContactPage;

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
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
n        <meta property="og:title" content="Contact Fallow Building Services | Free Site Survey" />
        <meta property="og:description" content="Contact Fallow Building Services for a free site survey. Call 0203 576 5962, WhatsApp, or use our enquiry form." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fallowbuildingservices.co.uk/contact" />
        <meta property="og:image" content="https://fallowbuildingservices.co.uk/images/og/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Contact Fallow Building Services | Free Site Survey" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Fallow Building Services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Fallow Building Services | Free Site Survey" />
        <meta name="twitter:description" content="Contact Fallow Building Services for a free site survey. Call 0203 576 5962, WhatsApp, or use our enquiry form." />
        <meta name="twitter:image" content="https://fallowbuildingservices.co.uk/images/og/og-default.jpg" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"LocalBusiness","name":"Fallow Building Services","telephone":"02035765962","email":"info@fallowbuildingservices.co.uk","url":"https://fallowbuildingservices.co.uk/contact","address":{"@type":"PostalAddress","streetAddress":"6 Sunningdale Road","addressLocality":"Rainham","addressRegion":"Essex","postalCode":"RM13 7BD","addressCountry":"GB"},"openingHours":"Mo-Fr 08:00-18:00","contactPoint":[{"@type":"ContactPoint","telephone":"02035765962","contactType":"sales","contactOption":"TollFree"},{"@type":"ContactPoint","telephone":"+447459627464","contactType":"customer service","contactOption":"HearingImpairedSupported"}]}`}</script>
      </Helmet>

      <PageLayout 
        heroTitle="Contact Fallow Building Services"
        heroSubtitle="Get in touch for a free, no-obligation site survey"
        heroImage="/images/hero-construction.jpg"
      >
        <section className="service-benefits">
          <div className="service-container">
            <motion.div 
              className="benefits-grid-modern"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="benefit-card-modern"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="benefit-icon-wrapper">
                  <Phone size={32} />
                </div>
                <h3 className="benefit-title">Call Us</h3>
                <p className="benefit-description">
                  <a href="tel:02035765962" className="contact-link-large">0203 576 5962</a><br />
                  Monday–Friday, 8:00am–6:00pm
                </p>
              </motion.div>
              
              <motion.div 
                className="benefit-card-modern"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="benefit-icon-wrapper whatsapp-icon">
                  <MessageCircle size={32} />
                </div>
                <h3 className="benefit-title">WhatsApp</h3>
                <p className="benefit-description">
                  <a href="https://wa.me/447459627464" target="_blank" rel="noopener noreferrer" className="contact-link-whatsapp">Message us on WhatsApp</a><br />
                  Quick responses during business hours
                </p>
              </motion.div>
              
              <motion.div 
                className="benefit-card-modern"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -4 }}
              >
                <div className="benefit-icon-wrapper">
                  <Mail size={32} />
                </div>
                <h3 className="benefit-title">Email</h3>
                <p className="benefit-description">
                  <a href="mailto:info@fallowbuildingservices.co.uk" className="contact-link-email">info@fallowbuildingservices.co.uk</a>
                </p>
              </motion.div>
              
              <motion.div 
                className="benefit-card-modern"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -4 }}
              >
                <div className="benefit-icon-wrapper">
                  <MapPin size={32} />
                </div>
                <h3 className="benefit-title">Address</h3>
                <p className="benefit-description">
                  6 Sunningdale Road<br />
                  Rainham, Essex<br />
                  RM13 7BD
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              id="enquiry-form"
              className="enquiry-form-section"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Enquiry Form
              </motion.h2>
              
              <motion.p 
                className="form-notice"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Our full online enquiry form is coming soon. In the meantime, please call <a href="tel:02035765962" className="contact-link">0203 576 5962</a>, message us on <a href="https://wa.me/447459627464" target="_blank" rel="noopener noreferrer" className="contact-link-whatsapp">WhatsApp</a>, or email <a href="mailto:info@fallowbuildingservices.co.uk" className="contact-link-email">info@fallowbuildingservices.co.uk</a>.
              </motion.p>
              
              <motion.p 
                className="form-help"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                When getting in touch, please let us know:
              </motion.p>
              
              <motion.ul 
                className="form-requirements"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <li>Your name and property address</li>
                <li>Type of work you're considering (e.g. extension, loft conversion, roofing)</li>
                <li>Approximate timescale</li>
                <li>Any planning permission questions</li>
              </motion.ul>
            </motion.div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default ContactPage;

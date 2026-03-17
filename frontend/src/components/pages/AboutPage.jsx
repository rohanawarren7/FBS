import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';
import PageLayout from '../PageLayout';
import CTABlock from '../CTABlock';

const AboutPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>About Fallow Building Services | Essex Building Contractor</title>
        <meta name="description" content="CIS-registered building contractor based in Rainham, Essex. Extensions, loft conversions, renovations. 12-month defect liability. Call 0203 576 5962." />
        <link rel="canonical" href="https://fallowbuildingservices.co.uk/about" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Organisation","name":"Fallow Building Services","legalName":"Fallow Business Group Ltd","url":"https://fallowbuildingservices.co.uk","logo":"https://fallowbuildingservices.co.uk/images/logo-large.png","contactPoint":{"@type":"ContactPoint","telephone":"02035765962","contactType":"customer service","areaServed":"GB","availableLanguage":"English"},"address":{"@type":"PostalAddress","streetAddress":"6 Sunningdale Road","addressLocality":"Rainham","addressRegion":"Essex","postalCode":"RM13 7BD","addressCountry":"GB"},"identifier":{"@type":"PropertyValue","name":"Companies House","value":"16532814"}}`}</script>
      </Helmet>

      <PageLayout 
        heroTitle="About Fallow Building Services"
        heroSubtitle="Your trusted building partner across Havering and Essex"
        heroImage="/images/hero-construction.jpg"
      >
        <section className="service-benefits">
          <div className="service-container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-subtitle">Who We Are</span>
              <h2 className="section-title">Our Company</h2>
            </motion.div>
            
            <motion.div 
              className="content-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>Fallow Building Services is the trading name of Fallow Business Group Ltd (Companies House registration: 16532814), a building contractor based at 6 Sunningdale Road, Rainham, Essex, RM13 7BD.</p>
              <p style={{ marginTop: '16px' }}>We carry out residential and commercial building work across the London Borough of Havering, Barking &amp; Dagenham, Redbridge, and surrounding Essex areas. Our primary work is home extensions, loft conversions, renovations, roofing, and planned and reactive property maintenance for commercial clients.</p>
            </motion.div>

            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="section-subtitle">How We Operate</span>
              <h2 className="section-title">Our Approach</h2>
            </motion.div>
            
            <motion.div 
              className="content-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p>Every project we take on is managed by our team from initial site survey and quotation through to Building Control sign-off and final handover. You get a dedicated point of contact throughout — someone who knows your project, not a call centre or rotating account manager.</p>
              <p style={{ marginTop: '16px' }}>This structure is deliberate. In our experience, most problems on building projects happen when information passes between too many people. We keep the chain short: one dedicated contact, consistent accountability from survey to sign-off.</p>
            </motion.div>
          </div>
        </section>

        <section className="service-benefits">
          <div className="service-container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-subtitle">Our Credentials</span>
              <h2 className="section-title">Why Choose Us</h2>
            </motion.div>

            <motion.div 
              className="benefits-grid-modern"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { title: 'CIS-Registered', desc: 'Fallow Business Group Ltd is registered under the Construction Industry Scheme. All payments processed correctly. Tax and compliance obligations fully met. You can verify our status through HMRC.' },
                { title: 'Fully Insured', desc: 'We carry public liability insurance and employers\' liability insurance. Certificates are available on request before any work commences. If something goes wrong on site, you are protected.' },
                { title: 'Companies House Registered', desc: 'Fallow Business Group Ltd. Company registration number: 16532814. Registered address: 6 Sunningdale Road, Rainham, Essex, RM13 7BD. Full transparency on our business registration.' },
                { title: '12-Month Defect Liability Period', desc: 'All structural and finishing work is covered for 12 months after completion. If anything goes wrong in the first year — cracking, leaks, poor finishes — we return and fix it at no additional cost. Written into every contract.' },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="benefit-card-modern"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -4 }}
                >
                  <div className="benefit-card-content">
                    <div className="benefit-icon-wrapper">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="benefit-title">{item.title}</h3>
                    <p className="benefit-description">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="service-benefits">
          <div className="service-container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-subtitle">Process</span>
              <h2 className="section-title">How We Work</h2>
            </motion.div>
            
            <motion.div 
              className="content-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>We provide fixed-price quotes after a free site survey. No hourly rates. No provisional sums on core construction work. An initial payment is made on signing the Commencement of Works agreement, with the balance structured across project milestones.</p>
              <p style={{ marginTop: '16px' }}>Our standard payment structure is: an initial payment on signing the Commencement of Works agreement, 25% at key structural stage (first-floor level, roof stage, or shell completion depending on project type), 30% at first fix, and 20% on completion. You pay as work progresses and value is delivered.</p>
              <p style={{ marginTop: '16px' }}>Our roots are in Havering — we're based in Rainham and do a significant proportion of our work across Romford, Hornchurch, and the wider borough. We also work across East London and Essex, and take on projects further afield where the scope suits us. The local knowledge we've built in Havering — the housing stock, the planning process, the Building Control teams — translates well wherever we work.</p>
            </motion.div>
          </div>
        </section>

        <section className="service-areas-section">
          <div className="service-container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-subtitle">Services</span>
              <h2 className="section-title">What We Build</h2>
            </motion.div>

            <motion.div 
              className="service-areas-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                'Home extensions', 'Loft conversions', 'Home renovations',
                'Kitchen refurbishments', 'Bathroom refurbishments',
                'Roofing', 'Porches', 'Outbuildings & garden rooms',
                'Property maintenance (B2B)', 'Property management'
              ].map((service, index) => (
                <motion.div 
                  key={service}
                  className="service-area-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ y: -2, borderColor: 'var(--brand-gold)' }}
                >
                  <MapPin size={18} />
                  <span>{service}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="content-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="section-title" style={{ marginTop: '40px' }}>Our Location</h2>
              <div className="contact-info-grid">
                <div className="contact-info-item">
                  <MapPin size={18} />
                  <span>6 Sunningdale Road, Rainham, Essex, RM13 7BD</span>
                </div>
                <div className="contact-info-item">
                  <Phone size={18} />
                  <a href="tel:02035765962">0203 576 5962</a>
                </div>
                <div className="contact-info-item">
                  <Mail size={18} />
                  <a href="mailto:info@fallowbuildingservices.co.uk">info@fallowbuildingservices.co.uk</a>
                </div>
                <div className="contact-info-item">
                  <Clock size={18} />
                  <span>Monday–Friday, 8:00am–6:00pm</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="quick-links"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/extensions" className="btn-secondary">Home Extensions</Link>
              <Link to="/loft-conversions" className="btn-secondary">Loft Conversions</Link>
              <Link to="/maintenance" className="btn-secondary">Property Maintenance</Link>
              <Link to="/havering" className="btn-secondary">Havering</Link>
              <Link to="/romford" className="btn-secondary">Romford</Link>
            </motion.div>
          </div>
        </section>

        <CTABlock />
      </PageLayout>
    </>
  );
};

export default AboutPage;

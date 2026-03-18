import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '../PageLayout';
import CTABlock from '../CTABlock';
import '../ServicePage.css';

const HaveringPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"Fallow Building Services","image":"https://fallowbuildingservices.co.uk/logo.png","description":"Building services in Havering: extensions, loft conversions, roofing, renovations, and property maintenance. CIS-registered, fully insured, local to Havering.","address":{"@type":"PostalAddress","streetAddress":"6 Sunningdale Road","addressLocality":"Rainham","addressRegion":"Essex","postalCode":"RM13 7BD","addressCountry":"GB"},"geo":{"@type":"GeoCoordinates","latitude":51.5144,"longitude":0.1849},"telephone":"02035765962","priceRange":"££","areaServed":{"@type":"City","name":"Havering"},"openingHours":"Mo-Fr 08:00-18:00","url":"https://fallowbuildingservices.co.uk/havering","identifier":{"@type":"PropertyValue","name":"Companies House","value":"16532814"}};

  return (
    <>
      <Helmet>
        <title>Building Services Havering | Extensions &amp; Loft Conversions</title>
        <meta name="description" content="Quality building services across Havering. Extensions, loft conversions, roofing, maintenance. Local, CIS-registered. Call 0203 576 5962 for free survey." />
        <link rel="canonical" href="https://fallowbuildingservices.co.uk/havering" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <PageLayout heroTitle="Building Services in Havering" heroSubtitle="Extensions, loft conversions, renovations & property maintenance. Local, CIS-registered building contractor.">

        <section className="service-benefits">
          <div className="service-container">
            <h2 className="section-title">Local Building Contractor in Havering</h2>
            <p>Fallow Building Services is based in Rainham, in the London Borough of Havering. Much of our work is across Havering and the surrounding areas — Romford, Hornchurch, Rainham, Barking &amp; Dagenham, and East London — and we take on projects across Essex and wider London too. We've built our reputation on transparent pricing, dedicated project management, and work that stands up to Havering Council Building Control.</p>
            <p style={{ marginTop: '16px' }}>We know Havering's housing stock intimately—the 1930s semi-detached properties across Romford, Hornchurch, and Emerson Park, the post-war housing in Harold Hill and Elm Park, the Victorian terraces in Gidea Park. We know which properties suit which types of extension, where the planning constraints apply, and how to work in restricted residential streets.</p>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Services Available in Havering</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3 className="benefit-title"><Link to="/extensions" style={{ color: 'inherit' }}>Home Extensions</Link></h3>
                <p className="benefit-description">Single and double-storey rear extensions, side returns, wraparounds, and over-structure extensions. Fixed-price quotes following a free site survey. Havering Council planning managed by us. <Link to="/extensions">View extension services →</Link></p>
              </div>
              <div className="benefit-card">
                <h3 className="benefit-title"><Link to="/loft-conversions" style={{ color: 'inherit' }}>Loft Conversions</Link></h3>
                <p className="benefit-description">Dormer, hip-to-gable, Velux, and mansard conversions. Most Havering properties fall under permitted development, avoiding the need for planning permission. Structural survey included. <Link to="/loft-conversions">View loft conversion services →</Link></p>
              </div>
              <div className="benefit-card">
                <h3 className="benefit-title"><Link to="/bathroom-refurbishments" style={{ color: 'inherit' }}>Bathroom Refurbishments</Link></h3>
                <p className="benefit-description">Full bathroom refits, en-suite installations, wet rooms, and shower installations. Supply and fit, or fit-only. <Link to="/bathroom-refurbishments">View bathroom services →</Link></p>
              </div>
              <div className="benefit-card">
                <h3 className="benefit-title"><Link to="/roofing" style={{ color: 'inherit' }}>Roofing</Link></h3>
                <p className="benefit-description">Pitched and flat roof replacement and repairs. EPDM, GRP, and felt flat roof systems. Emergency call-out for storm damage across Havering. Fascias, soffits, and guttering. <Link to="/roofing">View roofing services →</Link></p>
              </div>
              <div className="benefit-card">
                <h3 className="benefit-title"><Link to="/maintenance" style={{ color: 'inherit' }}>Property Maintenance</Link></h3>
                <p className="benefit-description">Planned and reactive maintenance for property managers, letting agents, care homes, and housing associations. Single invoice, 4-hour emergency response, CIS-registered. <Link to="/maintenance">View maintenance services →</Link></p>
              </div>
            </div>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Where We Work in Havering</h2>
            <p>We carry out building work across all RM postcodes within the London Borough of Havering:</p>
            <div className="areas-list" style={{ marginTop: '16px' }}>
              {[
                'Romford (RM1, RM2, RM3)', 'Hornchurch (RM11, RM12)', 'Upminster (RM14)',
                'Rainham (RM13)', 'Harold Wood (RM3)', 'Emerson Park (RM11)',
                'Elm Park (RM12)', 'Collier Row (RM5, RM7)', 'Gidea Park (RM2)',
                'Harold Hill (RM3)', 'Rush Green (RM7)', 'South Hornchurch (RM13)'
              ].map(area => (
                <span key={area} className="area-badge">{area}</span>
              ))}
            </div>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Why Havering Homeowners Choose Fallow Building Services</h2>
            <div className="benefits-grid">
              {[
                { title: 'Genuinely Local', desc: 'Based in Rainham. We work in Havering every day. We\'re not a company that covers 15 boroughs from an office in central London. When you call us, you reach a team that knows your street, your council, and your property type.' },
                { title: 'CIS-Registered', desc: 'Fallow Business Group Ltd (Companies House: 16532814) is registered under the Construction Industry Scheme. Fully traceable, compliant contractor.' },
                { title: 'Fixed-Price Contracts', desc: 'We provide fixed-price quotes after a free site survey. No provisional sums. No day-rate surprises. You know what you\'re paying before work starts.' },
                { title: '12-Month Defect Liability', desc: 'All structural and finishing work is covered for 12 months. If anything goes wrong, we return and fix it at no additional cost—it\'s a written commitment, not a vague assurance.' },
              ].map((item, i) => (
                <div key={i} className="benefit-card">
                  <h3 className="benefit-title">{item.title}</h3>
                  <p className="benefit-description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABlock />
      </PageLayout>
    </>
  );
};

export default HaveringPage;

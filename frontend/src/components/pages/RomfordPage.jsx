import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '../PageLayout';
import CTABlock from '../CTABlock';
import '../ServicePage.css';

const RomfordPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"Fallow Building Services - Romford","image":"https://fallowbuildingservices.co.uk/logo.png","description":"Building services in Romford: extensions, loft conversions, roofing, renovations, property maintenance. CIS-registered, fully insured, local Romford team.","address":{"@type":"PostalAddress","streetAddress":"6 Sunningdale Road","addressLocality":"Rainham","addressRegion":"Essex","postalCode":"RM13 7BD","addressCountry":"GB"},"geo":{"@type":"GeoCoordinates","latitude":51.5144,"longitude":0.1849},"telephone":"02035765962","priceRange":"££","areaServed":{"@type":"City","name":"Romford"},"openingHours":"Mo-Fr 08:00-18:00","url":"https://fallowbuildingservices.co.uk/romford","identifier":{"@type":"PropertyValue","name":"Companies House","value":"16532814"}};

  return (
    <>
      <Helmet>
        <title>Building Services Romford | Extensions &amp; Loft Conversions</title>
        <meta name="description" content="Professional building services in Romford. Extensions, loft conversions, bathrooms, roofing. CIS-registered, local team. Call 0203 576 5962 for free survey." />
        <link rel="canonical" href="https://fallowbuildingservices.co.uk/romford" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <PageLayout heroTitle="Building Services in Romford" heroSubtitle="Extensions, loft conversions, renovations & property maintenance. CIS-registered, local Romford team.">

        <section className="service-benefits">
          <div className="service-container">
            <h2 className="section-title">Building Contractor in Romford</h2>
            <p>Fallow Building Services is based in Rainham, five minutes from Romford town centre. We carry out building work across the RM1, RM2, RM3, RM5, and RM7 postcodes daily. Romford's housing stock—predominantly 1930s semi-detached properties across the residential streets surrounding the town centre—is exactly the type of property we specialise in. We understand permitted development limits, local planning requirements, and the structural characteristics of inter-war Romford housing.</p>
            <p style={{ marginTop: '16px' }}>Our team provides one dedicated point of contact from survey to completion. Fixed-price quotes. CIS-registered. Fully insured.</p>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Services Available in Romford</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3 className="benefit-title"><Link to="/extensions" style={{ color: 'inherit' }}>Home Extensions Romford</Link></h3>
                <p className="benefit-description">Single and double-storey extensions across Romford RM1–RM7. Rear extensions, side returns, and wraparounds. Havering Council planning managed by us. Fixed-price after survey. <Link to="/extensions">View extension services →</Link></p>
              </div>
              <div className="benefit-card">
                <h3 className="benefit-title"><Link to="/loft-conversions" style={{ color: 'inherit' }}>Loft Conversions Romford</Link></h3>
                <p className="benefit-description">Dormer and hip-to-gable conversions on Romford's 1930s semi-detached properties. Most projects fall under permitted development. Free structural feasibility survey. <Link to="/loft-conversions">View loft conversion services →</Link></p>
              </div>
              <div className="benefit-card">
                <h3 className="benefit-title"><Link to="/bathroom-refurbishments" style={{ color: 'inherit' }}>Bathroom Refurbishments Romford</Link></h3>
                <p className="benefit-description">Full bathroom refits, en-suite installations, and wet rooms across Romford. Supply and fit or fit-only service. <Link to="/bathroom-refurbishments">View bathroom services →</Link></p>
              </div>
              <div className="benefit-card">
                <h3 className="benefit-title"><Link to="/roofing" style={{ color: 'inherit' }}>Roofing Romford</Link></h3>
                <p className="benefit-description">Full re-roofs, flat roof replacements, and repairs across Romford. EPDM and GRP flat roof systems. Emergency call-out for storm damage. Fascias and guttering. <Link to="/roofing">View roofing services →</Link></p>
              </div>
              <div className="benefit-card">
                <h3 className="benefit-title"><Link to="/maintenance" style={{ color: 'inherit' }}>Property Maintenance Romford</Link></h3>
                <p className="benefit-description">Planned and reactive maintenance for Romford property managers, HMO landlords, and commercial clients. Single monthly invoice. 4-hour emergency response. <Link to="/maintenance">View maintenance services →</Link></p>
              </div>
            </div>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Romford Postcodes We Cover</h2>
            <div className="areas-list" style={{ marginTop: '12px' }}>
              {[
                'RM1 — Romford Town Centre', 'RM2 — Gidea Park, Heath Park',
                'RM3 — Harold Wood, Harold Hill', 'RM5 — Collier Row',
                'RM7 — Rush Green, Mawneys', 'RM6 — Chadwell Heath',
                'RM8 — Dagenham (border areas)'
              ].map(area => (
                <span key={area} className="area-badge">{area}</span>
              ))}
            </div>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Why Romford Homeowners Choose Fallow Building Services</h2>
            <div className="benefits-grid">
              {[
                { title: 'Based 5 Minutes from Romford', desc: 'Our base in Rainham means we\'re on site in Romford quickly. No London traffic markups. No travel charges. We work in Romford streets every week.' },
                { title: 'Specialists in 1930s Housing', desc: 'Romford\'s semi-detached housing stock from the inter-war period has specific structural characteristics—party walls, roof pitches, foundation depths. We know this property type inside out.' },
                { title: 'Havering Council Experience', desc: 'We\'ve managed dozens of planning applications and Building Control approvals through Havering Council. We know what they require and how to navigate the process efficiently.' },
                { title: 'Fixed-Price, No Surprises', desc: 'Detailed fixed-price quotes provided after a free site survey. No hourly rates, no provisional sums on core works. You know what you\'re paying before we start.' },
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

export default RomfordPage;

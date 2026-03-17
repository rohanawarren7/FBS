import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import PageLayout from '../PageLayout';
import '../ServicePage.css';
import '../CTABlock.css';

const MaintenancePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"Fallow Building Services - B2B Maintenance","image":"https://fallowbuildingservices.co.uk/logo.png","description":"Planned and reactive maintenance for property managers, care homes, and housing associations in Essex and East London. CIS-registered, 4-hour emergency response, single monthly invoice.","address":{"@type":"PostalAddress","streetAddress":"6 Sunningdale Road","addressLocality":"Rainham","addressRegion":"Essex","postalCode":"RM13 7BD","addressCountry":"GB"},"geo":{"@type":"GeoCoordinates","latitude":51.5144,"longitude":0.1849},"telephone":"02035765962","priceRange":"££","areaServed":[{"@type":"City","name":"Havering"},{"@type":"City","name":"Romford"},{"@type":"City","name":"Barking and Dagenham"},{"@type":"City","name":"East London"}],"openingHours":"Mo-Su 00:00-23:59","url":"https://fallowbuildingservices.co.uk/maintenance","hasOfferCatalog":{"@type":"OfferCatalog","name":"B2B Maintenance Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Planned Maintenance","description":"Scheduled inspections, preventative maintenance, fabric maintenance, void refurbishments"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Reactive Maintenance","description":"Emergency call-outs, leak investigations, mould remediation, electrical and plumbing repairs"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Care Home Maintenance","description":"CQC-compliant maintenance for care environments with full RAMS documentation"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Housing Association Services","description":"CIS-compliant maintenance and refurbishment for social housing providers"}}]}};

  return (
    <>
      <Helmet>
        <title>Property Maintenance Essex | B2B Building Services Havering</title>
        <meta name="description" content="Planned & reactive maintenance for property managers, care homes & housing associations. CIS-registered, 4-hour emergency response. Call 0203 576 5962." />
        <link rel="canonical" href="https://fallowbuildingservices.co.uk/maintenance" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <PageLayout heroTitle="Property Maintenance in Essex & East London" heroSubtitle="Planned & reactive maintenance for property managers, care homes & housing associations. CIS-registered, 4-hour emergency response.">

        <section className="service-benefits">
          <div className="service-container">
            <h2 className="section-title">Overview</h2>
            <p>Fallow Building Services provides planned and reactive building maintenance for property managers, letting agents, care homes, housing associations, and commercial property owners across Essex and East London. We operate as a primary contractor or secondary contractor, handling all building fabric trades under a single monthly invoice — no trade-by-trade coordination required from your side.</p>
            <p style={{ marginTop: '16px' }}>CIS-registered. Fully insured. Emergency response available 24/7. RAMS documentation provided for all works. We maintain portfolios from single HMOs to multi-site managed estates.</p>

            <h2 className="section-title" style={{ marginTop: '40px' }}>What We Cover</h2>
            <div className="benefits-grid">
              {[
                { title: 'Planned Maintenance', desc: 'Scheduled inspection programmes. Preventative fabric maintenance. Decoration cycles. Gutter clearing and inspection. Roof surveys. Annual safety checks. We work to your schedule and provide advance notice of all planned visits.' },
                { title: 'Reactive Maintenance', desc: 'Emergency call-outs for leaks, structural damage, break-ins, and storm damage. Mould investigation and remediation. Pest access point sealing. Our target response time for category 1 emergencies is 4 hours in our core service area.' },
                { title: 'Void Property Refurbishment', desc: 'Full void turnarounds between tenancies. Strip-out, deep clean, redecoration, flooring, kitchen and bathroom repairs or replacement. We work to your specification and turnaround timeline to minimise void periods.' },
                { title: 'Care Home Maintenance', desc: 'CQC-compliant maintenance services for care environments. Full RAMS documentation for every job. We understand the regulatory requirements and operational constraints of care settings—work is scheduled to minimise disruption to residents.' },
                { title: 'Housing Association Services', desc: 'CIS-compliant maintenance and refurbishment for social housing providers. Decent Homes compliance work, kitchen and bathroom upgrades, external fabric improvements. We can work to your procurement and compliance requirements.' },
                { title: 'Commercial Property Maintenance', desc: 'Office buildings, retail units, light industrial premises. Routine inspections, reactive repairs, full redecoration. We can act as your retained contractor with agreed response times and service levels.' },
              ].map((item, i) => (
                <div key={i} className="benefit-card">
                  <h3 className="benefit-title">{item.title}</h3>
                  <p className="benefit-description">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Why Property Managers Choose Fallow</h2>
            <div className="benefits-grid">
              {[
                { title: 'Single Monthly Invoice', desc: 'All works across your portfolio on one invoice. No chasing multiple contractors for quotes and invoices. Clear job references for each property so your accounts team can allocate costs without confusion.' },
                { title: '4-Hour Emergency Response', desc: 'Category 1 emergencies attended within 4 hours in our core service area. We carry out temporary or permanent repairs and provide a written report for your records.' },
                { title: 'CIS-Registered', desc: 'All payments processed correctly under the Construction Industry Scheme. No compliance risk for your organisation. We can provide CIS verification on request.' },
                { title: 'No Call-Out Charges for Retained Clients', desc: 'For clients on retained agreements, we waive call-out charges. You pay for labour and materials only. No surcharges for weekend or bank holiday attendance on category 1 emergencies.' },
              ].map((item, i) => (
                <div key={i} className="benefit-card">
                  <h3 className="benefit-title">{item.title}</h3>
                  <p className="benefit-description">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="section-title" style={{ marginTop: '40px' }}>What We Cover — Trades</h2>
            <p>Our maintenance service covers all building fabric trades in-house:</p>
            <div className="areas-list" style={{ marginTop: '16px' }}>
              {[
                'Roofing repairs', 'Guttering & drainage', 'Plastering & rendering',
                'Internal decoration', 'External decoration', 'Carpentry & joinery',
                'Flooring', 'Kitchen fitting', 'Bathroom fitting', 'Plumbing repairs',
                'Electrical repairs', 'Glazing replacement', 'Damp & mould treatment',
                'Groundworks & drainage'
              ].map(trade => (
                <span key={trade} className="area-badge">{trade}</span>
              ))}
            </div>
            <p style={{ marginTop: '20px' }}>For more specialist work—<Link to="/roofing">roofing</Link>, drainage investigation, or <Link to="/bathroom-refurbishments">bathroom refurbishments</Link>—we draw on the same team that delivers our residential project work.</p>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Areas We Cover</h2>
            <div className="areas-list" style={{ marginTop: '12px' }}>
              {['Havering', 'Romford', 'Hornchurch', 'Rainham', 'Barking & Dagenham', 'Redbridge', 'Newham', 'Waltham Forest', 'East London', 'Essex'].map(area => (
                <span key={area} className="area-badge">{area}</span>
              ))}
            </div>
          </div>
        </section>

        {/* B2B CTA — different from standard residential CTA */}
        <section className="cta-block">
          <div className="cta-block-container">
            <h2 className="cta-block-heading">Get in Touch to Discuss Your Maintenance Requirements</h2>
            <p className="cta-block-body">
              We'll arrange an onboarding call, assess your portfolio, and provide a tailored service proposal.
              When you get in touch, please include: company name, portfolio size, primary service area, and type of works required.
            </p>
            <div className="cta-block-buttons">
              <a href="tel:02035765962" className="cta-btn cta-btn-primary">
                <Phone size={20} />
                Call 0203 576 5962
              </a>
              <a href="https://wa.me/447459627464" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-whatsapp">
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
              <Link to="/contact#enquiry-form" className="cta-btn cta-btn-secondary">
                <FileText size={20} />
                Complete Our B2B Enquiry Form
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default MaintenancePage;

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
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
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Organization","name":"Fallow Building Services","legalName":"Fallow Business Group Ltd","url":"https://fallowbuildingservices.co.uk","logo":"https://fallowbuildingservices.co.uk/images/logo-large.png","contactPoint":{"@type":"ContactPoint","telephone":"02035765962","contactType":"customer service","areaServed":"GB","availableLanguage":"English"},"address":{"@type":"PostalAddress","streetAddress":"6 Sunningdale Road","addressLocality":"Rainham","addressRegion":"Essex","postalCode":"RM13 7BD","addressCountry":"GB"},"identifier":{"@type":"PropertyValue","name":"Companies House","value":"16532814"}}`}</script>
      </Helmet>

      <PageLayout 
        heroTitle="About Fallow Building Services"
        heroSubtitle="Your trusted building partner across Havering and Essex"
        heroImage="/images/hero-construction.jpg"
      >
        <section className="service-benefits">
          <div className="service-container">
            <h2 className="section-title">Who We Are</h2>
            <p>Fallow Building Services is the trading name of Fallow Business Group Ltd (Companies House registration: 16532814), a building contractor based at 6 Sunningdale Road, Rainham, Essex, RM13 7BD.</p>
            <p style={{ marginTop: '16px' }}>We carry out residential and commercial building work across the London Borough of Havering, Barking &amp; Dagenham, Redbridge, and surrounding Essex areas. Our primary work is home extensions, loft conversions, renovations, roofing, and planned and reactive property maintenance for commercial clients.</p>

            <h2 className="section-title" style={{ marginTop: '40px' }}>How We Operate</h2>
            <p>Every project we take on is managed by our team from initial site survey and quotation through to Building Control sign-off and final handover. You get a dedicated point of contact throughout — someone who knows your project, not a call centre or rotating account manager.</p>
            <p style={{ marginTop: '16px' }}>This structure is deliberate. In our experience, most problems on building projects happen when information passes between too many people. We keep the chain short: one dedicated contact, consistent accountability from survey to sign-off.</p>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Our Credentials</h2>
            <div className="benefits-grid">
              {[
                { title: 'CIS-Registered', desc: 'Fallow Business Group Ltd is registered under the Construction Industry Scheme. All payments processed correctly. Tax and compliance obligations fully met. You can verify our status through HMRC.' },
                { title: 'Fully Insured', desc: 'We carry public liability insurance and employers\' liability insurance. Certificates are available on request before any work commences. If something goes wrong on site, you are protected.' },
                { title: 'Companies House Registered', desc: 'Fallow Business Group Ltd. Company registration number: 16532814. Registered address: 6 Sunningdale Road, Rainham, Essex, RM13 7BD. Full transparency on our business registration.' },
                { title: '12-Month Defect Liability Period', desc: 'All structural and finishing work is covered for 12 months after completion. If anything goes wrong in the first year — cracking, leaks, poor finishes — we return and fix it at no additional cost. Written into every contract.' },
              ].map((item, i) => (
                <div key={i} className="benefit-card">
                  <h3 className="benefit-title">{item.title}</h3>
                  <p className="benefit-description">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="section-title" style={{ marginTop: '40px' }}>How We Work</h2>
            <p>We provide fixed-price quotes after a free site survey. No hourly rates. No provisional sums on core construction work. An initial payment is made on signing the Commencement of Works agreement, with the balance structured across project milestones.</p>
            <p style={{ marginTop: '16px' }}>Our standard payment structure is: an initial payment on signing the Commencement of Works agreement, 25% at key structural stage (first-floor level, roof stage, or shell completion depending on project type), 30% at first fix, and 20% on completion. You pay as work progresses and value is delivered.</p>
            <p style={{ marginTop: '16px' }}>Our roots are in Havering — we're based in Rainham and do a significant proportion of our work across Romford, Hornchurch, and the wider borough. We also work across East London and Essex, and take on projects further afield where the scope suits us. The local knowledge we've built in Havering — the housing stock, the planning process, the Building Control teams — translates well wherever we work.</p>

            <h2 className="section-title" style={{ marginTop: '40px' }}>What We Build</h2>
            <div className="areas-list" style={{ marginTop: '12px' }}>
              {[
                'Home extensions', 'Loft conversions', 'Home renovations',
                'Kitchen refurbishments', 'Bathroom refurbishments',
                'Roofing', 'Porches', 'Outbuildings & garden rooms',
                'Property maintenance (B2B)', 'Property management'
              ].map(s => <span key={s} className="area-badge">{s}</span>)}
            </div>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Our Location</h2>
            <p>6 Sunningdale Road, Rainham, Essex, RM13 7BD<br />
            Tel: <a href="tel:02035765962">0203 576 5962</a><br />
            Email: <a href="mailto:info@fallowbuildingservices.co.uk">info@fallowbuildingservices.co.uk</a><br />
            Hours: Monday–Friday, 8:00am–6:00pm</p>

            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/extensions" className="area-badge" style={{ textDecoration: 'none' }}>Home Extensions</Link>
              <Link to="/loft-conversions" className="area-badge" style={{ textDecoration: 'none' }}>Loft Conversions</Link>
              <Link to="/maintenance" className="area-badge" style={{ textDecoration: 'none' }}>Property Maintenance</Link>
              <Link to="/havering" className="area-badge" style={{ textDecoration: 'none' }}>Havering</Link>
              <Link to="/romford" className="area-badge" style={{ textDecoration: 'none' }}>Romford</Link>
            </div>
          </div>
        </section>

        <CTABlock />
      </PageLayout>
    </>
  );
};

export default AboutPage;

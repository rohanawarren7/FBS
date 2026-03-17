import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageLayout from '../PageLayout';
import CTABlock from '../CTABlock';
import '../ServicePage.css';

const BathroomRefurbishmentsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How long does a bathroom refurbishment take?","acceptedAnswer":{"@type":"Answer","text":"A standard full bathroom refit takes 7–10 working days from strip-out to completion. Smaller projects (suite replacement without retiling) can be completed in 4–5 days. En-suite installations take 10–14 days. Wet rooms take 10–12 days due to tanking and drainage work."}},{"@type":"Question","name":"Can I use my bathroom during the refurbishment?","acceptedAnswer":{"@type":"Answer","text":"No. Once we start strip-out, the bathroom is out of action until completion. If it's your only bathroom, you'll need to arrange alternative facilities."}},{"@type":"Question","name":"Do I need Building Control approval for a bathroom refurbishment?","acceptedAnswer":{"@type":"Answer","text":"Usually not, if you're refurbishing an existing bathroom. Building Control notification is typically required if you're creating a new bathroom where none existed."}},{"@type":"Question","name":"Do you supply the bathroom suite and tiles, or just fit?","acceptedAnswer":{"@type":"Answer","text":"Both. We offer a full supply-and-fit service where we source the suite, tiles, fittings, and materials on your behalf—or a fit-only service where you supply your own. For supply-and-fit, we work with trade suppliers and pass on competitive pricing. We can accommodate most styles and budgets from high-street ranges through to bespoke designer products."}},{"@type":"Question","name":"How much does a bathroom refurbishment cost in Havering?","acceptedAnswer":{"@type":"Answer","text":"A straightforward bathroom refit (new suite, full retiling, new floor) typically costs between £4,000–£7,000 supply and fit. En-suite installations in an existing bedroom generally cost £5,000–£9,000 depending on the plumbing configuration and finishes. Wet room conversions start at around £6,000. These are indicative figures—every bathroom is different and we provide a fixed-price quote after a free site visit."}},{"@type":"Question","name":"Can you move the toilet, basin, or shower to a different position?","acceptedAnswer":{"@type":"Answer","text":"Yes, within practical limits. Moving sanitaryware requires rerouting waste and water supply pipework. We assess whether the existing soil stack and joist direction allow the repositioning you want, and price the additional plumbing work accordingly. We advise on any constraints before you commit—there's no obligation after the site visit."}}]};

  return (
    <>
      <Helmet>
        <title>Bathroom Renovation Havering | Bathroom Refurbishment Essex</title>
        <meta name="description" content="Complete bathroom renovations in Havering & Essex. Full refits, en-suites, wet rooms. Supply & fit or fit-only. Call 0203 576 5962 for free quote." />
        <link rel="canonical" href="https://fallowbuildingservices.co.uk/bathroom-refurbishments" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <PageLayout heroTitle="Bathroom Renovation & Refurbishment in Havering" heroSubtitle="Complete bathroom renovations across Havering & Essex. Full refits, en-suites, wet rooms. Supply & fit or fit-only.">

        <section className="service-benefits">
          <div className="service-container">
            <h2 className="section-title">Overview</h2>
            <p>A bathroom refurbishment is one of the highest-return home improvements you can make. Fallow Building Services delivers complete bathroom renovations across Havering and Essex—from full strip-out and refit through to en-suite installations and wet room conversions. Supply and fit, or fit-only using your own materials.</p>
            <p style={{ marginTop: '16px' }}>You get one dedicated point of contact from initial survey through to completion and the 12-month defect liability period. All our bathroom work is carried out by qualified tradespeople—tilers, plumbers, and electricians—coordinated by our team so you don't have to manage multiple contractors.</p>

            <h2 className="section-title" style={{ marginTop: '40px' }}>What We Cover</h2>
            <div className="benefits-grid">
              {[
                { title: 'Full Bathroom Refit', desc: 'Complete strip-out of existing bathroom. New suite installation including bath, WC, basin, and shower. Full retiling to walls and floor. New electrical circuits and lighting. Extraction ventilation. Plumbing reconfiguration where required.' },
                { title: 'En-Suite Installation', desc: 'New en-suite bathrooms created within existing bedrooms. We handle partition walls, all first and second fix plumbing, electrical work, waterproofing, tiling, and suite installation. From planning the layout to final decoration.' },
                { title: 'Wet Room Conversion', desc: 'Full tanking of floor and walls with waterproof membrane system. Level-access drain installation. Large-format tile installation. Frameless glass screens. Suitable for accessible bathrooms and modern design preferences.' },
                { title: 'Shower Installation & Replacement', desc: 'Electric shower installation or thermostatic mixer shower with riser rail or fixed head. Shower tray and enclosure, or wet room drain. We handle all electrical and plumbing work to current regulations.' },
                { title: 'Suite Replacement', desc: 'Like-for-like replacement of bath, WC, and basin without full retiling. Ideal where tiles are in good condition but the suite is dated. Typically completed in 3–5 days.' },
                { title: 'Fit-Only Service', desc: 'If you\'ve purchased your own suite and tiles, we\'ll fit them. We\'ll review your choices before starting to confirm they\'re suitable for installation. All plumbing and electrical work carried out to current regulations.' },
              ].map((item, i) => (
                <div key={i} className="benefit-card">
                  <h3 className="benefit-title">{item.title}</h3>
                  <p className="benefit-description">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Our Process</h2>
            <div className="process-timeline">
              {[
                { title: 'Site Survey & Design', desc: 'We visit your property to assess the existing bathroom, plumbing configuration, drainage, and electrical arrangements. We discuss your requirements, review any fixtures you\'ve chosen, and provide a fixed-price quote.' },
                { title: 'Material Procurement', desc: 'We source or check all materials before start date. For supply-and-fit projects, we handle all ordering and delivery. For fit-only, we confirm all materials are on-site before work begins.' },
                { title: 'Strip-Out', desc: 'Existing bathroom is fully stripped—suite, tiles, plasterboard where necessary. We protect adjacent rooms with dust barriers. All waste is removed from site.' },
                { title: 'First Fix', desc: 'New soil and supply pipework installed where required. New electrical circuits run. Any structural work completed (e.g., partition walls for en-suites). Building Control notified if applicable.' },
                { title: 'Waterproofing & Tiling', desc: 'Tanking membrane applied to wet areas. Tiles fixed to walls and floor. Grout and silicone applied. For wet rooms, full floor-to-ceiling waterproofing before any tiling begins.' },
                { title: 'Second Fix & Completion', desc: 'Suite fitted, shower enclosure or screen installed, accessories fitted. Electricals completed. Snagging carried out. Final clean and handover.' },
              ].map((step, i) => (
                <div key={i} className="process-step">
                  <div className="step-number">{i + 1}</div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'How long does a bathroom refurbishment take?', a: 'A standard full bathroom refit takes 7–10 working days from strip-out to completion. Smaller projects (suite replacement without retiling) can be completed in 4–5 days. En-suite installations take 10–14 days. Wet rooms take 10–12 days due to tanking and drainage work.' },
              { q: 'Can I use my bathroom during the refurbishment?', a: 'No. Once we start strip-out, the bathroom is out of action until completion. If it\'s your only bathroom, you\'ll need to arrange alternative facilities.' },
              { q: 'Do I need Building Control approval for a bathroom refurbishment?', a: 'Usually not, if you\'re refurbishing an existing bathroom. Building Control notification is typically required if you\'re creating a new bathroom where none existed.' },
              { q: 'Do you supply the bathroom suite and tiles, or just fit?', a: 'Both. We offer a full supply-and-fit service where we source the suite, tiles, fittings, and materials on your behalf—or a fit-only service where you supply your own. We work with trade suppliers and pass on competitive pricing, and can accommodate most styles and budgets from high-street ranges through to bespoke designer products.' },
              { q: 'How much does a bathroom refurbishment cost in Havering?', a: 'A straightforward bathroom refit (new suite, full retiling, new floor) typically costs between £4,000–£7,000 supply and fit. En-suite installations in an existing bedroom generally cost £5,000–£9,000 depending on plumbing configuration and finishes. Wet room conversions start at around £6,000. These are indicative figures—every bathroom is different and we provide a fixed-price quote after a free site visit.' },
              { q: 'Can you move the toilet, basin, or shower to a different position?', a: 'Yes, within practical limits. Moving sanitaryware requires rerouting waste and water supply pipework. We assess whether the existing soil stack and joist direction allow the repositioning you want and price the additional plumbing work accordingly. We advise on any constraints before you commit—there\'s no obligation after the site visit.' },
            ].map((faq, i) => (
              <div key={i} style={{ marginBottom: '24px', borderLeft: '4px solid #c9a84c', paddingLeft: '20px' }}>
                <h3 style={{ fontWeight: '700', marginBottom: '8px' }}>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}

            <h2 className="section-title" style={{ marginTop: '40px' }}>Areas We Cover</h2>
            <p>We carry out bathroom refurbishments across Havering, Barking &amp; Dagenham, Redbridge, and surrounding Essex areas.</p>
            <div className="areas-list" style={{ marginTop: '20px' }}>
              {['Romford', 'Hornchurch', 'Upminster', 'Rainham', 'Harold Wood', 'Elm Park', 'Collier Row', 'Gidea Park', 'Barking & Dagenham', 'Redbridge'].map(area => (
                <span key={area} className="area-badge">{area}</span>
              ))}
            </div>
            <p style={{ marginTop: '24px' }}>For property managers, letting agents, and care homes, see our <Link to="/maintenance">Maintenance Services</Link>.</p>
            <div style={{ marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/extensions" className="area-badge" style={{ textDecoration: 'none' }}>Home Extensions</Link>
              <Link to="/loft-conversions" className="area-badge" style={{ textDecoration: 'none' }}>Loft Conversions</Link>
            </div>
          </div>
        </section>

        <CTABlock />
      </PageLayout>
    </>
  );
};

export default BathroomRefurbishmentsPage;

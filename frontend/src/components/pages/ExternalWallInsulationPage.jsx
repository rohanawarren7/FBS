import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CTABlock from '../CTABlock';
import '../ServicePage.css';

const ExternalWallInsulationPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Will external wall insulation reduce my energy bills?","acceptedAnswer":{"@type":"Answer","text":"Yes. EWI typically reduces heat loss through solid walls by 60–70%, which can cut overall heating bills by 30–40% depending on your property, existing heating system, and usage patterns."}},{"@type":"Question","name":"Do I need planning permission for external wall insulation?","acceptedAnswer":{"@type":"Answer","text":"Usually not. EWI generally falls under permitted development, provided the insulation thickness doesn't exceed 100mm beyond the original wall face. Properties in conservation areas may require planning permission."}},{"@type":"Question","name":"What is the ECO4 scheme and am I eligible?","acceptedAnswer":{"@type":"Answer","text":"ECO4 (Energy Company Obligation) is a government scheme requiring energy companies to fund energy efficiency improvements in eligible homes. You may qualify if your property has solid walls, a low EPC rating (D, E, F, or G), and you meet certain income or benefit criteria."}},{"@type":"Question","name":"How long does external wall insulation installation take?","acceptedAnswer":{"@type":"Answer","text":"A standard three-bedroom semi-detached property typically takes 5–8 working days for the full EWI installation, from preparation through to final render coat. Larger properties or those requiring extensive preparatory work (defective existing render, masonry repairs) may take longer. We provide a specific programme with your quote."}},{"@type":"Question","name":"Will EWI change the appearance of my home?","acceptedAnswer":{"@type":"Answer","text":"Yes. EWI adds a new external finish—typically silicone render, mineral render, or brick slips—over the insulation board. The finish can be specified to your preference and can closely replicate the appearance of the existing property. Render colour and texture are chosen by you. For brick-slip systems, we can match or complement the existing brickwork. The overall profile of the building increases by the thickness of the insulation and render system."}},{"@type":"Question","name":"How much does external wall insulation cost in Essex?","acceptedAnswer":{"@type":"Answer","text":"EWI costs depend on property size, the system specified (EPS, mineral wool, wood fibre), and the render or cladding finish. For a typical three-bedroom semi-detached, EPS with silicone render usually costs between £8,000–£14,000. If you are eligible for ECO4 funding, the cost to you may be significantly reduced or fully funded. We assess ECO4 eligibility as part of our free survey."}}]};

  return (
    <>
      <Helmet>
        <title>External Wall Insulation Essex | EWI Installer Havering</title>
        <meta name="description" content="Professional external wall insulation in Essex & Havering. Mineral wool, EPS, render systems. ECO4 scheme support. Call 0203 576 5962 for survey." />
        <link rel="canonical" href="https://fallowbuildingservices.co.uk/external-wall-insulation" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="service-page">
        <section className="service-hero" style={{ background: 'linear-gradient(135deg, #0a1628 60%, #1a2e50)', minHeight: '40vh', display: 'flex', alignItems: 'center' }}>
          <div className="service-hero-content" style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <h1 className="service-hero-title">External Wall Insulation in Essex &amp; Havering</h1>
          </div>
        </section>

        <section className="service-benefits">
          <div className="service-container">
            <h2 className="section-title">Overview</h2>
            <p>External wall insulation (EWI) is one of the most effective energy efficiency upgrades available for solid-wall properties. Across Havering's pre-1920 and inter-war housing stock, cavity wall insulation is often not possible — EWI is the solution. Fallow Building Services installs complete EWI systems from survey and specification through to final render or brick-slip finish.</p>
            <p style={{ marginTop: '16px' }}>We work with PAS 2035-compliant systems and can provide guidance on ECO4 eligibility. Every project is assessed individually — we do not offer one-size-fits-all solutions. We provide a single point of contact throughout — from initial assessment to completed installation.</p>

            <h2 className="section-title" style={{ marginTop: '40px' }}>EWI Systems We Install</h2>
            <div className="benefits-grid">
              {[
                { title: 'EPS (Expanded Polystyrene) Board Systems', desc: 'The most widely used EWI system. EPS boards are fixed to the external wall, reinforced with mesh, and finished with a silicone or mineral render. Suitable for most solid-wall property types. Cost-effective and high-performing.' },
                { title: 'Mineral Wool (Rockwool) Systems', desc: 'Fire-resistant EWI using mineral wool boards. Required where fire performance is critical—HMOs, blocks of flats, and properties requiring A2-rated systems under building regulations. More expensive than EPS but provides superior fire and acoustic performance.' },
                { title: 'Wood Fibre Systems', desc: 'Breathable EWI boards suitable for heritage properties or where vapour permeability is required. Often used on older solid masonry buildings where trapped moisture is a concern. Finished with lime or breathable mineral render.' },
                { title: 'Brick Slip Finishing', desc: 'For properties where render finish is not appropriate—conservation areas, or where the client wants to retain a brick appearance. Brick slips are applied over the insulation board to replicate the look of brickwork.' },
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
                { title: 'Survey & Specification', desc: 'We assess the property\'s existing wall construction, condition, and any existing moisture or structural issues. We specify the appropriate EWI system, insulation thickness, and finish. We advise on ECO4 eligibility if applicable.' },
                { title: 'Preparation', desc: 'Existing render is assessed and removed where defective. Masonry is repaired and made good. Window and door reveals are assessed—EWI will project beyond the existing wall face, so reveals may need extending.' },
                { title: 'Insulation Board Installation', desc: 'Boards are fixed mechanically and/or adhesively to the wall. Boards are butted tight with staggered joints. All penetrations, window reveals, and base tracks are detailed correctly to prevent cold bridges.' },
                { title: 'Reinforcement Mesh', desc: 'A fibreglass reinforcement mesh is embedded in a base coat render over the insulation boards. This provides impact resistance and prevents cracking in the subsequent render coat.' },
                { title: 'Finishing Render or Cladding', desc: 'Final coat applied—silicone thin-coat render, mineral render, or brick slips depending on the specification. Render is applied in the specified colour and texture. Expansion joints are positioned to prevent future cracking.' },
                { title: 'Completion & Documentation', desc: 'Full inspection and handover documentation. EWI systems typically come with 25-year manufacturer guarantees when installed by approved contractors. We provide all product documentation at handover.' },
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

            <h2 className="section-title" style={{ marginTop: '40px' }}>ECO4 Scheme — Can You Get EWI for Free?</h2>
            <p>ECO4 (Energy Company Obligation) is a UK government scheme that requires energy companies to fund insulation and energy efficiency improvements in eligible homes. You may qualify if:</p>
            <ul style={{ margin: '16px 0 16px 20px', lineHeight: '1.8' }}>
              <li>Your property has solid walls (typical of pre-1920 construction)</li>
              <li>Your EPC rating is D, E, F, or G</li>
              <li>You receive certain benefits (Universal Credit, Housing Benefit, Pension Credit, etc.)</li>
              <li>Or your household income falls below certain thresholds under LA Flex rules</li>
            </ul>
            <p>We can advise on eligibility during the survey. Eligibility doesn't guarantee funding — availability depends on energy company schemes active at the time. We'll give you a straight assessment, not false promises.</p>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'Will external wall insulation reduce my energy bills?', a: 'Yes. EWI typically reduces heat loss through solid walls by 60–70%, which can cut overall heating bills by 30–40% depending on your property, existing heating system, and usage patterns.' },
              { q: 'Do I need planning permission for external wall insulation?', a: 'Usually not. EWI generally falls under permitted development, provided the insulation thickness doesn\'t exceed 100mm beyond the original wall face. Properties in conservation areas may require planning permission.' },
              { q: 'What is the ECO4 scheme and am I eligible?', a: 'ECO4 (Energy Company Obligation) is a government scheme requiring energy companies to fund energy efficiency improvements in eligible homes. You may qualify if your property has solid walls, a low EPC rating (D, E, F, or G), and you meet certain income or benefit criteria.' },
              { q: 'How long does external wall insulation installation take?', a: 'A standard three-bedroom semi-detached property typically takes 5–8 working days for the full EWI installation, from preparation through to final render coat. Larger properties or those requiring extensive preparatory work (defective existing render, masonry repairs) may take longer. We provide a specific programme with your quote.' },
              { q: 'Will EWI change the appearance of my home?', a: 'Yes. EWI adds a new external finish—typically silicone render, mineral render, or brick slips—over the insulation board. Render colour and texture are chosen by you. For brick-slip finishes, we can match or complement the existing brickwork. The overall profile of the building increases by the thickness of the insulation and render system.' },
              { q: 'How much does external wall insulation cost in Essex?', a: 'For a typical three-bedroom semi-detached, EPS with silicone render usually costs between £8,000–£14,000 depending on property size and the system specified. If you are eligible for ECO4 funding, the cost to you may be significantly reduced or fully funded. We assess ECO4 eligibility as part of our free survey.' },
            ].map((faq, i) => (
              <div key={i} style={{ marginBottom: '24px', borderLeft: '4px solid #c9a84c', paddingLeft: '20px' }}>
                <h3 style={{ fontWeight: '700', marginBottom: '8px' }}>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}

            <h2 className="section-title" style={{ marginTop: '40px' }}>Areas We Cover</h2>
            <div className="areas-list" style={{ marginTop: '12px' }}>
              {['Romford', 'Hornchurch', 'Rainham', 'Upminster', 'Harold Wood', 'Elm Park', 'Collier Row', 'Barking & Dagenham', 'Redbridge'].map(area => (
                <span key={area} className="area-badge">{area}</span>
              ))}
            </div>
            <p style={{ marginTop: '24px' }}>For property managers, letting agents, and care homes, see our <Link to="/maintenance">Maintenance Services</Link>.</p>
            <div style={{ marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/roofing" className="area-badge" style={{ textDecoration: 'none' }}>Roofing</Link>
              <Link to="/extensions" className="area-badge" style={{ textDecoration: 'none' }}>Home Extensions</Link>
            </div>
          </div>
        </section>

        <CTABlock />
      </div>
    </>
  );
};

export default ExternalWallInsulationPage;

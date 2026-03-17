import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageLayout from '../PageLayout';
import CTABlock from '../CTABlock';
import '../ServicePage.css';

const LoftConversionsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do I need planning permission for a loft conversion in Havering?","acceptedAnswer":{"@type":"Answer","text":"Most loft conversions fall under permitted development and don't require planning permission, provided the additional volume doesn't exceed 40 cubic metres (terraced houses) or 50 cubic metres (detached and semi-detached). Rear dormers usually comply. Front dormers, mansard conversions, and works in conservation areas typically need planning permission. We assess this during your site survey."}},{"@type":"Question","name":"How long does a loft conversion take?","acceptedAnswer":{"@type":"Answer","text":"A typical dormer or hip-to-gable loft conversion takes 6–8 weeks from first day on site to completion. Velux conversions can be completed in 4–6 weeks. Mansard conversions take longer—typically 8–10 weeks. If planning permission is required, add 8 weeks before any work starts. Building Control inspections happen in stages throughout the build."}},{"@type":"Question","name":"Can I stay in my house during a loft conversion?","acceptedAnswer":{"@type":"Answer","text":"Yes. Most of the work happens in the loft and roof space. There will be noise, particularly during structural work and when installing the staircase. Dust barriers are installed to protect the rest of your house. The most disruptive phase is usually staircase installation, which may temporarily restrict access to upstairs rooms for 1–2 days."}},{"@type":"Question","name":"Will a loft conversion affect my home insurance?","acceptedAnswer":{"@type":"Answer","text":"Yes. You must inform your insurer that you're carrying out a loft conversion. During the works, you may need additional cover for the construction phase. Once complete, the loft conversion increases your property's rebuild value, so your buildings insurance premium may increase slightly. The Building Control completion certificate is usually required by insurers."}},{"@type":"Question","name":"Do I need to strengthen my existing floor joists?","acceptedAnswer":{"@type":"Answer","text":"In most cases, yes. Loft floors in older properties weren't designed to carry the live load of a habitable room (typically 150 kg/m²). A structural engineer will calculate whether existing joists are adequate or need supplementing with additional timbers or steel beams. This is covered in our structural design and included in the fixed-price quote."}},{"@type":"Question","name":"What about fire safety and escape routes?","acceptedAnswer":{"@type":"Answer","text":"Building Regulations require loft conversions to include fire-rated plasterboard, a protected escape route (the staircase), and smoke alarms on all floors. For loft conversions where the floor is more than 4.5 metres above ground level (typically third-storey conversions), an escape window or external fire escape may be required. We design and install all fire safety measures to meet Havering Building Control requirements."}},{"@type":"Question","name":"Can you include an en-suite bathroom in the loft?","acceptedAnswer":{"@type":"Answer","text":"Yes. We install loft bathrooms regularly. The main considerations are drainage (waste pipe routing to existing soil stack or new SVP), water pressure (may require a pump if mains pressure is low), and ventilation (mechanical extract to outside). We handle all plumbing, tiling, and waterproofing. Budget an additional £6,000–£12,000 for a basic en-suite."}},{"@type":"Question","name":"What happens to my energy bills after a loft conversion?","acceptedAnswer":{"@type":"Answer","text":"Properly insulated loft conversions should not significantly increase heating costs. We install insulation to current Building Regulations standards (typically 100mm PIR board between and below rafters). The loft becomes a heated, insulated room rather than a cold void that loses heat from the rooms below. Some clients see a small reduction in heating costs after conversion."}}]};

  return (
    <>
      <Helmet>
        <title>Loft Conversions Romford | Loft Conversion Havering, Essex</title>
        <meta name="description" content="Professional loft conversions in Romford & Havering. Dormer, hip-to-gable, Velux & mansard. CIS-registered. Call 0203 576 5962 for free survey." />
        <link rel="canonical" href="https://fallowbuildingservices.co.uk/loft-conversions" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <PageLayout heroTitle="Loft Conversions in Romford & Havering" heroSubtitle="Professional dormer, hip-to-gable, Velux & mansard loft conversions. CIS-registered, fully insured.">

        <section className="service-benefits">
          <div className="service-container">
            <h2 className="section-title">Overview</h2>
            <p>A loft conversion creates usable living space from an empty roof void—typically adding a bedroom, home office, or additional bathroom without extending your property's footprint. Across Havering's 1930s and post-war housing stock, most loft conversions fall under permitted development rights, avoiding the need for planning permission.</p>
            <p style={{ marginTop: '16px' }}>Fallow Building Services manages the full process: structural survey, design and engineer coordination, Building Control compliance, all construction trades, staircase installation, and final decoration. Our team provides one dedicated point of contact from initial assessment through to 12-month defect liability sign-off.</p>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Types of Loft Conversions We Offer</h2>
            <div className="benefits-grid">
              {[
                { title: 'Dormer Loft Conversion', desc: 'The most common loft conversion type in Havering. A dormer extends vertically from the roof slope, creating headroom and usable floor area. Rear dormers typically stay within permitted development limits. Front dormers usually require planning permission. We handle full structural design, steelwork installation, weatherproofing, and internal finishing.' },
                { title: 'Hip-to-Gable Conversion', desc: 'Standard on 1930s semi-detached properties common across Romford and Hornchurch. The sloping hip end of the roof is rebuilt as a vertical gable wall, creating significantly more internal space. Often combined with a rear dormer. This approach maximises loft area and usually falls under permitted development for semi-detached and detached houses.' },
                { title: 'Velux / Roof Light Conversion', desc: 'The simplest and most cost-effective option. Velux windows are installed in the existing roof slope without altering the roofline. Suitable where existing headroom is adequate and you don\'t need maximum floor area. Ideal for home offices or guest bedrooms. Requires Building Control sign-off but rarely needs planning permission.' },
                { title: 'Mansard Conversion', desc: 'A mansard involves replacing one or both roof slopes with near-vertical walls and a flat roof section. Creates maximum internal volume but almost always requires Havering Council planning permission due to the significant alteration to the roofline. More common in urban conservation areas or where property value justifies the additional cost.' },
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
                { title: 'Survey & Feasibility Assessment', desc: 'We visit your property to assess roof structure, headroom, staircase placement options, and whether existing foundations can support additional load. We identify any restrictions—conservation area status, Article 4 directions, or structural limitations—and confirm which loft conversion type is viable.' },
                { title: 'Design & Structural Calculations', desc: 'We produce measured drawings showing the proposed layout, window positions, staircase location, and any steelwork required. A structural engineer provides calculations for steel beams, floor joists, and load distribution.' },
                { title: 'Planning & Building Control', desc: 'Most loft conversions in Havering fall under permitted development. Where planning is needed—front dormers, properties in conservation areas—we prepare and submit the application. All loft conversions require Building Control approval. We coordinate all inspections.' },
                { title: 'Preparation & Protection', desc: 'We protect your property with dust barriers and floor coverings. Scaffolding is erected where required. We strip the existing roof covering in the work area and remove any old insulation.' },
                { title: 'Build', desc: 'We install structural steelwork and build the loft shell—new walls, roof structure, dormer or gable construction, and weatherproofing. Then: floor joists, staircase, first fix electrics/plumbing, insulation, plasterboarding, plastering, second fix, decoration, flooring. Payment stages: 25% commencement, 25% shell complete, 30% first fix, 20% completion.' },
                { title: 'Sign-Off & Defect Liability Period', desc: 'Havering Building Control conducts a final inspection and issues a completion certificate. We provide all certificates and documentation, plus a 12-month defect liability period covering all structural and finishing work.' },
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

            <h2 className="section-title" style={{ marginTop: '40px' }}>How Much Does a Loft Conversion Cost in Romford?</h2>
            <p>As a rough guide only—every project is priced following a free site survey—loft conversions typically range from £38,000 to £75,000 depending on type and specification. Velux conversions tend to sit at the lower end (£38,000–£48,000). Dormer and hip-to-gable conversions generally range from £45,000 to £62,000. Mansard conversions start around £60,000.</p>
            <ul style={{ margin: '16px 0 16px 20px', lineHeight: '1.8' }}>
              <li><strong>Loft conversion type:</strong> Velux conversions are simpler and cheaper than dormers.</li>
              <li><strong>Existing roof structure:</strong> Older properties with undersized roof timbers may require additional structural reinforcement.</li>
              <li><strong>Staircase placement:</strong> Complex staircase solutions add cost.</li>
              <li><strong>Bathroom inclusion:</strong> Adding an en-suite requires plumbing, drainage, ventilation, and waterproofing. Budget an additional £6,000–£12,000.</li>
              <li><strong>Specification and finishes:</strong> Bespoke windows, underfloor heating, and engineered oak flooring add cost.</li>
            </ul>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Why Choose Fallow Building Services</h2>
            <div className="benefits-grid">
              {[
                { title: 'Local to Havering and Essex', desc: 'Based in Rainham, operating across Havering, Barking & Dagenham, and East London. We know the local housing stock and Havering Council\'s Building Control expectations.' },
                { title: 'CIS-Registered', desc: 'Registered under the Construction Industry Scheme. All tax and compliance obligations met. A traceable, legitimate contractor.' },
                { title: 'Single Point of Contact', desc: 'One dedicated team member leads every loft conversion. One person responsible from survey to completion — no handoffs, no confusion.' },
                { title: '12-Month Defect Liability Period', desc: 'If anything goes wrong in the first year—cracking, leaks, poor finishes—we return and fix it at no additional cost.' },
                { title: 'Fully Insured', desc: 'Public liability and employers\' liability insurance. Insurance certificates provided on request.' },
                { title: 'Transparent Staged Payments', desc: 'An initial payment is made on signing the Commencement of Works agreement. The balance is staged: 25% at shell completion, 30% at first fix, 20% on completion.' },
              ].map((item, i) => (
                <div key={i} className="benefit-card">
                  <h3 className="benefit-title">{item.title}</h3>
                  <p className="benefit-description">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'Do I need planning permission for a loft conversion in Havering?', a: 'Most loft conversions fall under permitted development and don\'t require planning permission, provided the additional volume doesn\'t exceed 40 cubic metres (terraced houses) or 50 cubic metres (detached and semi-detached). Rear dormers usually comply. Front dormers, mansard conversions, and works in conservation areas typically need planning permission.' },
              { q: 'How long does a loft conversion take?', a: 'A typical dormer or hip-to-gable loft conversion takes 6–8 weeks from first day on site to completion. Velux conversions can be completed in 4–6 weeks. Mansard conversions take longer—typically 8–10 weeks. If planning permission is required, add 8 weeks before any work starts.' },
              { q: 'Can I stay in my house during a loft conversion?', a: 'Yes. Most of the work happens in the loft and roof space. Dust barriers are installed to protect the rest of your house. The most disruptive phase is staircase installation, which may temporarily restrict access to upstairs rooms for 1–2 days.' },
              { q: 'Will a loft conversion affect my home insurance?', a: 'Yes. You must inform your insurer that you\'re carrying out a loft conversion. Once complete, the loft conversion increases your property\'s rebuild value, so your buildings insurance premium may increase slightly. The Building Control completion certificate is usually required by insurers.' },
              { q: 'Do I need to strengthen my existing floor joists?', a: 'In most cases, yes. Loft floors in older properties weren\'t designed to carry the live load of a habitable room (typically 150 kg/m²). A structural engineer will calculate whether existing joists are adequate or need supplementing. This is included in the fixed-price quote.' },
              { q: 'What about fire safety and escape routes?', a: 'Building Regulations require fire-rated plasterboard, a protected escape route (the staircase), and smoke alarms on all floors. We design and install all fire safety measures to meet Havering Building Control requirements.' },
              { q: 'Can you include an en-suite bathroom in the loft?', a: 'Yes. We install loft bathrooms regularly. Budget an additional £6,000–£12,000 for a basic en-suite. We handle all plumbing, tiling, and waterproofing.' },
              { q: 'What happens to my energy bills after a loft conversion?', a: 'Properly insulated loft conversions should not significantly increase heating costs. We install insulation to current Building Regulations standards. Some clients see a small reduction in heating costs after conversion.' },
            ].map((faq, i) => (
              <div key={i} style={{ marginBottom: '24px', borderLeft: '4px solid #c9a84c', paddingLeft: '20px' }}>
                <h3 style={{ fontWeight: '700', marginBottom: '8px' }}>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}

            <h2 className="section-title" style={{ marginTop: '40px' }}>Areas We Cover</h2>
            <p>We work regularly across Romford, Hornchurch, Upminster, Rainham, Harold Wood, Emerson Park, Elm Park, Collier Row, and Gidea Park (RM1–RM14 postcodes). We also cover adjacent areas in Barking &amp; Dagenham and Redbridge.</p>
            <div className="areas-list" style={{ marginTop: '20px' }}>
              {['Romford', 'Hornchurch', 'Upminster', 'Rainham', 'Harold Wood', 'Emerson Park', 'Elm Park', 'Collier Row', 'Gidea Park', 'Barking & Dagenham', 'Redbridge'].map(area => (
                <span key={area} className="area-badge">{area}</span>
              ))}
            </div>
            <p style={{ marginTop: '24px' }}>For property managers, letting agents, and care homes, see our <Link to="/maintenance">Maintenance Services</Link>.</p>
            <div style={{ marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/extensions" className="area-badge" style={{ textDecoration: 'none' }}>Home Extensions</Link>
              <Link to="/bathroom-refurbishments" className="area-badge" style={{ textDecoration: 'none' }}>Bathroom Refurbishments</Link>
            </div>
          </div>
        </section>

        <CTABlock />
      </PageLayout>
    </>
  );
};

export default LoftConversionsPage;

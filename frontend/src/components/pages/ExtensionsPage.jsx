import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CTABlock from '../CTABlock';
import '../ServicePage.css';

const ExtensionsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do I need planning permission for a home extension in Havering?","acceptedAnswer":{"@type":"Answer","text":"Many single-storey rear extensions fall under permitted development and don't require planning permission, provided they stay within size limits (3 metres for terraced/semi-detached, 4 metres for detached). Double-storey extensions, side extensions wider than half the original house width, and extensions in conservation areas usually need full planning permission. We assess this during the site survey."}},{"@type":"Question","name":"How long does a typical extension take to build?","acceptedAnswer":{"@type":"Answer","text":"A single-storey rear extension typically takes 8–12 weeks from groundwork to completion. Double-storey extensions take 12–16 weeks. Planning approval (if required) adds 8 weeks to the timeline before any work starts. Building Control sign-off happens in stages throughout the build."}},{"@type":"Question","name":"Can I live in my house during the extension work?","acceptedAnswer":{"@type":"Answer","text":"Yes, in most cases. We seal off the work area with temporary barriers and maintain access to your existing rooms. There will be noise and some dust, particularly during demolition and groundwork phases. For double-storey extensions involving significant structural work to the existing house, you may want to arrange temporary accommodation for a few days during critical stages."}},{"@type":"Question","name":"What happens if you find a problem during the build?","acceptedAnswer":{"@type":"Answer","text":"If we encounter unexpected issues—poor ground conditions, hidden structural defects, or asbestos—we stop work, inform you immediately, and provide a written assessment of the additional work required and cost. No work proceeds without your approval. This is rare but does happen in older properties."}},{"@type":"Question","name":"Will my extension match my existing house?","acceptedAnswer":{"@type":"Answer","text":"We source matching bricks and roof tiles wherever possible. For 1930s Havering housing stock, we can usually find close or exact matches. Where exact matching isn't possible (e.g., discontinued brick types), we discuss options: contrasting materials that complement the existing property, or brick slips and render finishes that provide a cohesive look."}},{"@type":"Question","name":"Do you handle party wall agreements?","acceptedAnswer":{"@type":"Answer","text":"Yes. If your extension involves work on or near a shared boundary wall, the Party Wall Act applies. We explain your obligations, coordinate party wall surveyor appointments if required, and schedule work to minimise disruption to neighbours. Party wall disputes are rare when the process is followed correctly."}},{"@type":"Question","name":"What guarantees do I get?","acceptedAnswer":{"@type":"Answer","text":"All structural work is covered by our 12-month defect liability period. Building Control sign-off provides independent verification that work meets Building Regulations. For specific products (windows, boilers, waterproofing membranes), manufacturers' guarantees apply—we provide all documentation at handover."}},{"@type":"Question","name":"Can you help with interior design and finishes?","acceptedAnswer":{"@type":"Answer","text":"We're builders, not interior designers, but we'll guide you through practical finish choices—flooring types, kitchen layouts, lighting positions—and we can recommend trusted kitchen fitters, electricians, and decorators if you want specialist input. All core building work, first and second fix, plastering, and basic decoration is included in our quote."}}]};

  return (
    <>
      <Helmet>
        <title>Home Extensions Havering | House Extensions Romford, Essex</title>
        <meta name="description" content="Quality home extensions across Havering. Single & double-storey, side returns, wraparounds. CIS-registered, fully insured. Call 0203 576 5962 for free survey." />
        <link rel="canonical" href="https://fallowbuildingservices.co.uk/extensions" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="service-page">
        <section className="service-hero" style={{ background: 'linear-gradient(135deg, #0a1628 60%, #1a2e50)', minHeight: '40vh', display: 'flex', alignItems: 'center' }}>
          <div className="service-hero-content" style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <h1 className="service-hero-title">Home Extensions in Havering &amp; Romford</h1>
          </div>
        </section>

        <section className="service-benefits">
          <div className="service-container">
            <h2 className="section-title">Overview</h2>
            <p>A well-planned extension adds space and value without the disruption of moving. Whether you need a larger kitchen, ground-floor bedroom, or extra living space, Fallow Building Services manages the full process—from initial survey and structural calculations through Havering Council planning and Building Control sign-off to final handover.</p>
            <p style={{ marginTop: '16px' }}>We work across Romford, Hornchurch, Rainham, and the wider Havering borough, primarily with 1930s semi-detached and inter-war housing stock where permitted development rights often apply. Every project has a dedicated point of contact throughout — someone who knows your build, not a rotating account manager. No subcontractor lottery. No surprise costs.</p>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Types of Home Extensions We Offer</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3 className="benefit-title">Single-Storey Rear Extension</h3>
                <p className="benefit-description">The most common extension type across Havering. Typically used to enlarge kitchens or create open-plan kitchen-diners. Under permitted development, detached houses can extend up to 4 metres; semi-detached and terraced properties up to 3 metres. We handle structural steelwork, foundations, full building envelope, and internal finishes.</p>
              </div>
              <div className="benefit-card">
                <h3 className="benefit-title">Double-Storey Extension</h3>
                <p className="benefit-description">Adds space on both ground and first floors—often a kitchen extension below and an additional bedroom or bathroom above. Requires full structural design and usually falls outside permitted development limits, meaning Havering Council planning permission is needed. We coordinate structural engineers, submit applications, and manage the full build.</p>
              </div>
              <div className="benefit-card">
                <h3 className="benefit-title">Side Return Extension</h3>
                <p className="benefit-description">Common in Victorian and Edwardian terraces, particularly in the Harold Hill and Gidea Park areas. Infills the narrow side passage to widen ground-floor living space. Most side returns stay within permitted development thresholds. We manage party wall agreements where applicable and integrate new roofing with existing structures.</p>
              </div>
              <div className="benefit-card">
                <h3 className="benefit-title">Wraparound Extension</h3>
                <p className="benefit-description">Combines rear and side extensions to maximise ground-floor space. Popular in corner plots and larger semi-detached properties. Almost always requires planning permission due to scale. We handle design, planning submission, and coordination of all trades from groundwork to final decoration.</p>
              </div>
              <div className="benefit-card">
                <h3 className="benefit-title">Over-Structure Extension</h3>
                <p className="benefit-description">Building above an existing flat-roof extension, garage, or single-storey element. Often used to add a bedroom or home office without increasing ground-floor footprint. Requires structural assessment of existing foundations and walls. We provide full structural calculations and work with Havering Building Control throughout.</p>
              </div>
            </div>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Our Process</h2>
            <div className="process-timeline">
              {[
                { title: 'Survey & Consultation', desc: 'We visit your property for a no-obligation site survey. We measure the space, assess access, discuss what you want to achieve, and identify any planning or structural considerations. You\'ll receive initial budget guidance before any commitment.' },
                { title: 'Design & Structural Calculations', desc: 'We produce measured drawings and coordinate structural engineer input where steelwork or foundation design is required. You\'ll see exactly what the finished extension will look like and how it integrates with your existing property.' },
                { title: 'Planning & Building Control', desc: 'If your project requires Havering Council planning permission, we prepare and submit the application. For permitted development works, we submit a Building Notice or Full Plans application to Building Control. We handle all council liaison and respond to any queries.' },
                { title: 'Groundwork & Preparation', desc: 'Once approvals are in place, we excavate foundations, pour concrete, and install drainage connections. All groundwork is inspected and signed off by Building Control before we proceed. We protect your existing property and maintain site safety throughout.' },
                { title: 'Build', desc: 'We construct the extension shell—brickwork, blockwork, roof structure, windows and doors. Then we move inside: first fix electrics and plumbing, insulation, plasterboarding, plastering, second fix, decoration, flooring. Progress payments are staged: 25% on commencement, 25% at roof stage, 30% at first fix, 20% on completion.' },
                { title: 'Sign-Off & Defect Liability Period', desc: 'Havering Building Control inspects and issues a completion certificate. We hand over all documentation and provide a 12-month defect liability period. If anything needs adjustment during that year, we return and put it right at no additional cost.' },
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

            <h2 className="section-title" style={{ marginTop: '40px' }}>How Much Does a Home Extension Cost in Havering?</h2>
            <p>As a rough guide only—every project is priced following a free site survey—single-storey rear extensions typically range from £28,000 to £55,000 depending on size and specification. Double-storey extensions generally start around £55,000 and can reach £95,000 or more for larger, high-spec builds.</p>
            <ul style={{ margin: '16px 0 16px 20px', lineHeight: '1.8' }}>
              <li><strong>Size and type:</strong> A 3-metre single-storey costs significantly less than a 4-metre wraparound or double-storey structure.</li>
              <li><strong>Structural requirements:</strong> Complex steelwork, underpinning, or building over existing drains increases engineering and groundwork costs.</li>
              <li><strong>Specification:</strong> Standard uPVC windows and laminate flooring cost less than bi-fold doors, underfloor heating, and bespoke joinery.</li>
              <li><strong>Planning and access:</strong> Restricted access requiring smaller machinery or hand-digging increases labour time. Planning permission adds council fees and potential design amendments.</li>
              <li><strong>Existing property condition:</strong> Older properties may require additional work to tie in new and old structures, especially where foundation levels differ or roof pitches don't align simply.</li>
            </ul>
            <p>We provide a fixed-price quote after survey. No hourly rates. No provisional sums on core construction work. You know what you're paying before work starts.</p>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Why Choose Fallow Building Services</h2>
            <div className="benefits-grid">
              {[
                { title: 'Local to Havering and Essex', desc: 'We\'re based in Rainham and work exclusively across Havering, Barking & Dagenham, and East London. We know Havering Council\'s planning requirements, local Building Control inspectors, and the housing stock. We\'re not a borough-hopping franchise.' },
                { title: 'CIS-Registered', desc: 'Fallow Building Services is registered under the Construction Industry Scheme. All tax and compliance obligations are met. You\'re working with a legitimate, traceable contractor.' },
                { title: 'Single Point of Contact', desc: 'You won\'t be passed between estimators, project managers, and site supervisors. One dedicated person owns your job from survey to sign-off — someone who knows the detail of your project.' },
                { title: '12-Month Defect Liability Period', desc: 'If anything goes wrong in the first year after completion—cracking, leaks, poor finishes—we return and remedy it at no extra cost. This isn\'t a vague goodwill gesture. It\'s a written commitment.' },
                { title: 'Fully Insured', desc: 'We carry public liability and employers\' liability insurance. If something goes wrong on site, you\'re covered. We provide insurance certificates on request.' },
                { title: 'Transparent Staged Payments', desc: 'An initial payment is made on signing the Commencement of Works agreement. The balance is structured across milestones: 25% at first-floor or roof stage, 30% at first fix, and 20% on completion. You pay as work progresses.' },
              ].map((item, i) => (
                <div key={i} className="benefit-card">
                  <h3 className="benefit-title">{item.title}</h3>
                  <p className="benefit-description">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'Do I need planning permission for a home extension in Havering?', a: 'Many single-storey rear extensions fall under permitted development and don\'t require planning permission, provided they stay within size limits (3 metres for terraced/semi-detached, 4 metres for detached). Double-storey extensions, side extensions wider than half the original house width, and extensions in conservation areas usually need full planning permission. We assess this during the site survey.' },
              { q: 'How long does a typical extension take to build?', a: 'A single-storey rear extension typically takes 8–12 weeks from groundwork to completion. Double-storey extensions take 12–16 weeks. Planning approval (if required) adds 8 weeks to the timeline before any work starts. Building Control sign-off happens in stages throughout the build.' },
              { q: 'Can I live in my house during the extension work?', a: 'Yes, in most cases. We seal off the work area with temporary barriers and maintain access to your existing rooms. There will be noise and some dust, particularly during demolition and groundwork phases.' },
              { q: 'What happens if you find a problem during the build?', a: 'If we encounter unexpected issues—poor ground conditions, hidden structural defects, or asbestos—we stop work, inform you immediately, and provide a written assessment of the additional work required and cost. No work proceeds without your approval.' },
              { q: 'Will my extension match my existing house?', a: 'We source matching bricks and roof tiles wherever possible. For 1930s Havering housing stock, we can usually find close or exact matches.' },
              { q: 'Do you handle party wall agreements?', a: 'Yes. If your extension involves work on or near a shared boundary wall, the Party Wall Act applies. We explain your obligations, coordinate party wall surveyor appointments if required, and schedule work to minimise disruption to neighbours.' },
              { q: 'What guarantees do I get?', a: 'All structural work is covered by our 12-month defect liability period. Building Control sign-off provides independent verification that work meets Building Regulations. For specific products (windows, boilers, waterproofing membranes), manufacturers\' guarantees apply—we provide all documentation at handover.' },
              { q: 'Can you help with interior design and finishes?', a: 'We\'re builders, not interior designers, but we\'ll guide you through practical finish choices—flooring types, kitchen layouts, lighting positions—and we can recommend trusted kitchen fitters, electricians, and decorators if you want specialist input.' },
            ].map((faq, i) => (
              <div key={i} style={{ marginBottom: '24px', borderLeft: '4px solid #c9a84c', paddingLeft: '20px' }}>
                <h3 style={{ fontWeight: '700', marginBottom: '8px' }}>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}

            <h2 className="section-title" style={{ marginTop: '40px' }}>Areas We Cover</h2>
            <p>Fallow Building Services operates across the London Borough of Havering and surrounding areas in Essex and East London. Our core service area includes Romford, Hornchurch, Upminster, Rainham, Harold Wood, Emerson Park, Elm Park, Collier Row, and Gidea Park. We also cover adjacent areas in Barking &amp; Dagenham and Redbridge.</p>

            <div className="areas-list" style={{ marginTop: '20px' }}>
              {['Romford', 'Hornchurch', 'Upminster', 'Rainham', 'Harold Wood', 'Emerson Park', 'Elm Park', 'Collier Row', 'Gidea Park', 'Barking & Dagenham', 'Redbridge'].map(area => (
                <span key={area} className="area-badge">{area}</span>
              ))}
            </div>

            <p style={{ marginTop: '24px' }}>For property managers, letting agents, and care homes, see our <Link to="/maintenance">Maintenance Services</Link>.</p>

            <div style={{ marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/loft-conversions" className="area-badge" style={{ textDecoration: 'none' }}>Loft Conversions</Link>
              <Link to="/bathroom-refurbishments" className="area-badge" style={{ textDecoration: 'none' }}>Bathroom Refurbishments</Link>
            </div>
          </div>
        </section>

        <CTABlock />
      </div>
    </>
  );
};

export default ExtensionsPage;

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CTABlock from '../CTABlock';
import '../ServicePage.css';

const RoofingPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How quickly can you attend for emergency roof repairs?","acceptedAnswer":{"@type":"Answer","text":"For clients in our core Havering service area (Romford, Hornchurch, Rainham, Upminster), we aim to attend emergency call-outs the same day or next working day depending on availability and weather conditions."}},{"@type":"Question","name":"How long does a full roof replacement take?","acceptedAnswer":{"@type":"Answer","text":"A typical three-bedroom semi-detached house re-roof takes 5–7 working days from strip-off to completion, weather permitting. Flat roof replacements on single-storey extensions take 2–3 days."}},{"@type":"Question","name":"Do you handle insurance claims for storm or fire damage?","acceptedAnswer":{"@type":"Answer","text":"Yes. We provide detailed written reports, photographs, and quotes in the format required by insurance companies. We can liaise directly with loss adjusters and insurers if you authorise us to do so."}}]};

  return (
    <>
      <Helmet>
        <title>Roofing Contractors Havering | Roofers Romford, Essex</title>
        <meta name="description" content="Professional roofing services in Havering & Romford. Pitched & flat roofs, repairs, EPDM, GRP, fascias. Emergency call-out. Call 0203 576 5962." />
        <link rel="canonical" href="https://fallowbuildingservices.co.uk/roofing" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="service-page">
        <section className="service-hero" style={{ background: 'linear-gradient(135deg, #0a1628 60%, #1a2e50)', minHeight: '40vh', display: 'flex', alignItems: 'center' }}>
          <div className="service-hero-content" style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <h1 className="service-hero-title">Roofing Contractors in Havering &amp; Romford</h1>
          </div>
        </section>

        <section className="service-benefits">
          <div className="service-container">
            <h2 className="section-title">Overview</h2>
            <p>Fallow Building Services provides pitched and flat roofing across Havering and Essex. From emergency repairs and storm damage to full re-roofs and flat roof replacements, we carry out all work directly—no subcontracted roofers. All work is carried out to current British Standards with full materials documentation provided at completion.</p>
            <p style={{ marginTop: '16px' }}>Emergency call-out available for urgent leaks and storm damage in our core Havering service area. We attend, assess, provide a written quote, and if instructed, carry out temporary or permanent repairs the same day or next working day.</p>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Roofing Services</h2>
            <div className="benefits-grid">
              {[
                { title: 'Pitched Roof Re-Roofing', desc: 'Full strip of existing tiles or slates, inspection and repair of roof structure, new felt/batten installation, new tile or slate covering. Havering\'s 1930s housing stock typically uses clay or concrete interlocking tiles. We source matching or complementary tiles where partial re-roofing is required.' },
                { title: 'Flat Roof Replacement', desc: 'Replacement of flat roofs on extensions, outbuildings, and bay windows. We install EPDM (rubber membrane), GRP (fibreglass), or torch-on felt systems depending on the application. EPDM and GRP carry 20-year+ manufacturer warranties when properly installed.' },
                { title: 'Roof Repairs', desc: 'Localised tile or slate replacement, ridge and hip tile repointing and rebedding, lead flashing renewal at abutments, chimney and parapet walls. We identify and repair the source of leaks—not just visible symptoms.' },
                { title: 'Fascias, Soffits & Guttering', desc: 'Replacement of timber fascias and soffits with uPVC. Guttering replacement and repair. Downpipe installation. All work in uPVC or aluminium for long-term performance and minimal maintenance. We clear existing gutters of debris before any guttering work.' },
                { title: 'Emergency Roof Repairs', desc: 'Urgent attendance for storm damage, active leaks, and fallen chimney stacks. We tarp and make safe in the short term where permanent repair cannot be completed immediately. Written report provided for insurance purposes.' },
                { title: 'Chimney Repairs', desc: 'Repointing, flaunching, lead flashing renewal, and chimney stack rebuilding. We assess structural integrity before any cosmetic work. Chimney removals and cap-offs also available where the chimney is no longer in use.' },
              ].map((item, i) => (
                <div key={i} className="benefit-card">
                  <h3 className="benefit-title">{item.title}</h3>
                  <p className="benefit-description">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="section-title" style={{ marginTop: '40px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'How quickly can you attend for emergency roof repairs?', a: 'For clients in our core Havering service area (Romford, Hornchurch, Rainham, Upminster), we aim to attend emergency call-outs the same day or next working day depending on availability and weather conditions.' },
              { q: 'How long does a full roof replacement take?', a: 'A typical three-bedroom semi-detached house re-roof takes 5–7 working days from strip-off to completion, weather permitting. Flat roof replacements on single-storey extensions take 2–3 days.' },
              { q: 'Do you handle insurance claims for storm or fire damage?', a: 'Yes. We provide detailed written reports, photographs, and quotes in the format required by insurance companies. We can liaise directly with loss adjusters and insurers if you authorise us to do so.' },
            ].map((faq, i) => (
              <div key={i} style={{ marginBottom: '24px', borderLeft: '4px solid #c9a84c', paddingLeft: '20px' }}>
                <h3 style={{ fontWeight: '700', marginBottom: '8px' }}>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}

            <h2 className="section-title" style={{ marginTop: '40px' }}>Areas We Cover</h2>
            <div className="areas-list" style={{ marginTop: '12px' }}>
              {['Romford', 'Hornchurch', 'Upminster', 'Rainham', 'Harold Wood', 'Elm Park', 'Collier Row', 'Gidea Park', 'Barking & Dagenham', 'Redbridge'].map(area => (
                <span key={area} className="area-badge">{area}</span>
              ))}
            </div>
            <p style={{ marginTop: '24px' }}>For property managers, letting agents, and care homes, see our <Link to="/maintenance">Maintenance Services</Link>.</p>
            <div style={{ marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/external-wall-insulation" className="area-badge" style={{ textDecoration: 'none' }}>External Wall Insulation</Link>
              <Link to="/extensions" className="area-badge" style={{ textDecoration: 'none' }}>Home Extensions</Link>
            </div>
          </div>
        </section>

        <CTABlock />
      </div>
    </>
  );
};

export default RoofingPage;

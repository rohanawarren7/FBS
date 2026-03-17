import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import './ServicePage.css';

const ServicePage = ({
  title,
  pageTitle,
  metaDescription,
  heroImage,
  description,
  benefits,
  process,
  keywords,
  h1,
  canonicalUrl
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Load Bark widget script
    const script = document.createElement('script');
    script.src = 'https://www.bark.com/assets/js/frontend-v2/widgets-v2.eab06aaee7c9d78cba9ae3ee88f0ad94.v2.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleGetQuote = () => {
    window.location.href = '/contact#enquiry-form';
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle || `${title} | Fallow Building Services`}</title>
        <meta name="description" content={metaDescription} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta property="og:title" content={pageTitle || `${title} | Fallow Building Services`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>

      <div className="service-page">
        {/* Hero Section */}
        <section className="service-hero">
          <div className="service-hero-background">
            <img src={heroImage} alt={title} className="service-hero-image" />
            <div className="service-hero-overlay"></div>
          </div>
          <div className="service-hero-content">
            <h1 className="service-hero-title">{h1 || title}</h1>
            <p className="service-hero-subtitle">{description}</p>
            <div className="service-hero-cta">
              <button onClick={handleGetQuote} className="btn-primary">
                GET A FREE QUOTE
              </button>
              <a href="tel:02035765962" className="btn-secondary">
                <Phone size={20} /> 0203 576 5962
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="service-benefits">
          <div className="service-container">
            <h2 className="section-title">WHY CHOOSE US FOR {title.toUpperCase()}</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <CheckCircle2 className="benefit-icon" size={32} />
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="service-process">
          <div className="service-container">
            <h2 className="section-title">OUR PROCESS</h2>
            <div className="process-timeline">
              {process.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="service-reviews">
          <div className="service-container">
            <h2 className="section-title">WHAT OUR CLIENTS SAY</h2>
            <div className="reviews-widget">
              <a 
                href='https://www.bark.com/en/gb/company/fallow-building-services/Gw6Nv/' 
                target='_blank' 
                rel='noopener noreferrer'
                className='bark-widget' 
                data-type='reviews' 
                data-id='Gw6Nv' 
                data-image='medium-navy' 
                data-version='3.0'
              >
                Fallow Building Services
              </a>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="service-areas-section">
          <div className="service-container">
            <h2 className="section-title">SERVICE AREAS</h2>
            <p className="service-areas-text">
              We provide {title.toLowerCase()} services across London, including:
            </p>
            <div className="areas-list">
              <span className="area-badge">Waltham Forest</span>
              <span className="area-badge">Redbridge</span>
              <span className="area-badge">Enfield</span>
              <span className="area-badge">Newham</span>
              <span className="area-badge">Barking & Dagenham</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="service-cta-section">
          <div className="service-container">
            <h2 className="cta-title">READY TO GET STARTED?</h2>
            <p className="cta-description">
              Contact us today for a free, no-obligation quote for your {title.toLowerCase()} project
            </p>
            <div className="cta-buttons">
              <button onClick={handleGetQuote} className="btn-primary-large">
                GET YOUR FREE QUOTE
              </button>
              <div className="cta-contact">
                <a href="tel:02035765962" className="contact-link">
                  <Phone size={20} /> 0203 576 5962
                </a>
                <a href="mailto:info@fallowbuildingservices.co.uk" className="contact-link">
                  <Mail size={20} /> info@fallowbuildingservices.co.uk
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicePage;
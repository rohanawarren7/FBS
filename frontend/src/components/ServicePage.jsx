import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  MapPin,
  Clock,
  Shield,
  Award,
  Menu,
  X,
  ChevronRight,
  Home,
  Building2,
  Wrench,
  Users,
  Sun,
  Moon
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';
import FAQComponent from './FAQComponent';
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
  canonicalUrl,
  faqs = [],
  serviceAreas = ['Romford', 'Hornchurch', 'Rainham', 'Upminster', 'Havering', 'Barking & Dagenham', 'Redbridge'],
  testimonials = []
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  const [benefitsRef, benefitsVisible] = useScrollAnimation(0.1);
  const [processRef, processVisible] = useScrollAnimation(0.1);
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation(0.1);

  const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Extensions', path: '/extensions', icon: Building2 },
    { name: 'Loft Conversions', path: '/loft-conversions', icon: Building2 },
    { name: 'Kitchens', path: '/services/kitchen-refurbishments', icon: Wrench },
    { name: 'Bathrooms', path: '/bathroom-refurbishments', icon: Wrench },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const menuVariants = {
    closed: { 
      x: "-100%",
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: { 
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGetQuote = () => {
    window.location.href = '/contact#enquiry-form';
  };

  // Generate FAQ schema if FAQs are provided
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
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
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <div className="service-page">
        {/* Side Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="menu-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Side Menu Panel */}
              <motion.div
                className="side-menu"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="side-menu-header">
                  <img 
                    src="/images/logo-nav.png" 
                    alt="Fallow Building Services" 
                    className="side-menu-logo"
                  />
                  <button 
                    className="menu-close-btn"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="side-menu-nav">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link 
                          to={item.path} 
                          className="side-menu-link"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Icon size={20} />
                          <span>{item.name}</span>
                          <ChevronRight size={16} className="link-arrow" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="side-menu-footer">
                  <button onClick={toggleTheme} className="theme-toggle-btn">
                    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                  </button>
                  
                  <a href="tel:02035765962" className="side-menu-phone">
                    <Phone size={18} />
                    <span>0203 576 5962</span>
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Menu Toggle Button - Fixed */}
        <button
          className="page-menu-toggle"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
          <span>Menu</span>
        </button>

        {/* Hero Section */}
        <section className="service-hero" ref={heroRef}>
          <div className="service-hero-background">
            <motion.img 
              src={heroImage} 
              alt={title} 
              className="service-hero-image"
              initial={{ scale: 1.1 }}
              animate={heroVisible ? { scale: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="service-hero-overlay"></div>
          </div>
          <div className="service-hero-content">
            <motion.span 
              className="service-hero-tag"
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Expert {title} Services
            </motion.span>
            
            <motion.h1 
              className="service-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {h1 || title}
            </motion.h1>
            
            <motion.p 
              className="service-hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="service-hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button 
                onClick={handleGetQuote} 
                className="btn-primary hero-btn"
                whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(201, 168, 76, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={20} />
                Get a Free Quote
              </motion.button>
              
              <motion.a 
                href="tel:02035765962" 
                className="btn-secondary hero-btn-secondary"
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={20} />
                0203 576 5962
              </motion.a>
            </motion.div>

            {/* Quick Info Bar */}
            <motion.div 
              className="hero-quick-info"
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="quick-info-item">
                <MapPin size={16} />
                <span>Havering & Essex</span>
              </div>
              <div className="quick-info-divider" />
              <div className="quick-info-item">
                <Clock size={16} />
                <span>150+ Projects Delivered</span>
              </div>
              <div className="quick-info-divider" />
              <div className="quick-info-item">
                <Shield size={16} />
                <span>Fully Insured</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="service-benefits" ref={benefitsRef}>
          <div className="service-container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="section-subtitle">Why Choose Us</span>
              <h2 className="section-title">The Fallow Building Services Difference</h2>
              <p className="section-description">
                When you choose us for your {title.toLowerCase()} project, you're partnering with a team 
                that brings expertise, reliability, and exceptional craftsmanship to every job.
              </p>
            </motion.div>

            <motion.div 
              className="benefits-grid-modern"
              variants={containerVariants}
              initial="hidden"
              animate={benefitsVisible ? "visible" : "hidden"}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="benefit-card-modern"
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="benefit-card-image">
                    {benefit.image ? (
                      <img src={benefit.image} alt={benefit.title} />
                    ) : (
                      <div className="benefit-image-placeholder">
                        <Award size={48} />
                      </div>
                    )}
                    <div className="benefit-image-overlay" />
                  </div>
                  
                  <div className="benefit-card-content">
                    <div className="benefit-icon-wrapper">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section - Visual Timeline */}
        <section className="service-process" ref={processRef}>
          <div className="service-container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              animate={processVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="section-subtitle">Our Process</span>
              <h2 className="section-title">How We Work</h2>
              <p className="section-description">
                A clear, transparent process from initial consultation to project completion.
              </p>
            </motion.div>

            <motion.div 
              className="process-timeline-modern"
              initial={{ opacity: 0 }}
              animate={processVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Timeline Line */}
              <div className="timeline-line">
                <motion.div 
                  className="timeline-progress"
                  initial={{ scaleX: 0 }}
                  animate={processVisible ? { scaleX: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                />
              </div>

              {/* Process Steps */}
              <div className="process-steps">
                {process.map((step, index) => (
                  <motion.div 
                    key={index}
                    className={`process-step-modern ${activeStep === index ? 'active' : ''}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={processVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    onClick={() => setActiveStep(index)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="step-indicator">
                      <motion.div 
                        className="step-number-modern"
                        animate={activeStep === index ? { 
                          backgroundColor: "var(--brand-gold)",
                          color: "var(--brand-navy)"
                        } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        {index + 1}
                      </motion.div>
                      {index < process.length - 1 && (
                        <div className="step-connector" />
                      )}
                    </div>
                    
                    <motion.div 
                      className="step-card"
                      animate={activeStep === index ? { 
                        borderColor: "var(--brand-gold)",
                        boxShadow: "0 8px 30px rgba(201, 168, 76, 0.15)"
                      } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-description">{step.description}</p>
                      
                      {step.duration && (
                        <div className="step-meta">
                          <Clock size={14} />
                          <span>{step.duration}</span>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="service-testimonials" ref={testimonialsRef}>
          <div className="service-container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="section-subtitle">Testimonials</span>
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-description">
                Real feedback from homeowners who've trusted us with their {title.toLowerCase()} projects.
              </p>
            </motion.div>

            {testimonials.length > 0 ? (
              <motion.div 
                className="testimonials-grid-service"
                variants={containerVariants}
                initial="hidden"
                animate={testimonialsVisible ? "visible" : "hidden"}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={index}
                    className="testimonial-card-service"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-author">
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.location}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="testimonials-placeholder"
                initial={{ opacity: 0 }}
                animate={testimonialsVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p>Client testimonials for this service will be added soon.</p>
                <a 
                  href="https://www.bark.com/en/gb/company/fallow-building-services/Gw6Nv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bark-link"
                >
                  View our Bark reviews
                </a>
              </motion.div>
            )}
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="service-areas-section">
          <div className="service-container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-subtitle">Service Areas</span>
              <h2 className="section-title">Where We Work</h2>
              <p className="section-description">
                We provide {title.toLowerCase()} services throughout Havering, Essex and surrounding areas.
              </p>
            </motion.div>

            <motion.div 
              className="service-areas-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {serviceAreas.map((area, index) => (
                <motion.div 
                  key={index}
                  className="service-area-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ y: -4, borderColor: "var(--brand-gold)" }}
                >
                  <MapPin size={18} />
                  <span>{area}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="service-faqs">
            <div className="service-container">
              <motion.div 
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="section-subtitle">FAQ</span>
                <h2 className="section-title">Common Questions</h2>
                <p className="section-description">
                  Find answers to frequently asked questions about our {title.toLowerCase()} services.
                </p>
              </motion.div>

              <FAQComponent faqs={faqs} />
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="service-cta-section">
          <div className="service-container">
            <motion.div 
              className="cta-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-description">
                Get in touch today for a free, no-obligation quote. We'll discuss your 
                requirements and provide expert guidance on your {title.toLowerCase()} project.
              </p>
              
              <div className="cta-options">
                <motion.button 
                  onClick={handleGetQuote}
                  className="cta-primary-btn"
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(201, 168, 76, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={20} />
                  Get Your Free Quote
                </motion.button>

                <div className="cta-divider">
                  <span>or</span>
                </div>

                <div className="cta-secondary-options">
                  <motion.a 
                    href="tel:02035765962"
                    className="cta-option"
                    whileHover={{ y: -2 }}
                  >
                    <Phone size={18} />
                    <div>
                      <span className="option-label">Call us</span>
                      <span className="option-value">0203 576 5962</span>
                    </div>
                  </motion.a>

                  <motion.a 
                    href="https://wa.me/+447459627464"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-option"
                    whileHover={{ y: -2 }}
                  >
                    <MessageCircle size={18} />
                    <div>
                      <span className="option-label">WhatsApp</span>
                      <span className="option-value">Send message</span>
                    </div>
                  </motion.a>

                  <motion.a 
                    href="mailto:info@fallowbuildingservices.co.uk"
                    className="cta-option"
                    whileHover={{ y: -2 }}
                  >
                    <Mail size={18} />
                    <div>
                      <span className="option-label">Email</span>
                      <span className="option-value">Send enquiry</span>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicePage;
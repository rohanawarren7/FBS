import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, FileText, Clock, Shield, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './CTABlock.css';

const CTABlock = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us Now",
      description: "Speak directly with our team",
      action: "0203 576 5962",
      href: "tel:02035765962",
      primary: true,
      badge: "Fastest Response"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Message us anytime",
      action: "Send Message",
      href: "https://wa.me/+447459627464",
      external: true,
      primary: false
    },
    {
      icon: FileText,
      title: "Enquiry Form",
      description: "Tell us about your project",
      action: "Get Started",
      href: "/contact#enquiry-form",
      primary: false
    }
  ];

  const benefits = [
    { icon: Clock, text: "Free site survey within 48 hours" },
    { icon: Shield, text: "No obligation quotes" },
    { icon: Award, text: "15+ years of expertise" }
  ];

  return (
    <section className="cta-section" ref={ref}>
      <div className="cta-background-pattern" />
      
      <div className="cta-container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <span className="cta-subtitle">Get Started Today</span>
          <h2 className="cta-title">Ready to Transform Your Home?</h2>
          <p className="cta-description">
            Take the first step towards your dream project. Our team is ready to 
            discuss your ideas and provide a free, no-obligation quote.
          </p>

          {/* Contact Methods */}
          <div className="cta-methods">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className={`cta-method ${method.primary ? 'cta-method-primary' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  whileHover={{ 
                    y: -4,
                    boxShadow: method.primary 
                      ? "0 12px 40px rgba(201, 168, 76, 0.4)" 
                      : "0 8px 30px rgba(0, 0, 0, 0.15)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {method.badge && (
                    <span className="method-badge">{method.badge}</span>
                  )}
                  
                  <div className={`method-icon ${method.primary ? 'method-icon-primary' : ''}`}>
                    <Icon size={28} />
                  </div>
                  
                  <h3 className="method-title">{method.title}</h3>
                  <p className="method-description">{method.description}</p>
                  
                  <span className={`method-action ${method.primary ? 'method-action-primary' : ''}`}>
                    {method.action}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Benefits */}
          <motion.div 
            className="cta-benefits"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="cta-benefit">
                  <Icon size={18} />
                  <span>{benefit.text}</span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABlock;

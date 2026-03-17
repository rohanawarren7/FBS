import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Star, Award, Users, Clock } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const [counters, setCounters] = useState({ years: 0, projects: 0, rating: 0 });

  useEffect(() => {
    // Animate counters on mount
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCounters({
        years: Math.round(15 * easeOutQuart),
        projects: Math.round(500 * easeOutQuart),
        rating: parseFloat((4.9 * easeOutQuart).toFixed(1))
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handleGetQuote = () => {
    window.location.href = '/contact#enquiry-form';
  };

  // Split headline into words for staggered animation
  const headlineWords = "Building excellence across Havering & Essex".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const stats = [
    { icon: Clock, value: counters.years, suffix: '+', label: 'Years Experience' },
    { icon: Users, value: counters.projects, suffix: '+', label: 'Projects Completed' },
    { icon: Star, value: counters.rating, suffix: '/5', label: 'Bark Rating' }
  ];

  return (
    <section className="hero-section">
      {/* Background with Parallax Effect */}
      <div className="hero-background">
        <motion.img 
          src="/images/hero-construction.jpg"
          alt="Building contractor working in Havering, Essex"
          className="hero-image"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="hero-overlay"></div>
        {/* Animated gradient overlay */}
        <motion.div 
          className="hero-gradient-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      
      <div className="hero-content">
        {/* Logo with reveal animation */}
        <motion.div 
          className="hero-logo"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="/images/logo-large.png"
            alt="Fallow Building Services" 
            className="logo-image"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        </motion.div>
        
        {/* Staggered headline animation */}
        <motion.h1 
          className="hero-title"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              className="hero-word"
              variants={wordVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        {/* Description with fade in */}
        <motion.p 
          className="hero-description"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          Expert construction and property management services for residential 
          and commercial projects across Havering and Essex
        </motion.p>
        
        {/* CTA Buttons with magnetic hover effect */}
        <motion.div 
          className="hero-cta"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <motion.button 
            onClick={handleGetQuote} 
            className="btn-primary hero-btn-primary"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 8px 30px rgba(201, 168, 76, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Phone size={20} />
            <span>Get a Free Quote</span>
          </motion.button>
          
          <motion.a 
            href="https://wa.me/+447459627464" 
            className="btn-secondary hero-btn-secondary"
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.03,
              backgroundColor: "rgba(255, 255, 255, 0.15)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <MessageCircle size={20} />
            <span>WhatsApp Us</span>
          </motion.a>
        </motion.div>

        {/* Trust Signals Bar */}
        <motion.div 
          className="trust-signals"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="trust-signals-grid">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index}
                  className="trust-signal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="trust-signal-icon">
                    <Icon size={24} />
                  </div>
                  <div className="trust-signal-content">
                    <span className="trust-signal-value">
                      {stat.value}{stat.suffix}
                    </span>
                    <span className="trust-signal-label">{stat.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trust badges row */}
          <motion.div 
            className="trust-badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <div className="trust-badge">
              <Award size={16} />
              <span>CIS Registered</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-badge">
              <Star size={16} />
              <span>Fully Insured</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-badge">
              <Users size={16} />
              <span>Local Experts</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          className="scroll-mouse"
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="scroll-wheel" />
        </motion.div>
        <span className="scroll-text">Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;

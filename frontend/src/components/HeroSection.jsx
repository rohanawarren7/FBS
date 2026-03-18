import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MessageCircle, 
  Star, 
  Award, 
  Users, 
  Clock,
  Menu,
  X,
  ChevronRight,
  Home,
  Building2,
  Wrench,
  Mail,
  Sun,
  Moon,
  Heart
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import './HeroSection.css';

const HeroSection = () => {
  const [counters, setCounters] = useState({ years: 0, clients: 0, rating: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCounters({
        years: 150,
        clients: Math.round(100 * easeOutQuart),
        rating: Math.round(5 * easeOutQuart)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handleGetQuote = () => {
    window.location.href = '/contact#enquiry-form';
  };

  const h1Text = "Building Contractors in Havering & Essex";
  const subheadingText = "Building excellence across Havering & Essex";

  const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Extensions', path: '/extensions', icon: Building2 },
    { name: 'Loft Conversions', path: '/loft-conversions', icon: Building2 },
    { name: 'Kitchens', path: '/kitchen-refurbishments', icon: Wrench },
    { name: 'Bathrooms', path: '/bathroom-refurbishments', icon: Wrench },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

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

  const stats = [
    { icon: Clock, value: 150, suffix: '+', label: 'Projects Delivered' },
    { icon: Heart, value: counters.clients, suffix: '+', label: 'Happy Clients' },
    { icon: Star, value: counters.rating, suffix: '/5', label: 'Star Rating' }
  ];

  return (
    <section className="hero-section-with-menu">
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

      {/* Menu Toggle Button - Fixed on Hero */}
      <button
        className="hero-menu-toggle"
        onClick={() => setIsMenuOpen(true)}
      >
        <Menu size={24} />
        <span>Menu</span>
      </button>

      {/* Background */}
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
        <motion.div 
          className="hero-gradient-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      
      <div className="hero-content">
        {/* Logo */}
        <motion.div 
          className="hero-logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src="/images/logo-large.png"
            alt="Fallow Building Services" 
            className="logo-image"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        </motion.div>
        
        {/* Headline */}
        <motion.h1 
          className="hero-title"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {h1Text.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="hero-word"
              variants={wordVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        {/* Subheading */}
        <motion.p 
          className="hero-subheading"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          {subheadingText}
        </motion.p>
        
        {/* Description */}
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
        
        {/* CTA Buttons */}
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

        {/* Trust Signals */}
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

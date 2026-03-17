import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu,
  X,
  ChevronRight,
  Home,
  Building2,
  Wrench,
  Users,
  Mail,
  Phone,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import './PageLayout.css';

const PageLayout = ({ children, heroTitle, heroSubtitle, heroImage = '/images/hero-construction.jpg' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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

  return (
    <div className="page-layout">
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
      <motion.button
        className="page-menu-toggle"
        onClick={() => setIsMenuOpen(true)}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu size={24} />
        <span>Menu</span>
      </motion.button>

      {/* Page Hero Section */}
      <section className="page-hero">
        <div className="page-hero-background">
          <img 
            src={heroImage}
            alt={heroTitle}
            className="page-hero-image"
          />
          <div className="page-hero-overlay"></div>
        </div>
        
        <div className="page-hero-content">
          <h1 className="page-hero-title">{heroTitle}</h1>
          {heroSubtitle && (
            <p className="page-hero-subtitle">{heroSubtitle}</p>
          )}
        </div>
      </section>

      {/* Page Content */}
      <div className="page-content">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;

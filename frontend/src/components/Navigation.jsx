import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useScrolled, useScrollProgress } from '../hooks/useScrollAnimation';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Phone,
  Home,
  Building2,
  Wrench,
  Users,
  Mail
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBuildingOpen, setIsBuildingOpen] = useState(false);
  const [isPropertyOpen, setIsPropertyOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const { theme, toggleTheme } = useTheme();
  const isScrolled = useScrolled(50);
  const scrollProgress = useScrollProgress();
  const location = useLocation();
  const navRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setIsBuildingOpen(false);
        setIsPropertyOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const buildingServices = [
    { name: 'Extensions', path: '/extensions', icon: Building2 },
    { name: 'Loft Conversions', path: '/loft-conversions', icon: Home },
    { name: 'Home Renovations', path: '/services/home-renovations', icon: Home },
    { name: 'Kitchen Refurbishments', path: '/services/kitchen-refurbishments', icon: Wrench },
    { name: 'Bathroom Refurbishments', path: '/bathroom-refurbishments', icon: Wrench },
    { name: 'Roofing', path: '/roofing', icon: Home },
    { name: 'Porches', path: '/services/porches', icon: Home },
    { name: 'Outbuildings', path: '/services/outbuildings', icon: Building2 }
  ];

  const propertyServices = [
    { name: 'Property Maintenance', path: '/maintenance', icon: Wrench },
    { name: 'Property Management', path: '/services/property-management', icon: Users }
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleDropdownEnter = (dropdown) => {
    setActiveDropdown(dropdown);
    if (dropdown === 'building') setIsBuildingOpen(true);
    if (dropdown === 'property') setIsPropertyOpen(true);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
    setIsBuildingOpen(false);
    setIsPropertyOpen(false);
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    visible: { 
      opacity: 1,
      height: 'auto',
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ 
          scaleX: scrollProgress,
          transformOrigin: 'left'
        }}
        initial={{ scaleX: 0 }}
      />

      <motion.nav 
        ref={navRef}
        className={`navigation ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'mobile-open' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.22, 1, 0.36, 1] 
        }}
      >
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <motion.img
              src="/images/logo-nav.png"
              alt="Fallow Building Services"
              className="nav-logo-img"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-menu-desktop">
            <Link to="/" className="nav-link">
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Home
              </motion.span>
            </Link>

            {/* Building Services Dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleDropdownEnter('building')}
              onMouseLeave={handleDropdownLeave}
            >
              <motion.button 
                className="nav-link dropdown-toggle"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Building Services
                <motion.span
                  animate={{ rotate: isBuildingOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.span>
              </motion.button>
              
              <AnimatePresence>
                {isBuildingOpen && (
                  <motion.div
                    className="dropdown-menu"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="dropdown-grid">
                      {buildingServices.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={index}
                            to={service.path}
                            className="dropdown-item"
                            onClick={() => setIsBuildingOpen(false)}
                          >
                            <motion.div
                              className="dropdown-item-content"
                              whileHover={{ x: 4 }}
                              transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                              <Icon size={18} className="dropdown-icon" />
                              <span>{service.name}</span>
                            </motion.div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Property Services Dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleDropdownEnter('property')}
              onMouseLeave={handleDropdownLeave}
            >
              <motion.button 
                className="nav-link dropdown-toggle"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Property Services
                <motion.span
                  animate={{ rotate: isPropertyOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.span>
              </motion.button>
              
              <AnimatePresence>
                {isPropertyOpen && (
                  <motion.div
                    className="dropdown-menu dropdown-menu-small"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {propertyServices.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={index}
                          to={service.path}
                          className="dropdown-item"
                          onClick={() => setIsPropertyOpen(false)}
                        >
                          <motion.div
                            className="dropdown-item-content"
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <Icon size={18} className="dropdown-icon" />
                            <span>{service.name}</span>
                          </motion.div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/about" className="nav-link">
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                About
              </motion.span>
            </Link>
            <Link to="/contact" className="nav-link">
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Contact
              </motion.span>
            </Link>

            {/* Theme Toggle */}
            <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <AnimatePresence mode="wait">
                {theme === 'light' ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* CTA Button */}
            <motion.a 
              href="tel:02035765962" 
              className="nav-cta"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 4px 20px rgba(201, 168, 76, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Phone size={18} />
              <span>0203 576 5962</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-controls">
            <motion.button
              className="theme-toggle mobile-theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button 
              className="mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="mobile-menu-content">
                <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>
                  <Home size={20} />
                  <span>Home</span>
                </Link>

                {/* Mobile Building Services */}
                <div className="mobile-dropdown">
                  <button 
                    className="mobile-dropdown-toggle"
                    onClick={() => setIsBuildingOpen(!isBuildingOpen)}
                  >
                    <Building2 size={20} />
                    <span>Building Services</span>
                    <motion.span
                      animate={{ rotate: isBuildingOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={20} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isBuildingOpen && (
                      <motion.div
                        className="mobile-dropdown-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {buildingServices.map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={index}
                              to={service.path}
                              className="mobile-dropdown-item"
                              onClick={() => setIsOpen(false)}
                            >
                              <Icon size={16} />
                              <span>{service.name}</span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Property Services */}
                <div className="mobile-dropdown">
                  <button 
                    className="mobile-dropdown-toggle"
                    onClick={() => setIsPropertyOpen(!isPropertyOpen)}
                  >
                    <Wrench size={20} />
                    <span>Property Services</span>
                    <motion.span
                      animate={{ rotate: isPropertyOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={20} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isPropertyOpen && (
                      <motion.div
                        className="mobile-dropdown-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {propertyServices.map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={index}
                              to={service.path}
                              className="mobile-dropdown-item"
                              onClick={() => setIsOpen(false)}
                            >
                              <Icon size={16} />
                              <span>{service.name}</span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/about" className="mobile-link" onClick={() => setIsOpen(false)}>
                  <Users size={20} />
                  <span>About</span>
                </Link>
                <Link to="/contact" className="mobile-link" onClick={() => setIsOpen(false)}>
                  <Mail size={20} />
                  <span>Contact</span>
                </Link>

                <a href="tel:02035765962" className="mobile-cta" onClick={() => setIsOpen(false)}>
                  <Phone size={20} />
                  <span>Call 0203 576 5962</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;

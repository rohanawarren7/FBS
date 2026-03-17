import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Home, 
  Wrench, 
  Building2, 
  PaintBucket, 
  Warehouse, 
  Key, 
  ArrowRight
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ServicesSection.css';

// 3D Tilt Card Component
const TiltCard = ({ children, className, size = 'medium' }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), springConfig);
  
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    x.set(xPos);
    y.set(yPos);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

// Animated Icon Component
const AnimatedIcon = ({ icon: Icon, isHovered }) => {
  return (
    <motion.div 
      className="service-icon-wrapper"
      animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <svg 
        viewBox="0 0 48 48" 
        className="icon-svg"
        style={{ width: '100%', height: '100%' }}
      >
        <motion.circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isHovered ? { pathLength: 1, opacity: 0.2 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </svg>
      <div className="icon-inner">
        <Icon size={28} strokeWidth={1.5} />
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);
  const [hoveredCard, setHoveredCard] = useState(null);

  const buildingServices = [
    {
      icon: Building2,
      title: 'Extensions',
      description: 'Single & double-storey extensions that add space and value to your home across Havering & Romford.',
      path: '/extensions',
      size: 'large',
      featured: true,
      stats: '150+ completed'
    },
    {
      icon: Home,
      title: 'Loft Conversions',
      description: 'Dormer, hip-to-gable, Velux & mansard conversions to maximise your property potential.',
      path: '/loft-conversions',
      size: 'medium'
    },
    {
      icon: Home,
      title: 'Home Renovations',
      description: 'Full refurbishments and property upgrades that transform your living space.',
      path: '/services/home-renovations',
      size: 'medium'
    },
    {
      icon: PaintBucket,
      title: 'Kitchen Refurbishments',
      description: 'Modern kitchen installations with premium finishes and expert craftsmanship.',
      path: '/services/kitchen-refurbishments',
      size: 'medium'
    },
    {
      icon: PaintBucket,
      title: 'Bathroom Refurbishments',
      description: 'Luxury bathroom refits, en-suites & wet rooms designed for comfort.',
      path: '/bathroom-refurbishments',
      size: 'medium'
    },
    {
      icon: Warehouse,
      title: 'Roofing',
      description: 'Pitched & flat roof installations, repairs, and emergency call-out services.',
      path: '/roofing',
      size: 'small'
    },
    {
      icon: Warehouse,
      title: 'Porches',
      description: 'Open, closed & storm porch installations to enhance your entrance.',
      path: '/services/porches',
      size: 'small'
    },
    {
      icon: Warehouse,
      title: 'Outbuildings',
      description: 'Custom garden offices, studios & storage solutions built to last.',
      path: '/services/outbuildings',
      size: 'small'
    }
  ];

  const propertyServices = [
    {
      icon: Wrench,
      title: 'Property Maintenance',
      description: 'Planned & reactive maintenance for property managers, care homes & housing associations.',
      path: '/maintenance',
      size: 'medium',
      featured: true
    },
    {
      icon: Key,
      title: 'Property Management',
      description: 'Full property management for Havering & East London landlords.',
      path: '/services/property-management',
      size: 'medium'
    }
  ];

  const serviceAreas = [
    'Romford',
    'Hornchurch',
    'Rainham',
    'Upminster',
    'Havering',
    'Barking & Dagenham',
    'Redbridge'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const ServiceCard = ({ service, index, category }) => {
    const isHovered = hoveredCard === `${category}-${index}`;
    
    return (
      <motion.div
        variants={cardVariants}
        className={`service-card-wrapper service-card-${service.size}`}
      >
        <TiltCard 
          className={`service-card ${service.featured ? 'service-card-featured' : ''} ${isHovered ? 'is-hovered' : ''}`}
          size={service.size}
        >
          <Link 
            to={service.path}
            className="service-card-link"
            onMouseEnter={() => setHoveredCard(`${category}-${index}`)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Gradient Border Effect */}
            <div className="card-gradient-border" />
            
            {/* Card Content */}
            <div className="service-card-content">
              <div className="service-card-header">
                <AnimatedIcon 
                  icon={service.icon} 
                  isHovered={isHovered}
                />
                
                {service.featured && (
                  <motion.span 
                    className="featured-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Popular
                  </motion.span>
                )}
              </div>

              <div className="service-card-body">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
              </div>

              <div className="service-card-footer">
                {service.stats && (
                  <span className="service-stats">{service.stats}</span>
                )}
                
                <motion.div 
                  className="service-arrow"
                  animate={isHovered ? { x: 4 } : { x: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <span className="learn-more">Learn more</span>
                  <ArrowRight size={16} />
                </motion.div>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <motion.div 
              className="card-glow"
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </TiltCard>
      </motion.div>
    );
  };

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title">Expert Building Solutions</h2>
          <p className="section-description">
            From minor renovations to major construction projects, we deliver exceptional 
            craftsmanship and attention to detail across Havering and Essex.
          </p>
        </motion.div>

        {/* Building Services - Bento Grid */}
        <div className="service-category">
          <motion.div 
            className="category-header"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="category-label">
              <Building2 size={20} />
              <span>Building Services</span>
            </div>
            <h3 className="category-title">Residential Construction</h3>
            <p className="category-description">
              Transform your home with our comprehensive building services, 
              delivered with precision and care.
            </p>
          </motion.div>
          
          <motion.div 
            className="services-bento-grid"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {buildingServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                index={index}
                category="building"
              />
            ))}
          </motion.div>
        </div>

        {/* Property Services */}
        <div className="service-category">
          <motion.div 
            className="category-header"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="category-label">
              <Key size={20} />
              <span>Property Services</span>
            </div>
            <h3 className="category-title">Professional Management</h3>
            <p className="category-description">
              Complete property solutions for landlords and businesses across 
              Havering and East London.
            </p>
          </motion.div>
          
          <motion.div 
            className="services-bento-grid services-bento-grid-property"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {propertyServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                index={index}
                category="property"
              />
            ))}
          </motion.div>
        </div>

        {/* Service Areas */}
        <motion.div 
          className="service-areas-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="service-areas-header">
            <h3 className="areas-title">Areas We Serve</h3>
            <p className="areas-subtitle">Proudly serving communities across East London and Essex</p>
          </div>
          
          <div className="areas-grid">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                className="area-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + (index * 0.05) }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
              >
                <span className="area-name">{area}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
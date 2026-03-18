import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ProjectGallery.css';

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, isVisible] = useScrollAnimation(0.1);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'extensions', label: 'Extensions' },
    { id: 'loft', label: 'Loft Conversions' },
    { id: 'renovations', label: 'Renovations' },
    { id: 'kitchen', label: 'Kitchens' },
    { id: 'bathroom', label: 'Bathrooms' }
  ];

  // Project photos - update titles/descriptions after viewing images
  const projects = [
    {
      id: 1,
      title: 'Rear Single-Storey Extension',
      category: 'extensions',
      location: 'Havering, Essex',
      year: '2024',
      image: '/images/projects/project-1.jpg',
      hasBeforeAfter: false
    },
    {
      id: 2,
      title: 'Full Home Renovation',
      category: 'renovations',
      location: 'Romford, Essex',
      year: '2024',
      image: '/images/projects/project-2.jpg',
      hasBeforeAfter: false
    },
    {
      id: 3,
      title: 'Dormer Loft Conversion',
      category: 'loft',
      location: 'Hornchurch, Essex',
      year: '2024',
      image: '/images/projects/project-3.jpg',
      hasBeforeAfter: false
    },
    {
      id: 4,
      title: 'Kitchen Refurbishment',
      category: 'kitchen',
      location: 'Rainham, Essex',
      year: '2023',
      image: '/images/projects/project-4.jpg',
      hasBeforeAfter: false
    },
    {
      id: 5,
      title: 'Bathroom Refurbishment',
      category: 'extensions',
      location: 'Upminster, Essex',
      year: '2023',
      image: '/images/projects/project-5.jpg',
      hasBeforeAfter: false
    },
    {
      id: 6,
      title: 'Flat Roof Replacement',
      category: 'loft',
      location: 'Havering, Essex',
      year: '2024',
      image: '/images/projects/project-6.jpg',
      hasBeforeAfter: false
    },
    {
      id: 7,
      title: 'Double-Storey Side Extension',
      category: 'renovations',
      location: 'Romford, Essex',
      year: '2023',
      image: '/images/projects/project-7.jpg',
      hasBeforeAfter: false
    },
    {
      id: 8,
      title: 'Velux Loft Conversion',
      category: 'loft',
      location: 'Hornchurch, Essex',
      year: '2024',
      image: '/images/projects/project-8.jpg',
      hasBeforeAfter: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const openLightbox = (project) => {
    setSelectedImage(project);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedImage.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredProjects.length
      : (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedImage(filteredProjects[newIndex]);
  };

  return (
    <section className="project-gallery-section" ref={ref}>
      <div className="gallery-container">
        {/* Header */}
        <motion.div 
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="gallery-subtitle">Our Work</span>
          <h2 className="gallery-title">Recent Projects</h2>
          <p className="gallery-description">
            Browse our portfolio of completed projects across Havering and Essex. 
            Each project showcases our commitment to quality craftsmanship and attention to detail.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          className="gallery-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="filter-icon">
            <Filter size={18} />
          </div>
          <div className="filter-buttons">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div 
          className="gallery-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`gallery-item ${project.hasBeforeAfter ? 'has-before-after' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => openLightbox(project)}
                whileHover={{ y: -8 }}
              >
                <div className="gallery-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-content">
                      <h3 className="gallery-item-title">{project.title}</h3>
                      <p className="gallery-item-location">{project.location}</p>
                      <span className="gallery-item-year">{project.year}</span>
                    </div>
                  </div>
                  {project.hasBeforeAfter && (
                    <div className="before-after-badge">
                      Before & After
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="gallery-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="/contact" className="gallery-cta-btn">
            Discuss Your Project
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={24} />
            </button>
            
            <button 
              className="lightbox-nav lightbox-prev"
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            >
              <ChevronLeft size={32} />
            </button>
            
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="lightbox-image"
              />
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.location} • {selectedImage.year}</p>
              </div>
            </motion.div>
            
            <button 
              className="lightbox-nav lightbox-next"
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectGallery;

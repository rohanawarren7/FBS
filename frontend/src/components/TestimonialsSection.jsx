import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MessageSquarePlus } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  // Manual testimonials data - replace with actual testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Thompson",
      location: "Romford, Essex",
      service: "Home Extension",
      rating: 5,
      date: "December 2024",
      text: "Fallow Building Services transformed our home with a beautiful rear extension. The team was professional, punctual, and the quality of work exceeded our expectations. We couldn't be happier with the result.",
      verified: true
    },
    {
      id: 2,
      name: "James & Rebecca Wilson",
      location: "Hornchurch, Essex",
      service: "Kitchen Refurbishment",
      rating: 5,
      date: "November 2024",
      text: "From the initial consultation to the final touches, the team demonstrated exceptional attention to detail. Our new kitchen is exactly what we envisioned. Highly recommend their services.",
      verified: true
    },
    {
      id: 3,
      name: "Michael Brown",
      location: "Rainham, Essex",
      service: "Loft Conversion",
      rating: 5,
      date: "October 2024",
      text: "The loft conversion has added significant value to our property. The work was completed on time and within budget. The team kept us informed throughout the entire process.",
      verified: true
    }
  ];

  return (
    <section className="testimonials-section" ref={ref}>
      <div className="testimonials-container">
        {/* Header */}
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="testimonials-subtitle">Testimonials</span>
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <p className="testimonials-description">
            Don't just take our word for it. Here's what our satisfied clients 
            across Havering and Essex have to say about their experience working with us.
          </p>
        </motion.div>

        {/* Overall Rating */}
        <motion.div 
          className="overall-rating"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rating-score">
            <span className="rating-number">5.0</span>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
          </div>
          <p className="rating-text">5.0 ★★★★★ on Google · 20+ reviews on Bark</p>
          <div className="rating-links">
            <a 
              href="https://g.page/r/CbrPxLbz5OBpEBM/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rating-link google-reviews"
            >
              View Google Reviews
            </a>
            <a 
              href="https://www.bark.com/en/gb/company/fallow-building-services/Gw6Nv/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rating-link bark-reviews"
            >
              View Bark Reviews
            </a>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              whileHover={{ y: -4 }}
            >
              <div className="testimonial-quote">
                <Quote size={32} />
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="testimonial-text">{testimonial.text}</p>

              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-location">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="testimonial-meta">
                  <span className="meta-service">{testimonial.service}</span>
                  <span className="meta-date">{testimonial.date}</span>
                  {testimonial.verified && (
                    <span className="meta-verified">Verified</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Review Placeholder */}
        <motion.div 
          className="add-review-placeholder"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="add-review-content">
            <MessageSquarePlus size={32} />
            <h3>Have you worked with us?</h3>
            <p>
              We'd love to hear about your experience. Your feedback helps us 
              improve and helps others make informed decisions.
            </p>
            <a 
              href="https://www.bark.com/en/gb/company/fallow-building-services/Gw6Nv/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="add-review-btn"
            >
              Leave a Review
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

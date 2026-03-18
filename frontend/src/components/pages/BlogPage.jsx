import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import PageLayout from '../PageLayout';
import CTABlock from '../CTABlock';
import '../ServicePage.css';

const BlogPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const blogPosts = [
    {
      id: 1,
      title: "How Much Does a Loft Conversion Cost in Romford in 2026?",
      excerpt: "A detailed breakdown of loft conversion costs in Romford and Havering, including dormer, Velux, and hip-to-gable options.",
      date: "2026-03-20",
      readTime: "5 min read",
      category: "Cost Guides",
      slug: "loft-conversion-cost-romford-2026"
    },
    {
      id: 2,
      title: "Do I Need Planning Permission for a Rear Extension in Havering?",
      excerpt: "Understanding permitted development rights for rear extensions in Havering Council. Learn when you need full planning permission.",
      date: "2026-03-18",
      readTime: "4 min read",
      category: "Planning Permission",
      slug: "planning-permission-rear-extension-havering"
    },
    {
      id: 3,
      title: "Single vs Double-Storey Extension — Which Adds More Value?",
      excerpt: "Comparing the ROI of single and double-storey extensions in Romford and Hornchurch properties.",
      date: "2026-03-15",
      readTime: "6 min read",
      category: "Property Value",
      slug: "single-vs-double-storey-extension-value"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Building Tips & Advice | Fallow Building Services Blog</title>
        <meta name="description" content="Expert building tips, cost guides, and advice from Fallow Building Services. Loft conversions, extensions, renovations in Havering & Essex." />
        <link rel="canonical" href="https://fallowbuildingservices.co.uk/blog" />
      </Helmet>

      <PageLayout 
        heroTitle="Building Tips & Expert Advice"
        heroSubtitle="Insights from our team on extensions, loft conversions, and renovations across Havering & Essex"
        heroImage="/images/hero-construction.jpg"
      >
        <section className="service-benefits">
          <div className="service-container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-subtitle">Our Blog</span>
              <h2 className="section-title">Latest Articles</h2>
              <p className="section-description">
                Expert advice, cost guides, and insights from our building projects across Havering and Essex.
              </p>
            </motion.div>

            <motion.div 
              className="blog-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="blog-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="blog-card-content">
                    <div className="blog-meta">
                      <span className="blog-category">{post.category}</span>
                      <div className="blog-date-read">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    
                    <Link to={`/blog/${post.slug}`} className="blog-read-more">
                      Read More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            <motion.div 
              className="blog-cta"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>Need Help With Your Project?</h3>
              <p>Get in touch for a free, no-obligation site survey</p>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>

        <CTABlock />
      </PageLayout>
    </>
  );
};

export default BlogPage;

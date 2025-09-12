import React from 'react';
import { motion } from 'framer-motion';
import { portfolioContent } from '../../data/content';
import './About.css';

const About = () => {
  // Simplified animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
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
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getJourneyIcon = (type) => {
    switch(type) {
      case 'education': return '🎓';
      case 'work': return '💼';
      case 'achievement': return '🏆';
      case 'milestone': return '🚀';
      case 'current': return '⚡';
      default: return '📍';
    }
  };

  const getJourneyColor = (type) => {
    switch(type) {
      case 'education': return '#4facfe';
      case 'work': return '#43e97b';
      case 'achievement': return '#fa709a';
      case 'milestone': return '#667eea';
      case 'current': return '#f093fb';
      default: return '#667eea';
    }
  };

  // Debug: Check if data exists
  console.log('Portfolio About Data:', portfolioContent.about);

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Header */}
        <motion.div 
          className="about-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 className="about-title" variants={itemVariants}>
            {portfolioContent.about?.title || "About Me"}
          </motion.h2>
          <motion.p className="about-subtitle" variants={itemVariants}>
            {portfolioContent.about?.subtitle || "Discover my journey"}
          </motion.p>
        </motion.div>

        <motion.div 
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.0 }}
          variants={containerVariants}
        >
          {/* Description */}
          <motion.p className="about-description" variants={itemVariants}>
            {portfolioContent.about?.description || "Loading description..."}
          </motion.p>

          {/* Education Section */}
          {portfolioContent.about?.education && (
            <motion.div className="education-section" variants={itemVariants}>
              <motion.h3 className="section-title" variants={itemVariants}>
                🎓 {portfolioContent.about.education.title}
              </motion.h3>
              
              <div className="education-grid">
                {portfolioContent.about.education.degrees?.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="education-card glass-effect"
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      boxShadow: "0 20px 40px rgba(102, 126, 234, 0.2)"
                    }}
                  >
                    <div className="education-header">
                      <h4 className="education-degree">{edu.degree}</h4>
                      <div className="education-year">{edu.year}</div>
                    </div>
                    <div className="education-university">{edu.university}</div>
                    <div className="education-gpa">GPA: {edu.gpa}</div>
                    <p className="education-description">{edu.description}</p>
                    <div className="achievements">
                      {edu.achievements?.map((achievement, idx) => (
                        <span key={idx} className="achievement-tag">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Highlights Section */}
          {portfolioContent.about?.highlights && (
            <motion.div className="highlights-grid" variants={containerVariants}>
              {portfolioContent.about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="highlight-card glass-effect"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 8,
                    rotateX: 5,
                    boxShadow: "0 25px 50px rgba(102, 126, 234, 0.3)",
                    y: -10
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="highlight-icon-container"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <motion.img
                      src={highlight.icon}
                      alt={highlight.title}
                      className="highlight-icon-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="highlight-icon-fallback">
                      {index === 0 ? '📱' : index === 1 ? '📊' : '🚀'}
                    </div>
                  </motion.div>

                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-description">{highlight.description}</p>

                  <div className="skills-tags">
                    {highlight.skills?.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="skill-tag"
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: "rgba(102, 126, 234, 0.2)",
                          color: "#ffffff"
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Stats Section */}
          {portfolioContent.about?.stats && (
            <motion.div className="stats-section" variants={itemVariants}>
              <motion.h3 className="section-title" variants={itemVariants}>
                My Achievements
              </motion.h3>
              
              <div className="stats-grid">
                {portfolioContent.about.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="stat-item glass-effect"
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 10,
                      boxShadow: "0 20px 40px rgba(102, 126, 234, 0.2)"
                    }}
                  >
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Journey Timeline */}
          {portfolioContent.about?.journey && (
            <motion.div className="journey-section" variants={itemVariants}>
              <motion.h3 className="section-title" variants={itemVariants}>
                🚀 {portfolioContent.about.journey.title}
              </motion.h3>
              
              <div className="timeline">
                {portfolioContent.about.journey.milestones?.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <motion.div 
                      className="timeline-dot"
                      style={{ backgroundColor: getJourneyColor(milestone.type) }}
                    >
                      <span className="timeline-icon">{getJourneyIcon(milestone.type)}</span>
                    </motion.div>
                    
                    <motion.div 
                      className="timeline-content glass-effect"
                      style={{ borderLeftColor: getJourneyColor(milestone.type) }}
                    >
                      <div className="timeline-year">{milestone.year}</div>
                      <h4 className="timeline-title">{milestone.title}</h4>
                      <p className="timeline-description">{milestone.description}</p>
                      <div 
                        className="timeline-type-badge" 
                        style={{ backgroundColor: getJourneyColor(milestone.type) }}
                      >
                        {milestone.type}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

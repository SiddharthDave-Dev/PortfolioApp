import React from 'react';
import { motion } from 'framer-motion';
import { portfolioContent } from '../../data/content';
import './Skills.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: "easeOut"
      }
    })
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.7
      }
    }
  };

  return (
    <motion.section
      id="skills"
      className="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={containerVariants}
    >
      <div className="skills-container">
        {/* Header */}
        <motion.div className="skills-header" variants={itemVariants}>
          <motion.h2 
            className="skills-title"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            {portfolioContent.skills.title}
          </motion.h2>
          <motion.p 
            className="skills-subtitle"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {portfolioContent.skills.subtitle}
          </motion.p>
        </motion.div>

        <div className="skills-content">
          {/* Technical Skills */}
          <motion.div className="technical-skills" variants={itemVariants}>
            <motion.h3 className="section-title" variants={itemVariants}>
              Technical Skills
            </motion.h3>
            
            <div className="skills-grid">
              {portfolioContent.skills.technical.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)"
                  }}
                >
                  <div className="skill-header">
                    <div className="skill-icon">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="skill-icon-fallback">
                        {skill.fallback}
                      </div>
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <span className="skill-level-text">{skill.levelText}</span>
                    </div>
                  </div>
                  
                  <div className="skill-progress">
                    <motion.div 
                      className="skill-progress-bar"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={skillBarVariants}
                      custom={skill.level}
                      style={{
                        background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.colorEnd || skill.color} 100%)`
                      }}
                    />
                  </div>
                  
                  <p className="skill-description">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div className="tools-section" variants={itemVariants}>
            <motion.h3 className="section-title" variants={itemVariants}>
              Tools & Technologies
            </motion.h3>
            
            <div className="tools-categories">
              {portfolioContent.skills.tools.map((category, categoryIndex) => (
                <motion.div 
                  key={categoryIndex}
                  className="tool-category glass-effect"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 15px 40px rgba(102, 126, 234, 0.2)"
                  }}
                >
                  <h4 className="category-title">{category.category}</h4>
                  <div className="tools-list">
                    {category.items.map((tool, toolIndex) => (
                      <motion.span
                        key={toolIndex}
                        className="tool-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: toolIndex * 0.1 }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(102, 126, 234, 0.2)",
                          color: "#ffffff"
                        }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div className="soft-skills" variants={itemVariants}>
            <motion.h3 className="section-title" variants={itemVariants}>
              Core Competencies
            </motion.h3>
            
            <div className="soft-skills-grid">
              {portfolioContent.skills.soft.map((skill, index) => (
                <motion.div
                  key={index}
                  className="soft-skill-card glass-effect"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(102, 126, 234, 0.25)"
                  }}
                >
                  <div className="soft-skill-icon">
                    {skill.icon}
                  </div>
                  <h4 className="soft-skill-name">{skill.name}</h4>
                  <p className="soft-skill-description">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          {/* <motion.div className="certifications-section" variants={itemVariants}>
            <motion.h3 className="section-title" variants={itemVariants}>
              Certifications & Achievements
            </motion.h3>
            
            <div className="certifications-grid">
              {portfolioContent.skills.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-card glass-effect"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px rgba(102, 126, 234, 0.3)"
                  }}
                >
                  <div className="cert-header">
                    <div className="cert-badge">
                      <img 
                        src={cert.badge} 
                        alt={cert.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="cert-badge-fallback">
                        {cert.fallback}
                      </div>
                    </div>
                    <div className="cert-info">
                      <h4 className="cert-name">{cert.name}</h4>
                      <p className="cert-issuer">{cert.issuer}</p>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                  </div>
                  {cert.credentialId && (
                    <div className="cert-credential">
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

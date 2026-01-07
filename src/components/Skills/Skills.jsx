import React from 'react';
import { motion } from 'framer-motion';
import { portfolioContent } from '../../data/content';
import './Skills.css';

const Skills = () => {
  // Enhanced container variant for smoother entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  // 3D "Float up" animation for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1] } // Custom cubic-bezier for "bounce" effect
    })
  };

  return (
    <motion.section
      id="skills"
      className="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="skills-container">
        <motion.div className="skills-header" variants={cardVariants}>
          <h2 className="skills-title">{portfolioContent.skills.title}</h2>
          <p className="skills-subtitle">{portfolioContent.skills.subtitle}</p>
        </motion.div>

        <div className="skills-content">
          {/* Technical Skills - Highlighting the Grid */}
          <div className="technical-skills">
            <h3 className="section-title">Technical Expertise</h3>
            <div className="skills-grid">
              {portfolioContent.skills.technical.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className="skill-header">
                    <div className="skill-icon-wrapper">
                      <img src={skill.icon} alt={skill.name} />
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                    </div>
                  </div>
                  
                  <div className="skill-progress-container">
                    <div className="skill-progress-meta">
                      <span className="skill-level-text">{skill.levelText}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-progress-track">
                      <motion.div 
                        className="skill-progress-fill"
                        variants={skillBarVariants}
                        custom={skill.level}
                        style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.colorEnd || skill.color})` }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools - Tag Cloud Style */}
          <div className="tools-section">
            <h3 className="section-title">Tools & Tech</h3>
            <div className="tools-categories">
              {portfolioContent.skills.tools.map((category, idx) => (
                <motion.div key={idx} className="tool-category glass-effect" variants={cardVariants}>
                  <h4>{category.category}</h4>
                  <div className="tools-list">
                    {category.items.map((tool, i) => (
                      <motion.span 
                        key={i} 
                        className="tool-tag"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
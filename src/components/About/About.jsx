// About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { portfolioContent } from '../../data/content';
import './About.css';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } }
  };

  const getJourneyIcon = (type) => {
    switch (type) {
      case 'education':
        return '🎓';
      case 'work':
        return '💼';
      case 'achievement':
        return '🏆';
      case 'milestone':
        return '🚀';
      case 'current':
        return '⚡';
      default:
        return '📍';
    }
  };

  const getJourneyColor = (type) => {
    switch (type) {
      case 'education':
        return '#4facfe';
      case 'work':
        return '#43e97b';
      case 'achievement':
        return '#fa709a';
      case 'milestone':
        return '#667eea';
      case 'current':
        return '#f093fb';
      default:
        return '#667eea';
    }
  };

  // defensive access
  const about = portfolioContent?.about || {};

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 className="about-title" variants={itemVariants}>
            {about.title || 'About Me'}
          </motion.h2>

          <motion.p className="about-subtitle" variants={itemVariants}>
            {about.subtitle || 'Discover my journey'}
          </motion.p>
        </motion.div>

        <motion.div
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.0 }}
          variants={containerVariants}
        >
          <motion.p className="about-description" variants={itemVariants}>
            {about.description}
          </motion.p>

          {/* Education */}
          {about.education && (
            <motion.div className="education-section" variants={itemVariants}>
              <motion.h3 className="section-title" variants={itemVariants}>
                <span className="emoji-colored">🎓</span> {about.education.title}
              </motion.h3>

              <div className="education-grid">
                {about.education.degrees?.map((edu, idx) => (
                  <motion.article
                    key={idx}
                    className="education-card glass-effect"
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, y: -6 }}
                  >
                    <div className="education-header">
                      <h4 className="education-degree">{edu.degree}</h4>
                      <div className="education-year">{edu.year}</div>
                    </div>
                    <div className="education-university">{edu.university}</div>
                    <div className="education-gpa">GPA: {edu.gpa}</div>
                    <p className="education-description">{edu.description}</p>
                    <div className="achievements">
                      {edu.achievements?.map((a, i) => (
                        <span className="achievement-tag" key={i}>
                          {a}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* Experience */}
          {about.experience && (
            <motion.div className="experience-section" variants={itemVariants}>
              <motion.h3 className="section-title" variants={itemVariants}>
                <span className="emoji-colored">💼</span> {about.experience.title}
              </motion.h3>

              <div className="experience-grid">
                {about.experience.jobs?.map((job, idx) => (
                  <motion.article
                    key={idx}
                    className="experience-card glass-effect"
                    variants={cardVariants}
                    whileHover={{ scale: 1.03, y: -6 }}
                  >
                    <div className="experience-header">
                      <div>
                        <h4 className="experience-role">{job.role}</h4>
                        <div className="experience-company">
                          {job.company} <span className="experience-dot">•</span>{' '}
                          <span className="experience-location">{job.location}</span>
                        </div>
                      </div>

                      <div className="experience-period">{job.period}</div>
                    </div>

                    <p className="experience-description">{job.description}</p>

                    {job.responsibilities && (
                      <ul className="responsibilities-list">
                        {job.responsibilities.map((r, i) => (
                          <li className="responsibility-item" key={i}>
                            {r}
                          </li>
                        ))}
                      </ul>
                    )}

                    {job.tech && (
                      <div className="tech-tags">
                        {job.tech.map((t, i) => (
                          <span className="tech-tag" key={i}>
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {job.achievements && (
                      <div className="job-achievements">
                        {job.achievements.map((a, i) => (
                          <span className="achievement-tag" key={i}>
                            {a}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* Highlights */}
          {about.highlights && (
             <motion.div className="experience-section" variants={itemVariants}>
              <motion.h3 className="section-title" variants={itemVariants}>
                <span className="emoji-colored">🌟</span> Highlights
              </motion.h3>
            <motion.div className="highlights-grid" variants={containerVariants}>
              {about.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  className="highlight-card glass-effect"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -8 }}
                >
                  <div className="highlight-icon-container">
                    <img
                      src={h.icon}
                      alt={h.title}
                      className="highlight-icon-img"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextSibling;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div className="highlight-icon-fallback">{i === 0 ? '📱' : i === 1 ? '📊' : '🚀'}</div>
                  </div>

                  <h3 className="highlight-title">{h.title}</h3>
                  <p className="highlight-description">{h.description}</p>

                  <div className="skills-tags">
                    {h.skills?.map((s, si) => (
                      <span className="skill-tag" key={si}>
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
             </motion.div>
          )}

          {/* Stats */}
          {about.stats && (
            <motion.div className="stats-section" variants={itemVariants}>
               <motion.h3 className="section-title" variants={itemVariants}>
                <span className="emoji-colored">🏆</span> My Achievements
              </motion.h3>

              <div className="stats-grid">
                {about.stats.map((s, i) => (
                  <motion.div className="stat-item glass-effect" key={i} variants={cardVariants} whileHover={{ scale: 1.08 }}>
                    <div className="stat-icon">{s.icon}</div>
                    <div className="stat-number">{s.number}</div>
                    <div className="stat-label">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Journey */}
          {about.journey && (
            <motion.div className="journey-section" variants={itemVariants}>
              <motion.h3 className="section-title" variants={itemVariants}>
                <span className="emoji-colored">🚀</span> My Achievements
              </motion.h3>

              <div className="timeline">
                {about.journey.milestones?.map((m, i) => (
                  <motion.div
                    key={i}
                    className="timeline-item"
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="timeline-dot" style={{ backgroundColor: getJourneyColor(m.type) }}>
                      <span className="timeline-icon">{getJourneyIcon(m.type)}</span>
                    </div>

                    <div className="timeline-content glass-effect" style={{ borderLeftColor: getJourneyColor(m.type) }}>
                      <div className="timeline-year">{m.year}</div>
                      <h4 className="timeline-title">{m.title}</h4>
                      <p className="timeline-description">{m.description}</p>
                      <div className="timeline-type-badge" style={{ backgroundColor: getJourneyColor(m.type) }}>{m.type}</div>
                    </div>
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


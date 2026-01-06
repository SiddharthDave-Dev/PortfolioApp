import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
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
      case 'education': return '🎓';
      case 'work': return '💼';
      case 'achievement': return '🏆';
      case 'milestone': return '🚀';
      case 'current': return '⚡';
      default: return '📍';
    }
  };

  const getJourneyColor = (type) => {
    switch (type) {
      case 'education': return '#4facfe';
      case 'work': return '#43e97b';
      case 'achievement': return '#fa709a';
      case 'milestone': return '#667eea';
      case 'current': return '#f093fb';
      default: return '#667eea';
    }
  };

  const getCertificateIcon = (issuer) => {
    switch (issuer?.toLowerCase()) {
      case 'google': return '/images/google.png';
      case 'ibm': return '/images/ibm.png';
      case 'microsoft': return '/images/microsoft.png';
      case 'aws': return '/images/aws.png';
      case 'coursera': return '/images/coursera.png';
      case 'udemy': return '/images/udemy.png';
      case 'linkedin': return '/images/linkedin.png';
      case 'meta': return '/images/meta.png';
      case 'learnquest': return '/images/learnquest.png';
      case 'johns hopkins university': return '/images/johns-hopkins-university.png';
      case 'rice university': return '/images/rice-university.png';
      case 'ec-council': return '/images/ec-council.png';
      default: return '/images/coursera.png';
    }
  };

  const getCertificateColor = (issuer) => {
    switch (issuer?.toLowerCase()) {
      case 'google': return '#4285F4';
      case 'ibm': return '#054ADA';
      case 'microsoft': return '#00A4EF';
      case 'aws': return '#FF9900';
      case 'coursera': return '#0056D2';
      case 'udemy': return '#A435F0';
      case 'linkedin': return '#0A66C2';
      case 'meta': return '#0081FB';
      default: return '#667eea';
    }
  };

  const about = portfolioContent?.about || {};

 // New States for filtering and UI
  const [showFullList, setShowFullList] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const panelRef = useRef(null); 

  // Resets the filter whenever the overlay is closed
  React.useEffect(() => {
    if (!showFullList) {
      setActiveFilter('All');
    }
  }, [showFullList]);
  
  // Sort and Prepare Certifications
  const allCertifications = [...(about.certifications || [])].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  // Extract unique issuers for filter buttons
  const uniqueIssuers = ['All', ...new Set(allCertifications.map(c => c.issuer))];

  // Logic for the filtered list inside overlay
  const filteredCertifications = activeFilter === 'All' 
    ? allCertifications 
    : allCertifications.filter(cert => cert.issuer === activeFilter);

  const featuredCerts = allCertifications.slice(0, 8);

  const handleCertificateClick = (url) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Close when clicking the backdrop (not the panel)
  const handleBackdropClick = (e) => {
    if (panelRef.current && !panelRef.current.contains(e.target)) {
      setShowFullList(false);
    }
  };

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
         {/* About Description with Structured UI */}
<motion.div className="description-container" variants={itemVariants}>
  <div className="description-glass-card">
    <div className="description-header">
      <div className="pulse-indicator"></div>
      <span className="status-text">Professional Summary</span>
    </div>
    
    <div className="description-body">
      <ReactMarkdown>{about.description}</ReactMarkdown>
    </div>

    {/* Optional: Add a signature or a high-level summary line */}
    <div className="description-footer">
      <div className="footer-line"></div>
      <p className="footer-tagline">Turning technical complexity into strategic clarity.</p>
    </div>
  </div>
</motion.div>

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
                        <span className="achievement-tag" key={i}>{a}</span>
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
                          <li className="responsibility-item" key={i}>{r}</li>
                        ))}
                      </ul>
                    )}
                    {job.tech && (
                      <div className="tech-tags">
                        {job.tech.map((t, i) => (
                          <span className="tech-tag" key={i}>{t}</span>
                        ))}
                      </div>
                    )}
                    {job.achievements && (
                      <div className="job-achievements">
                        {job.achievements.map((a, i) => (
                          <span className="achievement-tag" key={i}>{a}</span>
                        ))}
                      </div>
                    )}
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* Professional Certifications Section */}
          {allCertifications.length > 0 && (
            <motion.div className="certifications-section" variants={itemVariants}>
              <motion.h3 className="section-title" variants={itemVariants}>
                <span className="emoji-colored">🏅</span> Certifications
              </motion.h3>

              <div className="cert-modern-grid">
                {featuredCerts.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    className={`cert-modern-card ${cert.featured ? 'featured-cert' : ''}`}
                    variants={cardVariants}
                    whileHover={{ y: -10 }}
                    onClick={() => handleCertificateClick(cert.certificateUrl)}
                  >
                    <div className="cert-shine"></div>
                    {cert.featured && <div className="featured-badge">TOP CREDENTIAL</div>}
                    <div className="cert-header">
                      <div
                        className="cert-logo-box"
                        style={{
                          borderColor: getCertificateColor(cert.issuer),
                          background: `${getCertificateColor(cert.issuer)}15`,
                        }}
                      >
                        <img
                          src={getCertificateIcon(cert.issuer)}
                          alt={cert.issuer}
                          className="cert-logo-img"
                          style={{ width: '70%', height: '70%', objectFit: 'contain' }}
                        />
                      </div>
                      <div className="cert-verify-badge">VERIFIED ✓</div>
                    </div>
                    <div className="cert-body">
                      <h4 className="cert-name">{cert.title}</h4>
                      <p className="cert-issuer">🏢 {cert.issuer}</p>
                      <div className="cert-id-container">
                        <span className="cert-id-label">CREDENTIAL ID</span>
                        <span className="cert-id-value">{cert.certificateId}</span>
                      </div>
                    </div>
                    <div className="cert-footer">
                      <span className="cert-date-text"></span>
                      {cert.certificateUrl && <span className="cert-view-link">View ↗</span>}
                    </div>
                  </motion.div>
                ))}
              </div>

              {allCertifications.length > 8 && (
                <div className="show-more-container">
                  <button className="show-more-btn glass-effect" onClick={() => setShowFullList(true)}>
                    See All ({allCertifications.length}) <span>→</span>
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* Highlights */}
          {about.highlights && (
            <motion.div className="experience-section" variants={itemVariants}>
              <motion.h3 className="section-title" variants={itemVariants}>
                <span className="emoji-colored">🌟</span> Highlights
              </motion.h3>
              <div className="highlights-grid">
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
                        <span className="skill-tag" key={si}>{s}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Stats */}
          {about.stats && (
            <motion.div className="stats-section" variants={itemVariants}>
              <motion.h3 className="section-title" variants={itemVariants}>
                <span className="emoji-colored">📈</span> Technical Impact & Experience
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
                <span className="emoji-colored">🚀</span> My Journey
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

      {/* FULL LIST OVERLAY (SWIFT TABLE VIEW STYLE) */}
      <AnimatePresence>
        {showFullList && (
          <motion.div 
            className="cert-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick} // 1. Dismiss on empty area click
          >
            <motion.div 
              ref={panelRef} // Reference for click-away logic
              className="cert-table-view"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="table-header">
                <div className="table-header-top">
                    <h3>Certifications</h3>
                    <button className="close-table-btn" onClick={() => setShowFullList(false)}>✕</button>
                </div>

                {/* 2. Filter by Issuer */}
                <div className="filter-pill-container">
                    {uniqueIssuers.map(issuer => (
                        <button 
                            key={issuer}
                            className={`filter-pill ${activeFilter === issuer ? 'active' : ''}`}
                            onClick={() => setActiveFilter(issuer)}
                        >
                            {issuer}
                        </button>
                    ))}
                </div>
              </div>

              <div className="table-body">
                {filteredCertifications.length > 0 ? (
                  filteredCertifications.map((cert, idx) => (
                    <div 
                      key={idx} 
                      className={`table-row ${cert.featured ? 'table-row-featured' : ''}`} // 3. Highlight featured
                      onClick={() => handleCertificateClick(cert.certificateUrl)}
                    >
                      <div className="row-icon">
                        <img src={getCertificateIcon(cert.issuer)} alt="" />
                      </div>
                      <div className="row-content">
                        <div className="row-title">
                            {cert.title}
                            {cert.featured && <span className="row-featured-badge">Featured</span>}
                        </div>
                        <div className="row-subtitle">{cert.issuer} • {cert.certificateId}</div>
                      </div>
                      <div className="row-arrow">→</div>
                    </div>
                  ))
                ) : (
                  <div className="no-results">No certifications found for this issuer.</div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
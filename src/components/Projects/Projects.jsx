import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioContent } from '../../data/content';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        duration: 0.4
      }
    }
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
    
    // Hide header
    const header = document.querySelector('header') || document.querySelector('.navbar') || document.querySelector('.header');
    if (header) {
      header.style.transform = 'translateY(-100%)';
      header.style.transition = 'transform 0.3s ease-in-out';
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
    
    // Show header
    const header = document.querySelector('header') || document.querySelector('.navbar') || document.querySelector('.header');
    if (header) {
      header.style.transform = 'translateY(0)';
      header.style.transition = 'transform 0.3s ease-in-out';
    }
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (selectedProject) {
        document.body.style.overflow = 'unset';
        const header = document.querySelector('header') || document.querySelector('.navbar') || document.querySelector('.header');
        if (header) {
          header.style.transform = 'translateY(0)';
        }
      }
    };
  }, [selectedProject]);

  const nextImage = () => {
    if (selectedProject.images && selectedProject.images.length > 1) {
      setCurrentImageIndex(prev => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject.images && selectedProject.images.length > 1) {
      setCurrentImageIndex(prev => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <motion.section
      id="projects"
      className="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="projects-container">
        {/* Header */}
        <motion.div className="projects-header" variants={itemVariants}>
          <motion.h2 className="projects-title">
            {portfolioContent.projects.title}
          </motion.h2>
          <motion.p className="projects-subtitle">
            {portfolioContent.projects.subtitle}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {portfolioContent.projects.items.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass-effect"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 15px 30px rgba(102, 126, 234, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="project-thumbnail">
                <img 
                  src={project.thumbnail} 
                  alt={project.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="project-thumbnail-fallback">
                  <span>🚀</span>
                </div>
                <div className="project-category">{project.category || 'iOS App'}</div>
                {project.images && project.images.length > 1 && (
                  <div className="project-image-count">
                    📸 {project.images.length} images
                  </div>
                )}
              </div>
              
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
                
                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag more">+{project.technologies.length - 4}</span>
                  )}
                </div>
                
                <div className="project-stats">
                  <div className="stat-item">
                    <span className="stat-label">Duration</span>
                    <span className="stat-value">{project.duration}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Status</span>
                    <span className={`stat-value status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Action Bar */}
              <motion.div 
                className="project-action-bar"
                onClick={() => openProject(project)}
                whileHover={{ 
                  backgroundColor: "rgba(102, 126, 234, 0.15)",
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="action-text">View Project Details</span>
                <motion.span 
                  className="action-arrow"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  →
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Side Panel Drawer with Image Gallery */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="project-drawer"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Drawer Header */}
                <div className="drawer-header">
                  <div className="drawer-title-section">
                    <h2 className="drawer-project-title">{selectedProject.name}</h2>
                    <span className="drawer-project-category">{selectedProject.category || 'iOS App'}</span>
                  </div>
                  <motion.button 
                    className="drawer-close-btn"
                    onClick={closeModal}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ✕
                  </motion.button>
                </div>

                {/* Drawer Content */}
                <div className="drawer-content">
                  {/* Project Image Gallery */}
                  <div className="drawer-gallery">
                    <div className="gallery-header">
                      <h3>App Screenshots</h3>
                      <span className="image-counter">
                        {currentImageIndex + 1} / {selectedProject.images?.length || 1}
                      </span>
                    </div>
                    
                    <div className="gallery-main">
                      <motion.img 
                        key={currentImageIndex}
                        src={selectedProject.images?.[currentImageIndex] || selectedProject.thumbnail} 
                        alt={`${selectedProject.name} - Screenshot ${currentImageIndex + 1}`}
                        className="gallery-main-image"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {selectedProject.images && selectedProject.images.length > 1 && (
                        <>
                          <motion.button 
                            className="gallery-nav gallery-prev"
                            onClick={prevImage}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            ‹
                          </motion.button>
                          <motion.button 
                            className="gallery-nav gallery-next"
                            onClick={nextImage}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            ›
                          </motion.button>
                        </>
                      )}
                    </div>
                    
                    {/* Thumbnail Strip */}
                    {selectedProject.images && selectedProject.images.length > 1 && (
                      <div className="gallery-thumbnails">
                        {selectedProject.images.map((image, index) => (
                          <motion.img
                            key={index}
                            src={image}
                            alt={`${selectedProject.name} - Thumbnail ${index + 1}`}
                            className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Status Badge */}
                  <div className="drawer-status-section">
                    <div className="drawer-status-badge">
                      <span className={`status-dot status-${selectedProject.status.toLowerCase().replace(/\s+/g, '-')}`}></span>
                      {selectedProject.status}
                    </div>
                  </div>

                  {/* Quick Info Cards */}
                  <div className="drawer-info-cards">
                    <div className="info-card">
                      <span className="info-label">Duration</span>
                      <span className="info-value">{selectedProject.duration}</span>
                    </div>
                    <div className="info-card">
                      <span className="info-label">Role</span>
                      <span className="info-value">{selectedProject.role}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="drawer-section">
                    <h3>About This Project</h3>
                    <p className="drawer-description">{selectedProject.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="drawer-section">
                    <h3>Tech Stack</h3>
                    <div className="drawer-tech-grid">
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.div 
                          key={index} 
                          className="drawer-tech-item"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  {selectedProject.features && (
                    <div className="drawer-section">
                      <h3>Key Features</h3>
                      <div className="drawer-features">
                        {selectedProject.features.map((feature, index) => (
                          <div key={index} className="drawer-feature-item">
                            <span className="feature-icon">✨</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="drawer-actions">
                    {selectedProject.demoUrl && (
                      <motion.a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="drawer-btn primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Live Demo</span>
                        <span>→</span>
                      </motion.a>
                    )}
                    {selectedProject.githubUrl && (
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="drawer-btn secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>View Code</span>
                        <span>⚡</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Projects;

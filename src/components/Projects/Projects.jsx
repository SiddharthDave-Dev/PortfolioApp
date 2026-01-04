import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioContent } from '../../data/content';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(portfolioContent.projects.items.map(p => p.category || 'iOS App'))];

  const filteredProjects = activeFilter === 'All'
    ? portfolioContent.projects.items
    : portfolioContent.projects.items.filter(p => (p.category || 'iOS App') === activeFilter);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <motion.section id="projects" className="projects-section">
      <div className="projects-container">
        <header className="projects-header">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            {portfolioContent.projects?.title || "My Projects"}
          </motion.h2>

          <div className="filter-container">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div layout className="projects-mesh-grid">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className="modern-card"
                onClick={() => openProject(project)}
              >
                <div className="card-media">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    loading="lazy"
                  />
                  <div className="card-overlay">
                    <span className="view-case-study-btn">View Case Study</span>
                  </div>
                  <div className="card-category-tag">{project.category || 'iOS App'}</div>
                </div>

                <div className="card-content">
                  <h3 className="card-name">{project.name}</h3>
                  <p className="card-summary">{project.summary}</p>
                  <div className="card-tech-stack">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-mini-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectDrawer
              project={selectedProject}
              onClose={closeProject}
              currentIndex={currentImageIndex}
              setIndex={setCurrentImageIndex}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

const ProjectDrawer = ({ project, onClose, currentIndex, setIndex }) => {
  // Logic: Only show gallery if project.images exists and has items
  const hasImages = project.images && project.images.length > 0;
  const images = hasImages ? project.images : [];

  const nextSlide = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <motion.div className="drawer-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="drawer-side-panel"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="drawer-close-x" onClick={onClose}>✕</button>

        {hasImages ? (
          <div className="drawer-gallery-container">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="gallery-main-img"
              />
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <div className="gallery-nav-controls">
                  <button className="nav-btn-circle prev" onClick={prevSlide}><span>‹</span></button>
                  <button className="nav-btn-circle next" onClick={nextSlide}><span>›</span></button>
                </div>
                <div className="gallery-counter">{currentIndex + 1} / {images.length}</div>
              </>
            )}
          </div>
        ) : (
          <div className="drawer-no-image-spacer" />
        )}

        <div className="drawer-body-content">
          <h2 className="drawer-project-title">{project.name}</h2>
          <div className="drawer-status-bar">
            <span className={`status-indicator ${project.status?.toLowerCase().replace(/\s+/g, '-')}`}></span>
            {project.status}
          </div>

          <div className="drawer-description-box">
            <h3>Project Overview</h3>
            <p>{project.description}</p>
          </div>

          {project.features && (
            <div className="drawer-section">
              <h3>Key Features</h3>
              <ul className="drawer-feature-list">
                {project.features.map((feat, i) => (
                  <li key={i}>🚀 {feat}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="drawer-action-footer">
            {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" className="action-btn primary">Live Demo</a>}
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="action-btn secondary">View Code</a>}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioContent } from '../../data/content';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Pagination Settings
  const INITIAL_COUNT = 9;
  const INCREMENT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  
  // Hard reset logic
  const [isResetting, setIsResetting] = useState(false);
  const [gridKey, setGridKey] = useState(0); // Used to force-remount the grid
  
  const sectionRef = useRef(null);

  // Data Processing
  const categories = ['All', ...new Set(portfolioContent.projects.items.map(p => p.category || 'iOS App'))];
  const filteredProjects = activeFilter === 'All'
    ? portfolioContent.projects.items
    : portfolioContent.projects.items.filter(p => (p.category || 'iOS App') === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const isShowMoreVisible = filteredProjects.length > INITIAL_COUNT;
  const isFinished = visibleCount >= filteredProjects.length;
  const projectsLeft = filteredProjects.length - visibleCount;

  const handleShowMore = () => {
    if (isFinished) {
      // 1. Enable reset mode
      setIsResetting(true);
      
      // 2. Force grid to unmount and remount by changing key
      setGridKey(prev => prev + 1);
      
      // 3. Set count back to exactly 9
      setVisibleCount(INITIAL_COUNT);
      
      // 4. INSTANT scroll (no smooth behavior to prevent animation triggers)
      const offset = 80;
      const elementPosition = sectionRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'auto' });

      // 5. Short delay to re-enable normal animations
      setTimeout(() => setIsResetting(false), 50);
    } else {
      setIsResetting(false);
      setVisibleCount(prev => prev + INCREMENT);
    }
  };

  // Variants that behave instantly if isResetting is true
  const cardVariants = {
    hidden: { 
      opacity: isResetting ? 1 : 0, 
      y: isResetting ? 0 : 40, 
      scale: isResetting ? 1 : 0.92 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: isResetting ? 0 : 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  return (
    <motion.section ref={sectionRef} id="projects" className="projects-section">
      <div className="projects-container">
        <header className="projects-header">
          <motion.h2 className="section-title">
            {portfolioContent.projects?.title || "My Projects"}
          </motion.h2>

          <div className="filter-container">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => {
                  setIsResetting(true);
                  setActiveFilter(cat);
                  setVisibleCount(INITIAL_COUNT);
                  setGridKey(prev => prev + 1);
                  setTimeout(() => setIsResetting(false), 50);
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* The key prop here is the secret. Changing it destroys the old grid items instantly */}
        <motion.div 
          key={gridKey}
          layout={!isResetting} 
          initial="hidden"
          animate="visible"
          className="projects-mesh-grid"
        >
          <AnimatePresence mode={isResetting ? 'wait' : 'popLayout'}>
            {displayedProjects.map((project) => (
              <motion.div
                layout={!isResetting}
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: isResetting ? 0 : 0.2 } }}
                className="modern-card"
                onClick={() => {
                  setSelectedProject(project);
                  document.body.style.overflow = 'hidden';
                }}
              >
                <div className="card-media">
                  <img src={project.thumbnail} alt={project.name} loading="lazy" />
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

        {isShowMoreVisible && (
          <div className="load-more-container">
            <motion.button 
              className="load-more-btn" 
              onClick={handleShowMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isFinished ? (
                 "Show Less" 
              ) : (
                <>
                  Show More <span className="btn-count-tag" style={{ marginLeft: '8px', opacity: 0.7 }}>{projectsLeft}</span>
                </>
              )}
            </motion.button>
          </div>
        )}

        <AnimatePresence>
          {selectedProject && (
            <ProjectDrawer
              project={selectedProject}
              onClose={() => {
                setSelectedProject(null);
                document.body.style.overflow = 'unset';
              }}
              currentIndex={currentImageIndex}
              setIndex={setCurrentImageIndex}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

// ... ProjectDrawer component remains same as previous ...
const ProjectDrawer = ({ project, onClose, currentIndex, setIndex }) => {
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
                {project.features.map((feat, i) => <li key={i}>🚀 {feat}</li>)}
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
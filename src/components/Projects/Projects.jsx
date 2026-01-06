import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioContent } from '../../data/content';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  
  const INITIAL_COUNT = 9;
  const INCREMENT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  
  const [isResetting, setIsResetting] = useState(false);
  const [gridKey, setGridKey] = useState(0);
  
  const sectionRef = useRef(null);

  // Filter Logic
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
      setIsResetting(true);
      setGridKey(prev => prev + 1);
      setVisibleCount(INITIAL_COUNT);
      const offset = 80;
      const elementPosition = sectionRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'auto' });
      setTimeout(() => setIsResetting(false), 50);
    } else {
      setIsResetting(false);
      setVisibleCount(prev => prev + INCREMENT);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: isResetting ? 0 : 0.08 }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: isResetting ? 0 : 40, 
      scale: isResetting ? 1 : 0.9,
      filter: isResetting ? "blur(0px)" : "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } 
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

        <motion.div 
          key={gridKey}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="projects-text-grid"
        >
          <AnimatePresence mode={isResetting ? 'wait' : 'popLayout'}>
            {displayedProjects.map((project) => (
              <motion.div
                layout={!isResetting}
                key={project.id}
                variants={cardVariants}
                className="text-card"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0); // Reset index on open
                  document.body.style.overflow = 'hidden';
                }}
              >
                <div className="text-card-inner">
                   <div className="text-card-header">
                      <span className="text-card-category">{project.category}</span>
                      <div className="text-card-arrow">↗</div>
                   </div>
                   <h3 className="text-card-name">{project.name}</h3>
                   <p className="text-card-summary">{project.summary}</p>
                   <div className="card-tech-stack">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="tech-mini-pill">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && <span className="tech-more">+{project.technologies.length - 4}</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {isShowMoreVisible && (
          <div className="load-more-container">
            <motion.button className="load-more-btn" onClick={handleShowMore}>
              {isFinished ? "Show Less" : <>Show More <span className="btn-count-tag">{projectsLeft}</span></>}
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

const ProjectDrawer = ({ project, onClose, currentIndex, setIndex }) => {
  const images = project.images || [];
  const [isImgLoading, setIsImgLoading] = useState(true);

  // Background Preload: Fetches all images for this project so gallery is instant
  useEffect(() => {
    if (images.length > 0) {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [images]);

  const handleNext = () => {
    setIsImgLoading(true);
    setIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIsImgLoading(true);
    setIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <motion.div className="drawer-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="drawer-side-panel"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-inner-container">
          <header className="drawer-sticky-header">
            <button className="drawer-back-btn" onClick={onClose}>
              <span className="back-icon">←</span> Close Case Study
            </button>
            <div className="drawer-header-actions">
              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="drawer-action-link">GitHub</a>}
              {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" className="drawer-action-link primary">Live Demo</a>}
            </div>
          </header>

          <div className="drawer-main-content">
            <div className="case-study-hero">
              <span className="case-category-label">{project.category}</span>
              <h2 className="case-title">{project.name}</h2>
              
              <div className="case-specs-bar">
                <div className="spec-item">
                  <span className="spec-label">Duration</span>
                  <span className="spec-value">{project.duration || "2 Months"}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Role</span>
                  <span className="spec-value">{project.role || "Lead Developer"}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Status</span>
                  <span className="spec-value status-flex">
                    <span className={`status-dot ${project.status?.toLowerCase()}`}></span>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Showcase with Loader */}
            {images.length > 0 && (
              <div className="case-gallery-container">
                <div className="case-image-viewport">
                  <AnimatePresence>
                    {isImgLoading && (
                      <motion.div 
                        className="case-image-loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="modern-spinner"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={images[currentIndex]}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: isImgLoading ? 0 : 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      onLoad={() => setIsImgLoading(false)}
                      className="case-main-image"
                      alt={`${project.name} screenshot`}
                    />
                  </AnimatePresence>
                </div>
                
                {images.length > 1 && (
                  <div className="case-gallery-controls">
                    <button className="nav-arrow-btn" onClick={handlePrev}>PREV</button>
                    <div className="case-dot-nav">
                        {images.map((_, i) => (
                            <span key={i} className={`nav-dot ${i === currentIndex ? 'active' : ''}`}></span>
                        ))}
                    </div>
                    <button className="nav-arrow-btn" onClick={handleNext}>NEXT</button>
                  </div>
                )}
              </div>
            )}

            <div className="case-details-grid">
              <div className="case-col-left">
                <section className="case-block">
                  <h4 className="case-section-heading">The Challenge</h4>
                  <p className="case-text">{project.description}</p>
                </section>

                {project.features && (
                  <section className="case-block">
                    <br/>
                    <h4 className="case-section-heading">Key Features</h4>
                    <ul className="modern-feature-list">
                      {project.features.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              <div className="case-col-right">
                <div className="case-stack-section">
                  <h4 className="case-section-heading">Core Stack</h4>
                  <div className="full-tech-wrap">
                    {project.technologies.map((t, i) => (
                      <span key={i} className="tech-tag-modern">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
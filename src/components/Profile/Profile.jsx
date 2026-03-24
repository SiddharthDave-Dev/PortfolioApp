import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { portfolioContent } from '../../data/content';
import './Profile.css';

const Profile = () => {
  const { scrollY } = useScroll();
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowResumeOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const yImage = useTransform(scrollY, [0, 500], [0, -60]);
  const yText = useTransform(scrollY, [0, 500], [0, 40]);

  const resumeCategories = [
    { label: 'AI / ML Engineer', icon: '🤖', file: 'Siddharth_Dave_Resume_AI_ML.pdf' },
    { label: 'Data Scientist', icon: '📊', file: 'Siddharth_Dave_Resume_DS.pdf' },
    { label: 'Data Analyst', icon: '🔍', file: 'Siddharth_Dave_Resume_DA.pdf' },
    { label: 'Business Analyst', icon: '💼', file: 'Siddharth_Dave_Resume_BA.pdf' },
    // { label: 'iOS Developer', icon: '📱', file: 'Siddharth_Dave_Resume_iOS.pdf' },
  ];

  const handleDownload = (fileName) => {
    const link = document.createElement('a');
    link.href = `/resume/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowResumeOptions(false);
  };

  return (
    <section id="home" className="cyber-hero">
      <div className="bg-elements">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="bg-particle" style={{ left: `${i * 9}%`, top: `${(i * 19) % 100}%` }} />
        ))}
      </div>

      <div className="cyber-container">
        <div className="cyber-grid">
          <motion.div className="cyber-content" style={{ y: yText }}>
            {/* ... Badge and Name Logic stays same ... */}
            <motion.div className="cyber-badge" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="pulse-dot"></span>
              {portfolioContent.profile.greeting}
            </motion.div>

            <h1 className="cyber-name">
              {portfolioContent.profile.name.split(' ').map((n, i) => (
                <span key={i} className={i === 0 ? "name-main" : "name-sub"}>{n}</span>
              ))}
            </h1>

            <div className="cyber-typewriter-box">
              <TypeAnimation sequence={portfolioContent.profile.roles.flatMap(role => [role, 2000])} repeat={Infinity} className="type-text" />
            </div>

            <p className="cyber-bio">{portfolioContent.profile.description}</p>

            <div className="cyber-actions">
              {/* RESUME DROPDOWN SYSTEM */}
              <div className="resume-dropdown-wrapper" ref={dropdownRef}>
                <button 
                  className={`premium-btn-primary ${showResumeOptions ? 'active' : ''}`} 
                  onClick={() => setShowResumeOptions(!showResumeOptions)}
                >
                  <span>{portfolioContent.profile.resumeText}</span>
                  <i className={`chevron-icon ${showResumeOptions ? 'up' : ''}`}>▼</i>
                </button>

                <AnimatePresence>
                  {showResumeOptions && (
                    <motion.div 
                      className="resume-options-menu"
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    >
                      <div className="menu-header">Select Specialization</div>
                      {resumeCategories.map((item, idx) => (
                        <motion.div 
                          key={idx}
                          className="resume-option-item"
                          whileHover={{ x: 8, backgroundColor: "rgba(102, 126, 234, 0.15)" }}
                          onClick={() => handleDownload(item.file)}
                        >
                          <span className="option-icon">{item.icon}</span>
                          <span className="option-label">{item.label}</span>
                          <span className="option-arrow">→</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                className="premium-btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                {portfolioContent.profile.contactText}
              </button>
            </div>
          </motion.div>

          {/* ... Right Visual Logic stays same ... */}
          <motion.div className="cyber-visual-wrapper" style={{ y: yImage }}>
             <div className="cyber-frame">
              <div className="glass-card">
                <img src={portfolioContent.profile.profileImage} alt="Profile" className="cyber-img" />
              </div>
              <div className="geo-corner top-left"></div>
              <div className="geo-corner bottom-right"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
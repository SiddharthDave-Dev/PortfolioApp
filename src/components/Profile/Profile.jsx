import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { portfolioContent } from '../../data/content';
import './Profile.css';

const Profile = () => {
  const { scrollY } = useScroll();

  // High-end parallax effects
  const yImage = useTransform(scrollY, [0, 500], [0, -60]);
  const yText = useTransform(scrollY, [0, 500], [0, 40]);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = portfolioContent.profile.resumeUrl || '/resume/Siddharth_Resume.pdf';
    link.download = portfolioContent.profile.resumeFileName || 'Siddharth_Dave_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="cyber-hero">
      {/* Background Particles - Logic Preserved */}
      <div className="bg-elements">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="bg-particle"
            style={{ left: `${i * 9}%`, top: `${(i * 19) % 100}%` }}
          />
        ))}
      </div>

      <div className="cyber-container">
        <div className="cyber-grid">

          {/* LEFT CONTENT */}
          <motion.div className="cyber-content" style={{ y: yText }}>
            <motion.div
              className="cyber-badge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="pulse-dot"></span>
              {portfolioContent.profile.greeting}
            </motion.div>

            {/* NAME SECTION - STACKED FOR LUXURY UI */}
            <h1 className="cyber-name">
              {portfolioContent.profile.name.split(' ').map((n, i) => (
                <span key={i} className={i === 0 ? "name-main" : "name-sub"}>
                  {n}
                </span>
              ))}
            </h1>

            <div className="cyber-typewriter-box">
              <TypeAnimation
                sequence={portfolioContent.profile.roles.flatMap(role => [role, 2000])}
                repeat={Infinity}
                className="type-text"
              />
            </div>

            <p className="cyber-bio">{portfolioContent.profile.description}</p>

            <div className="social-pill-wrapper">
              {portfolioContent.profile.social?.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="premium-social-btn"
                  whileHover={{ y: -5 }}
                >
                  {s.name}
                  <div className="social-btn-dot"></div>
                </motion.a>
              ))}
            </div>

            <div className="cyber-actions">
              <button className="premium-btn-primary" onClick={handleResumeDownload}>
                {portfolioContent.profile.resumeText}
              </button>
              <button
                className="premium-btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                {portfolioContent.profile.contactText}
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div className="cyber-visual-wrapper" style={{ y: yImage }}>
            <div className="cyber-frame">
              <div className="glass-card">
                <img
                  src={portfolioContent.profile.profileImage}
                  alt="Profile"
                  className="cyber-img"
                />
              </div>

              {/* CODE BLOCK - GLITCH FIXED WITH viewPort once:true */}
              <motion.div
                className="floating-code-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="code-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="code-tag">logic.js</span>
                </div>
                <div className="code-content">
                  <code>
                    <span className="keyword">func</span> <span className="func-name">createAwesome</span>() &#123;<br />
                    &nbsp;&nbsp;<span className="keyword">return</span> innovation + passion <br />
                    &#125;
                  </code>
                </div>
              </motion.div>

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
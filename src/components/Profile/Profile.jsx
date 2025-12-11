import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { portfolioContent } from '../../data/content';
import './Profile.css';

const Profile = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Function to handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = portfolioContent.profile.resumeUrl || '/resume/Siddharth_Resume.pdf';
    link.download = portfolioContent.profile.resumeFileName || 'Siddharth_Dave_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 1.2
      }
    }
  };

  return (
    <motion.section 
      id="home" 
      className="profile"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      {/* Background Elements */}
      <motion.div 
        className="bg-elements"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-particle"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="profile-container">
        <motion.div className="profile-content" variants={itemVariants}>
          <motion.div
            className="greeting-container"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h2 
              className="greeting"
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 10px rgba(102, 126, 234, 0.5)",
                  "0 0 20px rgba(102, 126, 234, 0.8)",
                  "0 0 10px rgba(102, 126, 234, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {portfolioContent.profile.greeting}
            </motion.h2>
          </motion.div>
          
          <motion.h1 
            className="name"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.7 
            }}
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="gradient-text"
            >
              {portfolioContent.profile.name}
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="role-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="role-prefix">I'm a </span>
            <TypeAnimation
              sequence={portfolioContent.profile.roles.flatMap(role => [role, 2000])}
              wrapper="span"
              speed={50}
              className="typewriter gradient-text"
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.p 
            className="description"
            variants={itemVariants}
            whileInView={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {portfolioContent.profile.description}
          </motion.p>
          
          <motion.div 
            className="cta-buttons"
            variants={itemVariants}
          >
            <motion.button 
              className="btn btn-primary"
              onClick={handleResumeDownload}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 40px rgba(102, 126, 234, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 5px 20px rgba(102, 126, 234, 0.2)",
                  "0 10px 30px rgba(102, 126, 234, 0.4)",
                  "0 5px 20px rgba(102, 126, 234, 0.2)"
                ]
              }}
              transition={{ duration: 2, repeat: false }}
            >
              <span>{portfolioContent.profile.resumeText}</span>
              <motion.div 
                className="btn-glow"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
            
            <motion.button 
              className="btn btn-secondary"
              onClick={scrollToContact}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(102, 126, 234, 0.1)",
                borderColor: "#f093fb"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {portfolioContent.profile.contactText}
            </motion.button>
          </motion.div>

          {/* Social Links - Now using profile.social */}
          <motion.div 
            className="social-links"
            variants={itemVariants}
          >
            {portfolioContent.profile.social?.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  color: "#667eea",
                  boxShadow: "0 5px 20px rgba(102, 126, 234, 0.4)",
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17,
                  rotate: { duration: 0.6 }
                }}
              >
                <span className="social-name">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="profile-visual"
          variants={itemVariants}
          transition={{ delay: 0.8 }}
          style={{ y }}
        >
          <motion.div 
            className="avatar-container"
            variants={imageVariants}
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.1,
              rotate: 10,
              boxShadow: "0 20px 60px rgba(102, 126, 234, 0.4)"
            }}
          >
            <motion.div 
              className="avatar-gradient"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div 
              className="avatar-inner"
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={portfolioContent.profile.profileImage}
                alt="Profile"
                className="avatar-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="avatar-fallback">SD</div>
            </motion.div>
            
            <motion.div 
              className="avatar-ring"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          
          {/* Floating Elements */}
          <motion.div className="floating-elements">
            {[
              { shape: 'mobile', class: 'mobile-icon' },
              { shape: 'laptop', class: 'laptop-icon' },
              { shape: 'chart', class: 'chart-icon' },
              { shape: 'bolt', class: 'bolt-icon' },
              { shape: 'rocket', class: 'rocket-icon' },
              { shape: 'bulb', class: 'bulb-icon' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`floating-element ${item.class}`}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 3 + index * 0.3,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut",
                  type: "tween"
                }}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 180,
                  transition: { duration: 0.3 },
                  zIndex: 15
                }}
                style={{
                  position: 'absolute',
                  top: `${20 + (index * 10)}%`,
                  left: `${20 + (index % 2) * 60}%`,
                  transform: 'translate(-50%, -50%)',
                  transformOrigin: 'center',
                  zIndex: 10,
                }}
              />
            ))}
          </motion.div>

          {/* Code Animation */}
          <motion.div 
            className="code-animation"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="code-line">func createAwesome() &#123;</div>
            <div className="code-line">&nbsp;&nbsp;return innovation + passion</div>
            <div className="code-line">&#125;</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Profile;

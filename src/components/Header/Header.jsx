import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioContent } from '../../data/content';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    // Scroll to top instead of reloading or changing URL
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Custom Navigation Logic
  const handleNavClick = (e, targetId) => {
    e.preventDefault(); // This prevents the #target from being added to the URL
    
    const targetElement = document.getElementById(targetId.toLowerCase());
    
    if (targetElement) {
      const offset = 80; // Matches your header height to prevent overlapping
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="header-container glass-effect">
        <motion.div
          className="logo"
          onClick={handleLogoClick}
          variants={logoVariants}
          whileHover={{
            scale: 1.1,
            rotate: 360,
            boxShadow: "0 0 30px rgba(102, 126, 234, 0.6)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ cursor: 'pointer' }}
        >
          <span className="logo-text">{portfolioContent.header.logo}</span>
          <motion.div
            className="logo-glow"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <nav className="nav">
          {portfolioContent.header.navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              variants={navItemVariants}
              // TRIGGER CUSTOM SCROLL HERE
              onClick={(e) => handleNavClick(e, item)}
              whileHover={{
                scale: 1.1,
                y: -2,
                color: "#667eea",
                textShadow: "0 0 10px rgba(102, 126, 234, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="nav-text">{item}</span>
              <motion.div
                className="nav-underline"
                whileHover={{ scaleX: 1 }}
                initial={{ scaleX: 0 }}
              />
            </motion.a>
          ))}
        </nav>

        <motion.button
          className="menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} />
          <motion.span animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} />
          <motion.span animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} />
        </motion.button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {portfolioContent.header.navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="mobile-nav-link"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                // TRIGGER CUSTOM SCROLL HERE TOO
                onClick={(e) => handleNavClick(e, item)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
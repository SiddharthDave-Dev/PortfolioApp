import React, { useState, useEffect, useRef } from 'react'; // Added useRef
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioContent } from '../../data/content';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null); // Ref to track the header area

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Dismiss menu on scroll
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    const handleClickOutside = (event) => {
      // If menu is open and the click is NOT inside the header or mobile menu
      if (isMobileMenuOpen && headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside); // Listen for clicks

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]); // Dependency on state to update listener logic

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const id = targetId.toLowerCase();
    const targetElement = document.getElementById(id);
    
    setIsMobileMenuOpen(false); 

    if (targetElement) {
      setTimeout(() => {
        const offset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  return (
    <motion.header
      ref={headerRef} // Attach ref here
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="header-container glass-effect">
        <div className="logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="logo-text">{portfolioContent.header.logo}</span>
          <div className="logo-glow" />
        </div>

        <nav className="nav">
          {portfolioContent.header.navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              onClick={(e) => handleNavClick(e, item)}
            >
              <span className="nav-text">{item}</span>
              <div className="nav-underline" />
            </a>
          ))}
        </nav>

        <button className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className={`line ${isMobileMenuOpen ? 'open' : ''}`} />
          <span className={`line ${isMobileMenuOpen ? 'open' : ''}`} />
          <span className={`line ${isMobileMenuOpen ? 'open' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {portfolioContent.header.navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, item)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
import React from 'react';
import { portfolioContent } from '../../data/content';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Logo and name */}
        <div className="footer-brand">
          <div className="footer-logo">{portfolioContent.header.logo}</div>
          <div className="footer-site-name">{portfolioContent.header.name}</div>
        </div>

        {/* Center: Quick navigation */}
        <nav className="footer-links">
          {portfolioContent.header.navItems.map((item, i) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="footer-link">
              {item}
            </a>
          ))}
        </nav>

        {/* Right: Social icons with images */}
        <div className="footer-social">
          {portfolioContent.contact.social?.map((social, i) => (
            <a 
              key={i} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
            >
              <img 
                src={social.icon} 
                alt={social.name || 'Social Icon'} 
                className="footer-social-icon"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline-block';
                }}
              />
              <span className="footer-social-fallback">🔗</span>
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {currentYear} {portfolioContent.header.name}. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

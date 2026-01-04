import React from 'react';
import { portfolioContent } from '../../data/content';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const contact = portfolioContent.contact;

  // Helper to extract name for CSS targeting (e.g., "linkedin" from the URL)
  const getSocialName = (url) => {
    if (url.includes('github')) return 'Github';
    if (url.includes('linkedin')) return 'Linkedin';
    if (url.includes('x.com') || url.includes('twitter')) return 'X';
    if (url.includes('tableau')) return 'Tableau';
    return 'Social';
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Brand & About */}
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <div className="footer-logo">{portfolioContent.header.logo}</div>
            <div className="footer-site-name">{portfolioContent.header.name}</div>
          </div>
          <p className="footer-desc">
            {contact.subtitle}
          </p>
          <div className="footer-social-grid">
            {contact.social?.map((social, i) => {
              const socialName = getSocialName(social.url);
              return (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title={socialName}
                >
                  <img
                    src={social.icon}
                    alt={socialName}
                    className="footer-social-img"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <nav className="footer-nav">
            {portfolioContent.header.navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="footer-nav-item">
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Column 3: Services */}
        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-services-list">
            {portfolioContent.contact.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Column 4: Connect With Me */}
        <div className="footer-col">
          <h4 className="footer-heading">Connect With Me</h4>
          <div className="footer-contact-details">
            {contact.methods.map((method, i) => {
              let href = "#";
              const label = method.label.toLowerCase();
              if (label.includes('email')) href = `mailto:${method.value}`;
              if (label.includes('phone')) href = `tel:${method.value.replace(/\s+/g, '')}`;
              if (label.includes('location')) href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(method.value)}`;

              return (
                <a
                  key={i}
                  href={href}
                  className="footer-contact-link"
                  target={href.startsWith('http') ? "_blank" : "_self"}
                  rel="noreferrer"
                >
                  <span className="footer-contact-icon">{method.icon}</span>
                  <span className="footer-contact-text">{method.value}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© {currentYear} {portfolioContent.header.name}. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
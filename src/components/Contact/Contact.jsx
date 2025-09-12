import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { portfolioContent } from '../../data/content';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('Sending...');

    // Replace these with your actual EmailJS credentials
    const serviceId = 'service_3jsl17k';
    const templateId = 'template_gsd29rv';
    const publicKey = 'Yb2WrEcICv3u_8QEW';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setStatus('Message sent successfully! I\'ll get back to you soon.');
          setFormData({
            user_name: '',
            user_email: '',
            subject: '',
            message: ''
          });
          setIsLoading(false);
          
          // Clear success message after 5 seconds
          setTimeout(() => setStatus(null), 5000);
      }, (error) => {
          console.log('FAILED...', error.text);
          setStatus('Failed to send message. Please try again later.');
          setIsLoading(false);
          
          // Clear error message after 5 seconds
          setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="contact-container">
        {/* Header */}
        <motion.div className="contact-header" variants={itemVariants}>
          <motion.h2 className="contact-title">
            {portfolioContent.contact.title}
          </motion.h2>
          <motion.p className="contact-subtitle">
            {portfolioContent.contact.subtitle}
          </motion.p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Info */}
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Let's Connect</h3>
            <div className="contact-methods">
              {portfolioContent.contact.methods.map((method, index) => (
                <motion.div
                  key={index}
                  className="contact-method"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-info">
                    <h4>{method.label}</h4>
                    <p>{method.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links - Updated to use images */}
            <div className="contact-social">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {portfolioContent.contact.social.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 5,
                      boxShadow: "0 5px 15px rgba(102, 126, 234, 0.4)"
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name || 'Social Icon'} 
                      className="social-icon-img"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'inline-block';
                      }}
                    />
                    <span className="social-icon-fallback">🔗</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="contact-form-container" variants={itemVariants}>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="user_name">Full Name *</label>
                  <motion.input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="user_email">Email Address *</label>
                  <motion.input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              </div>

              <motion.button
                type="submit"
                className={`submit-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
                whileHover={!isLoading ? { 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(102, 126, 234, 0.4)"
                } : {}}
                whileTap={!isLoading ? { scale: 0.95 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {isLoading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </motion.button>

              {/* Status Message */}
              {status && (
                <motion.div
                  className={`status-message ${status.includes('success') ? 'success' : 'error'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {status}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

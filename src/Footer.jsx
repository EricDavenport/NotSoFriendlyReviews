import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: contact@notsofriendlyreviews.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div className="copyright">
          <p>&copy; {currentYear} Not So Friendly Reviews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

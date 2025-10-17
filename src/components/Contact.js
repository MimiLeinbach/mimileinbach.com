import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-image">
          <img 
            src={process.env.PUBLIC_URL + '/Contact.jpg'} 
            alt="Mimi Leinbach"
          />
        </div>
        <div className="contact-content">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>510-852-4044</span>
          </div>
          
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>mimi@mimileinbach.com</span>
          </div>
          
          <div className="contact-item">
            <i className="fab fa-linkedin"></i>
            <a 
              href="https://linkedin.com/in/mimileinbach/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          
          <div className="contact-item">
            <i className="fab fa-github"></i>
            <a 
              href="https://github.com/MimiLeinbach" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
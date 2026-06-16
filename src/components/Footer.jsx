import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Munugoti Vasumathi. All rights reserved.</p>
          <p className="footer-note">B.Tech Electronics & Communication Engineering Student</p>
        </div>

        <div className="footer-links">
          <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }); }}>About</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }); }}>Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}>Contact</a>
        </div>

        <button 
          onClick={handleScrollToTop} 
          className="scroll-top-btn" 
          aria-label="Scroll to top"
          title="Scroll to Top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}

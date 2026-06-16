import React from 'react';
import { Mail, Download, Eye, ArrowDown } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import './Hero.css';

export default function Hero() {
  const handleScrollToContact = () => {
    const target = document.querySelector('#contact');
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-container section">
      <div className="hero-content">
        <div className="hero-text-block animate-fade-in">
          <div className="hero-greetings badge">
            <span>Welcome to my professional space</span>
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Vasumathi Munugoti</span>
          </h1>
          <h2 className="hero-subtitle">
            B.Tech Electronics & Communication Engineer
          </h2>
          <p className="hero-description">
            Aspiring software developer and IoT enthusiast. Passionate about designing smart systems, bridging hardware and software, and building recruiter-friendly digital solutions.
          </p>

          <div className="hero-buttons">
            <a href="/resume_placeholder.pdf" download="Munugoti_Vasumathi_Resume.pdf" className="btn btn-primary">
              <Download size={18} />
              <span>Download Resume</span>
            </a>
            <a href="/resume_placeholder.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Eye size={18} />
              <span>View Resume</span>
            </a>
            <button onClick={handleScrollToContact} className="btn btn-secondary">
              Let's Connect
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="mailto:vasumathi377@gmail.com" className="social-icon-btn" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual-block">
          <div className="hero-avatar-wrapper animate-float">
            <div className="hero-avatar-glow"></div>
            <img src="/profile_avatar.jpeg" alt="Munugoti Vasumathi Avatar" className="hero-avatar-img" />
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator" onClick={handleScrollToContact}>
        <span>Explore My Work</span>
        <ArrowDown size={16} className="arrow-icon" />
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import './Contact.css';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form states
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState(''); // 'success', 'error', ''
  const [isLoading, setIsLoading] = useState(false);

  const emailVal = 'vasumathi377@gmail.com';
  const phoneVal = '+91 93901 56241';

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(''), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="contact-container section">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">Feel free to reach out for placements, internship opportunities, or queries.</p>

      <div className="contact-grid">
        {/* Contact info details */}
        <div className="contact-info-block">
          <div className="info-card glass-card">
            <div className="info-item">
              <div className="info-icon-wrapper">
                <Mail size={20} />
              </div>
              <div className="info-details">
                <span className="info-label">Email Address</span>
                <span className="info-value">{emailVal}</span>
              </div>
              <button 
                onClick={() => copyToClipboard(emailVal, 'email')} 
                className="copy-btn" 
                title="Copy to Clipboard"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check size={16} className="copied-check" /> : <Copy size={16} />}
              </button>
            </div>

            <div className="info-item">
              <div className="info-icon-wrapper">
                <Phone size={20} />
              </div>
              <div className="info-details">
                <span className="info-label">Phone Number</span>
                <span className="info-value">{phoneVal}</span>
              </div>
              <button 
                onClick={() => copyToClipboard(phoneVal, 'phone')} 
                className="copy-btn" 
                title="Copy to Clipboard"
                aria-label="Copy Phone"
              >
                {copiedPhone ? <Check size={16} className="copied-check" /> : <Copy size={16} />}
              </button>
            </div>

            <div className="info-item">
              <div className="info-icon-wrapper">
                <MapPin size={20} />
              </div>
              <div className="info-details">
                <span className="info-label">Location</span>
                <span className="info-value">Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          <div className="socials-vertical-card glass-card">
            <h3>Find Me Online</h3>
            <div className="contact-socials-grid">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-row-link">
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-row-link">
                <Github size={20} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form block */}
        <div className="contact-form-block glass-card">
          <h3>Send a Message</h3>
          
          <form action="https://formspree.io/f/mkoaebqy" method="POST" className="contact-form">
            <div className="form-group-row">
              <div className="form-input-control">
                <label htmlFor="name">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="John Doe"
                />
              </div>
              <div className="form-input-control">
                <label htmlFor="email">Your Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="johndoe@example.com"
                />
              </div>
            </div>

            <div className="form-input-control">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleInputChange} 
                placeholder="Regarding Opportunity"
              />
            </div>

            <div className="form-input-control">
              <label htmlFor="message">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleInputChange} 
                required 
                placeholder="Hi Vasumathi, we would love to review your projects..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-submit" disabled={isLoading}>
              {isLoading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {formStatus === 'success' && (
              <div className="form-alert alert-success">
                Message sent successfully! I will respond to you shortly. Thank you!
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="form-alert alert-error">
                Please fill in all required fields.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

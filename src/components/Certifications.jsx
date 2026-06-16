import React from 'react';
import { Award, BookOpen, ShieldAlert, Star } from 'lucide-react';
import './Certifications.css';

export default function Certifications() {
  const certificationsData = [
    {
      title: 'Introduction to Internet of Things (IoT)',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      date: 'April 2024',
      badge: 'Gold Medal',
      color: 'gold',
      description: 'Awarded Gold Medal certificate for outstanding performance, ranking in the top tier of candidates nationwide. Covers IoT nodes, sensor networks, cloud integration, communication protocols, and embedded system structures.'
    },
    {
      title: 'Salesforce Developer & Admin Credentials',
      issuer: 'Salesforce Trailhead',
      date: 'July 2024',
      badge: 'Explorer Rank',
      color: 'blue',
      description: 'Completed several superbadges and badges covering apex development, lightning component creation, user security configuration, flows, and process automation.'
    }
  ];

  return (
    <section id="certifications" className="certifications-container section">
      <h2 className="section-title">Certifications & Achievements</h2>
      <p className="section-subtitle">Formal acknowledgements of my engineering and software competencies.</p>

      <div className="certs-list">
        {certificationsData.map((cert, idx) => (
          <div key={idx} className={`cert-item-card glass-card border-${cert.color}`}>
            <div className="cert-badge-ribbon">
              <Award className={`icon-${cert.color}`} size={20} />
              <span className={`badge-text-${cert.color}`}>{cert.badge}</span>
            </div>

            <div className="cert-main-info">
              <h3 className="cert-title">{cert.title}</h3>
              <h4 className="cert-issuer">{cert.issuer}</h4>
              <span className="cert-date">{cert.date}</span>
              <p className="cert-desc">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

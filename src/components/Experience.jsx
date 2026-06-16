import React from 'react';
import { Briefcase, Calendar, CheckCircle, Award } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const responsibilities = [
    'Studied Salesforce architecture and configuration basics, setting up security controls, profiles, and organization-wide defaults.',
    'Designed custom business automation processes using Salesforce Flows, validation rules, and approval processes.',
    'Developed custom Apex classes, triggers, and test suites to build asynchronous backend services and business logic.',
    'Created interactive frontend user interfaces using Lightning Web Components (LWC) and integrated with controller classes.',
    'Earned badges on Salesforce Trailhead, demonstrating proficiency in both Salesforce Admin and Developer tracks.'
  ];

  return (
    <section id="experience" className="experience-container section">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">A record of my professional exposure and internship training.</p>

      <div className="experience-card-wrapper">
        <div className="experience-card glass-card">
          <div className="experience-header">
            <div className="header-meta">
              <div className="icon-wrapper-exp">
                <Briefcase size={22} />
              </div>
              <div>
                <h3>Salesforce Developer Intern</h3>
                <h4>SmartBridge</h4>
              </div>
            </div>

            <div className="header-timeline">
              <span className="exp-badge">Internship</span>
              <span className="exp-date">
                <Calendar size={12} />
                May 2024 – July 2024
              </span>
            </div>
          </div>

          <p className="exp-summary">
            Participated in the Salesforce developer training program in collaboration with SmartInternz/SmartBridge. Acquired hands-on experience in building custom applications on the Salesforce Lightning Platform, integrating backend logic with modern responsive UI.
          </p>

          <div className="responsibilities-list">
            <h4>Key Responsibilities & Learning Outcomes:</h4>
            {responsibilities.map((resp, idx) => (
              <div key={idx} className="resp-item">
                <CheckCircle size={16} className="resp-icon" />
                <p>{resp}</p>
              </div>
            ))}
          </div>

          <div className="exp-skills-tags">
            <span className="skill-tag">Salesforce Admin</span>
            <span className="skill-tag">Apex Programming</span>
            <span className="skill-tag">Lightning Web Components (LWC)</span>
            <span className="skill-tag">Salesforce Flows</span>
            <span className="skill-tag">SOQL/SOSL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

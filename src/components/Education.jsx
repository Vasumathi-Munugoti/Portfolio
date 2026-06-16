import React from 'react';
import { Calendar, Award, BookOpen } from 'lucide-react';
import './Education.css';

export default function Education() {
  const educationData = [
    {
      institution: 'Siddhartha Institute of Engineering and Technology',
      period: '2022 – 2026',
      degree: 'Bachelor of Technology (B.Tech)',
      department: 'Electronics and Communication Engineering (ECE)',
      metricLabel: 'CGPA',
      metricValue: '8.81 / 10',
      description: 'Acquiring deep knowledge in electronic devices, communication protocols, microprocessors, digital signal processing, and IoT systems.',
      keySubjects: ['Embedded Systems', 'Digital Electronics', 'IoT Architectures', 'Signals & Systems']
    },
    {
      institution: 'TSMS Junior College',
      period: '2020 – 2022',
      degree: 'Intermediate (Class XII)',
      department: 'MPC (Mathematics, Physics, Chemistry)',
      metricLabel: 'CGPA',
      metricValue: '8.9 / 10',
      description: 'Strengthened analytical foundations in science and mathematics with rigorous academic training.',
      keySubjects: ['Mathematics', 'Physics', 'Chemistry']
    },
    {
      institution: 'SSR High School',
      period: '2019 – 2020',
      degree: 'Secondary School Certificate (Class X)',
      department: 'General Board Curriculum',
      metricLabel: 'CGPA',
      metricValue: '10 / 10',
      description: 'Maintained a perfect academic score, building strong core competencies in science and social sciences.',
      keySubjects: ['Science', 'Mathematics', 'Social Studies']
    }
  ];

  return (
    <section id="education" className="education-container section">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">A timeline of my academic milestones and educational foundation.</p>

      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        {educationData.map((edu, idx) => (
          <div key={idx} className="timeline-item">
            {/* Timeline Dot */}
            <div className="timeline-dot-container">
              <div className="timeline-dot">
                <BookOpen size={14} className="timeline-dot-icon" />
              </div>
            </div>

            {/* Timeline Content */}
            <div className="timeline-content-card glass-card">
              <div className="timeline-header">
                <div>
                  <span className="timeline-period">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                  <h3 className="timeline-inst-name">{edu.institution}</h3>
                  <h4 className="timeline-degree">
                    {edu.degree} {edu.department ? `in ${edu.department}` : ''}
                  </h4>
                </div>
                
                <div className="timeline-badge-score">
                  <Award size={14} />
                  <span>{edu.metricLabel}: {edu.metricValue}</span>
                </div>
              </div>

              <p className="timeline-desc">{edu.description}</p>
              
              <div className="timeline-subjects-tags">
                {edu.keySubjects.map((sub, sIdx) => (
                  <span key={sIdx} className="subject-tag">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

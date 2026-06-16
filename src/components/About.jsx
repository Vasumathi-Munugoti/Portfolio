import React from 'react';
import { Award, BookOpen, GraduationCap, Target } from 'lucide-react';
import './About.css';

export default function About() {
  const stats = [
    { icon: <GraduationCap className="stat-icon" />, label: 'B.Tech Course', value: 'ECE Student' },
    { icon: <Award className="stat-icon" />, label: 'Academic CGPA', value: '8.81 / 10' },
    { icon: <BookOpen className="stat-icon" />, label: 'Institution', value: 'Siddhartha Inst.' },
  ];

  return (
    <section id="about" className="about-container section">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Get to know my career aspirations, academic foundation, and drive.</p>

      <div className="about-grid">
        <div className="about-text-card glass-card">
          <div className="card-header-icon">
            <Target size={24} className="target-icon" />
            <h3>Career Objective</h3>
          </div>
          <p className="about-objective-text">
            To leverage my knowledge in Electronics and Communication Engineering, along with my programming skills in Java, Web Development, and Database Management, to contribute effectively to a dynamic organization, while continuously learning and growing in the software and technology sector.
          </p>
          <p className="about-additional-text">
            I am driven by a curiosity to understand how software controls hardware, which led me to study ECE and specialize in IoT and Java-based architectures. I enjoy solving algorithmic challenges, building interactive web applications, and programming microcontrollers.
          </p>
        </div>

        <div className="about-stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-card">
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

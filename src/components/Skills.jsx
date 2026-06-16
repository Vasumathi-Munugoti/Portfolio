import React from 'react';
import { Code2, Globe, Cpu, Wrench } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Software',
      icon: <Code2 className="cat-icon" size={20} />,
      skills: [
        { name: 'Java', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'GitHub', level: 85 }
      ]
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="cat-icon" size={20} />,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 }
      ]
    },
    {
      title: 'ECE & IoT Specialties',
      icon: <Cpu className="cat-icon" size={20} />,
      skills: [
        { name: 'Internet of Things (IoT)', level: 88 },
        { name: 'Embedded Systems', level: 75 },
        { name: 'Microcontrollers (Arduino/8051)', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-container section">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">A review of my technical proficiencies and hardware-software capabilities.</p>

      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skills-category-card glass-card">
            <div className="category-header">
              <div className="category-icon-wrapper">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
            </div>

            <div className="skills-list">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div 
                      className="skill-bar-fill" 
                      style={{ '--target-width': `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

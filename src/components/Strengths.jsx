import React from 'react';
import { Lightbulb, MessageSquare, ShieldCheck, Users, Zap } from 'lucide-react';
import './Strengths.css';

export default function Strengths() {
  const strengthsData = [
    {
      name: 'Problem Solving',
      icon: <Lightbulb size={24} />,
      desc: 'Analytical approach to software and hardware debugging. Enjoys tackling coding problems and troubleshooting IoT systems.'
    },
    {
      name: 'Communication',
      icon: <MessageSquare size={24} />,
      desc: 'Effective written and verbal presentation skills. Able to express technical architectures and details clearly to peers.'
    },
    {
      name: 'Adaptability',
      icon: <ShieldCheck size={24} />,
      desc: 'Quick to adjust to new tools, software frameworks, and hardware environments. Thrives under shifting schedules.'
    },
    {
      name: 'Leadership',
      icon: <Users size={24} />,
      desc: 'Experienced in coordinating academic projects, aligning team responsibilities, and ensuring timely goal completions.'
    },
    {
      name: 'Quick Learning',
      icon: <Zap size={24} />,
      desc: 'High capacity for rapid technical learning, as demonstrated by mastering Salesforce, Apex, and LWC during my internship.'
    }
  ];

  return (
    <section id="strengths" className="strengths-container section">
      <h2 className="section-title">Strengths</h2>
      <p className="section-subtitle">Core personal and professional qualities that I bring to a development team.</p>

      <div className="strengths-grid-list">
        {strengthsData.map((str, idx) => (
          <div key={idx} className="strength-card glass-card">
            <div className="strength-icon-box">
              {str.icon}
            </div>
            <h3 className="strength-name">{str.name}</h3>
            <p className="strength-desc">{str.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

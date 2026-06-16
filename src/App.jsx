import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`app-root ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content-layout">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Strengths />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

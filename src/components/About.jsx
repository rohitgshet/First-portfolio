import React from 'react';
import { 
  Code, 
  Database, 
  BrainCircuit, 
  Film, 
  Languages, 
  MapPin, 
  GraduationCap, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Code size={24} className="text-accent-indigo" />,
      title: "Programming & Web Development",
      description:
        "Building applications using Python, Java, and modern web stacks (HTML, CSS, JavaScript, React, Node.js, Express.js). Focused on writing clean, modular, and maintainable software.",
      highlights: ["Python & Java Foundations", "Full-Stack Web (React & Node)", "REST API Engineering"],
    },
    {
      icon: <Database size={24} className="text-accent-cyan" />,
      title: "Databases & Problem Solving",
      description:
        "Strong foundation in Data Structures and Algorithms with systematic problem-solving approaches. Hands-on experience integrating MongoDB for structured and document persistence.",
      highlights: ["Data Structures & Algorithms", "MongoDB Data Integration", "CRUD System Architecture"],
    },
    {
      icon: <BrainCircuit size={24} className="text-accent-violet" />,
      title: "AI & ML Academic Foundation",
      description:
        "Pursuing B.E. in Artificial Intelligence & Machine Learning at AJIET Mangaluru. Grounded in core machine learning principles, data structures, and database systems coursework.",
      highlights: ["Formal AI/ML Curriculum", "DBMS & Computational Logic", "Final Year Engineering Student"],
    },
    {
      icon: <Film size={24} className="text-accent-emerald" />,
      title: "Creative Editing & Visual Media",
      description:
        "Complementing engineering logic with creative storytelling through Adobe Premiere Pro and After Effects. Creating cinematic edits, motion graphics, and engaging visual media.",
      highlights: ["Adobe Premiere Pro & After Effects", "Cinematic Visual Sequencing", "Motion Graphics & Compositing"],
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Engineering Logic Meets <span className="gradient-text">Creative Expression</span>
          </h2>
          <p className="section-subtitle">
            An overview of my academic background, technical capabilities, and creative pursuits based on my resume.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="about-overview-card glass-card">
          <div className="overview-content">
            <h3 className="overview-headline">
              Professional Summary
            </h3>
            <p className="overview-text">
              {personalInfo.summary}
            </p>

            {/* Quick Meta Row */}
            <div className="overview-meta-grid">
              <div className="overview-meta-box">
                <span className="meta-box-label">Academic Degree</span>
                <span className="meta-box-value">{personalInfo.degree}</span>
              </div>
              <div className="overview-meta-box">
                <span className="meta-box-label">Institution</span>
                <span className="meta-box-value">{personalInfo.institution}</span>
              </div>
              <div className="overview-meta-box">
                <span className="meta-box-label">Status & Location</span>
                <span className="meta-box-value">{personalInfo.academicStatus} &bull; {personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="about-pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-card glass-card">
              <div className="pillar-icon-box">
                {pillar.icon}
              </div>
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-description">{pillar.description}</p>
              
              <ul className="pillar-highlights-list">
                {pillar.highlights.map((item, idx) => (
                  <li key={idx} className="highlight-item">
                    <CheckCircle2 size={14} className="text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Languages Strip */}
        <div className="languages-card glass-card">
          <div className="languages-inner">
            <div className="languages-label">
              <Languages size={20} className="text-accent" />
              <span>Languages Known</span>
            </div>
            <div className="languages-chips">
              {personalInfo.languages.map((lang) => (
                <div key={lang.name} className="language-badge">
                  <span className="language-name">{lang.name}</span>
                  <span className="language-type">({lang.type})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

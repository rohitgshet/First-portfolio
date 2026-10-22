import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  MapPin, 
  Sparkles, 
  Calendar,
  CheckCircle2,
  Brain
} from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Academic Foundation</span>
          </h2>
          <p className="section-subtitle">
            Formal engineering curriculum focused on artificial intelligence, algorithmic problem solving, and modern computational systems.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="education-card-wrapper">
          <div className="education-card glass-card">
            {/* Top Badges */}
            <div className="edu-header">
              <div className="edu-icon-container">
                <GraduationCap size={32} className="text-accent" />
              </div>
              <div className="edu-title-group">
                <span className="edu-status-pill">{education.status}</span>
                <h3 className="edu-degree">{education.degree}</h3>
                <h4 className="edu-institution">{education.institution}</h4>
                <div className="edu-location">
                  <MapPin size={15} />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            <div className="edu-divider" />

            {/* Coursework Block */}
            <div className="edu-coursework-section">
              <div className="coursework-header">
                <BookOpen size={18} className="text-accent" />
                <h4 className="coursework-title">Relevant Academic Coursework</h4>
              </div>
              <p className="coursework-subtitle">
                Core subjects completed as part of the engineering curriculum:
              </p>

              <div className="coursework-chips-grid">
                {education.coursework.map((course, index) => (
                  <div key={index} className="coursework-chip">
                    <CheckCircle2 size={15} className="text-accent-indigo" />
                    <span className="coursework-name">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI/ML Specialization Highlights */}
            <div className="edu-specialization-footer">
              <div className="specialization-box">
                <Brain size={20} className="text-accent-violet" />
                <div>
                  <h5 className="specialization-title">AIML Focus</h5>
                  <p className="specialization-desc">
                    Combines core computer science fundamentals (algorithms, DBMS, software systems) with machine learning methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  GitBranch, 
  Cpu, 
  Video, 
  Sparkles,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming':
        return <Code2 size={22} className="text-accent-indigo" />;
      case 'frontend':
        return <Layout size={22} className="text-accent-cyan" />;
      case 'backend':
        return <Server size={22} className="text-accent-emerald" />;
      case 'databases':
        return <Database size={22} className="text-accent-violet" />;
      case 'tools':
        return <GitBranch size={22} className="text-accent-indigo" />;
      case 'competencies':
        return <Cpu size={22} className="text-accent-cyan" />;
      case 'creative':
        return <Video size={22} className="text-accent-emerald" />;
      default:
        return <Layers size={22} />;
    }
  };

  const filteredCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeFilter);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Technical & Creative Expertise</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="section-subtitle">
            Organized strictly from my resume across engineering disciplines, software development stacks, and creative media tools.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="skills-filter-bar">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Categories ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-category-grid">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="skill-category-card glass-card">
              <div className="category-header">
                <div className="category-icon-wrapper">
                  {getCategoryIcon(cat.id)}
                </div>
                <div>
                  <h3 className="category-title">{cat.title}</h3>
                  <p className="category-description">{cat.description}</p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="skills-badge-list">
                {cat.skills.map((skill, index) => (
                  <div key={index} className="skill-chip">
                    <span className="skill-bullet" />
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integrity Footnote */}
        <div className="skills-footnote">
          <p>
            * All listed competencies are directly reflected in academic coursework and completed software projects. No arbitrary percentage bars or subjective ratings are used.
          </p>
        </div>
      </div>
    </section>
  );
}

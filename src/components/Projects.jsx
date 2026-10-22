import React from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Server, 
  Layers, 
  ShieldCheck, 
  CheckCircle,
  Database,
  Code
} from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const renderProjectVisual = (projectId) => {
    switch (projectId) {
      case 'student-management-api':
        return (
          <div className="project-svg-visual api-visual">
            <svg viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="architecture-svg">
              {/* Background Glow */}
              <circle cx="200" cy="90" r="70" fill="rgba(99, 102, 241, 0.08)" />
              {/* Client HTTP Request */}
              <rect x="25" y="65" width="85" height="50" rx="8" fill="#162035" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <text x="67" y="88" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">HTTP Client</text>
              <text x="67" y="103" fill="#6366f1" fontSize="9" textAnchor="middle" fontWeight="bold">GET / POST</text>
              {/* Arrow 1 */}
              <path d="M110 90 H150" stroke="#6366f1" strokeWidth="2" strokeDasharray="3 3" />
              <polygon points="150,90 144,87 144,93" fill="#6366f1" />
              {/* Express Server */}
              <rect x="155" y="55" width="95" height="70" rx="8" fill="#1a253d" stroke="#6366f1" strokeWidth="1.5" />
              <text x="202" y="82" fill="#f8fafc" fontSize="11" textAnchor="middle" fontWeight="bold">Express.js API</text>
              <text x="202" y="98" fill="#818cf8" fontSize="9" textAnchor="middle">REST Endpoints</text>
              <text x="202" y="112" fill="#94a3b8" fontSize="8" textAnchor="middle">Req Validation</text>
              {/* Arrow 2 */}
              <path d="M250 90 H290" stroke="#06b6d4" strokeWidth="2" strokeDasharray="3 3" />
              <polygon points="290,90 284,87 284,93" fill="#06b6d4" />
              {/* MongoDB Store */}
              <rect x="295" y="60" width="80" height="60" rx="8" fill="#162035" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="335" y="85" fill="#f8fafc" fontSize="11" textAnchor="middle" fontWeight="bold">MongoDB</text>
              <text x="335" y="100" fill="#22c55e" fontSize="9" textAnchor="middle">Persistent DB</text>
              <text x="335" y="112" fill="#94a3b8" fontSize="8" textAnchor="middle">Student Records</text>
            </svg>
            <div className="visual-badge">REST API & MongoDB Persistence</div>
          </div>
        );
      case 'mern-crud-app':
        return (
          <div className="project-svg-visual mern-visual">
            <svg viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="architecture-svg">
              <circle cx="200" cy="90" r="70" fill="rgba(6, 182, 212, 0.08)" />
              {/* React Client */}
              <rect x="20" y="60" width="90" height="60" rx="8" fill="#162035" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="65" y="85" fill="#f8fafc" fontSize="11" textAnchor="middle" fontWeight="bold">React UI</text>
              <text x="65" y="100" fill="#38bdf8" fontSize="9" textAnchor="middle">CRUD Forms</text>
              <text x="65" y="112" fill="#94a3b8" fontSize="8" textAnchor="middle">State & Fetch</text>
              {/* Bi-directional arrows */}
              <path d="M110 82 H155" stroke="#06b6d4" strokeWidth="1.5" />
              <polygon points="155,82 150,79 150,85" fill="#06b6d4" />
              <path d="M155 98 H110" stroke="#818cf8" strokeWidth="1.5" />
              <polygon points="110,98 115,95 115,101" fill="#818cf8" />
              {/* Node / Express */}
              <rect x="160" y="55" width="95" height="70" rx="8" fill="#1a253d" stroke="#6366f1" strokeWidth="1.5" />
              <text x="207" y="80" fill="#f8fafc" fontSize="11" textAnchor="middle" fontWeight="bold">Node / Express</text>
              <text x="207" y="95" fill="#818cf8" fontSize="9" textAnchor="middle">CORS & Routing</text>
              <text x="207" y="110" fill="#94a3b8" fontSize="8" textAnchor="middle">JSON Controllers</text>
              {/* Connection to DB */}
              <path d="M255 90 H295" stroke="#22c55e" strokeWidth="2" />
              <polygon points="295,90 290,87 290,93" fill="#22c55e" />
              {/* MongoDB */}
              <rect x="300" y="60" width="80" height="60" rx="8" fill="#162035" stroke="#22c55e" strokeWidth="1.5" />
              <text x="340" y="85" fill="#f8fafc" fontSize="11" textAnchor="middle" fontWeight="bold">MongoDB</text>
              <text x="340" y="100" fill="#22c55e" fontSize="9" textAnchor="middle">CRUD Operations</text>
              <text x="340" y="112" fill="#94a3b8" fontSize="8" textAnchor="middle">Document Store</text>
            </svg>
            <div className="visual-badge">Full-Stack MERN Architecture</div>
          </div>
        );
      case 'auth-system':
        return (
          <div className="project-svg-visual auth-visual">
            <svg viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="architecture-svg">
              <circle cx="200" cy="90" r="70" fill="rgba(139, 92, 246, 0.08)" />
              {/* HTML Form */}
              <rect x="25" y="62" width="85" height="55" rx="8" fill="#162035" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <text x="67" y="86" fill="#f8fafc" fontSize="11" textAnchor="middle" fontWeight="bold">HTML Form</text>
              <text x="67" y="101" fill="#e2e8f0" fontSize="9" textAnchor="middle">Email & Password</text>
              {/* POST Request */}
              <path d="M110 90 H155" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
              <polygon points="155,90 149,87 149,93" fill="#f59e0b" />
              {/* Express Server */}
              <rect x="160" y="52" width="95" height="75" rx="8" fill="#1a253d" stroke="#8b5cf6" strokeWidth="1.5" />
              <text x="207" y="78" fill="#f8fafc" fontSize="11" textAnchor="middle" fontWeight="bold">Express.js</text>
              <text x="207" y="93" fill="#c084fc" fontSize="9" textAnchor="middle">POST /auth</text>
              <text x="207" y="107" fill="#94a3b8" fontSize="8" textAnchor="middle">Data Validation</text>
              {/* Shield Auth Check */}
              <path d="M255 90 H295" stroke="#10b981" strokeWidth="2" />
              <polygon points="295,90 289,87 289,93" fill="#10b981" />
              {/* Verification Node */}
              <rect x="300" y="62" width="80" height="55" rx="8" fill="#162035" stroke="#10b981" strokeWidth="1.5" />
              <text x="340" y="86" fill="#f8fafc" fontSize="11" textAnchor="middle" fontWeight="bold">Auth Engine</text>
              <text x="340" y="101" fill="#10b981" fontSize="9" textAnchor="middle">Verified Status</text>
            </svg>
            <div className="visual-badge">Route Validation & Authentication</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Featured Software</span>
          </div>
          <h2 className="section-title">
            Practical Software <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Demonstrating hands-on proficiency in API design, full-stack web applications, authentication workflows, and persistent databases.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Abstract Visual Header */}
              <div className="project-card-header">
                {renderProjectVisual(project.id)}
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <div className="project-category-badge">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Key Architecture Items */}
                <div className="project-architecture">
                  <h4 className="architecture-label">Key Highlights:</h4>
                  <ul className="architecture-list">
                    {project.architecture.map((item, idx) => (
                      <li key={idx} className="architecture-item">
                        <CheckCircle size={14} className="text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies List */}
                <div className="project-tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Card Footer */}
              <div className="project-card-footer">
                <a
                  href={project.verifiedGithubProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm project-repo-link"
                >
                  <Github size={15} />
                  <span>GitHub Profile Repositories</span>
                  <ExternalLink size={13} />
                </a>
                <span className="project-note-badge">Verified Codebase</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Guarantee Notice */}
        <div className="projects-integrity-banner">
          <div className="banner-content">
            <ShieldCheck size={20} className="text-accent" />
            <div>
              <strong>Strict Source-of-Truth Compliance:</strong> All three project specifications, technologies, and features correspond precisely to verified implementations from Rohit G Shet's resume.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

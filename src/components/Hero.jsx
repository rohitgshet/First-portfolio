import React from 'react';
import { ArrowRight, Mail, MapPin, GraduationCap, Sparkles, Terminal, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Introduction & CTAs */}
        <div className="hero-content">
          {/* Academic Identity Pill */}
          <div className="hero-badge animate-fade-in">
            <span className="badge-glow-dot" />
            <GraduationCap size={16} className="text-accent" />
            <span>{personalInfo.academicStatus} &bull; {personalInfo.degree}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <h2 className="hero-subtitle">
            {personalInfo.role}
          </h2>

          <p className="hero-description">
            {personalInfo.summary}
          </p>

          {/* Quick Meta Indicators */}
          <div className="hero-meta-list">
            <div className="hero-meta-item">
              <GraduationCap size={16} />
              <span>{personalInfo.institutionShort}</span>
            </div>
            <div className="hero-meta-item">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" id="hero-explore-projects">
              <span>Explore My Projects</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary" id="hero-contact-me">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Proof & Direct Profile Links */}
          <div className="hero-socials-row">
            <span className="socials-label">Verified Profiles:</span>
            <div className="socials-links">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                id="hero-github-link"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                id="hero-linkedin-link"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="social-pill email-pill"
                title="Click to copy email address"
                aria-label="Copy Email"
              >
                {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                <span>{copied ? 'Copied Email' : 'Email Address'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Code Profile Card */}
        <div className="hero-visual">
          <div className="developer-card glass-card">
            {/* Terminal Window Header */}
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control-dot dot-red" />
                <span className="control-dot dot-yellow" />
                <span className="control-dot dot-green" />
              </div>
              <div className="terminal-title">
                <Terminal size={14} />
                <span>rohit-shet.profile.json</span>
              </div>
              <span className="terminal-status">online</span>
            </div>

            {/* Code Body */}
            <div className="terminal-body font-mono">
              <div className="code-line">
                <span className="c-keyword">const</span> <span className="c-variable">engineer</span> = &#123;
              </div>
              <div className="code-line indent-1">
                <span className="c-prop">name:</span> <span className="c-string">"{personalInfo.name}"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="c-prop">program:</span> <span className="c-string">"{personalInfo.degree}"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="c-prop">institution:</span> <span className="c-string">"{personalInfo.institutionShort}"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="c-prop">status:</span> <span className="c-accent">"{personalInfo.academicStatus}"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="c-prop">location:</span> <span className="c-string">"{personalInfo.location}"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="c-prop">coreLanguages:</span> [
                <span className="c-string">"Python"</span>, <span className="c-string">"Java"</span>, <span className="c-string">"JavaScript"</span>],
              </div>
              <div className="code-line indent-1">
                <span className="c-prop">webStack:</span> [
                <span className="c-string">"React"</span>, <span className="c-string">"Node.js"</span>, <span className="c-string">"Express.js"</span>, <span className="c-string">"MongoDB"</span>],
              </div>
              <div className="code-line indent-1">
                <span className="c-prop">creativeSuite:</span> [
                <span className="c-string">"Premiere Pro"</span>, <span className="c-string">"After Effects"</span>],
              </div>
              <div className="code-line indent-1">
                <span className="c-prop">mindset:</span> <span className="c-string">"Problem Solving & Continuous Learning"</span>
              </div>
              <div className="code-line">
                &#125;;
              </div>
              <div className="code-line code-comment">
                // Ready to build practical, robust software solutions
              </div>
            </div>

            {/* Terminal Card Footer */}
            <div className="terminal-footer">
              <div className="tech-chip-group">
                <span className="mini-badge">AI / ML</span>
                <span className="mini-badge">Full Stack</span>
                <span className="mini-badge">Creative Video</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

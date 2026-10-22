import React from 'react';
import { Mail, ArrowUp, Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <span className="brand-badge-logo">RS</span>
              <span className="footer-name">{personalInfo.name}</span>
            </div>
            <p className="footer-tagline">
              {personalInfo.role} &bull; {personalInfo.institutionShort}
            </p>
            <p className="footer-statement">
              Building practical software with engineering logic and creative video craft.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#creative">Creative Media</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Verified Social Channels */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Verified Profiles</h4>
            <div className="footer-social-links">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="footer-social-btn"
                aria-label="Email"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {currentYear} {personalInfo.name}. All verified details from official resume.
          </div>
          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

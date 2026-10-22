import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  Copy, 
  Check, 
  ExternalLink,
  Info
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    // Direct mailto link preparation honoring static client-side honesty
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Rohit,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`;
    setStatusMessage('Opening your email client to send this message directly to rohitgshet01@gmail.com.');
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="section-subtitle">
            Feel free to reach out for software engineering opportunities, technical collaborations, or creative video projects.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Details */}
          <div className="contact-info-column">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-sub">
              Verified communication channels from Rohit G Shet's resume:
            </p>

            <div className="contact-cards-stack">
              {/* Email Card */}
              <div className="contact-card glass-card">
                <div className="contact-card-icon">
                  <Mail size={22} className="text-accent-indigo" />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Direct Email</span>
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="contact-card-value"
                    id="contact-email-link"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.contact.email, 'email')}
                  className="contact-card-action"
                  title="Copy email to clipboard"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <Check size={18} className="text-emerald" /> : <Copy size={18} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="contact-card glass-card">
                <div className="contact-card-icon">
                  <Phone size={22} className="text-accent-cyan" />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Phone & WhatsApp</span>
                  <a
                    href={`tel:${personalInfo.contact.phone}`}
                    className="contact-card-value"
                    id="contact-phone-link"
                  >
                    {personalInfo.contact.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.contact.phone, 'phone')}
                  className="contact-card-action"
                  title="Copy phone number"
                  aria-label="Copy Phone"
                >
                  {copiedPhone ? <Check size={18} className="text-emerald" /> : <Copy size={18} />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="contact-card glass-card">
                <div className="contact-card-icon">
                  <Linkedin size={22} className="text-accent-indigo" />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">LinkedIn Profile</span>
                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card-value"
                    id="contact-linkedin-link"
                  >
                    linkedin.com/in/rohitgshet
                  </a>
                </div>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-action"
                  title="Visit LinkedIn"
                  aria-label="Open LinkedIn"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* GitHub Card */}
              <div className="contact-card glass-card">
                <div className="contact-card-icon">
                  <Github size={22} className="text-accent-violet" />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">GitHub Profile</span>
                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card-value"
                    id="contact-github-link"
                  >
                    github.com/rohitgshet
                  </a>
                </div>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-action"
                  title="Visit GitHub"
                  aria-label="Open GitHub"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Location Card */}
              <div className="contact-card glass-card">
                <div className="contact-card-icon">
                  <MapPin size={22} className="text-accent-emerald" />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Current Location</span>
                  <span className="contact-card-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-form-column">
            <div className="contact-form-card glass-card">
              <h3 className="form-title">Send a Direct Message</h3>
              <p className="form-sub">
                Fill out the details below to launch a direct email draft to Rohit.
              </p>

              {/* Transparent Service Dependency Disclosure */}
              <div className="form-notice">
                <Info size={16} className="text-accent" />
                <span>
                  <strong>Form Delivery Note:</strong> Submissions route directly via your default email client to <code>rohitgshet01@gmail.com</code> without unverified third-party intermediate APIs.
                </span>
              </div>

              <form onSubmit={handleSubmit} className="message-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Your Email</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className="form-input form-textarea"
                  />
                </div>

                {statusMessage && (
                  <div className="status-feedback">
                    {statusMessage}
                  </div>
                )}

                <button type="submit" className="btn btn-primary form-submit-btn">
                  <Send size={18} />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

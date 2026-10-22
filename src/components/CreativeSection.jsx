import React from 'react';
import { 
  Film, 
  Video, 
  Sliders, 
  Layers, 
  Sparkles, 
  Play, 
  Palette, 
  Clock, 
  Volume2,
  Tv,
  CheckCircle2,
  Mail
} from 'lucide-react';
import { creativeCapabilities, personalInfo } from '../data/portfolioData';

export default function CreativeSection() {
  return (
    <section id="creative" className="section creative-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Film size={14} />
            <span>Creative Production</span>
          </div>
          <h2 className="section-title">
            Creative Media & <span className="gradient-text">Video Editing</span>
          </h2>
          <p className="section-subtitle">
            Complementing software logic with high-impact visual storytelling, cinematic post-production, and motion graphics.
          </p>
        </div>

        {/* Studio Timeline UI Mockup */}
        <div className="timeline-mockup-card glass-card">
          <div className="timeline-header">
            <div className="timeline-title-row">
              <div className="timeline-indicator">
                <span className="rec-dot" />
                <span className="timeline-label">POST-PRODUCTION WORKFLOW</span>
              </div>
              <div className="timeline-meta">
                <span className="mono-time">00:04:28:16</span>
                <span className="timeline-fps">24.00 fps &bull; 4K UHD</span>
              </div>
            </div>

            {/* Video track visualization */}
            <div className="timeline-tracks">
              {/* Track V2 - Motion Graphics */}
              <div className="track-row">
                <div className="track-label">
                  <Layers size={13} />
                  <span>V2 / After Effects</span>
                </div>
                <div className="track-lane">
                  <div className="track-clip clip-ae" style={{ left: '15%', width: '35%' }}>
                    <span>Kinetic Titles & VFX</span>
                  </div>
                  <div className="track-clip clip-ae" style={{ left: '55%', width: '30%' }}>
                    <span>Motion Graphic Lower Thirds</span>
                  </div>
                </div>
              </div>

              {/* Track V1 - Main Video */}
              <div className="track-row">
                <div className="track-label">
                  <Film size={13} />
                  <span>V1 / Premiere Pro</span>
                </div>
                <div className="track-lane">
                  <div className="track-clip clip-pr" style={{ left: '0%', width: '28%' }}>
                    <span>Cinematic Sequence 01</span>
                  </div>
                  <div className="track-clip clip-pr" style={{ left: '30%', width: '38%' }}>
                    <span>Pacing & Narrative Cut</span>
                  </div>
                  <div className="track-clip clip-pr" style={{ left: '70%', width: '28%' }}>
                    <span>Color Graded Climax</span>
                  </div>
                </div>
              </div>

              {/* Track A1 - Audio */}
              <div className="track-row">
                <div className="track-label">
                  <Volume2 size={13} />
                  <span>A1 / Sound Design</span>
                </div>
                <div className="track-lane">
                  <div className="track-clip clip-audio" style={{ left: '0%', width: '98%' }}>
                    <span>Cinematic Score & Sound FX Synchronization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Creative Capabilities Grid */}
        <div className="creative-cards-grid">
          {creativeCapabilities.tools.map((item, index) => (
            <div key={index} className="creative-card glass-card">
              <div className="creative-card-top">
                <div className="creative-icon-circle">
                  {index === 0 && <Video size={22} className="text-accent-indigo" />}
                  {index === 1 && <Sparkles size={22} className="text-accent-violet" />}
                  {index === 2 && <Palette size={22} className="text-accent-cyan" />}
                  {index === 3 && <Tv size={22} className="text-accent-emerald" />}
                </div>
                <span className="creative-index">0{index + 1}</span>
              </div>

              <h3 className="creative-tool-name">{item.name}</h3>
              <h4 className="creative-tool-role">{item.role}</h4>
              <p className="creative-tool-details">{item.details}</p>
            </div>
          ))}
        </div>

        {/* Designed Work Showcase Placeholder */}
        <div className="creative-showcase-placeholder glass-card">
          <div className="placeholder-content">
            <div className="placeholder-icon">
              <Film size={28} className="text-accent" />
            </div>
            <div className="placeholder-info">
              <h4 className="placeholder-title">Custom Portfolio & Video Showcase</h4>
              <p className="placeholder-text">
                {creativeCapabilities.placeholderNote}
              </p>
            </div>
            <a href="#contact" className="btn btn-secondary btn-sm">
              <Mail size={15} />
              <span>Inquire for Showreel</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

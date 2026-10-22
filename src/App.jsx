import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import CreativeSection from './components/CreativeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Background Ambient Lighting & Grid */}
      <div className="bg-ambient" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <CreativeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

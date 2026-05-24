import React, { useState } from 'react';
import { Plus, Minus, Hexagon } from 'lucide-react';
import './MissionVision.css';

const MissionVision = () => {
  const [openSection, setOpenSection] = useState('mission');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="mission-vision-section" id="mission-vision">
      <div className="mv-container">
        {/* Header Section */}
        <div className="mv-header-wrapper">
          <div className="badge">
            <span className="dot"></span> MISSION & VISION
          </div>
          <h2 className="mv-heading">Mission & vision</h2>
          <p className="mv-subheading">
            We exist to help business leaders think clearly and build resilient organizations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mv-grid">
          {/* Left Panel - Image */}
          <div className="mv-image-panel">
            <img 
              src="/mission_vision.png" 
              alt="Professionals in office" 
              className="mv-img" 
              loading="lazy" 
            />
          </div>

          {/* Right Panel - Accordion */}
          <div className="mv-accordion-panel">
            
            {/* Mission Card */}
            <div 
              className={`mv-card ${openSection === 'mission' ? 'open' : ''}`}
              onClick={() => toggleSection('mission')}
            >
              <div className="mv-card-header">
                <div className="mv-card-title-wrap">
                  <Hexagon className="mv-icon" size={24} color="#d4f285" />
                  <h3 className="mv-card-title">Our mission</h3>
                </div>
                <div className="mv-card-toggle">
                  {openSection === 'mission' ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </div>
              
              <div className="mv-card-body">
                <p>
                  To help business leaders make better decisions by providing clear, objective, and structured advisory support that reduces uncertainty, manages risk, and enables sustainable long-term performance
                </p>
                <br />
                <p>
                  To support founders, executives, and leadership teams in navigating complexity through independent thinking, practical analysis, and strategic clarity.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div 
              className={`mv-card ${openSection === 'vision' ? 'open' : ''}`}
              onClick={() => toggleSection('vision')}
            >
              <div className="mv-card-header">
                <div className="mv-card-title-wrap">
                  <Hexagon className="mv-icon" size={24} color="#d4f285" />
                  <h3 className="mv-card-title">Our vision</h3>
                </div>
                <div className="mv-card-toggle">
                  {openSection === 'vision' ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </div>
              
              <div className="mv-card-body">
                <p>
                  To become the most trusted advisory partner for growing enterprises, recognized for delivering measurable impact, rigorous analytical thinking, and enduring value creation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

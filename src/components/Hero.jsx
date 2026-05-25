import React from 'react';
import { ArrowRight, CheckCircle2, Activity } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            Business Central Consulting for Growing Businesses
          </div>
          
          <h1 className="hero-title">
            Running your business on workarounds costs you <br />
            <span className="highlight">more than you realise.</span>
          </h1>
          
          <p className="hero-subtitle">
            Bloom Advisors helps growing businesses replace disconnected systems with Microsoft Dynamics 365 Business Central, giving teams one source of truth for operations, finance, reporting, and decision-making.
          </p>
          
          <p className="hero-transformation">
            From spreadsheets, manual approvals, and disconnected reports — to one source of truth for your business.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary">
              Book a Consultation
              <ArrowRight size={18} className="btn-icon" />
            </button>
            <a href="#services" className="btn-secondary">
              Explore Services
            </a>
          </div>
          
          <div className="hero-trust-row">
            <div className="trust-item">
              <CheckCircle2 size={16} className="trust-icon" />
              <span>ERP Implementation</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="trust-icon" />
              <span>Business Process Advisory</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="trust-icon" />
              <span>Reporting & Automation</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="insight-card">
            <div className="insight-header">
              <div className="insight-icon-wrapper">
                <Activity size={24} color="#fff" />
              </div>
              <h3>Business Central Readiness Check</h3>
            </div>
            <ul className="insight-list">
              <li>
                <div className="bullet"></div>
                Manual processes reduced
              </li>
              <li>
                <div className="bullet"></div>
                Disconnected reporting improved
              </li>
              <li>
                <div className="bullet"></div>
                Operational visibility increased
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

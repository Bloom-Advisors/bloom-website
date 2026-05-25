import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your business deserves systems that <span className="highlight">work together</span>, not against you.
          </h1>
          <p className="hero-subtitle">
            We help growing companies replace fragmented tools with Business Central — one platform for finance, operations, and reporting that scales with you.
          </p>
          <Link to="/contact" className="btn-get-in-touch">
            <div className="icon-circle">
              <ArrowRight size={20} color="#000" />
            </div>
            <span className="btn-text">GET IN TOUCH</span>
          </Link>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">50+</span>
            <span className="stat-label">Implementations delivered</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">98%</span>
            <span className="stat-label">Client satisfaction rate</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-value">3x</span>
            <span className="stat-label">Faster reporting turnaround</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

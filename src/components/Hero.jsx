import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Running your business on workarounds costs you <span className="highlight">more than you realise.</span>
          </h1>
          <p className="hero-subtitle">
            Bloom Advisors implements Business Central for growing businesses ready to replace disconnected systems with a single source of truth and builds the reporting to prove it is working.
          </p>
          <button className="btn-get-in-touch">
            <div className="icon-circle">
              <ArrowRight size={20} color="#000" />
            </div>
            <span className="btn-text">GET IN TOUCH</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const HERO_IMAGES = [
  '/homepage_hero_team.png',
  '/about_team_bg.png',
  '/cta_collaboration.png'
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 6000); // 6 seconds auto-swipe
    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="hero">
      {/* Background Slider Container */}
      <div className="hero-bg-container">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`hero-bg-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      
      <div className="hero-overlay"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-bold">BLOOM ADVISORS — </span>
            <span className="title-thin">BUSINESS CENTRAL FOR GROWING COMPANIES.</span>
          </h1>
          <p className="hero-subtitle">
            We help growing companies replace fragmented tools with Business Central — one platform for finance, operations, and reporting that scales with you.
          </p>
          <Link to="/contact" className="btn-get-in-touch">
            <span className="btn-text">BOOK CONSULTATION</span>
            <div className="icon-circle">
              <ArrowRight size={18} />
            </div>
          </Link>
        </div>

        {/* Carousel Slide Indicators */}
        <div className="hero-slider-dots">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-value">50+</span>
            <span className="stat-label">Implementations delivered</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">98%</span>
            <span className="stat-label">Client satisfaction rate</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">3x</span>
            <span className="stat-label">Faster reporting turnaround</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Team from '../components/Team';
import CTABanner from '../components/CTABanner';
import './AboutPage.css';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-wrapper page-transition">
      <SEO
        title="About Us - Independent Dynamics 365 Consultants"
        description="Meet the Bloom Advisors team. We are independent, hands-on Business Central and Solver consultants delivering ERP implementations directly — no intermediaries."
        canonical="/about"
      />
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-breadcrumb hero-animate delay-1">
              <span className="breadcrumb-muted">Home /</span> <span className="breadcrumb-active">About Us</span>
            </div>
            
            <h1 className="about-hero-title hero-animate delay-2">
              Dedicated to your growth.
            </h1>
            
            <p className="about-hero-desc hero-animate delay-3">
              We're a team of hands-on consultants who have implemented, built, and delivered at the highest levels. 
              We believe growing businesses deserve the exact same quality of ERP and reporting capabilities as large enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Experienced Practitioners Section */}
      <section className="about-experienced">
        <div className="container about-experienced-container">
          <div className="about-experienced-grid" data-reveal>
            <div className="about-experienced-left">
              <span className="about-experienced-badge">OUR OPERATING MODEL</span>
              <h2 className="about-experienced-title">
                Experienced<br />
                <span className="text-highlight">Practitioners.</span>
                <span className="text-sub">Not account managers.</span>
              </h2>
            </div>
            
            <div className="about-experienced-right">
              <p className="about-experienced-lead">
                You will work directly with consultants who have implemented, built, and delivered, not with an intermediary layer.
              </p>
              
              <p className="about-experienced-desc">
                Bloom Advisors was founded on a straightforward premise: growing businesses deserve the same quality of ERP and reporting capability as large enterprises, delivered by people who have done it.
              </p>
            </div>
          </div>
          
          <div className="about-experienced-divider" />
          
          <div className="experience-comparison" data-reveal data-reveal-delay="2">
            <div className="comp-item">
              <div className="comp-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="comp-content">
                <h3>Direct Collaboration</h3>
                <p>Every strategic design and technical deployment is handled directly by senior leads who build and deliver.</p>
              </div>
            </div>
            <div className="comp-item">
              <div className="comp-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div className="comp-content">
                <h3>Zero Intermediaries</h3>
                <p>We completely eliminate account managers and translation layers. Information is direct, fast, and accurate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Component */}
      <Team />

      {/* Why Choose Us / Understanding Section */}
      <section className="about-understanding">
        <div className="container about-understanding-container">
          <div className="about-understanding-grid" data-reveal>
            <div className="about-understanding-left">
              <span className="about-understanding-badge">
                <span className="dot"></span> DIRECT ENGAGEMENT
              </span>
              <h2 className="about-understanding-title">
                Work with us directly.
              </h2>
              <p className="about-understanding-desc">
                Every engagement is delivered by Kwesi and Ahmed personally. Book a call to meet the team and discuss your project.
              </p>
              <div className="about-understanding-cta">
                <a 
                  href="https://outlook.office.com/bookwithme/user/e99565bbfe2d464a800fa3e1a350b053@bloomadvisors.uk/meetingtype/9L1KQFzxUkmChE8jx-Tgww2?anonymous&ismsaljsauthenabled&ep=mlink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-understanding"
                >
                  <span className="arrow-circle">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                  <span className="btn-text">BOOK A FREE CONSULTATION</span>
                </a>
              </div>
            </div>
            
            <div className="about-understanding-right">
              <div className="understanding-img-wrapper">
                <img src="/understanding_bg.png" alt="Consultants collaborating" className="understanding-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

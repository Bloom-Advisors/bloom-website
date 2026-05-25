import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const servicesData = [
    {
      id: 1,
      num: '01',
      tag: 'FINANCIAL EFFICIENCY',
      image: '/finance.png',
      title: 'Automated Financial Consolidation',
      desc: 'Reconciling data across siloed systems extends your month-end close to weeks. We integrate your accounting pipelines to deliver automated, instant financial consolidation and zero manual reconciliation.',
      impact: 'Reduces close time by up to 80% while ensuring auditable data integrity.'
    },
    {
      id: 2,
      num: '02',
      tag: 'DYNAMIC FORECASTING',
      image: '/budgeting.png',
      title: 'Continuous Planning & Budgeting',
      desc: 'Static annual budgets become obsolete by Q2. We connect live actuals directly to your forecasts, giving leaders real-time visibility into variance without manual spreadsheet requests.',
      impact: 'Enables rolling forecasts and continuous variance analysis on demand.'
    },
    {
      id: 3,
      num: '03',
      tag: 'REAL-TIME INSIGHTS',
      image: '/reporting.png',
      title: 'Always-On Executive Reporting',
      desc: 'Making strategic decisions on 30-day-old reports means missing critical market opportunities. We build automated executive dashboards that serve live, operational KPIs daily.',
      impact: 'Brings report latency down from weeks to minutes.'
    },
    {
      id: 4,
      num: '04',
      tag: 'SCALABLE ARCHITECTURE',
      image: '/growth.png',
      title: 'Multi-Entity Expansion & Scaling',
      desc: 'Scaling operations across new entities and cost centers exposes the limitations of legacy tools. We configure robust architectures built to support global multi-company expansion seamlessly.',
      impact: 'Supports multi-currency, multi-region setups without core system strain.'
    },
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  };

  const activeService = servicesData[activeIdx];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        
        {/* Header */}
        <div className="services-header-split" data-reveal>
          <div className="sh-left">
            <h2 className="services-main-heading">
              Business Central<br />
              <span className="text-highlight">& Solver</span>
            </h2>
          </div>
          <div className="sh-right">
            <p className="services-subheading">
              End-to-end delivery of Microsoft Dynamics 365 Business Central and Solver xFP&A, designed for complex financial and operational environments.
            </p>
          </div>
        </div>

        {/* Interactive Showcase Slide */}
        <div className="services-showcase-container" data-reveal data-reveal-delay="2">
          
          {/* Navigation Controls */}
          <div className="showcase-nav">
            <button className="nav-btn prev-btn" onClick={handlePrev} aria-label="Previous slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            
            <div className="showcase-dots">
              {servicesData.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot-indicator ${activeIdx === idx ? 'active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button className="nav-btn next-btn" onClick={handleNext} aria-label="Next slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          {/* Active Card Body */}
          <div className="showcase-card">
            
            {/* Left Column: Image & Number */}
            <div className="showcase-card-left">
              <div className="card-image-wrapper">
                <img 
                  src={activeService.image} 
                  alt={activeService.title} 
                  className="card-showcase-img"
                />
                <div className="card-num-badge">{activeService.num}</div>
              </div>
            </div>

            {/* Right Column: Copy & Details */}
            <div className="showcase-card-right">
              <span className="card-tag-pill">{activeService.tag}</span>
              <h3 className="card-large-title">{activeService.title}</h3>
              <p className="card-description-text">{activeService.desc}</p>
              
              <div className="card-impact-box">
                <span className="impact-label">EXPECTED IMPACT</span>
                <p className="impact-text">{activeService.impact}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;

import React, { useState } from 'react';
import './Capabilities.css';

const capabilitiesData = [
  {
    id: 1,
    title: 'Financial Management & Consolidation',
    description: 'Automate your close, manage multi-currency transactions, consolidate across entities, and produce statutory and management accounts directly from Business Central.',
    image: '/finance.png'
  },
  {
    id: 2,
    title: 'Budgeting & Forecasting',
    description: 'Build multi-dimensional budgets and rolling forecasts in Solver xFP&A, connected to live Business Central actuals. Track variances automatically and model scenarios without leaving the platform.',
    image: '/budgeting.png'
  },
  {
    id: 3,
    title: 'Project Costing & Job Management',
    description: 'Track labour, materials, and expenses against jobs, with real-time WIP reporting and profitability analysis by project, phase, or team, connected to your financial ledger.',
    image: '/decision_support.png'
  },
  {
    id: 4,
    title: 'Reporting & Analytics',
    description: 'Power BI dashboards, Jet Reports, and Solver reporting templates built on your BC data. From operational KPIs to executive financial summaries, with scheduled refresh and row-level security.',
    image: '/reporting.png'
  },
  {
    id: 5,
    title: 'ERP Migration & System Integration',
    description: 'Structured migration from Sage, Xero, QuickBooks, or bespoke legacy systems. Data mapped, cleansed, and validated to ensure accuracy and reporting continuity from day one post go-live.',
    image: '/growth.png'
  }
];

const Capabilities = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="capabilities-section">
      <div className="capabilities-container">
        {/* Left Side */}
        <div className="capabilities-left" data-reveal="left">
          <div className="capabilities-header">
            <div className="capabilities-badge">
              <span className="capabilities-badge-dot"></span>
              <span className="capabilities-badge-text">BY CAPABILITY</span>
            </div>
            <h2 className="capabilities-title">What We Implement</h2>
            <p className="capabilities-subtitle">
              A practical breakdown of the modules we implement and extend.
            </p>
          </div>

          <div className="capabilities-nav">
            {capabilitiesData.map((item, index) => (
              <button
                key={item.id}
                className={`capabilities-nav-item ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="nav-indicator"></span>
                <span className="nav-label">{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="capabilities-right" data-reveal="right">
          <div className="capabilities-card">
            <div className="capabilities-card-img-wrapper">
              <img
                src={capabilitiesData[activeIndex].image}
                alt={capabilitiesData[activeIndex].title}
                className="capabilities-card-img"
              />
              <div className="capabilities-card-overlay">
                <h3 className="capabilities-card-title">
                  {capabilitiesData[activeIndex].title}
                </h3>
                <p className="capabilities-card-desc">
                  {capabilitiesData[activeIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;

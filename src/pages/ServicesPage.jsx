import React from 'react';
import CTABanner from '../components/CTABanner';
import Capabilities from '../components/Capabilities';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      image: '/results_consulting.png',
      title: 'BC Implementation',
      desc: 'Chart of accounts, financial dimensions, periods, and integrations. Configured to your business, not a generic template.'
    },
    {
      id: 2,
      image: '/results_team.png',
      title: 'BI and Reporting',
      desc: 'Power BI dashboards, Jet Reports, and Solver reporting layers built directly on your Business Central data.'
    },
    {
      id: 3,
      image: '/results_operations.png',
      title: 'Financial Planning and Analysis',
      desc: 'Multi-quarter budgeting and forecasting models in Solver xFP&A, connected to live BC actuals for real-time variance tracking.'
    },
    {
      id: 4,
      image: '/understanding_bg.png',
      title: 'ERP Data Migration',
      desc: 'Structured migration from Sage, Xero, QuickBooks, and other legacy systems. Data mapped, cleansed, and validated before go-live.'
    },
    {
      id: 5,
      image: '/cta_collaboration.png',
      title: 'Subcontracting',
      desc: 'Available as ad-hoc resources for ERP consultancies. We integrate directly into your delivery team to provide specialist capacity.'
    }
  ];

  return (
    <div className="services-page-wrapper page-transition">
      {/* Hero Section */}
      <section className="sp-hero">
        <div className="container">
          <div className="sp-hero-content">
            <div className="about-breadcrumb hero-animate delay-1">
              <span className="breadcrumb-muted">Home /</span> <span className="breadcrumb-active">Services</span>
            </div>
            <h1 className="sp-title hero-animate delay-2">
              Advisory for Complex <br />
              <span className="sp-subtitle">Business Decisions</span>
            </h1>
            <p className="sp-description hero-animate delay-3">
              Available as ad-hoc resources for ERP consultancies. We integrate directly into your delivery team to provide specialist capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="sp-intro-section">
        <div className="container">
          <div className="sp-intro-content" data-reveal>
            <h2 className="sp-intro-title">
              End-to-end Business Central delivery.
            </h2>
            <p className="sp-intro-text">
              From initial configuration to live dashboards, we handle the full implementation and build the reporting layer that makes the investment worthwhile. Every engagement is delivered directly by our senior consultants.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="sp-grid-section">
        <div className="container">
          <div className="sp-grid">
            {services.map((srv, index) => (
              <a href="#" key={srv.id} className="sp-card" data-reveal data-reveal-delay={`${index + 1}`}>
                <div className="sp-card-img-wrapper">
                  <img src={srv.image} alt={srv.title} className="sp-card-img" loading="lazy" />
                </div>
                <div className="sp-card-content">
                  <h3 className="card-title">{srv.title}</h3>
                  <p className="sp-card-desc">{srv.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <Capabilities />

      <div className="sp-cta-wrapper">
        <CTABanner />
      </div>
    </div>
  );
};

export default ServicesPage;

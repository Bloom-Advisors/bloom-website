import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Settings, BarChart3, Calculator, Database, Users } from 'lucide-react';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import Capabilities from '../components/Capabilities';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      Icon: Settings,
      tag: 'Setup',
      image: '/results_consulting.png',
      title: 'BC Implementation',
      desc: 'Chart of accounts, financial dimensions, periods, and integrations. Configured to your business, not a generic template.',
      bullets: [
        'Custom chart of accounts',
        'Financial dimensions setup',
        'Multi-system integrations'
      ]
    },
    {
      id: 2,
      Icon: BarChart3,
      tag: 'Analytics',
      image: '/results_team.png',
      title: 'BI and Reporting',
      desc: 'Power BI dashboards, Jet Reports, and Solver reporting layers built directly on your Business Central data.',
      bullets: [
        'Jet Reports configuration',
        'Power BI dashboards',
        'Live transactional insights'
      ]
    },
    {
      id: 3,
      Icon: Calculator,
      tag: 'FP&A',
      image: '/results_operations.png',
      title: 'Financial Planning & Analysis',
      desc: 'Multi-quarter budgeting and forecasting models in Solver xFP&A, connected to live BC actuals for real-time variance tracking.',
      bullets: [
        'Solver xFP&A planning models',
        'Rolling forecasting setup',
        'Automated variance analysis'
      ]
    },
    {
      id: 4,
      Icon: Database,
      tag: 'Migration',
      image: '/understanding_bg.png',
      title: 'ERP Data Migration',
      desc: 'Structured migration from Sage, Xero, QuickBooks, and other legacy systems. Data mapped, cleansed, and validated before go-live.',
      bullets: [
        'Legacy data mapping',
        'Automated validation checks',
        'Auditable transition records'
      ]
    },
    {
      id: 5,
      Icon: Users,
      tag: 'Capacity',
      image: '/cta_collaboration.png',
      title: 'Subcontracting',
      desc: 'Available as ad-hoc resources for ERP consultancies. We integrate directly into your delivery team to provide specialist capacity.',
      bullets: [
        'Certified senior capacity',
        'Seamless team integration',
        'Ad-hoc consultant support'
      ]
    }
  ];

  return (
    <div className="services-page-wrapper page-transition">
      <SEO
        title="Services - Business Central Implementation & Solver Consulting"
        description="Bloom Advisors delivers end-to-end Business Central implementation, Solver xFP&A, BI reporting, ERP data migration, and subcontracting services for growing businesses."
        canonical="/services"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Business Advisory & ERP Consulting",
          "provider": {
            "@type": "Organization",
            "name": "Bloom Advisors",
            "url": "https://bloomadvisors.uk"
          },
          "areaServed": "GB",
          "description": "End-to-end Business Central implementation, Solver xFP&A, BI reporting, financial planning, ERP data migration, and consulting services.",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Bloom Advisors Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Central Implementation" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "BI and Reporting" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Financial Planning & Analysis" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ERP Data Migration" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Subcontracting & Consulting" } }
            ]
          }
        })}</script>
      </Helmet>
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
              We help growing companies implement, optimize, and scale Business Central and Solver to unify finance, operations, and reporting.
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
          <div className="services-page-grid">
            {services.map((srv, idx) => (
              <div 
                key={srv.id} 
                className="services-page-card" 
                style={{ '--index': idx + 1 }}
                data-reveal
              >
                
                {/* Left Column: Info & Content */}
                <div className="sp-card-info-side">
                  <div className="sp-card-tag-pill">{srv.tag}</div>
                  <h3 className="sp-card-title">{srv.title}</h3>
                  <p className="sp-card-description">{srv.desc}</p>
                  {/* Bullets List */}
                  <ul className="sp-card-bullets-list">
                    {srv.bullets.map((bullet, idx) => (
                      <li key={idx} className="sp-card-bullet-item">
                        <span className="sp-bullet-dot"></span>
                        <span className="sp-bullet-text">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Media */}
                <div className="sp-card-media-side">
                  <div className="sp-card-image-wrapper">
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      className="sp-card-img"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
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


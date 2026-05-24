import React, { useState, useEffect, useRef } from 'react';
import './Results.css';

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`results-section ${isVisible ? 'visible' : ''}`}
      id="results"
    >
      <div className="results-container">
        
        {/* Split Header */}
        <div className="section-header-split">
          <div className="sh-left">
            <div className="badge badge-left">
              <span className="dot"></span> MODULES & IMPACT
            </div>
            <h2 className="section-heading">By<br/><span className="text-muted">Capability</span></h2>
          </div>
          <div className="sh-right">
            <p className="section-subheading">
              A practical breakdown of the modules we implement and extend.
            </p>
          </div>
        </div>

        {/* Staggered Masonry Grid */}
        <div className="results-grid">
          
          {/* Column 1 */}
          <div className="results-col col-left">
            {/* Card 1: Clickable Text Card (Beige Background) */}
            <a 
              href="https://bloomadvisors.co.uk/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="results-card card-text card-beige results-card-link"
            >
              <h3 className="card-custom-title">Financial management and consolidation</h3>
              <p className="card-paragraph">
                Automate your close, manage multi-currency transactions, consolidate across entities, and produce statutory and management accounts directly from Business Central.
              </p>
            </a>
            
            {/* Card 2: Clickable Image Card with Text Overlay */}
            <a 
              href="https://bloomadvisors.co.uk/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="results-card card-image-only results-card-link"
            >
              <img 
                src="/results_operations.png" 
                alt="Budgeting and forecasting" 
                className="results-bg-img"
                loading="lazy"
              />
              <div className="overlay-gradient"></div>
              <div className="overlay-content overlay-content-simple">
                <h3 className="card-overlay-title">Budgeting and forecasting</h3>
                <p className="card-overlay-desc">
                  Build multi-dimensional budgets and rolling forecasts in Solver xFP&A, connected to live Business Central actuals. Track variances automatically and model scenarios without leaving the platform.
                </p>
              </div>
            </a>
          </div>

          {/* Column 2 */}
          <div className="results-col col-middle">
            {/* Card 3: Project costing and job management (Tall Clickable Image Background Card with Text Overlay) */}
            <a 
              href="https://bloomadvisors.co.uk/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="results-card card-tall-overlay results-card-link"
            >
              <img 
                src="/results_team.png" 
                alt="Project costing and job management" 
                className="results-bg-img"
                loading="lazy"
              />
              <div className="overlay-gradient"></div>
              <div className="overlay-content">
                <h3 className="card-overlay-title tall-title">Project costing and job management</h3>
                <p className="card-paragraph overlay-paragraph">
                  Track labour, materials, and expenses against jobs, with real-time WIP reporting and profitability analysis by project, phase, or team, connected to your financial ledger.
                </p>
              </div>
            </a>
          </div>

          {/* Column 3 */}
          <div className="results-col col-right">
            {/* Card 4: Clickable Image Card with Text Overlay */}
            <a 
              href="https://bloomadvisors.co.uk/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="results-card card-image-only results-card-link"
            >
              <img 
                src="/results_consulting.png" 
                alt="Reporting and analytics" 
                className="results-bg-img"
                loading="lazy"
              />
              <div className="overlay-gradient"></div>
              <div className="overlay-content overlay-content-simple">
                <h3 className="card-overlay-title">Reporting and analytics</h3>
                <p className="card-overlay-desc">
                  Power BI dashboards, Jet Reports, and Solver reporting templates built on your BC data. From operational KPIs to executive financial summaries, with scheduled refresh and row-level security.
                </p>
              </div>
            </a>
            
            {/* Card 5: Clickable Text Card (Pastel Lime Green Background) */}
            <a 
              href="https://bloomadvisors.co.uk/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="results-card card-text card-lime results-card-link"
            >
              <h3 className="card-custom-title">ERP migration and system integration</h3>
              <p className="card-paragraph">
                Structured migration from Sage, Xero, QuickBooks, or bespoke legacy systems. Data mapped, cleansed, and validated to ensure accuracy and reporting continuity from day one post go-live.
              </p>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Results;

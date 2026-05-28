import React from 'react';
import './Results.css';

const Results = () => {
  const capabilities = [
    {
      title: "Financial management & consolidation",
      desc: "Streamline your financial close and handle multi-currency transactions with ease. Consolidate data across all your entities and generate compliance-ready statutory accounts instantly."
    },
    {
      title: "Budgeting & forecasting",
      desc: "Design dynamic, multi-dimensional budgets connected directly to live actuals. Track real-time variances and run complex scenario modeling natively within Solver xFP&A."
    },
    {
      title: "Project costing & job management",
      desc: "Gain precise control over project profitability. Monitor labor, materials, and expenses with real-time WIP reporting that ties directly back to your core financial ledger."
    },
    {
      title: "Reporting & analytics",
      desc: "Transform raw data into actionable insights using custom Power BI and Jet Reports dashboards. Deliver secure, automated executive summaries and operational KPIs across your organization."
    },
    {
      title: "ERP migration & system integration",
      desc: "Transition smoothly from legacy systems like Sage or Xero. We meticulously map, cleanse, and validate your historical data to guarantee seamless reporting continuity from day one."
    }
  ];

  return (
    <section 
      className="capabilities-section"
      id="results"
    >
      <div className="container capabilities-container">
        
        <div className="cap-header-center" data-reveal>
          <h2 className="cap-title">By capability</h2>
          <p className="cap-subtitle">A practical breakdown of the modules we implement and extend.</p>
        </div>

        <div className="cap-grid">
          {capabilities.map((item, index) => (
            <div className="cap-card" key={index} data-reveal data-reveal-delay={`${index + 1}`}>
              <h3 className="cap-card-title">{item.title}</h3>
              <p className="cap-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Results;

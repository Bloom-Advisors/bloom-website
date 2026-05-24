import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import './Projects.css';

const projectData = [
  {
    id: 'energy',
    title: 'ENERGY AND UTILITIES',
    situation: 'An energy business needs to model multi-quarter cash flow across several business units, with actuals automatically feeding from Business Central into the forecast model.',
    enables: 'A Solver-based forecasting model integrating live BC financial data with projected budgets. Finance teams move from monthly spreadsheet reconciliation to automated actuals versus forecast reporting, with executive dashboards showing performance by business unit in real time.',
    deliveredTitle: 'Energy | Forecasting Nov 2025\nFinancial Forecasting and Reporting Solution',
    deliveredDesc: 'Delivered a six-quarter forecasting solution using Solver, integrating Business Central financials with projected budgets across business units. Built planning templates surfacing actuals versus forecast at executive level and established data validation workflows that materially improved forecast accuracy.',
    outcome: 'Replaced manual monthly reconciliation with automated forecast versus actuals reporting across all business units.',
    image: '/proj_energy.png'
  },
  {
    id: 'construction',
    title: 'CONSTRUCTION AND PROJECT SERVICES',
    situation: 'A project-based contractor discovers cost overruns only at project close because there is no system tracking actuals against the job budget during delivery. Subcontractor costs, materials, and variations are managed across spreadsheets with no consolidated view of profitability until the job is finished.',
    enables: 'Job costing and WIP reporting modules configured in Business Central give project managers and finance real-time visibility into spend, committed costs, and forecast-to-complete on every live job. Subcontractor purchase orders, variations, and billing are unified in one system, with Power BI dashboards surfacing profitability by project, phase, and team.',
    deliveredTitle: 'DELIVERED PROJECT',
    deliveredDesc: 'We are actively building our project portfolio in this sector. Book a call to discuss your specific requirements.',
    outcome: null,
    image: '/proj_construction.png'
  },
  {
    id: 'logistics',
    title: 'DISTRIBUTION AND LOGISTICS',
    situation: 'A distribution business manages purchasing, inventory, and customer billing across separate systems with no consolidated view of margin by route, customer, or product line. Finance closes late every month because data has to be pulled and reconciled manually before the numbers are meaningful.',
    enables: 'Business Central unifies purchasing, inventory, and sales into a single system. Automated ETL pipelines feed Power BI dashboards with real-time margin by customer, route, and product line. Finance teams move from manual month-end reconciliation to always-on financial visibility, with cashflow forecasting built on live actuals in Solver xFP&A.',
    deliveredTitle: 'DELIVERED PROJECT',
    deliveredDesc: 'We are actively building our project portfolio in this sector. Book a call to discuss your specific requirements.',
    outcome: null,
    image: '/proj_logistics.png'
  },
  {
    id: 'manufacturing',
    title: 'MANUFACTURING AND ENGINEERING',
    situation: 'A manufacturer is managing bills of materials, production scheduling, purchasing, and sales in disconnected systems. There is no real-time view of production costs against budget, and margin by product line only becomes visible at month-end when it is too late to act.',
    enables: 'Business Central manufacturing modules bring BOM management, production orders, and purchasing into one system. Job costing tracks actual production costs against standard costs in real time, with Power BI dashboards showing margin by product line, supplier performance, and inventory turnover. ERP data migration from legacy manufacturing systems is handled with full data mapping and validation before go-live.',
    deliveredTitle: 'DELIVERED PROJECT',
    deliveredDesc: 'We are actively building our project portfolio in this sector. Book a call to discuss your specific requirements.',
    outcome: null,
    image: '/proj_manufacturing.png'
  },
  {
    id: 'retail',
    title: 'RETAIL AND CONSUMER',
    situation: 'A retail business holds inventory data in one system, sales in another, and purchasing in a spreadsheet. There is no reliable view of margin by product or channel, and buying decisions are made on data that is weeks out of date.',
    enables: 'Business Central unifies inventory, purchasing, and sales data across all channels. Power BI dashboards track sell-through rates, margin by SKU, and supplier performance in one view. Buying and finance teams gain real-time visibility into stock availability, reorder positions, and channel-level profitability without manual data consolidation.',
    deliveredTitle: 'DELIVERED PROJECT',
    deliveredDesc: 'We are actively building our project portfolio in this sector. Book a call to discuss your specific requirements.',
    outcome: null,
    image: '/proj_retail.png'
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(projectData[0].id);
  const [openSection, setOpenSection] = useState('situation');

  // Reset accordion when industry tab changes
  useEffect(() => {
    setOpenSection('situation');
  }, [activeTab]);

  const activeProject = projectData.find(p => p.id === activeTab);

  const toggleAccordion = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        
        {/* Header Section */}
        <div className="section-header-split">
          <div className="sh-left">
            <div className="badge badge-left">
              <span className="dot"></span> SECTOR EXPERTISE
            </div>
            <h2 className="section-heading">Our Projects<br/><span className="text-muted">& Experience</span></h2>
          </div>
          <div className="sh-right">
            <p className="section-subheading">
              Tailored Business Central and Solver implementations across key industries.
            </p>
          </div>
        </div>

        {/* Premium Horizontal Tabs */}
        <div className="projects-tabs-row">
          {projectData.map((project, idx) => (
            <button
              key={project.id}
              className={`project-tab-pill ${activeTab === project.id ? 'active' : ''}`}
              onClick={() => setActiveTab(project.id)}
            >
              <span className="tab-num">0{idx + 1}</span>
              {project.title}
            </button>
          ))}
        </div>

        {/* Premium Split Showcase Card */}
        <div className="project-showcase">
          {/* Left: Image */}
          <div className="showcase-image-col">
            <img 
              src={activeProject.image} 
              alt={activeProject.title} 
              className="showcase-image"
              loading="lazy"
            />
          </div>

          {/* Right: Accordion Content */}
          <div className="showcase-content-col">
            <h3 className="showcase-main-title">{activeProject.title}</h3>
            
            <div className="showcase-accordion">
              
              {/* Situation */}
              <div className={`sa-item ${openSection === 'situation' ? 'open' : ''}`}>
                <button className="sa-header" onClick={() => toggleAccordion('situation')}>
                  <span>The Situation</span>
                  {openSection === 'situation' ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                <div className="sa-body">
                  <div className="sa-content">
                    <p>{activeProject.situation}</p>
                  </div>
                </div>
              </div>

              {/* Enables */}
              <div className={`sa-item ${openSection === 'enables' ? 'open' : ''}`}>
                <button className="sa-header" onClick={() => toggleAccordion('enables')}>
                  <span>What Business Central Enables</span>
                  {openSection === 'enables' ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                <div className="sa-body">
                  <div className="sa-content">
                    <p>{activeProject.enables}</p>
                  </div>
                </div>
              </div>

              {/* Delivered Project */}
              <div className={`sa-item ${openSection === 'delivered' ? 'open' : ''}`}>
                <button className="sa-header" onClick={() => toggleAccordion('delivered')}>
                  <span>Delivered Project & Outcome</span>
                  {openSection === 'delivered' ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                <div className="sa-body">
                  <div className="sa-content">
                    {activeProject.deliveredTitle !== 'DELIVERED PROJECT' && (
                      <span className="delivered-meta">{activeProject.deliveredTitle.split('\n')[0]}</span>
                    )}
                    <p className="light-text">{activeProject.deliveredDesc}</p>
                    
                    {activeProject.outcome && (
                      <div className="outcome-box">
                        <strong>Outcome:</strong> {activeProject.outcome}
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;

import React, { useState, useEffect, useRef } from 'react';
import { PieChart, BarChart3, LayoutDashboard } from 'lucide-react';
import './Services.css';

const Services = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  const servicesData = [
    {
      id: 1,
      type: 'plain-cream',
      label: 'Finance Operations',
      title: 'Financial management and consolidation',
      desc: 'Automate close, manage multi-currency transactions, consolidate entities, and produce statutory and management accounts from Business Central.',
      Icon: PieChart,
    },
    {
      id: 2,
      type: 'plain-green',
      label: 'Planning & Forecasting',
      title: 'Budgeting and forecasting',
      desc: 'Build connected budgets and rolling forecasts directly from Business Central actuals, with variance tracking and scenario planning.',
      Icon: BarChart3,
    },
    {
      id: 3,
      type: 'image',
      image: '/finance.png',
      label: 'Project Control',
      title: 'Project costing and job management',
      desc: 'Track labour, materials, and expenses against each job with real-time work-in-progress reporting and project profitability insights.',
    },
    {
      id: 4,
      type: 'plain-cream',
      label: 'Business Intelligence',
      title: 'Reporting and analytics',
      desc: 'Create Power BI, Jet Reports, and Solver dashboards built on your Business Central data for operational and executive visibility.',
      Icon: LayoutDashboard,
    },
    {
      id: 5,
      type: 'image',
      image: '/case_migration.png',
      label: 'ERP Transformation',
      title: 'ERP migration and system integration',
      desc: 'Migrate from Sage, Xero, QuickBooks, or legacy systems with clean data mapping, validation, and reporting continuity.',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 992) {
        setTranslateX(0);
        return;
      }

      if (!sectionRef.current || !trackRef.current) return;

      const section = sectionRef.current;
      const track = trackRef.current;
      const container = track.parentElement;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      const scrollableDist = sectionHeight - viewportHeight;
      if (scrollableDist <= 0) return;

      let progress = -rect.top / scrollableDist;
      progress = Math.max(0, Math.min(progress, 1));

      const maxTranslate = track.scrollWidth - container.clientWidth;

      setTranslateX(progress * Math.max(0, maxTranslate));
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="services-section" id="services">
      <div className="services-sticky-wrapper">
        <div className="services-container-vertical">
          
          {/* Split Header */}
          <div className="section-header-split">
            <div className="sh-left">
              <div className="badge badge-left">
                <span className="dot"></span> OUR SERVICES
              </div>
              <h2 className="section-heading">Business Central<br/><span className="text-muted">& Solver</span></h2>
            </div>
            <div className="sh-right">
              <p className="section-subheading">
                End-to-end delivery of Microsoft Dynamics 365 Business Central and Solver xFP&A, designed for complex financial and operational environments.
              </p>
            </div>
          </div>

          {/* Horizontal Cards Track */}
          <div className="services-track-container">
            <div 
              ref={trackRef} 
              className="services-track"
              style={{ transform: \`translateX(-\${translateX}px)\` }}
            >
              {servicesData.map((service) => {
                const isImage = service.type === 'image';
                const Icon = service.Icon;
                
                return (
                  <div key={service.id} className={\`service-card \${service.type}\`}>
                    {isImage && (
                      <div className="service-image-wrapper">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="service-image"
                          loading="lazy"
                        />
                      </div>
                    )}
                    
                    <div className="card-content">
                      {!isImage && Icon && (
                        <div className="icon-box">
                          <Icon size={22} color={service.type === 'plain-green' ? '#071b24' : '#071b24'} />
                        </div>
                      )}
                      
                      <div className="card-label">{service.label}</div>
                      <h3 className="service-card-title">{service.title}</h3>
                      <p className="service-card-desc">{service.desc}</p>
                      
                      <div className="card-link">Explore service &rarr;</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;

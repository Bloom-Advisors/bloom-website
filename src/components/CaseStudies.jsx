import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import './CaseStudies.css';

const CaseStudies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const listRef = useRef(null);

  const caseStudiesData = [
    {
      id: 1,
      title: 'BC Implementation',
      desc: 'Chart of accounts, financial dimensions, periods, and integrations. Configured to your business, not a generic template.',
      focus: 'Dynamics 365 BC',
      scope: 'Core ERP Setup',
      image: '/case_bc_impl.png',
    },
    {
      id: 2,
      title: 'BI and Reporting',
      desc: 'Power BI dashboards, Jet Reports, and Solver reporting layers built directly on your Business Central data.',
      focus: 'Power BI & Jet Reports',
      scope: 'Reporting & Analytics',
      image: '/case_bi_report.png',
    },
    {
      id: 3,
      title: 'Financial Planning and Analysis',
      desc: 'Multi-quarter budgeting and forecasting models in Solver xFP&A, connected to live BC actuals for real-time variance tracking.',
      focus: 'Solver xFP&A',
      scope: 'Budgeting & Forecasts',
      image: '/case_fpa.png',
    },
    {
      id: 4,
      title: 'ERP Data Migration',
      desc: 'Structured migration from Sage, Xero, QuickBooks, and other legacy systems. Data mapped, cleansed, and validated before go-live.',
      focus: 'Legacy to BC',
      scope: 'Data Engineering',
      image: '/case_migration.png',
    },
    {
      id: 5,
      title: 'Subcontracting',
      desc: 'Available as an experienced Dynamics 365 Business Central and Solver xFP&A subcontractor for Microsoft partners, ERP consultancies, and Solver implementation firms. We integrate directly into your delivery team to provide certified specialist capacity on active client engagements, covering BC configuration, Solver planning model builds, reporting layer development, and data engineering.',
      focus: 'Subcontract Capacity',
      scope: 'Consultant Augmentation',
      image: '/case_subcontract.png',
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
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

  useEffect(() => {
    const handleScroll = () => {
      if (!listRef.current) return;
      const listRect = listRef.current.getBoundingClientRect();
      
      // Only animate if the section is in or near the viewport
      if (listRect.top > window.innerHeight || listRect.bottom < 0) return;

      if (window.innerWidth < 992) {
        // Reset styles for mobile layout
        cardsRef.current.forEach((wrapper) => {
          if (!wrapper) return;
          const animator = wrapper.querySelector('.casestudy-card-animator');
          if (animator) {
            animator.style.transform = '';
            animator.style.opacity = '';
          }
        });
        return;
      }

      const cardWrappers = cardsRef.current;
      const stickyTop = 140; // matches top: 140px in CSS

      for (let i = 0; i < cardWrappers.length; i++) {
        const wrapper = cardWrappers[i];
        if (!wrapper) continue;

        const animator = wrapper.querySelector('.casestudy-card-animator');
        if (!animator) continue;

        // If it's not the last card, check the next card's position to scale this one down
        if (i < cardWrappers.length - 1) {
          const nextWrapper = cardWrappers[i + 1];
          if (nextWrapper) {
            const nextRect = nextWrapper.getBoundingClientRect();
            
            // Calculate progress based on the position of the next card wrapper relative to stickyTop
            const startScroll = stickyTop + 400; // Start scaling when the next card is within 400px of its sticky point
            const endScroll = stickyTop + 80;    // Finish scaling when the next card is 80px away
            const totalDistance = startScroll - endScroll;
            const currentDistance = nextRect.top - endScroll;
            
            let progress = 1 - (currentDistance / totalDistance);
            progress = Math.max(0, Math.min(1, progress)); // clamp between 0 and 1

            const scale = 1 - progress * 0.05; // scales down to 0.95
            const opacity = 1 - progress * 0.35; // fades to 0.65
            const translateY = -progress * 25; // shifts up 25px to create a stack depth

            animator.style.transform = `scale(${scale}) translateY(${translateY}px)`;
            animator.style.opacity = `${opacity}`;
          }
        } else {
          // The last card remains at scale 1 and opacity 1
          animator.style.transform = 'scale(1) translateY(0px)';
          animator.style.opacity = '1';
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Call once initially

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`casestudies-section ${isVisible ? 'visible' : ''}`} 
      id="case-studies"
    >
      <div className="casestudies-container">
        
        {/* Split Header */}
        <div className="section-header-split">
          <div className="sh-left">
            <div className="badge badge-left">
              <span className="dot"></span> OUR APPROACH
            </div>
            <h2 className="section-heading">Business Central<br/><span className="text-muted">Delivery</span></h2>
          </div>
          <div className="sh-right">
            <p className="section-subheading">
              Our core capabilities across Dynamics 365 Business Central and Solver xFP&A implementations.
            </p>
          </div>
        </div>

        {/* Capabilities List */}
        <div className="casestudies-list" ref={listRef}>
          {caseStudiesData.map((study, index) => (
            <div 
              key={study.id} 
              ref={el => cardsRef.current[index] = el}
              className="casestudy-card-wrapper"
              style={{
                '--card-depth': index + 1,
                '--card-index': index
              }}
            >
              <div className="casestudy-card-animator">
                <div className="casestudy-card">
                  
                  {/* Left Column: Details */}
                  <div className="casestudy-content">
                    <h3 className="casestudy-title">{study.title}</h3>
                    <p className="casestudy-text">{study.desc}</p>
                    
                    <div className="casestudy-divider"></div>
                    
                    <div className="casestudy-meta">
                      <div className="meta-column">
                        <span className="meta-label">Industry:</span>
                        <span className="meta-value">{study.focus}</span>
                      </div>
                      <div className="meta-column">
                        <span className="meta-label">Year:</span>
                        <span className="meta-value">{study.scope}</span>
                      </div>
                    </div>

                    <div className="casestudy-divider"></div>

                    <a 
                      href="https://bloomadvisors.co.uk/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-view-case"
                    >
                      <div className="btn-arrow-circle">
                        <ArrowRight size={18} color="#000" />
                      </div>
                      <span className="btn-case-text">VIEW CASE STUDY</span>
                    </a>
                  </div>

                  {/* Right Column: Image */}
                  <div className="casestudy-image-wrapper">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="casestudy-image"
                      loading="lazy"
                    />
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;

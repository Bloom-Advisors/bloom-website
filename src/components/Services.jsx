import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  const servicesData = [
    {
      id: 1,
      image: '/finance.png',
      title: 'FINANCE',
      desc: 'Your month-end close takes two weeks because the finance team is reconciling figures across three separate systems, none of which talk to each other.',
    },
    {
      id: 2,
      image: '/budgeting.png',
      title: 'BUDGETING',
      desc: 'You signed off a budget in January. By April, nobody can give you a clear picture of actual spend against that budget without submitting a spreadsheet request.',
    },
    {
      id: 3,
      image: '/reporting.png',
      title: 'REPORTING',
      desc: 'Leadership is making decisions on data that is 30 days old because real-time reporting does not exist. By the time the numbers land, the moment has passed.',
    },
    {
      id: 4,
      image: '/growth.png',
      title: 'GROWTH',
      desc: 'You are growing. New entities, new cost centres, new markets. Your current system was not built for this, and the cracks are starting to show.',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Disable calculations on mobile/tablet and reset transform
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

      // Scrollable distance within the parent section
      const scrollableDist = sectionHeight - viewportHeight;
      if (scrollableDist <= 0) return;

      // Progress ranges from 0 (section enters top of screen) to 1 (section exits bottom of screen)
      let progress = -rect.top / scrollableDist;
      progress = Math.max(0, Math.min(progress, 1));

      // Calculate maximum horizontal displacement
      const maxTranslate = track.scrollWidth - container.clientWidth;

      // Translate track based on progress
      setTranslateX(progress * Math.max(0, maxTranslate));
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Call once initially

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
              style={{ transform: `translateX(-${translateX}px)` }}
            >
              {servicesData.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="service-image-wrapper">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="service-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="service-card-content">
                    <div className="service-card-title-group">
                      <span className="service-card-dot"></span>
                      <h3 className="service-card-title">{service.title}</h3>
                    </div>
                    <p className="service-card-desc">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;

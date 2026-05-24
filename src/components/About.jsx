import React, { useState, useEffect, useRef } from 'react';
import { FileText, User, FileCheck } from 'lucide-react';
import './About.css';

// Smooth CountUp Component using requestAnimationFrame with easeOutQuad
const CountUp = ({ end, duration = 1500, start = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    let startTime = null;
    const startValue = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = progress * (2 - progress);
      
      setCount(Math.floor(easeProgress * (end - startValue) + startValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return <>{count}</>;
};

const About = () => {
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
        threshold: 0.15,
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
      className={`about-section ${isVisible ? 'visible' : ''}`}
      id="about-us-section"
    >
      <div className="about-container">
        
        {/* Split Header */}
        <div className="section-header-split">
          <div className="sh-left">
            <div className="badge badge-left">
              <span className="dot"></span> WHO WE ARE
            </div>
            <h2 className="section-heading about-heading-override">Independent<br/><span className="text-muted">Dynamics 365</span></h2>
          </div>
          <div className="sh-right">
            <p className="section-subheading about-subheading-override">
              We specialise in Business Central and Solver implementations. We cut through complexity to deliver robust finance, supply chain, and reporting solutions.
            </p>
          </div>
        </div>

        <div className="stats-grid">
          {/* Card 1 */}
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <FileText size={20} strokeWidth={2} color="#000" />
            </div>
            <h3 className="stat-number">
              <CountUp end={20} start={isVisible} />+
            </h3>
            <p className="stat-desc">
              Years combined experience
            </p>
          </div>

          {/* Card 2 */}
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <User size={20} strokeWidth={2} color="#000" />
            </div>
            <h3 className="stat-number">
              BC
            </h3>
            <p className="stat-desc">
              Certified consultants
            </p>
          </div>

          {/* Card 3 */}
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <FileCheck size={20} strokeWidth={2} color="#000" />
            </div>
            <h3 className="stat-number">
              UK
            </h3>
            <p className="stat-desc">
              Based, globally delivered
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

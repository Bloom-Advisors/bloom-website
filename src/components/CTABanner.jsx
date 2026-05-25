import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './CTABanner.css';

const CTABanner = () => {
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
      className={`cta-split-section ${isVisible ? 'visible' : ''}`}
      id="cta-banner"
    >
      <div className="cta-split-container cta-grid">
        
        {/* Left Panel (Text & Button) */}
        <div className="cta-text-panel cta-card">
          <div className="cta-label">
            Free Business Central Readiness Review
          </div>
          
          <h2 className="cta-split-heading">
            Stop patching systems together. Start running from one source of truth.
          </h2>
          
          <p className="cta-split-desc">
            Tell us what’s not working. We’ll assess whether Business Central can solve it, what needs to change, and how we would approach the delivery — with no commitment required.
          </p>
          
          <div className="cta-points">
            <div className="cta-point">
              <CheckCircle2 size={16} color="#d8f56a" />
              <span>No commitment required</span>
            </div>
            <div className="cta-point">
              <CheckCircle2 size={16} color="#d8f56a" />
              <span>Clear implementation pathway</span>
            </div>
            <div className="cta-point">
              <CheckCircle2 size={16} color="#d8f56a" />
              <span>Practical Business Central advice</span>
            </div>
          </div>
          
          <a 
            href="https://bloomadvisors.co.uk/contact" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button"
          >
            <span className="btn-cta-text">Book a Free Consultation</span>
            <div className="cta-button-icon">
              <ArrowRight size={18} color="#07111c" strokeWidth={2.5} />
            </div>
          </a>
        </div>

        {/* Right Panel (Image) */}
        <div className="cta-image-panel cta-image">
          <img 
            src="/cta_collaboration.png" 
            alt="Business professionals collaborating" 
            className="cta-split-img"
            loading="lazy"
          />
          <div className="cta-floating-card">
            <div className="floating-card-title">Business Central Review</div>
            <div className="floating-card-subtitle">Finance &bull; Reporting &bull; Operations</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTABanner;

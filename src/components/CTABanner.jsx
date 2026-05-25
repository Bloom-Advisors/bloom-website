import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
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
      <div className="cta-split-container">
        
        {/* Left Panel (Text & Button) */}
        <div className="cta-text-panel">
          <h2 className="cta-split-heading">
            Ready to stop patching systems together?
          </h2>
          <p className="cta-split-desc">
            Tell us what is not working. We will tell you whether Business Central can fix it and how we would approach the delivery. No commitment required.
          </p>
          
          <a 
            href="https://bloomadvisors.co.uk/contact" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-cta-split"
          >
            <div className="btn-cta-icon-box">
              <ArrowRight size={18} color="#000" strokeWidth={2.5} />
            </div>
            <span className="btn-cta-text">BOOK FREE CONSULTATION</span>
          </a>
        </div>

        {/* Right Panel (Image) */}
        <div className="cta-image-panel">
          <img 
            src="/cta_collaboration.png" 
            alt="Business professionals collaborating" 
            className="cta-split-img"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default CTABanner;

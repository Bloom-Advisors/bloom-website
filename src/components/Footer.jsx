import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

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

    const currentRef = footerRef.current;
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
    <footer 
      ref={footerRef} 
      className={`footer-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="footer-container">
        
        {/* Top Section: CTA / Newsletter */}
        <div className="footer-top">
          <div className="footer-top-left" style={{ maxWidth: '500px' }}>
            <h2 className="footer-cta-heading">Book a free<br/>consultation</h2>
            <p className="footer-cta-desc" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
              We will ask about your current systems, understand the challenge, and tell you honestly whether Business Central is the right fit. No sales pitch. No obligation.
            </p>
            <a href="https://bloomadvisors.co.uk/contact" target="_blank" rel="noopener noreferrer" className="btn-footer-cta">
              <span>BOOK ONLINE</span>
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="footer-top-right" style={{ maxWidth: '480px', textAlign: 'left', alignItems: 'flex-start' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.25rem', color: '#09090b', letterSpacing: '-0.01em' }}>What to expect on the call</h4>
            <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#52525b', fontSize: '1.05rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li>We will ask about your current systems and where the pain is.</li>
              <li>We will tell you whether Business Central is the right fit.</li>
              <li>If it is, we will outline what the implementation would involve and how long it would take.</li>
              <li>If it is not, we will tell you that too.</li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Middle Section: Links & Info */}
        <div className="footer-middle">
          
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <a href="#">
              <img src="/logo.png" alt="Bloom Advisors" style={{ height: '200px', margin: '-40px 0 -10px -15px', marginBottom: '0.5rem' }} />
            </a>
            <p className="footer-brand-desc">
              Independent Dynamics 365 and Solver specialists. We cut through complexity to deliver robust finance, supply chain, and reporting solutions.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="footer-col nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#about-us-section" className="footer-link">Who We Are</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#case-studies" className="footer-link">Approach</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#results" className="footer-link">Modules</a></li>
              <li><a href="#team" className="footer-link">Our Team</a></li>
            </ul>
          </div>



          {/* Contact Column */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-contact-list">
              <li className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>6th Floor, 37 Lombard Street<br/>EC3V 9BQ, London, England</span>
              </li>
              <li className="contact-item">
                <Mail size={18} className="contact-icon" />
                <a href="mailto:kwesi@bloomadvisors.uk" className="footer-link">kwesi@bloomadvisors.uk</a>
              </li>
              <li className="contact-item">
                <Phone size={18} className="contact-icon" />
                <a href="tel:+447990774379" className="footer-link">+44 (0) 7990 774379</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Social */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Bloom Advisors. All rights reserved.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

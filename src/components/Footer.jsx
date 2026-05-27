import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
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
        


        {/* Middle Section: Links & Info */}
        <div className="footer-middle">
          
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo-link">
              <img src="/logo.png" alt="Bloom Advisors" className="footer-logo-img" />
            </Link>
            <p className="footer-brand-desc">
              Independent Dynamics 365 and Solver specialists. We cut through complexity to deliver robust finance, supply chain, and reporting solutions.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="footer-col nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/projects" className="footer-link">Our Work</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
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

import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isManaging, setIsManaging] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    // Check if user already consented
    const consent = localStorage.getItem('bloomCookieConsent');
    if (!consent) {
      // Show the banner with a slight delay (1.5 seconds) for premium experience
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bloomCookieConsent', 'accepted');
    localStorage.setItem('bloomCookieAnalytics', 'true');
    localStorage.setItem('bloomCookieMarketing', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('bloomCookieConsent', 'declined');
    localStorage.setItem('bloomCookieAnalytics', 'false');
    localStorage.setItem('bloomCookieMarketing', 'false');
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('bloomCookieConsent', 'custom');
    localStorage.setItem('bloomCookieAnalytics', analytics ? 'true' : 'false');
    localStorage.setItem('bloomCookieMarketing', marketing ? 'true' : 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`cookie-banner-overlay ${isVisible ? 'slide-in' : ''} ${isManaging ? 'managing' : ''}`}>
      <div className="cookie-card">
        
        {!isManaging ? (
          /* MAIN CONSENT CARD VIEW */
          <>
            {/* Header with Icon */}
            <div className="cookie-header">
              <div className="cookie-icon-wrapper">
                <svg 
                  width="22" 
                  height="22" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="cookie-svg"
                >
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                  <path d="M8.5 8.5v.01" strokeWidth="3" />
                  <path d="M16 15.5v.01" strokeWidth="3" />
                  <path d="M12 12v.01" strokeWidth="3" />
                  <path d="M11 16v.01" strokeWidth="3" />
                  <path d="M7.5 13v.01" strokeWidth="3" />
                </svg>
              </div>
              <h2 className="cookie-title">Privacy & Cookies</h2>
            </div>

            {/* Content */}
            <div className="cookie-body">
              <p className="cookie-text">
                We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and analyze website traffic.
              </p>
              <a 
                href="https://bloomadvisors.co.uk/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cookie-link"
              >
                Read our Cookie Policy
              </a>
            </div>

            {/* Action Buttons */}
            <div className="cookie-buttons">
              <button className="cookie-btn btn-manage" onClick={() => setIsManaging(true)}>
                Manage Preferences
              </button>
              <button className="cookie-btn btn-decline" onClick={handleDecline}>
                Decline All
              </button>
              <button className="cookie-btn btn-accept" onClick={handleAccept}>
                Accept All
              </button>
            </div>
          </>
        ) : (
          /* DETAILED MANAGE PREFERENCES VIEW */
          <>
            {/* Header with Back Arrow */}
            <div className="cookie-header">
              <button className="cookie-back-btn" onClick={() => setIsManaging(false)} aria-label="Go back">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <h2 className="cookie-title">Manage Preferences</h2>
            </div>

            {/* Cookie Categories Details */}
            <div className="cookie-body cookie-manage-body">
              
              {/* Category 1: Essential */}
              <div className="cookie-preference-item">
                <div className="preference-info">
                  <h4>Essential Cookies</h4>
                  <p>Required for fundamental operations, security, and rendering. They cannot be disabled.</p>
                </div>
                <div className="preference-toggle">
                  <label className="toggle-switch disabled">
                    <input type="checkbox" checked disabled />
                    <span className="slider rounded"></span>
                  </label>
                </div>
              </div>

              {/* Category 2: Analytics */}
              <div className="cookie-preference-item">
                <div className="preference-info">
                  <h4>Analytics & Performance</h4>
                  <p>Helps us analyze user patterns and system interactions to refine our service delivery.</p>
                </div>
                <div className="preference-toggle">
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={analytics} 
                      onChange={(e) => setAnalytics(e.target.checked)} 
                    />
                    <span className="slider rounded"></span>
                  </label>
                </div>
              </div>

              {/* Category 3: Marketing */}
              <div className="cookie-preference-item">
                <div className="preference-info">
                  <h4>Marketing & Personalization</h4>
                  <p>Allows us to customize site insights and present relevant case study data based on visits.</p>
                </div>
                <div className="preference-toggle">
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={marketing} 
                      onChange={(e) => setMarketing(e.target.checked)} 
                    />
                    <span className="slider rounded"></span>
                  </label>
                </div>
              </div>

            </div>

            {/* Save Buttons */}
            <div className="cookie-buttons">
              <button className="cookie-btn btn-accept" onClick={handleSavePreferences}>
                Save Preferences
              </button>
              <button className="cookie-btn btn-decline" onClick={() => setIsManaging(false)}>
                Cancel
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default CookieConsent;

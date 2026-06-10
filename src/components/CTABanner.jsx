import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CTABanner.css';

const CTABanner = ({
  subtitle = "GET STARTED",
  title = "Ready to Strategize Your Next Move?",
  desc = "Let's talk about your next milestone—and how to reach it",
  btnText = "Schedule a Call",
  btnLink = "https://outlook.office.com/bookwithme/user/e99565bbfe2d464a800fa3e1a350b053@bloomadvisors.uk/meetingtype/9L1KQFzxUkmChE8jx-Tgww2?anonymous&ismsaljsauthenabled&ep=mlink",
  image = "/cta_collaboration.png",
  personName = "Alex Tran",
  personRole = "Founder & CEO",
  personImage = "/expert_1.png"
}) => {
  return (
    <section className="cta-split-section" id="cta-banner" data-reveal>
      <div className="cta-split-container">
        
        {/* Left Panel (Text & CTA) */}
        <div className="cta-text-panel">
          <div className="cta-text-content">
            <div className="cta-subtitle">
              <span className="cta-subtitle-dot"></span>
              <span className="cta-subtitle-text">{subtitle}</span>
            </div>
            <h2 className="cta-split-heading">{title}</h2>
            <p className="cta-split-desc">{desc}</p>
          </div>

          <div className="cta-bottom-bar">
            <div className="cta-person">
              <img 
                src={personImage} 
                alt={personName} 
                className="cta-person-img"
              />
              <div className="cta-person-info">
                <span className="cta-person-name">{personName}</span>
                <span className="cta-person-role">{personRole}</span>
              </div>
            </div>
            {btnLink.startsWith('http') ? (
              <a 
                href={btnLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-cta-schedule"
              >
                {btnText}
              </a>
            ) : (
              <Link to={btnLink} className="btn-cta-schedule">
                {btnText}
              </Link>
            )}
          </div>
        </div>

        {/* Right Panel (Image) */}
        <div className="cta-image-panel">
          <img 
            src={image} 
            alt="CTA Banner" 
            className="cta-split-img"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default CTABanner;

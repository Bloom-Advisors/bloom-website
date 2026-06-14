import React, { useState, useEffect, useRef } from 'react';
import './Team.css';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const teamData = [
    {
      id: 1,
      name: 'Kwesi Kwofie',
      role: 'ERP and Reporting Specialist',
      desc: 'Business Central implementation, BI reporting, data engineering, and xFP&A delivery. Over a decade of ERP and analytics project experience across energy, financial services, and professional services.',
      certifications: [
        'Business Central Functional Consultant',
        'Databricks Certified Data Engineer Associate',
        'AWS Certified Cloud Practitioner',
        'Solver Planning Level 1 and Reporting Level 1 and 2',
        'APM Project Management Qualification (in progress)',
        'Associate Member, APM'
      ],
      image: '/Kwesi image.png',
      socials: {
        facebook: '#',
        instagram: '#',
        twitter: '#'
      }
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
      className={`team-section ${isVisible ? 'visible' : ''}`}
      id="team"
    >
      <div className="team-container">
        {/* Split Header */}
        <div className="section-header-split">
          <div className="sh-left">
            <div className="badge badge-left">
              <span className="dot"></span> OUR TEAM
            </div>
            <h2 className="section-heading">Meet Our<br/><span className="text-muted">Consultant</span></h2>
          </div>
          <div className="sh-right">
            <p className="section-subheading">
              Certified specialists deeply experienced in Dynamics 365 Business Central and Solver architecture.
            </p>
          </div>
        </div>
        
        <div className="team-grid">
          {teamData.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image-wrapper">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="team-image"
                  loading="lazy"
                />
              </div>
              <div className="team-content">
                <div className="team-header">
                  <div className="team-details">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                  <div className="team-socials">
                    <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="social-icon">
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </a>
                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide-x">
                        <path d="M4 4l16 16M4 20L20 4"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                {member.desc && <p className="team-desc">{member.desc}</p>}
                
                {member.certifications && (
                  <div className="team-certs">
                    <h4 className="team-certs-title">Certifications</h4>
                    <div className="team-certs-list">
                      {member.certifications.map((cert, idx) => (
                        <span key={idx} className="team-cert-badge">{cert}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

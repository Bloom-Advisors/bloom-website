import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CTABanner from '../components/CTABanner';
import { caseStudiesData } from '../data/projectsData';
import './ProjectDetailPage.css';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = caseStudiesData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="pdp-wrapper pdp-not-found">
        <h2>Project Not Found</h2>
        <Link to="/projects">Return to Our Work</Link>
      </div>
    );
  }

  // Use the delivered project title if it exists, otherwise fallback
  const heroTitle = project.deliveredProject.hasProject 
    ? project.deliveredProject.title 
    : `Transforming operations in ${project.sector}`;

  const summaryText = project.situation.split('.')[0] + '.';

  return (
    <div className="pdp-wrapper">
      {/* Hero Section */}
      <section 
        className="pdp-hero-section"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url('${project.image}') center / cover no-repeat`
        }}
      >
        <div className="container">
          <div className="pdp-hero-content">
            <div className="about-breadcrumb hero-animate delay-1">
              <span className="breadcrumb-muted">Home /</span> <span className="breadcrumb-muted">Our Work /</span> <span className="breadcrumb-active">{project.sector}</span>
            </div>
            
            <h1 className="pdp-main-title hero-animate delay-2">{heroTitle}</h1>
            
            <div className="pdp-hero-footer hero-animate delay-3">
              <div className="pdp-meta-inline">
                {project.deliveredProject.hasProject && (
                  <div className="pdp-meta-item">
                    <span className="pdp-meta-label">Date:</span>
                    <span className="pdp-meta-value">{project.deliveredProject.meta.split('|').pop().trim()}</span>
                  </div>
                )}
                <div className="pdp-meta-item">
                  <span className="pdp-meta-label">Industry:</span>
                  <span className="pdp-meta-value">{project.sector}</span>
                </div>
              </div>
              <div className="pdp-hero-summary">
                <p>{summaryText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="pdp-overview-section">
        <div className="container pdp-overview-container">
          <div className="pdp-overview-pill">Overview</div>
          <h2 className="pdp-overview-title">Transforming operations through strategy and smart technology</h2>
          <p className="pdp-overview-text">{project.situation}</p>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pdp-cover-image-section">
        <div className="container">
          <img src={project.image} alt={project.sector} className="pdp-cover-image" />
        </div>
      </section>

      {/* Content Blocks */}
      <section className="pdp-body-section">
        <div className="container pdp-body-container">
          
          {/* Situation Block */}
          <div className="pdp-content-row">
            <div className="pdp-row-label">
              <div className="pdp-section-title">Challenge</div>
            </div>
            <div className="pdp-row-content">
              <p className="pdp-large-text">{project.situation}</p>
            </div>
          </div>

          {/* Enables Block */}
          <div className="pdp-content-row">
            <div className="pdp-row-label">
              <div className="pdp-section-title">Approach</div>
            </div>
            <div className="pdp-row-content">
              <p className="pdp-large-text">{project.enables}</p>
            </div>
          </div>

          {/* Delivered Project Block */}
          <div className="pdp-content-row">
            <div className="pdp-row-label">
              <div className="pdp-section-title">Result</div>
            </div>
            <div className="pdp-row-content">
              {project.deliveredProject.hasProject ? (
                <>
                  <p className="pdp-large-text">{project.deliveredProject.desc}</p>
                  <div className="pdp-outcome-box">
                    <strong>Outcome:</strong> {project.deliveredProject.outcome}
                  </div>
                </>
              ) : (
                <p className="pdp-empty-state">{project.deliveredProject.text}</p>
              )}
            </div>
          </div>

        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default ProjectDetailPage;

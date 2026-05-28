import React from 'react';
import CTABanner from '../components/CTABanner';
import { Link } from 'react-router-dom';
import { caseStudiesData } from '../data/projectsData';
import './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className="projects-page-wrapper page-transition">
      {/* Hero Section */}
      <section className="pp-hero">
        <div className="container">
          <div className="pp-hero-content">
            <div className="about-breadcrumb hero-animate delay-1">
              <span className="breadcrumb-muted">Home /</span> <span className="breadcrumb-active">Our Work</span>
            </div>
            <h1 className="pp-title hero-animate delay-2">Solutions that drive your business forward</h1>
            <p className="pp-description hero-animate delay-3">
              A deep dive into our core capabilities across Dynamics 365 Business Central and Solver xFP&A implementations.
            </p>
            <div className="hero-animate delay-4">
              <Link to="/contact" className="pp-hero-btn"><strong>Get in touch today</strong></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="pp-intro-section">
        <div className="container">
          <div className="pp-intro-content" data-reveal>
            <h2 className="pp-intro-title">Sector experience and delivered projects.</h2>
            <p className="pp-intro-text">
              Each section below sets out the business challenge we solve in that sector, what Business Central enables in practice, and where available, a project we have delivered that demonstrates it.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="pp-list-section">
        <div className="container">
          <div className="pp-grid">
            {caseStudiesData.map((project) => {
              // Use the full situation text for the summary.
              const summary = project.situation;
              
              const cardTitle = project.deliveredProject.hasProject 
                ? project.deliveredProject.title 
                : `Transforming operations in ${project.sector}`;

              return (
                <div key={project.id} className="pp-card" data-reveal>
                  <Link to={`/projects/${project.id}`} className="pp-card-image-link">
                    <img src={project.image} alt={project.sector} loading="lazy" className="pp-card-image" />
                  </Link>
                  
                  <div className="pp-card-tags">
                    <span className="pp-card-tag">{project.sector}</span>
                    <span className="pp-card-tag">CASE STUDY</span>
                  </div>
                  
                  <Link to={`/projects/${project.id}`} className="pp-card-title-link">
                    <h3 className="pp-card-title">{cardTitle}</h3>
                  </Link>
                  
                  <p className="pp-card-summary">{summary}</p>
                  
                  <Link to={`/projects/${project.id}`} className="pp-card-read-link">
                    Read case <span className="pp-arrow">&rarr;</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      <div className="pp-cta-wrapper">
        <CTABanner 
          title="Discuss a project in your sector"
          desc="If your challenge is similar to one of the examples above, book a call and we will walk you through exactly how we approached it."
          btnText="BOOK A FREE CONSULTATION"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;

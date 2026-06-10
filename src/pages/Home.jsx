import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <div className="page-transition">
      <SEO
        title="Business Central & Solver Implementation Consultants"
        description="Bloom Advisors helps growing UK businesses implement Microsoft Dynamics 365 Business Central and Solver xFP&A for unified finance, operations, and reporting."
        canonical="/"
      />
      <Hero />
      <About />
      <Services />
      <CTABanner />
    </div>
  );
};

export default Home;

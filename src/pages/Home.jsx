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
        title="Business Advisory & Growth Consulting UK"
        description="Bloom Advisors provides business advisory, growth strategy, Business Central implementation, and Solver xFP&A consulting for entrepreneurs and growing UK organisations."
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

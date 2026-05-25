import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <div className="page-transition">
      <Hero />
      <About />
      <Services />
      <FAQ />
      <CTABanner />
    </div>
  );
};

export default Home;

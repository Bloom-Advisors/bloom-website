import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Results from './components/Results';
import Team from './components/Team';
import CTABanner from './components/CTABanner';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Projects />
      <Results />
      <Team />
      <CTABanner />
      <Footer />
    </>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Check, Clock, MessageCircle } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import './ContactPage.css';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    challenges: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', phone: '', challenges: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page-wrapper page-transition">
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-heading hero-animate delay-2">
              Let's build something <span className="highlight">that works.</span>
            </h1>
            <p className="contact-hero-text hero-animate delay-3">
              Whether you're ready to start or just exploring options, we're here to help you make the right decision.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar Section */}
      <section className="contact-main" data-reveal>
        <div className="contact-main-container">
          
          {/* Form Card */}
          <div className="contact-form-card" data-reveal>
            <div className="contact-form-header">
              <h2>Send us a message</h2>
              <p>Tell us what's not working. We'll respond within one business day.</p>
            </div>

            {submitted ? (
              <div className="success-state">
                <div className="success-icon">
                  <Check size={28} />
                </div>
                <h3>Message sent successfully</h3>
                <p>We'll review your challenge and get back to you personally within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Kwame Mensah"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Acme Holdings Ltd"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="kwame@acme.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone (optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 7990 774379"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="challenges">What's not working?</label>
                  <textarea
                    id="challenges"
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Describe your current system challenges, reconciliation bottlenecks, or budgeting pain points..."
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit-btn">
                  <span>Submit now</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="contact-sidebar" data-reveal data-reveal-delay="2">
            
            {/* What to Expect Card */}
            <div className="sidebar-card expect-card-premium">
              <h3>What to expect</h3>
              <div className="expect-list-premium">
                <div className="expect-item-premium">
                  <span className="expect-num-badge">01</span>
                  <p className="expect-text-premium">We ask about your current systems and pain points</p>
                </div>
                <div className="expect-item-premium">
                  <span className="expect-num-badge">02</span>
                  <p className="expect-text-premium">We assess whether Business Central is the right fit</p>
                </div>
                <div className="expect-item-premium">
                  <span className="expect-num-badge">03</span>
                  <p className="expect-text-premium">We outline the implementation approach and timeline</p>
                </div>
                <div className="expect-item-premium">
                  <span className="expect-num-badge">04</span>
                  <p className="expect-text-premium">If it's not the right fit, we'll tell you honestly</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Full-width Horizontal Contact Info Banner */}
        <div className="contact-info-banner-container" data-reveal data-reveal-delay="3">
          <div className="contact-info-banner-card">
            <div className="info-column">
              <span className="info-label">Email</span>
              <a href="mailto:kwesi@bloomadvisors.uk" className="info-value">kwesi@bloomadvisors.uk</a>
            </div>
            <div className="info-divider"></div>
            <div className="info-column">
              <span className="info-label">Phone</span>
              <a href="tel:+447990774379" className="info-value">+44 (0) 7990 774379</a>
            </div>
            <div className="info-divider"></div>
            <div className="info-column">
              <span className="info-label">Address</span>
              <span className="info-value">6th Floor, 37 Lombard Street, London, EC3V 9BQ</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <CTABanner
        subtitle="BOOK A CONSULTATION"
        title="Prefer to speak with us directly?"
        desc="Schedule a free 30-minute discovery call with our team. No obligation — just a conversation about your goals."
        btnText="Book a Free Call"
        btnLink="/contact"
        image="/cta_collaboration.png"
        personName="Kwesi Bloom"
        personRole="Principal Advisor"
        personImage="/expert_1.png"
      />

    </div>
  );
};

export default ContactPage;

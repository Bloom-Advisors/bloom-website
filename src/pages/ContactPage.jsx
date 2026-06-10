import React, { useEffect, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import SEO from '../components/SEO';
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
      <SEO
        title="Contact Us - Book a Free Consultation"
        description="Get in touch with Bloom Advisors. Book a free 30-minute discovery call to discuss your Business Central implementation, Solver reporting, or ERP challenges."
        canonical="/contact"
      />

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

      {/* Editorial Form Section */}
      <section className="contact-editorial-section">
        <div className="contact-editorial-inner">

          {/* Left: Editorial Label Column */}
          <div className="editorial-label-col">
            <span className="editorial-index">001</span>
            <h2 className="editorial-heading">Start the<br />conversation.</h2>
            <p className="editorial-subtext">
              Tell us about your business and what's holding it back. We read every message personally.
            </p>
            <div className="editorial-contact-strip">
              <div className="editorial-contact-item">
                <span className="editorial-contact-label">Email</span>
                <a href="mailto:kwesi@bloomadvisors.uk" className="editorial-contact-value">kwesi@bloomadvisors.uk</a>
              </div>
              <div className="editorial-contact-item">
                <span className="editorial-contact-label">Phone</span>
                <a href="tel:+447990774379" className="editorial-contact-value">+44 (0) 7990 774379</a>
              </div>
              <div className="editorial-contact-item">
                <span className="editorial-contact-label">Office</span>
                <span className="editorial-contact-value">6th Floor, 37 Lombard Street, EC3V 9BQ. London, England</span>
              </div>
            </div>
          </div>

          {/* Right: Form Column */}
          <div className="editorial-form-col">
            {submitted ? (
              <div className="editorial-success">
                <div className="editorial-success-icon">
                  <Check size={32} />
                </div>
                <h3>Message received.</h3>
                <p>We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="editorial-form">

                <div className="editorial-form-row">
                  <div className="editorial-field">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Kwame Mensah"
                      autoComplete="off"
                    />
                  </div>
                  <div className="editorial-field">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Acme Holdings Ltd"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="editorial-form-row">
                  <div className="editorial-field">
                    <label htmlFor="email">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="kwame@acme.com"
                      autoComplete="off"
                    />
                  </div>
                  <div className="editorial-field">
                    <label htmlFor="phone">Phone <span className="field-optional">(optional)</span></label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 7990 774379"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="editorial-field editorial-field--full">
                  <label htmlFor="challenges">What's not working?</label>
                  <textarea
                    id="challenges"
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Describe your current system challenges, reconciliation bottlenecks, or reporting pain points..."
                  ></textarea>
                </div>

                <div className="editorial-form-footer">
                  <button type="submit" className="editorial-submit-btn">
                    <span>Send message</span>
                    <div className="editorial-btn-icon">
                      <ArrowRight size={18} />
                    </div>
                  </button>
                  <p className="editorial-form-note">We respond within one business day.</p>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <CTABanner
        subtitle="BOOK A CONSULTATION"
        title="Prefer to speak with us directly?"
        desc="Schedule a free 30-minute discovery call with our team. No obligation — just a conversation about your goals."
        btnText="Book a Free Call"
        btnLink="https://outlook.office.com/bookwithme/user/e99565bbfe2d464a800fa3e1a350b053@bloomadvisors.uk/meetingtype/9L1KQFzxUkmChE8jx-Tgww2?anonymous&ismsaljsauthenabled&ep=mlink"
        image="/cta_collaboration.png"
        personName="Kwesi Kwofie"
        personRole="Lead Consultant"
        personImage="/expert_1.png"
      />

    </div>
  );
};

export default ContactPage;

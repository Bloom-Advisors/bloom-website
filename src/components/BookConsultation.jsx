import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import './BookConsultation.css';

const BookConsultation = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    challenge: '',
    preferredTime: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', company: '', phone: '', challenge: '', preferredTime: '' });
      }, 300);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen && !submitted) return null;

  return (
    <div className={`bc-overlay ${isOpen ? 'bc-overlay--open' : ''}`} onClick={onClose}>
      <div
        className={`bc-modal ${isOpen ? 'bc-modal--open' : ''}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Book a consultation"
      >
        <div className="bc-container">
          {/* Left Column: Premium Image Card */}
          <div className="bc-image-card">
            <div className="bc-image-overlay"></div>
            <img 
              src="/executive_advisory.png" 
              alt="Consultation alignment" 
              className="bc-bg-image" 
            />
            <div className="bc-card-content">
              <div className="bc-card-brand">
                <span className="brand-dot"></span>
                <span>BLOOM ADVISORS</span>
              </div>
              <div className="bc-card-middle">
                <h3 className="bc-card-headline">Let's align your systems with your growth strategy.</h3>
                <p className="bc-card-desc">Partner with specialists who integrate directly into your operations to deliver Business Central clarity.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="bc-form-container">
            {/* Header */}
            <div className="bc-modal-header">
              <div>
                <span className="bc-badge">FREE CONSULTATION</span>
                <h2 className="bc-title">Book a Consultation</h2>
                <p className="bc-subtitle">Tell us about your challenge and we will take it from there.</p>
              </div>
              <button className="bc-close-btn" onClick={onClose} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="bc-modal-body">
              {submitted ? (
                <div className="bc-success">
                  <div className="bc-success-icon">
                    <Check size={28} />
                  </div>
                  <h3>Request received!</h3>
                  <p>We will review your details and reach out within one business day to confirm your consultation time.</p>
                  <button className="bc-success-close" onClick={onClose}>Done</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bc-form">
                  <div className="bc-form-row">
                    <div className="bc-form-group">
                      <label htmlFor="bc-name">Full Name *</label>
                      <input
                        type="text"
                        id="bc-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="bc-form-group">
                      <label htmlFor="bc-company">Company *</label>
                      <input
                        type="text"
                        id="bc-company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="bc-form-row">
                    <div className="bc-form-group">
                      <label htmlFor="bc-email">Work Email *</label>
                      <input
                        type="email"
                        id="bc-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                      />
                    </div>
                    <div className="bc-form-group">
                      <label htmlFor="bc-phone">Phone (optional)</label>
                      <input
                        type="tel"
                        id="bc-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 7000 000000"
                      />
                    </div>
                  </div>

                  <div className="bc-form-group">
                    <label htmlFor="bc-challenge">What is your biggest challenge right now? *</label>
                    <textarea
                      id="bc-challenge"
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      required
                      rows="3"
                      placeholder="Describe your current system challenges, reporting gaps, or what is slowing you down..."
                    ></textarea>
                  </div>

                  <div className="bc-form-group">
                    <label htmlFor="bc-time">Preferred time to connect</label>
                    <select
                      id="bc-time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                    >
                      <option value="">Select a time slot</option>
                      <option value="morning">Morning (9am – 12pm GMT)</option>
                      <option value="afternoon">Afternoon (12pm – 5pm GMT)</option>
                      <option value="flexible">I am flexible</option>
                    </select>
                  </div>

                  <button type="submit" className="bc-submit-btn">
                    <span>Request Consultation</span>
                    <ArrowRight size={17} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;

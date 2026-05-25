import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqData = [
    {
      question: "What types of businesses do you work with?",
      answer: "We work primarily with growing mid-market businesses, MSMEs, and corporate enterprises looking to establish robust ERP (Dynamics 365 Business Central) and financial planning (Solver xFP&A) infrastructures."
    },
    {
      question: "How do you tailor your consulting services to each client?",
      answer: "We perform a deep analysis of your current systems, charts of accounts, and financial close processes. Every system configuration and reporting dashboard is built from scratch to match your specific operational structure."
    },
    {
      question: "What's the typical duration of a consulting engagement?",
      answer: "Implementation times vary depending on complexity, but a standard core Business Central setup typically ranges from 8 to 12 weeks, while dedicated Solver planning models are delivered in 4 to 6 weeks."
    },
    {
      question: "How do you measure the success of your services?",
      answer: "We measure success by the efficiency of your operations. Our key metrics include reducing month-end close latency, eliminating manual spreadsheet reconciliations, and enabling on-demand roll-forward variance reporting."
    },
    {
      question: "Is our information kept confidential?",
      answer: "Absolutely. We sign strict non-disclosure agreements (NDAs) before access is granted to any database, financial records, or system environments. All client data is treated with enterprise-grade security protocols."
    }
  ];

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        
        {/* Centered Header */}
        <div className="faq-header" data-reveal>
          <span className="faq-badge">FAQs</span>
          <h2 className="faq-title">Frequently asked questions</h2>
        </div>

        {/* Accordions List */}
        <div className="faq-list" data-reveal data-reveal-delay="2">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <div className="faq-icon-circle">
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="faq-icon-svg"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;

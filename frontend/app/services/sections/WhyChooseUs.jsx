import React from 'react';

export default function WhyChooseUs() {
  return (
    <section className="why-choose-unimrkt-section">
      <div className="srcn-container">
        <div className="why-choose-header">
          <h2 className="why-choose-title">Why Choose Unimrkt?</h2>
          <p className="why-choose-desc">
            With 16+ years of expertise, global research capabilities, advanced methodologies, and trusted data quality, Unimrkt delivers accurate insights that empower smarter business decisions and sustainable growth.
          </p>
        </div>

        <div className="why-choose-grid">
          {/* Card 1: 16+ Years */}
          <div className="why-choose-card">
            <div className="why-choose-icon-box" aria-hidden="true">
              <svg className="why-choose-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34"></path>
                <path d="M14 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34"></path>
                <path d="M6 4h12a2 2 0 0 1 2 2v3a8 8 0 0 1-8 8 8 8 0 0 1-8-8V6a2 2 0 0 1 2-2z"></path>
              </svg>
            </div>
            <div className="why-choose-stat">16+ Years</div>
            <div className="why-choose-label">of Research Excellence</div>
          </div>

          {/* Card 2: 90+ Countries */}
          <div className="why-choose-card">
            <div className="why-choose-icon-box" aria-hidden="true">
              <svg className="why-choose-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div className="why-choose-stat">90+ Countries</div>
            <div className="why-choose-label">Covered</div>
          </div>

          {/* Card 3: 22+ Languages */}
          <div className="why-choose-card">
            <div className="why-choose-icon-box" aria-hidden="true">
              <svg className="why-choose-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5h7M7 2v6M9 5c0 4.5-2.5 8-5 10"></path>
                <path d="M5.5 10.5C7.5 13 10 15 13 16"></path>
                <rect x="12" y="9" width="9" height="12" rx="2"></rect>
                <path d="M14.5 17h4M16.5 13v6"></path>
              </svg>
            </div>
            <div className="why-choose-stat">22+ Languages</div>
            <div className="why-choose-label">Supported</div>
          </div>

          {/* Card 4: Experienced Professionals */}
          <div className="why-choose-card">
            <div className="why-choose-icon-box" aria-hidden="true">
              <svg className="why-choose-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="why-choose-stat">Experienced</div>
            <div className="why-choose-label">Research Professionals</div>
          </div>

          {/* Card 5: Customized Solutions */}
          <div className="why-choose-card">
            <div className="why-choose-icon-box" aria-hidden="true">
              <svg className="why-choose-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <div className="why-choose-stat">Customized</div>
            <div className="why-choose-label">Research Solutions</div>
          </div>

          {/* Card 6: Accurate Insights */}
          <div className="why-choose-card">
            <div className="why-choose-icon-box" aria-hidden="true">
              <svg className="why-choose-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
            </div>
            <div className="why-choose-stat">Accurate</div>
            <div className="why-choose-label">&amp; Actionable Insights</div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Link from 'next/link';

export default function PrimaryServices() {
  return (
    <section className="primary-services-section">
      <div className="srcn-container">
        <div className="primary-services-header">
          <span className="primary-services-kicker">WHAT WE DO</span>
          <h2 className="primary-services-title">Our Primary Research Services</h2>
          <p className="primary-services-desc">
            Delivering actionable data through custom research methodologies designed to help you understand your market, your competitors, and your customers.
          </p>
        </div>
        <div className="primary-services-grid">
          {/* Service 1: Telephonic Surveys */}
          <Link href="/telephonic-surveys" className="primary-service-card">
            <img src="/asstes/images/telephonic-surveys-card-img.png" alt="Telephonic Surveys" className="primary-service-card-img" />
            <div className="primary-service-card-overlay"></div>
            <div className="primary-service-card-body">
              <h3 className="primary-service-card-title">Telephonic Surveys</h3>
              <p className="primary-service-card-desc">Efficient phone-based surveys capturing valuable respondent insights.</p>
              <div className="primary-service-card-btn-wrap">
                <span className="primary-service-card-btn" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Service 2: Online Surveys */}
          <Link href="/services" className="primary-service-card">
            <img src="/asstes/images/online-surveys-card-img.png" alt="Online Surveys" className="primary-service-card-img" />
            <div className="primary-service-card-overlay"></div>
            <div className="primary-service-card-body">
              <h3 className="primary-service-card-title">Online Surveys</h3>
              <p className="primary-service-card-desc">Scalable digital questionnaires connecting you with verified global respondents.</p>
              <div className="primary-service-card-btn-wrap">
                <span className="primary-service-card-btn" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Service 3: In-Depth Interviews */}
          <Link href="/services" className="primary-service-card">
            <img src="/asstes/images/interview-controls-card-img.png" alt="In-Depth Interviews" className="primary-service-card-img" />
            <div className="primary-service-card-overlay"></div>
            <div className="primary-service-card-body">
              <h3 className="primary-service-card-title">In-Depth Interviews</h3>
              <p className="primary-service-card-desc">One-on-one expert conversations uncovering profound qualitative market perspectives.</p>
              <div className="primary-service-card-btn-wrap">
                <span className="primary-service-card-btn" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Service 4: CATI Surveys */}
          <Link href="/telephonic-surveys" className="primary-service-card">
            <img src="/asstes/images/smart-survey-management-card-img.png" alt="CATI Surveys" className="primary-service-card-img" />
            <div className="primary-service-card-overlay"></div>
            <div className="primary-service-card-body">
              <h3 className="primary-service-card-title">CATI Surveys</h3>
              <p className="primary-service-card-desc">Structured computer-assisted interviewing ensuring speed, compliance, and accuracy.</p>
              <div className="primary-service-card-btn-wrap">
                <span className="primary-service-card-btn" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function PrimaryOverview() {
  return (
    <section className="telephonic-overview-section">
      <div className="srcn-container">
        <div className="telephonic-overview-grid">
          <div className="telephonic-overview-content">
            <span className="telephonic-overview-kicker sub-title-red">About Primary Research</span>
            <h2 className="telephonic-overview-title">First-Hand Insights That Power Better Business Decisions</h2>

            <p>
              Primary research enables organizations to collect reliable information directly from customers, businesses, and stakeholders. At Unimrkt Research, we design customized research programs using qualitative and quantitative methodologies to help businesses understand markets, validate ideas, measure customer experience, and uncover new opportunities.
            </p>

            <p>
              Our experienced research professionals combine global reach, advanced technology, and proven methodologies to deliver accurate, high-quality data tailored to every project.
            </p>

            <div className="primary-overview-badges">
              <div className="primary-overview-badge-item">
                <div className="badge-icon-box">
                  <img src="/asstes/images/icon/customized-icon-img.png" alt="Customized Research Solutions" />
                </div>
                <div className="badge-text-box">
                  <span>Customized</span>
                  Research Solutions
                </div>
              </div>
              <div className="primary-overview-badge-item">
                <div className="badge-icon-box">
                  <img src="/asstes/images/icon/team-work-icon-img.png" alt="Experienced Research Team" />
                </div>
                <div className="badge-text-box">
                  <span>Experienced</span>
                  Research Team
                </div>
              </div>
              <div className="primary-overview-badge-item">
                <div className="badge-icon-box">
                  <img src="/asstes/images/icon/trust-shield-tick-icon-img.png" alt="Accurate & Reliable Insights" />
                </div>
                <div className="badge-text-box">
                  <span>Accurate &amp;</span>
                  Reliable Insights
                </div>
              </div>
            </div>
          </div>

          <div className="telephonic-overview-visual-wrap">
            <div className="telephonic-overview-figure">
              <img src="/asstes/images/primary-research-about-img.png" alt="First-Hand Insights That Power Better Business Decisions" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

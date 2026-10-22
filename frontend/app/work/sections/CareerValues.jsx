import React from 'react';

const values = [
  { icon: '/asstes/images/icon/communication-icon-img.png', title: 'Clear Communication' },
  { icon: '/asstes/images/icon/communication-icon-img.png', title: 'Innovation' },
  { icon: '/asstes/images/icon/communication-icon-img.png', title: 'Wisdom' },
  { icon: '/asstes/images/icon/communication-icon-img.png', title: 'Integrity' },
  { icon: '/asstes/images/icon/team-work-icon-img.png', title: 'Team Work' },
  { icon: '/asstes/images/icon/business-icon-img.png', title: 'Business Ethics' },
  { icon: '/asstes/images/icon/diversity-icon-img.png', title: 'Diversity' },
  { icon: '/asstes/images/icon/transparency-icon-img.png', title: 'Transparency' },
];

export default function CareerValues() {
  return (
    <section className="career-values-section">
      <div className="srcn-container">
        <header className="career-values-header">
          <span className="career-values-kicker">Core Values of Unimrkt</span>
          <h2 className="section-main-heading">What Drives Us</h2>
          <p className="section-sub-text">
            Our values shape the way we work, collaborate, and create impact every day.
          </p>
        </header>
        <div className="career-values-grid">
          {values.map((v, i) => (
            <div key={i} className="career-value-col">
              <div className="career-value-card">
                <div className="career-value-icon">
                  <img src={v.icon} alt={v.title} />
                </div>
                <h3>{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

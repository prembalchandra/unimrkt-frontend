import React from 'react';

const metrics = [
  { icon: '/asstes/images/icon/experience-icon-img.png', title: '10+ Years', desc: 'Industry Experience' },
  { icon: '/asstes/images/icon/group-cati-interviws-icon-img.png', title: '100K+ CATI', desc: 'Interviews Annually' },
  { icon: '/asstes/images/icon/countries-icon-img.png', title: '50+', desc: 'Global Markets Covered' },
  { icon: '/asstes/images/icon/profile-user-icon-img.png', title: 'Dedicated Leads', desc: 'End-to-End Ownership' },
  { icon: '/asstes/images/icon/wider-respondent-reach-icon-img.png', title: 'Global Fieldwork', desc: 'Multi-Market Reach' },
  { icon: '/asstes/images/icon/data-quality-checks-icon-img.png', title: '95.6%', desc: 'Data Accuracy Rate' },
  { icon: '/asstes/images/icon/interviewer-icon-img.png', title: '200+', desc: 'Trained Interviewers' },
  { icon: '/asstes/images/icon/scalable-research-icon-img.png', title: 'Scalable', desc: 'Capacity On Demand' },
  { icon: '/asstes/images/icon/clipboard-tick-icon-img.png', title: 'Rigorous', desc: 'Quality Assurance' },
  { icon: '/asstes/images/icon/timing-icon-img.png', title: '24/7 Support', desc: 'Round-the-Clock Agility' },
  { icon: '/asstes/images/icon/languages-icon-img.png', title: '30+', desc: 'Languages Supported' },
  { icon: '/asstes/images/icon/briefcase-icon-img.png', title: 'B2B & B2C', desc: 'Cross-Sector Expertise' },
  { icon: '/asstes/images/icon/secure-data-handling-icon-img.png', title: 'Data Security', desc: 'ISO 27001 & GDPR' },
  { icon: '/asstes/images/icon/growth-impact-icon-img.png', title: 'Actionable', desc: 'Strategic Insights' },
  { icon: '/asstes/images/icon/better-respondent-engagement-icon-img.png', title: '98%', desc: 'Client Retention' },
];

export default function UnimrktResearchArea() {
  return (
    <section className="our-unimrkt-research-area">
      <div className="our-unimrkt-research-banner">
        <img src="" alt="" />
      </div>
      <div className="srcn-container">
        <div className="our-unimrkt-research-wrapper-inner">
          <div className="our-unimrkt-research-top-content">
            <span className="sub-title-red" style={{ display: 'inline-block', marginBottom: '8px' }}>
              WHY CHOOSE US
            </span>
            <h2 className="our-unimrkt-research-heading">Why Unimrkt Research?</h2>
            <p className="our-unimrkt-research-title">
              Delivering accurate first-hand data through expert research methodologies, seasoned professionals, and rigorous quality control.
            </p>
          </div>
          <div className="our-unimrkt-research-wapper-area">
            <div className="our-unimrkt-research-grid">
              {metrics.map((item, index) => (
                <div key={index} className="our-unimrkt-research-card-col">
                  <div className="our-unimrkt-research-card-wapper">
                    <div className="our-unimrkt-research-card">
                      <div className="icon-img-box">
                        <img src={item.icon} alt={item.desc} />
                      </div>
                      <div className="our-unimrkt-research-content-area">
                        <h3 className="our-unimrkt-research-heading">{item.title}</h3>
                        <p className="our-unimrkt-research-tilte">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

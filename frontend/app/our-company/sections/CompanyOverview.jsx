import React from 'react';
import Link from 'next/link';

const companyPillars = [
  {
    icon: '/asstes/images/icon/Research-icon-img.png',
    title: 'ISO-Certified Integrity',
    desc: 'ISO 20252 and ISO 27001 certified protocols safeguarding data accuracy, strict digital device fingerprinting, and ethical respondent engagement.',
  },
  {
    icon: '/asstes/images/icon/countries-icon-img.png',
    title: 'Global Footprint (90+ Countries)',
    desc: 'Localized qualitative interviewing and multi-language CATI survey instruments reaching hard-to-find B2B decision-makers and specialized consumers worldwide.',
  },
  {
    icon: '/asstes/images/icon/every-stage-icon-img.png',
    title: 'Speed & Execution Rigor',
    desc: 'Dedicated project managers, 24/7 follow-the-sun field capabilities, and real-time dashboard progress tracking for every research study.',
  },
  {
    icon: '/asstes/images/icon/experience-icon-img.png',
    title: 'Domain-Specialist Teams',
    desc: 'Sector-trained analysts and research directors with over 16+ years of specialized experience in Healthcare, Automotive, BFSI, Tech, and Consumer verticals.',
  },
];

export default function CompanyOverview() {
  return (
    <>
      <section className="insights-editorial-section" style={{ padding: '80px 0' }}>
        <div className="srcn-container">
          <div className="insights-editorial-box">
            <span className="sub-title-red">OUR STORY</span>
            <h2 className="insights-editorial-heading section-main-heading">
              Transforming Complex Market Ambiguity Into Strategic Confidence
            </h2>
            <div className="insights-editorial-text-wrap">
              <p>
                Founded with a mission to deliver uncompromised research fidelity, Unimrkt Research has evolved into one of the world's most trusted primary research partners. We serve leading Fortune 500 enterprises, management consultancies, global agencies, and high-growth innovators.
              </p>
              <p>
                From CATI telephonic interviewing across 450+ native-language stations to cutting-edge web panels and AI-assisted qualitative text analysis, our global infrastructure empowers leadership teams to navigate market disruptions with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="research-value-section" style={{ paddingTop: '0' }}>
        <div className="srcn-container">
          <div className="research-value-wrap">
            <div className="research-value-header">
              <span className="research-value-kicker career-values-kicker">OUR CORE PILLARS</span>
              <h2 className="research-value-title section-main-heading">
                Why Global Enterprises Trust Unimrkt Research
              </h2>
            </div>

            <div className="research-value-grid">
              {companyPillars.map((pillar, idx) => (
                <article key={idx} className="research-value-card">
                  <div className="value-icon-wrap">
                    <img src={pillar.icon} alt={pillar.title} />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </article>
              ))}
            </div>

            <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <Link href="/team" className="btn-sm">
                <span>Meet Our Team</span>
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i>
              </Link>
              <Link href="/work" className="btn-white" style={{ border: '1px solid #ddd' }}>
                <span>Careers &amp; Culture</span>
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

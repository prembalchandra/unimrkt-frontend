import React from 'react';
import Link from 'next/link';

const automotiveTopics = [
  {
    icon: '/asstes/images/icon/automotive-icon-img.png',
    title: 'EV Transition & Infrastructure',
    desc: 'Assessing consumer willingness to pay, charging anxiety, total cost of ownership (TCO) perceptions, and battery lifecycle expectations.',
  },
  {
    icon: '/asstes/images/icon/technology-icon-img.png',
    title: 'Software-Defined Cockpits & ADAS',
    desc: 'Evaluating driver trust in autonomous safety systems, in-vehicle subscription monetization, and multi-screen UX interactions.',
  },
  {
    icon: '/asstes/images/icon/transport-icon-img.png',
    title: 'Commercial Fleet & Logistics',
    desc: 'Understanding fleet manager procurement priorities, telematics adoption, decarbonization strategies, and uptime requirements.',
  },
  {
    icon: '/asstes/images/icon/Research-icon-img.png',
    title: 'Dealership & Buyer Experience',
    desc: 'Tracking the modern omnichannel car buying journey, digital retail friction points, and aftermarket customer loyalty.',
  },
];

export default function AutomotiveOverview() {
  return (
    <section className="research-value-section" style={{ padding: '80px 0' }}>
      <div className="srcn-container">
        <div className="research-value-wrap">
          <div className="research-value-header">
            <span className="research-value-kicker career-values-kicker">AUTOMOTIVE INTELLIGENCE</span>
            <h2 className="research-value-title section-main-heading">
              Actionable Research for Original Equipment Manufacturers (OEMs) and Tier-1 Suppliers
            </h2>
            <p className="research-value-subtitle section-sub-text">
              The automotive sector is evolving rapidly. We provide quantitative benchmarking, CATI surveys with fleet directors, and in-depth qualitative clinics with EV drivers to give leaders decisional clarity.
            </p>
          </div>

          <div className="research-value-grid">
            {automotiveTopics.map((topic, idx) => (
              <article key={idx} className="research-value-card">
                <div className="value-icon-wrap">
                  <img src={topic.icon} alt={topic.title} />
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.desc}</p>
              </article>
            ))}
          </div>

          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <Link href="/blog-details" className="btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span>Read Our In-Depth Automotive Trends Article</span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

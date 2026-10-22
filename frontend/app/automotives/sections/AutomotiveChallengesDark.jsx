'use client';

import React from 'react';

const challengesData = [
  {
    id: 1,
    icon: '/asstes/images/icon/activate-icon-img.png',
    title: 'EV Adoption Barriers',
    desc: 'Uncovering true willingness to pay, residual value concerns, battery degradation fears, and charging availability perceptions across target markets.',
  },
  {
    id: 2,
    icon: '/asstes/images/icon/front-end-programming-icon-img.png',
    title: 'Software UI/UX Expectations',
    desc: 'Testing in-vehicle display layouts, subscription feature pricing, over-the-air updates, and digital interface satisfaction before hardware rollout.',
  },
  {
    id: 3,
    icon: '/asstes/images/icon/transport-icon-img.png',
    title: 'Commercial Fleet Transition',
    desc: 'Identifying payload trade-offs, depot charging grid constraints, and total cost of ownership requirements for fleet electrification.',
  },
  {
    id: 4,
    icon: '/asstes/images/icon/connection-icon-img.png',
    title: 'Supply Chain & Supplier Dynamics',
    desc: 'Benchmarking Tier-1 and Tier-2 supplier capabilities, regional sourcing reliability, component quality metrics, and regulatory compliance.',
  },
];

export default function AutomotiveChallengesDark() {
  return (
    <section className="auto-challenges-dark-section" id="auto-challenges">

      <div className="srcn-container">
        {/* Top Header */}
        <div className="auto-challenges-header">
          <span className="auto-challenges-kicker">SOLVING COMPLEX MARKET HURDLES</span>
          <h2 className="auto-challenges-heading">Key Challenges We Solve</h2>
          <p className="auto-challenges-desc">
            Automotive executives face unprecedented transformation. We provide clarity on the critical friction points
            shaping buying decisions and supplier relationships.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="auto-challenges-grid">
          {challengesData.map((item) => (
            <article key={item.id} className="auto-challenge-card">
              <div className="auto-challenge-icon-wrap">
                <img src={item.icon} alt="" aria-hidden="true" loading="lazy" />
              </div>
              <h3 className="auto-challenge-title">{item.title}</h3>
              <p className="auto-challenge-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

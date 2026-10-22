'use client';

import React from 'react';

const statsData = [
  {
    id: 1,
    icon: '/asstes/images/icon/countries-icon-img.png',
    stat: '90+',
    label: 'Countries Worldwide',
  },
  {
    id: 2,
    icon: '/asstes/images/icon/languages-icon-img.png',
    stat: '25+',
    label: 'Languages Supported',
  },
  {
    id: 3,
    icon: '/asstes/images/icon/location-icon-img.png',
    stat: '4',
    label: 'Global Offices',
  },
  {
    id: 4,
    icon: '/asstes/images/icon/cross-Industry-perspective-icon-img.png',
    stat: 'Multi-Industry',
    label: 'Domain Expertise',
  },
];

export default function LocalInsightGlobalReach() {
  return (
    <section className="global-reach-dark-section" id="global-reach">

      <div className="srcn-container">
        {/* Top Header */}
        <div className="global-reach-header">
          <span className="global-reach-kicker">GLOBAL CAPABILITIES</span>
          <h2 className="global-reach-heading">Local Insight. Global Reach.</h2>
          <p className="global-reach-desc">
            With multi-country fieldwork capabilities, native language interviewers, and specialized panels across continents,
            we ensure seamless execution and localized context for every global study.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="global-reach-grid">
          {statsData.map((item) => (
            <article key={item.id} className="global-reach-card">
              <div className="global-reach-icon-wrap">
                <img src={item.icon} alt="" aria-hidden="true" loading="lazy" />
              </div>
              <h3 className="global-reach-stat">{item.stat}</h3>
              <p className="global-reach-label">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

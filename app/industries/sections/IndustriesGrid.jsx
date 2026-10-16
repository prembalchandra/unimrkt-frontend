import React from 'react';
import Link from 'next/link';

const industries = [
  {
    id: 'automotive',
    name: 'Automotive & Mobility',
    icon: '/asstes/images/icon/automotive-icon-img.png',
    link: '/automotives',
    desc: 'Electrification, connected vehicles, autonomous driving, customer sentiment and fleet dynamics across international markets.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    icon: '/asstes/images/icon/healthcare-icon-img.png',
    link: '/services',
    desc: 'Physician panels, patient journey mapping, medical devices, pharmaceuticals, and regulatory compliance studies.',
  },
  {
    id: 'bfsi',
    name: 'BFSI & Fintech',
    icon: '/asstes/images/icon/BFSI-icon-img.png',
    link: '/services',
    desc: 'Banking, investment behavior, insuretech adoption, digital payments, and risk perception metrics.',
  },
  {
    id: 'technology',
    name: 'Technology & SaaS',
    icon: '/asstes/images/icon/technology-icon-img.png',
    link: '/services',
    desc: 'Enterprise software buying cycles, cloud adoption, cybersecurity priorities, and AI implementation benchmarking.',
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    icon: '/asstes/images/icon/retail-icon-img.png',
    link: '/services',
    desc: 'Omnichannel consumer behavior, brand perception, price elasticity, and post-purchase customer satisfaction.',
  },
  {
    id: 'fmcg',
    name: 'Consumer Goods (FMCG)',
    icon: '/asstes/images/icon/stock-icon-img.png',
    link: '/services',
    desc: 'Brand tracking, concept validation, packaging testing, shelf-placement analysis, and consumer lifestyle shifts.',
  },
  {
    id: 'energy',
    name: 'Energy & Utilities',
    icon: '/asstes/images/icon/activate-icon-img.png',
    link: '/services',
    desc: 'Renewable energy transition, sustainability frameworks, utility consumption, and ESG policy stakeholder perceptions.',
  },
  {
    id: 'telecom',
    name: 'Telecommunications',
    icon: '/asstes/images/icon/communication-icon-img.png',
    link: '/services',
    desc: '5G network rollout sentiment, subscriber churn analysis, digital service bundling, and enterprise telecom audits.',
  },
  {
    id: 'media',
    name: 'Media & Entertainment',
    icon: '/asstes/images/icon/Interview-icon-img.png',
    link: '/services',
    desc: 'Digital streaming audience measurements, content consumption habits, advertising efficacy, and gaming behavior.',
  },
  {
    id: 'travel',
    name: 'Travel & Hospitality',
    icon: '/asstes/images/icon/transport-icon-img.png',
    link: '/services',
    desc: 'Business and leisure travel trends, hotel guest satisfaction, booking platform preferences, and tourism demand forecasts.',
  },
];

export default function IndustriesGrid() {
  return (
    <section className="our-industries-area" style={{ padding: '80px 0' }}>
      <div className="srcn-container">
        <div className="our-industries-wrapper-inner">
          <div className="our-industries-top-content">
            <span className="sub-title-red" style={{ display: 'inline-block', marginBottom: '8px' }}>
              DEEP INDUSTRY EXPERTISE
            </span>
            <h2 className="our-industries-heading">Sectors We Empower With Precision Data</h2>
            <p className="our-industries-title">
              Every industry has distinct dynamics, audience nuances, and compliance requirements. Our specialized research units ensure your questionnaires and methodologies yield actionable results.
            </p>
          </div>

          <div className="our-industries-wapper-area">
            <div className="our-industries-grid">
              {industries.map((ind) => (
                <div key={ind.id} className="our-industries-card-col">
                  <Link href={ind.link} className="our-industries-card-wapper">
                    <div className="our-industries-card">
                      <div className="icon-img-box">
                        <img src={ind.icon} alt={ind.name} />
                      </div>
                      <div className="our-industries-content-area">
                        <h3 className="our-industries-content">{ind.name}</h3>
                        <p style={{ fontSize: '0.88rem', color: '#666', marginTop: '8px', lineHeight: '1.5' }}>
                          {ind.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

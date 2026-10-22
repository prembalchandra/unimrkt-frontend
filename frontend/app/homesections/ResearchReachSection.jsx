import React from 'react';

const defaultCards = [
  {
    icon: 'fa-solid fa-globe',
    title: 'Global & Regional Markets',
    description: 'Conducting research across 50+ countries with local market nuance, multilingual capabilities, and deep geographic penetration.',
  },
  {
    icon: 'fa-solid fa-users',
    title: 'Diverse Audiences',
    description: 'Reaching specialized B2B decision-makers, hard-to-reach consumer demographics, healthcare professionals, and niche target groups.',
  },
  {
    icon: 'fa-solid fa-layer-group',
    title: 'Multiple Industries',
    description: 'Domain expertise spanning Banking & Finance, Healthcare, Technology, Retail, Automotive, and Manufacturing.',
  },
  {
    icon: 'fa-solid fa-magnifying-glass-chart',
    title: 'Multiple Research Methods',
    description: 'Deploying primary qualitative & quantitative techniques, CATI surveys, online panels, and secondary intelligence.',
  },
];

export default function ResearchReachSection({
  kicker = 'OUR REACH',
  title = 'Research Reach That Goes Beyond Markets',
  description = 'Our global capabilities span across continents, industries, and demographics. From niche business executives to everyday consumers, our custom respondent recruitment and rigorous data verification processes ensure quality insights in every market we reach.',
  cards = defaultCards,
} = {}) {
  const activeCards = cards && cards.length > 0 ? cards : defaultCards;

  return (
    <section className="research-reach-section">
      <div className="srcn-container">
        <div className="section-center-header">
          <span className="section-kicker-red">{kicker}</span>
          <h2 className="section-main-heading">{title}</h2>
          <p className="section-sub-desc">{description}</p>
        </div>

        <div className="research-reach-grid">
          {activeCards.map((card, idx) => (
            <article key={idx} className="research-reach-card">
              <div className="reach-card-icon-box">
                <i className={card.icon || 'fa-solid fa-chart-simple'}></i>
              </div>
              <div className="reach-card-content">
                <h3 className="reach-card-title">{card.title}</h3>
                <p className="reach-card-desc">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

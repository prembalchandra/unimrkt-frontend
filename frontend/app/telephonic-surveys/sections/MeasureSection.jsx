'use client';

import React, { useState } from 'react';

const measureCards = [
  {
    bg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    title: 'Customer Experience',
    desc: 'Measure satisfaction, pain points, expectations and service experiences.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    title: 'Brand Research',
    desc: 'Understand perception, awareness and how your brand is remembered.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80',
    title: 'Brand Research',
    desc: 'Track campaign performance and customer sentiment across audience groups.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    title: 'Product Research',
    desc: 'Learn which product features matter most and where improvements are needed.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    title: 'Product Research',
    desc: 'Learn which product features matter most and where improvements are needed.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    title: 'Employee Research',
    desc: 'Capture internal feedback to improve engagement and employee experience.',
  },
];

export default function MeasureSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="measure-section">
      <div className="srcn-container">
        <div className="measure-header">
          <span className="measure-kicker">WHAT WE CAN MEASURE</span>
          <h2 className="measure-title">Ask. Listen. Understand.</h2>
          <p className="measure-subtext">
            From brand perception to customer experience, our telephonic surveys help uncover the answers behind the numbers.
          </p>
        </div>

        <div className="measure-grid">
          {measureCards.map((card, index) => (
            <article
              key={index}
              className={`measure-card ${hoveredIndex === index ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="measure-visual" style={{ backgroundImage: `url('${card.bg}')` }}>
                <div className="measure-label-wrap">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

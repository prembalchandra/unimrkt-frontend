'use client';

import React, { useState, useEffect } from 'react';

const processSteps = [
  {
    num: '01',
    icon: '/asstes/images/icon/understanding-icon-img.png',
    title: 'Understand',
    desc: 'We begin by understanding your research goals, target audience, sample needs and key questions.',
  },
  {
    num: '02',
    icon: '/asstes/images/icon/front-end-programming-icon-img.png',
    title: 'Design',
    desc: 'Our research team structures the questionnaire and interview flow around the study objectives.',
  },
  {
    num: '03',
    icon: '/asstes/images/icon/recruit-icon-img.png',
    title: 'Recruit',
    desc: 'We identify and reach relevant respondents based on the agreed sample criteria.',
  },
  {
    num: '04',
    icon: '/asstes/images/icon/Interview-icon-img.png',
    title: 'Interview',
    desc: 'Trained interviewers conduct structured interviews using CATI-enabled workflows.',
  },
  {
    num: '05',
    icon: '/asstes/images/icon/ouality-check-icon-img.png',
    title: 'Quality Check',
    desc: 'Interviews and collected data undergo systematic quality checks to maintain consistency and reliability.',
  },
  {
    num: '06',
    icon: '/asstes/images/icon/deliver-icon-img.png',
    title: 'Deliver',
    desc: 'Validated datasets and research outputs are prepared for analysis and decision-making.',
  },
];

export default function TelephonicProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processSteps.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="telephonic-process-area">
      <div className="srcn-container">
        <div className="telephonic-process-wapper">
          <div className="telephonic-process-header">
            <span className="telephonic-process-eyebrow">Our Telephonic Survey Process</span>
            <h2 className="telephonic-process-main-heading">From Research Brief To Reliable Insights</h2>
          </div>

          <div className="telephonic-process-slider" id="telephonic-process-slider">
            <div className="telephonic-process-grid">
              {processSteps.map((step, index) => (
                <div key={index} className="telephonic-process-col">
                  <article className={`telephonic-process-card ${index === activeIndex ? 'active' : ''}`}>
                    <span className="telephonic-process-number">{step.num}</span>
                    <div className="telephonic-process-icon">
                      <img src={step.icon} alt={step.title} />
                    </div>
                    <div className="telephonic-process-content">
                      <h3 className="telephonic-process-card-heading">{step.title}</h3>
                      <p className="telephonic-process-desc">{step.desc}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="telephonic-process-dots" aria-label="Telephonic survey process slides">
            {processSteps.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`telephonic-process-dot ${index === activeIndex ? 'active' : ''}`}
                aria-label={`Slide ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : 'false'}
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

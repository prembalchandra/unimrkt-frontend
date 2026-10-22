'use client';

import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

const outcomeCards = [
  // Enterprise Software & SaaS Adoption
  {
    id: 1,
    sector: 'Enterprise Software',
    icon: '/asstes/images/icon/the-challenge-img.png',
    title: 'The Challenge',
    desc: 'A leading global enterprise needed to pinpoint why adoption of their next-generation solution lagged behind projections across key international markets, despite aggressive pricing and marketing investments.',
  },
  {
    id: 2,
    sector: 'Enterprise Software',
    icon: '/asstes/images/icon/analysis-research-icon-img.png',
    title: 'The Approach',
    desc: 'We executed a multi-market hybrid methodology spanning 600+ CATI interviews with senior enterprise decision-makers alongside 40 in-depth qualitative discovery sessions to decode buyer hesitation.',
  },
  {
    id: 3,
    sector: 'Enterprise Software',
    icon: '/asstes/images/icon/insight-icon-img.png',
    title: 'The Insight',
    desc: 'Findings revealed that legacy infrastructure compliance friction—not price sensitivity—was the core adoption barrier, enabling leadership to restructure deployment and lift conversion rates by 42%.',
  },
  // Healthcare & MedTech Commercialization
  {
    id: 4,
    sector: 'Healthcare & MedTech',
    icon: '/asstes/images/icon/the-challenge-img.png',
    title: 'The Challenge',
    desc: 'A fast-growing healthcare innovator struggled to benchmark physician willingness to adopt remote diagnostic protocols across Western Europe and North America before clinical commercialization.',
  },
  {
    id: 5,
    sector: 'Healthcare & MedTech',
    icon: '/asstes/images/icon/analysis-research-icon-img.png',
    title: 'The Approach',
    desc: 'Unimrkt mobilized a verified healthcare professional panel across 8 countries, conducting quantitative conjoint analysis paired with deep clinical workflow audits to map compliance comfort.',
  },
  {
    id: 6,
    sector: 'Healthcare & MedTech',
    icon: '/asstes/images/icon/insight-icon-img.png',
    title: 'The Insight',
    desc: 'Identified critical data interoperability requirements that unlocked institutional buying cycles, resulting in a 3.4x faster regulatory signoff and expedited market rollout.',
  },
  // Automotive EV Fleet Transition
  {
    id: 7,
    sector: 'Automotive Mobility',
    icon: '/asstes/images/icon/the-challenge-img.png',
    title: 'The Challenge',
    desc: 'An international automotive supplier needed to forecast commercial fleet electrification pace and total cost of ownership (TCO) expectations across logistics operators in 6 European hubs.',
  },
  {
    id: 8,
    sector: 'Automotive Mobility',
    icon: '/asstes/images/icon/analysis-research-icon-img.png',
    title: 'The Approach',
    desc: 'Synthesized telemetry data expectations with 450 fleet director CATI surveys and depot manager audits to model battery longevity and charging infrastructure bottlenecks.',
  },
  {
    id: 9,
    sector: 'Automotive Mobility',
    icon: '/asstes/images/icon/insight-icon-img.png',
    title: 'The Insight',
    desc: 'Uncovered depot grid capacity limitations as the single largest fleet conversion deterrent, prompting the client to bundle charging consultancy and accelerate fleet contracts by 60%.',
  },
];

export default function BusinessOutcomesSection() {
  const sliderRef = useRef(null);
  const paginationRef = useRef(null);
  const swiperInstanceRef = useRef(null);

  // Self-contained Swiper Slider Initialization
  useEffect(() => {
    if (!sliderRef.current) return;

    swiperInstanceRef.current = new Swiper(sliderRef.current, {
      modules: [Autoplay, Pagination],
      slidesPerView: 1,
      spaceBetween: 16,
      grabCursor: true,
      loop: true,
      speed: 700,
      autoplay: {
        delay: 4200,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: paginationRef.current,
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}" role="button" aria-label="Go to slide ${index + 1}"></span>`;
        },
      },
      breakpoints: {
        // Mobile Phone: Full single card view
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 26,
        },
      },
    });

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <section className="business-outcomes-section" id="business-outcomes">

      <div className="srcn-container">
        {/* Header Section */}
        <div className="business-outcomes-header">
          <span className="business-outcomes-kicker">PROVEN OUTCOMES</span>
          <h2 className="business-outcomes-heading">From Business Questions To Meaningful Outcomes</h2>
          <p className="business-outcomes-desc">
            See how structured research transforms ambiguous business challenges into decisive competitive advantages.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="swiper business-outcomes-swiper" ref={sliderRef}>
          <div className="swiper-wrapper">
            {outcomeCards.map((card) => (
              <div key={card.id} className="swiper-slide business-outcomes-slide">
                <article className="outcome-card">
                  <div className="outcome-card-icon-wrap">
                    <img src={card.icon} alt={card.title} loading="lazy" />
                  </div>
                  <h3 className="outcome-card-title">{card.title}</h3>
                  <p className="outcome-card-desc">{card.desc}</p>
                </article>
              </div>
            ))}
          </div>

          {/* Working Swiper Pagination (Red Pill + Grey Dots) */}
          <div className="business-outcomes-pagination" ref={paginationRef}></div>
        </div>
      </div>
    </section>
  );
}

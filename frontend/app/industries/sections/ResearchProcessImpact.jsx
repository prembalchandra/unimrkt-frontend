'use client';

import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

const processSteps = [
  {
    num: '01',
    icon: '/asstes/images/icon/understanding-icon-img.png',
    title: 'Understand',
    desc: 'Aligning research objectives, defining target respondent criteria, understanding market context, and establishing key hypotheses with stakeholders.',
  },
  {
    num: '02',
    icon: '/asstes/images/icon/front-end-programming-icon-img.png',
    title: 'Design',
    desc: 'Crafting bespoke questionnaires, programming responsive digital scripts, designing quota matrices, and pre-testing survey flows for precision.',
  },
  {
    num: '03',
    icon: '/asstes/images/icon/Interview-icon-img.png',
    title: 'Execute',
    desc: 'Mobilizing native-speaking CATI interviewers and verified online panels with real-time quality monitoring and rigorous audit controls.',
  },
  {
    num: '04',
    icon: '/asstes/images/icon/deliver-icon-img.png',
    title: 'Deliver',
    desc: 'Synthesizing raw data into executive narratives, advanced cross-tabulations, visual decks, and decisive strategic recommendations.',
  },
];

export default function ResearchProcessImpact() {
  const sliderRef = useRef(null);
  const paginationRef = useRef(null);
  const swiperInstanceRef = useRef(null);

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
        delay: 3800,
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
        // Mobile phone: 1 full card view
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        540: {
          slidesPerView: 1.25,
          spaceBetween: 18,
        },
        720: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 22,
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
    <section className="research-process-section" id="research-process">

      <div className="srcn-container">
        {/* Header Section */}
        <div className="research-process-header">
          <span className="research-process-kicker">END-TO-END PROCESS</span>
          <h2 className="research-process-heading">Turning Research into Impact</h2>
          <p className="research-process-desc">
            A structured 4-stage methodology ensuring precision, transparency, and actionable intelligence from initial scoping to strategic delivery.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="swiper research-process-swiper" ref={sliderRef}>
          <div className="swiper-wrapper">
            {processSteps.map((step) => (
              <div key={step.num} className="swiper-slide research-process-slide">
                <article className="process-impact-card">
                  <span className="process-impact-number">{step.num}</span>
                  <div className="process-impact-icon-wrap">
                    <img src={step.icon} alt="" aria-hidden="true" loading="lazy" />
                  </div>
                  <h3 className="process-impact-title">{step.title}</h3>
                  <p className="process-impact-desc">{step.desc}</p>
                </article>
              </div>
            ))}
          </div>

          {/* Working Swiper Pagination (Red Pill + Grey Dots) */}
          <div className="research-process-pagination" ref={paginationRef}></div>
        </div>
      </div>
    </section>
  );
}

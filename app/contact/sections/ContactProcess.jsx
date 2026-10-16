'use client';

import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const steps = [
  {
    number: '01',
    title: 'Share Your Requirement',
    desc: 'Tell us about your business question, target audience, and research objective so we can align the right approach.',
  },
  {
    number: '02',
    title: 'Discuss Your Objectives',
    desc: 'Our team connects with you to understand the context, challenges, and expected outcomes before recommending a path.',
  },
  {
    number: '03',
    title: 'Define The Approach',
    desc: 'We recommend the appropriate methodology, timeline, and execution plan tailored to your decision-making needs.',
  },
  {
    number: '04',
    title: 'Execution & Fieldwork',
    desc: 'We deploy robust multi-market methodology and targeted screening to capture high-integrity data.',
  },
  {
    number: '05',
    title: 'Insight Delivery',
    desc: 'We deliver comprehensive reports, dashboards, and executive insights ready for strategic decision-making.',
  },
];

export default function ContactProcess() {
  const sliderRef = useRef(null);

  useEffect(() => {
    let swiperInstance = null;

    if (sliderRef.current) {
      swiperInstance = new Swiper(sliderRef.current, {
        modules: [Pagination],
        slidesPerView: 1,
        spaceBetween: 18,
        watchOverflow: true,
        slidesPerGroup: 1,
        pagination: {
          el: '.contact-process-section .contact-process-pagination',
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 18,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 22,
          },
        },
      });
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
      }
    };
  }, []);

  return (
    <section className="contact-process-section">
      <div className="srcn-container">
        <div className="contact-process-header">
          <span className="contact-process-kicker career-values-kicker">How it works</span>
          <h2 className="contact-process-title section-main-heading">What Happens After You Contact Us?</h2>
          <p className="contact-process-subtitle section-sub-text">
            A simple process designed to understand your requirement and connect you with the right research expert.
          </p>
        </div>

        <div className="swiper contact-process-slider" ref={sliderRef}>
          <div className="swiper-wrapper">
            {steps.map((step, idx) => (
              <article key={idx} className="swiper-slide contact-process-card">
                <div className="contact-process-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
          <div className="contact-process-pagination"></div>
        </div>
      </div>
    </section>
  );
}

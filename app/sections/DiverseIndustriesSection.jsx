'use client';

import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

const defaultIndustries = [
  {
    imageUrl: '/asstes/images/industry-banking.png',
    title: 'Banking & Finance',
    description: 'Unlocking market shifts, customer loyalty, fintech adoption, and risk assessment for leading financial institutions.',
  },
  {
    imageUrl: '/asstes/images/industry-healthcare.png',
    title: 'Healthcare',
    description: 'Specialized patient, physician, and payer insights supporting pharmaceuticals, medtech, and healthcare providers.',
  },
  {
    imageUrl: '/asstes/images/industry-retail.png',
    title: 'Consumer & Retail',
    description: 'Evaluating shopper journeys, omni-channel habits, brand perception, and fast-moving retail trends.',
  },
  {
    imageUrl: '/asstes/images/industry-banking.png',
    title: 'Technology & Telecom',
    description: 'Tracking emerging tech adoption, SaaS trends, enterprise software demands, and telco benchmarks.',
  },
  {
    imageUrl: '/asstes/images/industry-retail.png',
    title: 'Automotive & Mobility',
    description: 'Navigating EV transition, consumer vehicle preferences, connected mobility, and supplier dynamics.',
  },
];

export default function DiverseIndustriesSection({
  kicker = 'INDUSTRIES WE SERVE',
  title = 'Research Expertise Across Diverse Industries',
  description = 'We combine domain knowledge with robust research methodologies to deliver actionable insights tailored to your industry challenges and opportunities.',
  slides = defaultIndustries,
} = {}) {
  const sliderRef = useRef(null);
  const paginationRef = useRef(null);
  const activeSlides = slides && slides.length > 0 ? slides : defaultIndustries;

  useEffect(() => {
    if (!sliderRef.current) return;

    const swiperInstance = new Swiper(sliderRef.current, {
      modules: [Autoplay, Pagination],
      slidesPerView: 1,
      spaceBetween: 16,
      grabCursor: true,
      loop: true,
      speed: 650,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: paginationRef.current,
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });

    return () => {
      swiperInstance.destroy(true, true);
    };
  }, [activeSlides.length]);

  return (
    <section className="diverse-industries-section">
      <div className="srcn-container">
        <div className="section-center-header">
          <span className="section-kicker-red">{kicker}</span>
          <h2 className="section-main-heading">{title}</h2>
          <p className="section-sub-desc">{description}</p>
        </div>

        <div className="diverse-industries-slider swiper" ref={sliderRef} id="diverse-industries-slider">
          <div className="swiper-wrapper">
            {activeSlides.map((slide, idx) => (
              <div key={idx} className="swiper-slide industry-slide">
                <article className="industry-card">
                  <div className="industry-card-visual">
                    <img
                      src={slide.imageUrl || slide.image?.url || '/asstes/images/industry-banking.png'}
                      alt={slide.title}
                    />
                  </div>
                  <div className="industry-card-body">
                    <h3 className="industry-card-title">{slide.title}</h3>
                    <p className="industry-card-desc">{slide.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Swiper Pagination Dots */}
          <div className="industry-slider-pagination swiper-pagination" ref={paginationRef}></div>
        </div>
      </div>
    </section>
  );
}

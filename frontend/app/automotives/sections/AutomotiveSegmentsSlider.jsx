'use client';

import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

const segmentSlides = [
  {
    id: 1,
    title: 'Automotive Manufacturers & OEMs',
    desc: 'Assisting motor vehicle manufacturers with buyer persona mapping, brand health tracking, vehicle concept clinics, and price sensitivity modeling for new model launches. Our research delivers actionable insights on brand awareness, customer satisfaction, and product improvement to drive sustainable automotive growth.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ba2327" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18h18M5 18v-3l2-4h10l2 4v3" />
        <circle cx="8" cy="18" r="2" />
        <circle cx="16" cy="18" r="2" />
        <path d="M4 22v-4M8 22v-4M12 22v-4M16 22v-4M20 22v-4" />
        <path d="M12 4v3m-3-1l3 1 3-1" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Auto Component Suppliers',
    desc: 'Providing engineering and component suppliers with OEM procurement intelligence, technology adoption roadmaps, and competitive benchmarking across global markets. We help component makers identify new product opportunities, optimize supply chain efficiency, and make informed strategic decisions that strengthen market presence.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ba2327" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="8" width="6" height="10" rx="1" />
        <path d="M12 2v6M9 11h6M9 15h6M10 18v3h4v-3M12 21v2" />
        <path d="M6 10a4 4 0 0 0 0 6M18 10a4 4 0 0 1 0 6" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'EV & Mobility Companies',
    desc: 'Empowering electric vehicle and smart mobility innovators with battery technology perceptions, charging infrastructure acceptance, consumer range anxiety analysis, and urban micromobility trends. We deliver critical data on consumer adoption barriers, pricing models, and regulatory landscape impacts to accelerate adoption.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ba2327" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="12" height="18" rx="2" />
        <path d="M7 7h4M6 11h6" />
        <path d="M15 8h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M19 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2" />
        <path d="M9 15l-1 2h3l-1 2" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Dealerships, Fleet & Technology Companies',
    desc: 'Equipping auto dealerships, fleet management firms, and automotive software developers with actionable consumer insights, connected vehicle data expectations, DMS software usability studies, and aftermarket service satisfaction metrics to navigate disruption and identify high-value commercial opportunities.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ba2327" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4" />
        <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
        <path d="M18 10l3 3m0-3l-3 3" />
        <circle cx="12" cy="16" r="2" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Commercial & Heavy Vehicle Fleets',
    desc: 'Delivering deep operational intelligence to heavy truck makers, freight carriers, bus transit authorities, and logistics fleet operators on fuel economy benchmarks, total cost of ownership (TCO), alternative powertrains, and telematics-driven driver safety across long-haul corridors.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ba2327" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="13" height="12" rx="1" />
        <path d="M15 9h4l3 3v5h-7V9z" />
        <circle cx="6" cy="18.5" r="2.5" />
        <circle cx="18" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Aftermarket & Retail Service Networks',
    desc: 'Empowering replacement part distributors, franchised maintenance centers, and auto detailing networks with real-time spare part pricing, counter service satisfaction, customer retention metrics, and competitive multi-brand workshop channel benchmarking.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ba2327" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 6l4 4-8 8H6v-4l8-8z" />
        <circle cx="16" cy="6" r="3" />
        <path d="M4 20h16" />
      </svg>
    ),
  },
];

export default function AutomotiveSegmentsSlider() {
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
        delay: 4000,
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
          slidesPerView: 1.15,
          spaceBetween: 18,
        },
        720: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 22,
        },
        1240: {
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
    <section className="auto-segments-section" id="auto-segments">

      <div className="srcn-container">
        {/* Section Header */}
        <div className="auto-segments-header">
          <span className="auto-segments-kicker">WHO WE SERVE</span>
          <h2 className="auto-segments-heading">Supporting Every Automotive Segment</h2>
        </div>

        {/* Swiper Slider */}
        <div className="swiper auto-segments-swiper" ref={sliderRef}>
          <div className="swiper-wrapper">
            {segmentSlides.map((slide) => (
              <div key={slide.id} className="swiper-slide auto-segments-slide">
                <article className="auto-segment-card">
                  <h3 className="auto-segment-title">{slide.title}</h3>
                  <p className="auto-segment-desc">{slide.desc}</p>
                  <div className="auto-segment-bottom-icon" aria-hidden="true">
                    {slide.icon}
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Swiper Pagination (Active Red Pill + Grey Dots) */}
          <div className="auto-segments-pagination" ref={paginationRef}></div>
        </div>
      </div>
    </section>
  );
}

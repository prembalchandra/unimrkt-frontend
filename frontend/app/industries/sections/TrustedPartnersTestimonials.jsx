'use client';

import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

const testimonials = [
  {
    id: 1,
    title: 'Exceptional Research and Actionable Results.',
    quote:
      '“Unimrkt delivered multi-market healthcare data on a remarkably tight schedule. The rigorous screening and quality verification gave our executive leadership immense confidence.”',
    author: 'MARK JOHNSON',
    role: 'VP of Strategy, Global Healthcare Group',
  },
  {
    id: 2,
    title: 'A Trusted Extension of Our Team.',
    quote:
      '“Their understanding of complex B2B buying cycles and CATI interviewer depth made them an indispensable research partner across multiple international product launches.”',
    author: 'SARAH PATEL',
    role: 'Head of Consumer Insights, FMCG Brands',
  },
  {
    id: 3,
    title: 'Insights That Drive Better Decisions.',
    quote:
      '“From questionnaire design to executive cross-tabulation decks, the attention to detail and responsiveness from Unimrkt’s sector specialists was genuinely world-class.”',
    author: 'DAVID MILLER',
    role: 'Director of Market Intelligence, SaaS Enterprise',
  },
  {
    id: 4,
    title: 'Seamless Global Reach & Localization.',
    quote:
      '“Reaching specialized commercial fleet operators across 6 European hubs seemed daunting until Unimrkt mobilized native-language interviewers within days.”',
    author: 'ELENA ROSTOVA',
    role: 'Chief Strategy Officer, Mobility Systems',
  },
  {
    id: 5,
    title: 'High Precision Data Quality.',
    quote:
      '“The audit trail, speeder checks, and call monitoring controls set Unimrkt apart from standard survey vendors. Every dataset is pristine and ready for decision-makers.”',
    author: 'MICHAEL CHEN',
    role: 'VP Analytics, Global Fintech Solutions',
  },
  {
    id: 6,
    title: 'Unrivaled Respondent Engagement.',
    quote:
      '“Even when recruiting C-level executives for strategic technology audits, Unimrkt exceeded our quota targets with exceptional respondent engagement and depth.”',
    author: 'EMILY WATSON',
    role: 'Partner, Global Strategy Consultancy',
  },
];

export default function TrustedPartnersTestimonials() {
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
        delay: 4500,
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
        600: {
          slidesPerView: 1.2,
          spaceBetween: 18,
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
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <section className="testimonials-showcase-section" id="testimonials">

      <div className="srcn-container">
        {/* Header Section */}
        <div className="testimonials-header">
          <span className="testimonials-kicker">CLIENT SATISFACTION</span>
          <h2 className="testimonials-heading">Trusted Research Partner For Businesses Worldwide</h2>
        </div>

        {/* Swiper Slider */}
        <div className="swiper testimonials-swiper" ref={sliderRef}>
          <div className="swiper-wrapper">
            {testimonials.map((item) => (
              <div key={item.id} className="swiper-slide testimonials-slide">
                <article className="testimonial-showcase-card">
                  <div className="testimonial-quote-icon" aria-hidden="true">“</div>
                  <h3 className="testimonial-title">{item.title}</h3>
                  <p className="testimonial-quote-body">{item.quote}</p>
                  <div className="testimonial-author-wrap">
                    <h4 className="testimonial-author-name">{item.author}</h4>
                    <p className="testimonial-author-role">{item.role}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Working Swiper Pagination (Red Pill + Grey Dots) */}
          <div className="testimonials-pagination" ref={paginationRef}></div>
        </div>
      </div>
    </section>
  );
}

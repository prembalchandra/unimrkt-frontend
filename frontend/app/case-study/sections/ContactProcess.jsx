'use client';

import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

export default function ContactProcess() {
  const sliderRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const swiperInstance = new Swiper(sliderRef.current, {
      modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 18,
      watchOverflow: true,
      slidesPerGroup: 1,
      pagination: {
        el: paginationRef.current,
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

    return () => {
      swiperInstance.destroy(true, true);
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
        <div className="swiper testimonial-process-slider" ref={sliderRef}>
          <div className="swiper-wrapper">
            <article className="swiper-slide contact-process-card">
              <div className="testimonial-process-card-box">
                <div className="contact-process-icon">
                  <img src="/asstes/images/icon/testimonial-icon-img.png" alt="" />
                </div>
                <h3>Expertise That Drives Better Decisions</h3>
                <p>
                  “Unimrkt brought strong research expertise and a clear understanding of our business challenge. The insights helped us make more confident, data-driven decisions.”
                </p>
                <div className="contact-process-name-box">
                  <h4>Marketing Director</h4>
                  <p>Consumer Brand</p>
                </div>
              </div>
            </article>

            <article className="swiper-slide contact-process-card">
              <div className="testimonial-process-card-box">
                <div className="contact-process-icon">
                  <img src="/asstes/images/icon/testimonial-icon-img.png" alt="" />
                </div>
                <h3>Insights That Strengthen Strategy</h3>
                <p>
                  “The team was responsive, thorough and highly focused on data quality. Their research approach gave us actionable insights that directly supported our strategy.”
                </p>
                <div className="contact-process-name-box">
                  <h4>Marketing Director</h4>
                  <p>Consumer Brand</p>
                </div>
              </div>
            </article>

            <article className="swiper-slide contact-process-card">
              <div className="testimonial-process-card-box">
                <div className="contact-process-icon">
                  <img src="/asstes/images/icon/testimonial-icon-img.png" alt="" />
                </div>
                <h3>Turning Research Into Impact</h3>
                <p>
                  “What stood out was Unimrkt’s ability to turn complex research findings into clear, practical insights. It was a valuable partnership from start to finish.”
                </p>
                <div className="contact-process-name-box">
                  <h4>Marketing Director</h4>
                  <p>Consumer Brand</p>
                </div>
              </div>
            </article>
          </div>
          <div className="contact-process-pagination" ref={paginationRef}></div>
        </div>
      </div>
    </section>
  );
}

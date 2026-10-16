'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

export default function MarketTrendsSlider() {
  const sliderRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const swiperInstance = new Swiper(sliderRef.current, {
      modules: [Navigation, Autoplay],
      slidesPerView: 1,
      spaceBetween: 16,
      grabCursor: true,
      loop: true,
      speed: 650,
      autoplay: {
        delay: 2800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: nextBtnRef.current,
        prevEl: prevBtnRef.current,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
      },
    });

    return () => {
      swiperInstance.destroy(true, true);
    };
  }, []);

  return (
    <section className="market-trends-section">
      <div className="market-trends-bg-banner" aria-hidden="true"></div>

      <div className="market-trends-container">
        <div className="market-trends-layout">
          {/* Left Column (Inside Banner) */}
          <div className="market-trends-left-col">
            <span className="market-trends-kicker">LATEST BLOGS</span>
            <h2 className="market-trends-title">
              Exploring<br />Market Trends
            </h2>
            <p className="market-trends-desc">Discover Emerging Market Trends That Shape Smarter Business Decisions.</p>
            <div className="market-trends-nav-btns" aria-label="Slider navigation">
              <button className="market-trends-nav-btn market-trends-prev" ref={prevBtnRef} aria-label="Previous slide">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="market-trends-nav-btn market-trends-next" ref={nextBtnRef} aria-label="Next slide">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          {/* Right Column (Swiper Cards Slider) */}
          <div className="market-trends-slider-col">
            <div className="swiper market-trends-swiper" ref={sliderRef} id="market-trends-slider">
              <div className="swiper-wrapper">
                {/* Card 1 */}
                <div className="swiper-slide market-trends-slide">
                  <Link href="/blog" className="market-trends-card">
                    <div className="market-trends-card-img-wrap">
                      <img src="/asstes/images/market-trends-card-img1.png" alt="All You Need to Know About Online Market Research" />
                    </div>
                    <div className="market-trends-card-body">
                      <h3 className="market-trends-card-title">All You Need to Know About Online Market Research</h3>
                      <p className="market-trends-card-snippet">In a world where consumer behavior evolves faster than a trending...</p>
                    </div>
                  </Link>
                </div>

                {/* Card 2 */}
                <div className="swiper-slide market-trends-slide">
                  <Link href="/blog" className="market-trends-card">
                    <div className="market-trends-card-img-wrap">
                      <img src="/asstes/images/market-trends-card-img2.png" alt="Why Field-Based Quantitative Market Research Remains Critical in 2026" />
                    </div>
                    <div className="market-trends-card-body">
                      <h3 className="market-trends-card-title">Why Field-Based Quantitative Market Research Remains Critical in 2026</h3>
                      <p className="market-trends-card-snippet">Over the past few years, the research landscape has shifted rapidly...</p>
                    </div>
                  </Link>
                </div>

                {/* Card 3 */}
                <div className="swiper-slide market-trends-slide">
                  <Link href="/blog" className="market-trends-card">
                    <div className="market-trends-card-img-wrap">
                      <img src="/asstes/images/market-trends-card-img3.png" alt="AI and the Workforce in Transformation, Disruption & Opportunity" />
                    </div>
                    <div className="market-trends-card-body">
                      <h3 className="market-trends-card-title">AI and the Workforce in Transformation, Disrupti...</h3>
                      <p className="market-trends-card-snippet">In 2026, artificial intelligence is no longer just an emerging tool...</p>
                    </div>
                  </Link>
                </div>

                {/* Card 4 */}
                <div className="swiper-slide market-trends-slide">
                  <Link href="/blog" className="market-trends-card">
                    <div className="market-trends-card-img-wrap">
                      <img src="/asstes/images/customer-experience-img.png" alt="From Data to Decision: How Modern Market Research Drives Growth" />
                    </div>
                    <div className="market-trends-card-body">
                      <h3 className="market-trends-card-title">From Data to Decision: How Modern Market Research Drives Growth</h3>
                      <p className="market-trends-card-snippet">Discover actionable strategies to translate raw data into decisive market intelligence...</p>
                    </div>
                  </Link>
                </div>

                {/* Card 5 */}
                <div className="swiper-slide market-trends-slide">
                  <Link href="/blog" className="market-trends-card">
                    <div className="market-trends-card-img-wrap">
                      <img src="/asstes/images/unimrkt-reseach-primary-research-banner-img.png" alt="Key Market Research Methodologies Every Business Needs to Know" />
                    </div>
                    <div className="market-trends-card-body">
                      <h3 className="market-trends-card-title">Key Market Research Methodologies Every Business Needs to Know</h3>
                      <p className="market-trends-card-snippet">A comprehensive breakdown of qualitative vs. quantitative research approaches...</p>
                    </div>
                  </Link>
                </div>

                {/* Card 6 */}
                <div className="swiper-slide market-trends-slide">
                  <Link href="/blog" className="market-trends-card">
                    <div className="market-trends-card-img-wrap">
                      <img src="/asstes/images/centralized-data-card-img.png" alt="Why Consumer Behaviour Research is Critical for Product Success" />
                    </div>
                    <div className="market-trends-card-body">
                      <h3 className="market-trends-card-title">Why Consumer Behaviour Research is Critical for Product Success</h3>
                      <p className="market-trends-card-snippet">Understanding buyer psychology, purchasing barriers, and preference shifts across markets...</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Button */}
        <div className="market-trends-btn-wrap">
          <Link href="/blog" className="market-trends-browse-btn">
            <span>BROWSE BLOGS</span>
            <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.85em' }}></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

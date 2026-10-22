'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

const defaultBlogCards = [
  {
    id: 1,
    img: '/asstes/images/market-trends-card-img1.png',
    title: 'All You Need to Know About Online Market Research',
    snippet: 'In a world where consumer behavior evolves faster than a trending...',
    link: '/blog',
  },
  {
    id: 2,
    img: '/asstes/images/market-trends-card-img2.png',
    title: 'Why Field-Based Quantitative Market Research Remains Critical in 2026',
    snippet: 'Over the past few years, the research landscape has shifted rapidly...',
    link: '/blog',
  },
  {
    id: 3,
    img: '/asstes/images/market-trends-card-img3.png',
    title: 'AI and the Workforce in Transformation, Disruption & Opportunity',
    snippet: 'In 2026, artificial intelligence is no longer just an emerging tool...',
    link: '/blog',
  },
  {
    id: 4,
    img: '/asstes/images/customer-experience-img.png',
    title: 'From Data to Decision: How Modern Market Research Drives Growth',
    snippet: 'Discover actionable strategies to translate raw data into decisive market intelligence...',
    link: '/blog',
  },
  {
    id: 5,
    img: '/asstes/images/unimrkt-reseach-primary-research-banner-img.png',
    title: 'Key Market Research Methodologies Every Business Needs to Know',
    snippet: 'A comprehensive breakdown of qualitative vs. quantitative research approaches...',
    link: '/blog',
  },
  {
    id: 6,
    img: '/asstes/images/centralized-data-card-img.png',
    title: 'Why Consumer Behaviour Research is Critical for Product Success',
    snippet: 'Understanding buyer psychology, purchasing barriers, and preference shifts across markets...',
    link: '/blog',
  },
];

export default function MarketTrendsSlider({ initialBlogs = [] }) {
  const sliderRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);

  const blogList = React.useMemo(() => {
    if (initialBlogs && initialBlogs.length > 0) {
      const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
      return initialBlogs.map((b, idx) => {
        const imgUrl = b.featuredImage?.url
          ? (b.featuredImage.url.startsWith('http') ? b.featuredImage.url : `${strapiUrl}${b.featuredImage.url}`)
          : defaultBlogCards[idx % defaultBlogCards.length].img;
        return {
          id: b.documentId || b.id || idx,
          img: imgUrl,
          title: b.title,
          snippet: b.excerpt || b.title,
          link: b.slug ? `/blog/${b.slug}` : '/blog',
        };
      });
    }
    return defaultBlogCards;
  }, [initialBlogs]);

  useEffect(() => {
    if (!sliderRef.current) return;

    const swiperInstance = new Swiper(sliderRef.current, {
      modules: [Navigation, Autoplay],
      slidesPerView: 1,
      spaceBetween: 16,
      grabCursor: true,
      loop: blogList.length > 3,
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
          slidesPerView: 2.5,
          spaceBetween: 12,
        },
        1440: {
          slidesPerView: 3.5,
          spaceBetween: 12,
        },
      },
    });

    return () => {
      swiperInstance.destroy(true, true);
    };
  }, [blogList]);

  return (
    <section className="market-trends-section">
      <div className="market-trends-bg-banner" aria-hidden="true"></div>

      <div className="market-trends-container">
        <div className="market-trends-layout">
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

          <div className="market-trends-slider-col">
            <div className="swiper market-trends-swiper" ref={sliderRef} id="market-trends-slider">
              <div className="swiper-wrapper">
                {blogList.map((card) => (
                  <div key={card.id} className="swiper-slide market-trends-slide">
                    <Link href={card.link} className="market-trends-card">
                      <div className="market-trends-card-img-wrap">
                        <img src={card.img} alt={card.title} />
                      </div>
                      <div className="market-trends-card-body">
                        <h3 className="market-trends-card-title">{card.title}</h3>
                        <p className="market-trends-card-snippet">{card.snippet}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

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

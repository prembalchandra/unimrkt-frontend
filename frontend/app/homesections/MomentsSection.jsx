'use client';

import React, { useState, useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

const galleryItems = [
  {
    type: 'video',
    src: '/asstes/images/video-banner2.mp4',
    poster: '/asstes/images/gallery-banner-img.png',
    caption: 'Collaborative Research Team - Innovating Data Methodologies & Client Solutions',
    alt: 'Strategic Research Team in Innovation Session',
    label: 'Watch Video',
    isLarge: true,
  },
  {
    type: 'video',
    src: '/asstes/images/video-banner.mp4',
    poster: '/asstes/images/the-impact-banner-img.png',
    caption: 'Global Project Team - Delivering Insights & Excellence across 90+ Markets',
    alt: 'Team celebrating successful project release',
    label: 'Watch Video',
    isLarge: true,
  },
  {
    type: 'image',
    src: '/asstes/images/unimrkt-reseach-work-banner-img.png',
    caption: 'Data Analytics Engineers validating quantitative survey pipelines',
    alt: 'Engineers working together in modern lab',
    label: 'Analytics Lab',
    isLarge: false,
  },
  {
    type: 'image',
    src: '/asstes/images/research-needs-banner-img.png',
    caption: 'Executive Presentation on emerging market trends and methodology insights',
    alt: 'Speaker presenting research insights at board screen',
    label: 'Boardroom Briefing',
    isLarge: false,
  },
  {
    type: 'image',
    src: '/asstes/images/challenge-portrait.png',
    caption: 'Cross-functional brainstorm designing innovative survey instruments',
    alt: 'Creative team discussing around round table',
    label: 'Design Thinking',
    isLarge: false,
  },
  {
    type: 'image',
    src: '/asstes/images/have-question-team.png',
    caption: 'Fieldwork Operations Team ready for international survey deployment',
    alt: 'Diverse professionals smiling together',
    label: 'Fieldwork Crew',
    isLarge: false,
  },
];

export default function MomentsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const swiperContainerRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const paginationRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const modalRef = useRef(null);

  const pauseAllVideos = () => {
    if (!modalRef.current) return;
    const videos = modalRef.current.querySelectorAll('.lightbox-video-player');
    videos.forEach((v) => v.pause());
  };

  const openLightbox = (index) => {
    setCurrentSlideIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    pauseAllVideos();
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  // Initialize or update Swiper when modal opens
  useEffect(() => {
    if (!isOpen) return;

    if (swiperContainerRef.current) {
      if (!swiperInstanceRef.current) {
        swiperInstanceRef.current = new Swiper(swiperContainerRef.current, {
          modules: [Navigation, Pagination, Keyboard],
          slidesPerView: 1,
          spaceBetween: 30,
          speed: 400,
          grabCursor: true,
          initialSlide: currentSlideIndex,
          keyboard: { enabled: true },
          navigation: {
            nextEl: nextBtnRef.current,
            prevEl: prevBtnRef.current,
          },
          pagination: {
            el: paginationRef.current,
            clickable: true,
          },
          on: {
            slideChange: function () {
              pauseAllVideos();
              const activeSlide = this.slides[this.activeIndex];
              if (activeSlide) {
                const vid = activeSlide.querySelector('.lightbox-video-player');
                if (vid) {
                  vid.play().catch(() => {});
                }
              }
            },
          },
        });
      } else {
        swiperInstanceRef.current.update();
        swiperInstanceRef.current.slideTo(currentSlideIndex, 0);
      }

      // Auto-play active slide if video
      const activeSlide = swiperInstanceRef.current.slides[currentSlideIndex];
      if (activeSlide) {
        const vid = activeSlide.querySelector('.lightbox-video-player');
        if (vid) {
          vid.play().catch(() => {});
        }
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentSlideIndex]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
        swiperInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <section className="moments-section" id="moments">
        <div className="moments-pattern-backdrop"></div>
        <div className="srcn-container">
          <div className="moments-header text-center">
            <h2 className="moments-title">Moments Of Excellence</h2>
            <p className="moments-subtitle">
              Discovering the expertise, innovations and enthusiasm behind every research project and client success
              story.
            </p>
          </div>

          {/* 6-Image Bento Collage Grid */}
          <div className="bento-gallery-grid">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`bento-item ${item.isLarge ? 'bento-large' : 'bento-small'} gallery-card ${
                  item.type === 'video' ? 'has-video' : ''
                }`}
                data-slide-index={index}
                data-caption={item.caption}
                onClick={() => openLightbox(index)}
              >
                <img src={item.type === 'video' ? item.poster : item.src} alt={item.alt} />
                {item.type === 'video' && (
                  <div className="gallery-play-btn" aria-label="Play Video">
                    <i className="fa-solid fa-play"></i>
                  </div>
                )}
                <div className="gallery-hover-overlay">
                  <i className={`fa-solid ${item.type === 'video' ? 'fa-play' : 'fa-magnifying-glass-plus'}`}></i>
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Center Bottom Button */}
          <div className="moments-cta-box text-center">
            <a
              href="#moments"
              className="moments-explore-btn"
              id="exploreGalleryBtn"
              onClick={(e) => {
                e.preventDefault();
                openLightbox(0);
              }}
            >
              <span>EXPLORE GALLERY</span>
              <span className="btn-up-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Swiper Modal */}
      <div
        ref={modalRef}
        className={`lightbox-modal ${isOpen ? 'active' : ''}`}
        id="lightboxModal"
        onClick={(e) => {
          if (e.target === modalRef.current) {
            closeLightbox();
          }
        }}
      >
        <button
          className="lightbox-close"
          id="lightboxClose"
          aria-label="Close Lightbox"
          onClick={closeLightbox}
        >
          &times;
        </button>

        <div className="lightbox-swiper-container">
          <button
            ref={prevBtnRef}
            className="lightbox-nav-btn lightbox-prev"
            id="lightboxPrev"
            aria-label="Previous Slide"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>

          <div ref={swiperContainerRef} className="swiper lightbox-swiper" id="lightboxSwiper">
            <div className="swiper-wrapper">
              {galleryItems.map((item, index) => (
                <div key={index} className="swiper-slide lightbox-slide">
                  <div className="lightbox-media-box">
                    {item.type === 'video' ? (
                      <video
                        className="lightbox-video-player"
                        controls
                        playsInline
                        preload="metadata"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={item.src} alt={item.alt} />
                    )}
                  </div>
                  <p className="lightbox-caption">{item.caption}</p>
                </div>
              ))}
            </div>
            <div ref={paginationRef} className="lightbox-pagination" id="lightboxPagination"></div>
          </div>

          <button
            ref={nextBtnRef}
            className="lightbox-nav-btn lightbox-next"
            id="lightboxNext"
            aria-label="Next Slide"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

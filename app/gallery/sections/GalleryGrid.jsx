'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';

const galleryItems = [
  {
    id: 0,
    category: 'team',
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    alt: 'Team meeting',
  },
  {
    id: 1,
    category: 'fieldwork',
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    alt: 'Fieldwork discussion',
  },
  {
    id: 2,
    category: 'research',
    src: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80',
    alt: 'Research review',
  },
  {
    id: 3,
    category: 'team',
    src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
    alt: 'Office collaboration',
  },
  {
    id: 4,
    category: 'events',
    src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
    alt: 'Event photography',
  },
  {
    id: 5,
    category: 'community',
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    alt: 'Community engagement',
  },
  {
    id: 6,
    category: 'fieldwork',
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    alt: 'Field survey',
  },
  {
    id: 7,
    category: 'research',
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    alt: 'Research activity',
  },
  {
    id: 8,
    category: 'team',
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    alt: 'Project team',
  },
  {
    id: 9,
    category: 'fieldwork',
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    alt: 'Field survey',
  },
  {
    id: 10,
    category: 'research',
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    alt: 'Research activity',
  },
  {
    id: 11,
    category: 'team',
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    alt: 'Project team',
  },
];

const categories = [
  { key: 'all', label: 'All' },
  { key: 'team', label: 'Team' },
  { key: 'fieldwork', label: 'Fieldwork' },
  { key: 'research', label: 'Research' },
  { key: 'events', label: 'Events' },
  { key: 'community', label: 'Community' },
];

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(8);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleFilterClick = (filterKey) => {
    setActiveFilter(filterKey);
    setVisibleCount(8);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredItems.length));
  };

  const openLightbox = (indexInFiltered) => {
    setLightboxIndex(indexInFiltered);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const handlePrev = useCallback(() => {
    if (!filteredItems.length) return;
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);

  const handleNext = useCallback(() => {
    if (!filteredItems.length) return;
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  }, [filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, closeLightbox, handlePrev, handleNext]);

  return (
    <>
      <section className="gallery-main-section career-values-section">
        <div className="srcn-container">
          <div className="gallery-shell">
            {/* Filter Bar */}
            <div className="gallery-filter-bar" aria-label="Gallery filters">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`gallery-filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
                  type="button"
                  onClick={() => handleFilterClick(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid" id="galleryGrid">
              {visibleItems.map((item, index) => (
                <article
                  key={item.id}
                  className="gallery-card"
                  data-category={item.category}
                  data-index={index}
                  onClick={() => openLightbox(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={item.src} alt={item.alt} />
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {filteredItems.length > visibleCount && (
              <div className="gallery-load-more-wrap">
                <button
                  type="button"
                  className="gallery-load-more-btn btn-sm"
                  onClick={handleLoadMore}
                >
                  <img src="/asstes/images/icon/refresh-icon-img.png" alt="" />
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Lightbox */}
      <div
        className={`gallery-lightbox ${lightboxOpen ? 'open' : ''}`}
        id="galleryLightbox"
        aria-hidden={!lightboxOpen}
      >
        <div
          className="gallery-lightbox-backdrop"
          onClick={closeLightbox}
          data-close-lightbox="true"
        ></div>
        <div
          className="gallery-lightbox-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            aria-label="Close gallery viewer"
            onClick={closeLightbox}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <div className="gallery-lightbox-slider">
            <button
              type="button"
              className="gallery-slider-arrow gallery-arrow-prev"
              aria-label="Previous image"
              onClick={handlePrev}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="gallery-slider-stage" id="gallerySliderStage">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`gallery-slide ${index === lightboxIndex ? 'active' : ''}`}
                  style={{ display: index === lightboxIndex ? 'block' : 'none' }}
                >
                  <img src={item.src} alt={item.alt} />
                </div>
              ))}
            </div>
            <button
              type="button"
              className="gallery-slider-arrow gallery-arrow-next"
              aria-label="Next image"
              onClick={handleNext}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

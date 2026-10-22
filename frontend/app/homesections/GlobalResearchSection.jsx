'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function GlobalResearchSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.muted = true;
      vid.defaultMuted = true;
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const unlock = () => {
            vid.play().catch(() => {});
            ['click', 'touchstart', 'scroll'].forEach((evt) => {
              window.removeEventListener(evt, unlock);
            });
          };
          ['click', 'touchstart', 'scroll'].forEach((evt) => {
            window.addEventListener(evt, unlock, { once: true, passive: true });
          });
        });
      }
    }
  }, []);

  return (
    <section className="global-research-section" id="global-research">
      <div className="srcn-container">
        <div className="global-research-header text-center">
          <span className="global-research-kicker">About Us</span>
          <h2 className="global-research-title">
            Global Research,<br />Local Understanding
          </h2>
        </div>

        <div className="global-research-banner-wrap">
          <video
            ref={videoRef}
            className="global-research-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/asstes/images/homeaboutvideo-banner-img.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="global-research-bottom-row">
          <div className="global-research-stat-block">
            <span className="global-research-stat-num">16</span>
            <div className="global-research-stat-vertical">
              <span>YEARS OF EXCELLENCE</span>
            </div>
          </div>

          <div className="global-research-desc-block">
            <p>
              With 16+ years of expertise delivering structured research data, empowering organizations across 90+
              countries to gain complete clarity into market dynamics, minimize risks, and uncover new opportunities.
            </p>
            <Link href="/about" className="btn-burgundy">
              <span>EXPLORE MORE</span>
              <span className="btn-arrow">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

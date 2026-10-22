'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFoundHero() {
  return (
    <section className="notfound-page-wrapper">
      <div className="srcn-container notfound-canvas-container">
        <div className="notfound-banner-frame">
          {/* Background Banner Image */}
          <img
            src="/asstes/images/404-banner.png"
            alt="404 Page Not Found Background"
            className="notfound-banner-bg"
          />

          {/* Dark Contrast Gradient Overlay */}
          <div className="notfound-banner-overlay" aria-hidden="true"></div>

          {/* Content Layer (Left Aligned - Exactly Matches Screenshot) */}
          <div className="notfound-content-layer">
            {/* Kicker Line: Red Dash + PAGE NOT FOUND */}
            <div className="notfound-kicker">
              <span className="notfound-kicker-dash" aria-hidden="true"></span>
              <span className="notfound-kicker-text">PAGE NOT FOUND</span>
            </div>

            {/* 404 with Red Dot */}
            <div className="notfound-code-wrapper">
              <span className="notfound-code-number">404</span>
              <span className="notfound-code-dot" aria-hidden="true"></span>
            </div>

            {/* Main Tagline */}
            <h1 className="notfound-heading">
              Wrong turn.<br />Right mindset.
            </h1>

            {/* Description */}
            <p className="notfound-desc">
              The page you are looking for doesn't exist or has been moved. But don't worry, you can always head back to our homepage or get in touch with us.
            </p>

            {/* Action Buttons */}
            <div className="notfound-actions">
              <Link href="/" className="notfound-btn-primary">
                <i className="fa-solid fa-house" aria-hidden="true"></i>
                <span>Go to Homepage</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>

              <Link href="/contact" className="notfound-btn-outline">
                <span>Contact Us</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

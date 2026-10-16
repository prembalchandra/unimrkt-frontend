import React from 'react';
import Link from 'next/link';

export default function GalleryHero() {
  return (
    <>
      <section className="hero-common-area">
        <div className="hero-common-banner">
          <img
            src="/asstes/images/gallery-banner-img.png"
            className="hero-common-banner-area"
            alt="Market Research Blog"
          />
        </div>
        <div className="srcn-container">
          <div className="hero-common-row">
            <div className="hero-common-content">
              <div className="hero-common-contnet-area">
                <span className="-hero-common-sub-tille-area">
                  <i className="fa-solid fa-bolt" style={{ fontSize: '0.75rem', color: '#ff526b' }}></i>
                  OUR GALLERY
                </span>
                <h1 className="hero-commmon-heading-area">Moments that show our journey</h1>
                <p className="hero-common-title">
                  Explore our gallery to see the people, processes and projects that drive our research excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="team-breadcrumb">
        <div className="srcn-container">
          <nav aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Gallery</span>
          </nav>
        </div>
      </div>
    </>
  );
}

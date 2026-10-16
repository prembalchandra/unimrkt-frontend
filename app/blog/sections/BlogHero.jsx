import React from 'react';
import Link from 'next/link';

export default function BlogHero() {
  return (
    <>
      <section className="hero-common-area">
        <div className="hero-common-banner">
          <img
            src="/asstes/images/unimrkt-reseach-case-study-banner-img.png"
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
                  BLOGS &amp; ARTICLES
                </span>
                <h1 className="hero-commmon-heading-area">
                  Latest Market Research<br />Blogs &amp; Insights
                </h1>
                <p className="hero-common-title">
                  Stay updated with deep dives, methodologies, and actionable market intelligence that keep your enterprise ahead of trends.
                </p>
              </div>
              <div className="hero-btn-area">
                <a href="#blogs-grid" className="hero-common-btn-area btn-sm">
                  <span>Browse Articles</span>
                  <img src="/asstes/images/icon/arrow-right-icon-img.png" alt="Arrow Right" />
                </a>
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
            <Link href="/about">About Us</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Blogs</span>
          </nav>
        </div>
      </div>
    </>
  );
}

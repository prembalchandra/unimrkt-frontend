import React from 'react';
import Link from 'next/link';

export default function WorkHero() {
  return (
    <>
      <section className="hero-common-area">
        <div className="hero-common-banner">
          <img
            src="/asstes/images/unimrkt-reseach-work-banner-img.png"
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
                  CAREERS
                </span>
                <h1 className="hero-commmon-heading-area">
                  Great People<br />Build Great Research
                </h1>
                <p className="hero-common-title">
                  At Unimrkt, we give our employees a space to learn, grow and innovate. If you’re passionate about research, data and making an impact you’ll feel right at home here.
                </p>
              </div>
              <div className="hero-btn-area">
                <a href="#open-positions" className="hero-common-btn-area btn-sm">
                  <span>Explore Open Positions</span>
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
            <span aria-current="page">Work</span>
          </nav>
        </div>
      </div>
    </>
  );
}

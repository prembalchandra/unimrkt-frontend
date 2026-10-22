import React from 'react';
import Link from 'next/link';

export default function CompanyHero() {
  return (
    <>
      <section className="hero-common-area">
        <div className="hero-common-banner">
          <img
            src="/asstes/images/unimrkt-resarch-our-team-banner.png"
            className="hero-common-banner-area"
            alt="About Unimrkt Research"
          />
        </div>
        <div className="srcn-container">
          <div className="hero-common-row">
            <div className="hero-common-content">
              <div className="hero-common-contnet-area">
                <span className="-hero-common-sub-tille-area">
                  <i className="fa-solid fa-bolt" style={{ fontSize: '0.75rem', color: '#ff526b' }}></i>
                  ABOUT OUR COMPANY
                </span>
                <h1 className="hero-commmon-heading-area">
                  Delivering Truth, Precision, and Clarity Since 2009
                </h1>
                <p className="hero-common-title">
                  Unimrkt Research is a premier global full-service research and data collection agency operating across 90+ countries with offices in India, the USA, and the UK.
                </p>
              </div>
              <div className="hero-btn-area">
                <Link href="/team" className="hero-common-btn-area btn-sm">
                  <span>Meet Our Leadership</span>
                  <img src="/asstes/images/icon/arrow-right-icon-img.png" alt="Arrow Right" />
                </Link>
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
            <span aria-current="page">Our Company</span>
          </nav>
        </div>
      </div>
    </>
  );
}

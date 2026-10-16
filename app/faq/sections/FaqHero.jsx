import React from 'react';
import Link from 'next/link';

export default function FaqHero() {
  return (
    <>
      <section className="hero-common-area">
        <div className="hero-common-banner">
          <img
            src="/asstes/images/team-banner-img.png"
            className="hero-common-banner-area"
            alt="Frequently Asked Questions - Unimrkt Research"
          />
        </div>
        <div className="srcn-container">
          <div className="hero-common-row">
            <div className="hero-common-content">
              <div className="hero-common-contnet-area">
                <span className="-hero-common-sub-tille-area">
                  <i className="fa-solid fa-circle-question" style={{ fontSize: '0.75rem', color: '#ff526b' }}></i>
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h1 className="hero-commmon-heading-area">
                  Clear Answers to Your Research, Survey &amp; Data Questions
                </h1>
                <p className="hero-common-title">
                  Find fast, accurate answers about our global primary research capabilities, CATI operations, sampling panels, project delivery timelines, and ISO data compliance.
                </p>
              </div>
              <div className="hero-btn-area">
                <Link href="/contact" className="hero-common-btn-area btn-sm">
                  <span>Have a Specific Question?</span>
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
            <span aria-current="page">FAQs</span>
          </nav>
        </div>
      </div>
    </>
  );
}

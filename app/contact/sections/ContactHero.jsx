import React from 'react';
import Link from 'next/link';

export default function ContactHero() {
  return (
    <>
      <section className="hero-common-area">
        <div className="hero-common-banner">
          <img
            src="/asstes/images/contac-banner-img.png"
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
                  Contact Us
                </span>
                <h1 className="hero-commmon-heading-area">
                  Let’s Turn Your Business Questions Into Clear Answers
                </h1>
                <p className="hero-common-title">
                  Tell us what you’re trying to understand. Our research experts will help you find the right path forward.
                </p>
              </div>
              <div className="hero-btn-area">
                <a href="#contact-form" className="hero-common-btn-area btn-sm">
                  <span>Start a Conversation</span>
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
            <span aria-current="page">Contact</span>
          </nav>
        </div>
      </div>
    </>
  );
}

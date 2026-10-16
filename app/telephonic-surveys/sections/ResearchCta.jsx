import React from 'react';
import Link from 'next/link';

export default function ResearchCta() {
  return (
    <section className="research-cta-section" id="cta">
      <div className="research-cta-banner-wrapper">
        <img
          src="/asstes/images/unimrkt-research-telephonic-surveys-banner.png"
          alt="Research consultation"
          className="research-cta-bg-image"
        />
        <div className="research-cta-overlay"></div>
        <div className="srcn-container research-cta-content">
          <span className="research-cta-kicker">Get a free quote!</span>
          <h2 className="section-main-heading research-cta-title">Start Your Research Journey</h2>
          <p className="research-cta-desc">
            Speak with our experts to discover research solutions tailored to your goals, industry, and growth stage.
          </p>
          <Link href="/contact" className="btn-white">
            Talk to our experts <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

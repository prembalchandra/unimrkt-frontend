import React from 'react';
import Link from 'next/link';

export default function ResearchCta() {
  return (
    <section className="research-cta-section" id="cta">
      <div className="srcn-container">
        <div className="research-cta-banner-wrapper">
          <video className="research-cta-bg-image" autoPlay muted loop playsInline>
            <source src="/asstes/images/video-banner-img.mp4" type="video/mp4" />
          </video>
          <div className="research-cta-overlay"></div>
          <div className="srcn-container research-cta-content">
            <h2 className="section-main-heading research-cta-title">A Better Way to Understand Your Market</h2>
            <p className="research-cta-desc hero-common-title">
              Your customers are already telling you what they expect. We help you listen, understand and act.
            </p>
            <Link href="/contact" className="btn-white">
              Talk to Our Experts <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

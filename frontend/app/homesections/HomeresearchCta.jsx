import React from 'react';
import Link from 'next/link';

export default function HomeresearchCta() {
  return (
    <section className="research-cta-sections" id="cta">
      <div className="srcn-containers">
        <div className="research-cta-banner-wrapper">
          <video
            className="research-cta-bg-image"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/asstes/images/video-banner.mp4" type="video/mp4" />
          </video>

          <div className="research-cta-overlay"></div>
          <div className="srcn-container research-cta-content">
            <h2 className="section-main-heading research-cta-title">Global Research Panel</h2>
            <p className="research-cta-desc hero-common-title">
                Access a diverse network of verified respondents across multiple countries, demographics, and industries, enabling reliable market research, faster data collection, and meaningful insights at a global scale.
            </p>
            <Link href="/contact" className="btn-white">
              Explore Our Global Panel <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

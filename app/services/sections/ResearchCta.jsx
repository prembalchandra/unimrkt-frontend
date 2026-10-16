import React from 'react';
import Link from 'next/link';

export default function ResearchCta({
  kicker = 'Get a free quote!',
  title = 'Start Your Research Journey',
  description = 'Speak with our experts to discover research solutions tailored to your goals, industry, and growth stage.',
  buttonText = 'Talk to our experts',
  buttonUrl = '/contact',
  bgImageUrl = '/asstes/images/unimrkt-research-telephonic-surveys-banner.png',
} = {}) {
  return (
    <section className="research-cta-section" id="cta">
      <div className="research-cta-banner-wrapper">
        <img
          src={bgImageUrl || '/asstes/images/unimrkt-research-telephonic-surveys-banner.png'}
          alt="Research consultation"
          className="research-cta-bg-image"
        />
        <div className="research-cta-overlay"></div>
        <div className="srcn-container research-cta-content">
          <span className="research-cta-kicker">{kicker}</span>
          <h2 className="section-main-heading research-cta-title">{title}</h2>
          <p className="research-cta-desc">{description}</p>
          <Link href={buttonUrl || '/contact'} className="btn-white">
            {buttonText} <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

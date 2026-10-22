import React from 'react';
import Link from 'next/link';

export default function TeamHero() {
  return (
    <>
      <section className="hero-common-area">
        <div className="hero-common-banner">
          <img
            src="/asstes/images/unimrkt-resarch-our-team-banner.png"
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
                  Unimrkt Team
                </span>
                <h1 className="hero-commmon-heading-area">Meet the Minds Behind Unimrkt</h1>
                <p className="hero-common-title">
                  A diverse team of research experts bringing experience, insight, and strategic thinking to every project.
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
            <Link href="/about">About Us</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Our Team</span>
          </nav>
        </div>
      </div>
    </>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';

export default function AutomotiveHeroOverview() {
  return (
    <section className="auto-overview-section" id="auto-overview">

      <div className="srcn-container">
        {/* Breadcrumb Navigation */}
        <div className="auto-breadcrumb-nav">
          <nav aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/industries">Industries</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Automotive</span>
          </nav>
        </div>

        <div className="auto-overview-layout">
          {/* Left Content */}
          <div className="auto-overview-content">
            <span className="auto-overview-kicker">WHAT WE DO</span>
            <h1 className="auto-overview-heading">Our Automotive Research Services</h1>
            <p className="auto-overview-text">
              The automotive landscape is undergoing unprecedented disruption driven by electrification, software-defined architectures, and evolving customer ownership expectations. We deliver structured intelligence that empowers OEMs, suppliers, and mobility innovators to make bold, data-backed decisions.
            </p>
            <p className="auto-overview-text">
              From EV adoption barriers and fleet electrification to connected vehicle cockpits and dealership satisfaction, our specialized automotive research division connects you with verified drivers, fleet managers, and tier-1 decision-makers worldwide.
            </p>
            <Link href="/contact" className="auto-overview-btn">
              <span>Speak to our industry expert</span>
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>

          {/* Right Visual Image */}
          <div className="auto-overview-visual">
            <img
              src="/asstes/images/automotives-about-img.png"
              alt="Automotive EV Engineering and Testing"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

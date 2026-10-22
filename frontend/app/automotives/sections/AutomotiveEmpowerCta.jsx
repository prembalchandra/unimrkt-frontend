'use client';

import React from 'react';
import Link from 'next/link';

export default function AutomotiveEmpowerCta() {
  return (
    <section className="auto-empower-section" id="auto-empower">

      <div className="srcn-container">
        <div className="auto-empower-layout">
          {/* Left Content */}
          <div className="auto-empower-content">
            <span className="auto-empower-kicker">PARTNER WITH UNIMRKT</span>
            <h2 className="auto-empower-heading">Empower Your Automotive Business With Unimrkt Research</h2>
            <p className="auto-empower-text">
              In an industry where technology cycles and consumer expectations shift faster than ever, relying on outdated assumptions carries massive risk. Our specialized automotive research team equips leadership with sharp, actionable data.
            </p>
            <p className="auto-empower-text">
              With fieldwork capabilities spanning 90+ countries and verified respondent networks covering consumers, engineers, and fleet executives, we deliver the precision you need to lead the mobility revolution.
            </p>
            <Link href="/contact" className="auto-empower-btn">
              <span>Speak to our industry expert</span>
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>

          {/* Right Visual Image */}
          <div className="auto-empower-visual-wrap">
            <div className="auto-empower-circle-bg">
              <img
                src="/asstes/images/parkman-img.png"
                alt="Automotive Research Experts"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

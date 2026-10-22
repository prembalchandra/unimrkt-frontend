import React from 'react';
import Link from 'next/link';

export default function CaseDetailHero() {
  return (
    <section className="cs-detail-hero-section">
      <div className="abnner-arae">
        <div className="srcn-container">
          <div className="team-breadcrumb team-breadcrumb-area">
            <nav aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link href="/case-study">Case Study</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">Understanding Customer Expectations ...</span>
            </nav>
          </div>
          <div className="cs-detail-hero-content">
            <div className="cs-hero-badge-wrap">
              <span className="cs-hero-badge">BANKING &amp; FINANCE</span>
            </div>
            <h1 className="cs-hero-title hero-commmon-heading-area">
              Understanding Customer Expectations<br />In A Changing Financial Market
            </h1>
            <p className="cs-hero-desc hero-common-title">
              How research uncovered evolving customer needs, digital expectations, and decision-making drivers to help a financial services organization strengthen its customer strategy.
            </p>

            <div className="cs-hero-img-box">
              <img
                src="/asstes/images/case-study-banking.jpg"
                alt="Understanding Customer Expectations in a Changing Financial Market"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function EndToEndSolutions() {
  const [expandedCard, setExpandedCard] = useState(1);

  return (
    <section className="end-to-end-solutions-section">
      <div className="srcn-container">
        <div className="end-to-end-header">
          <h2 className="end-to-end-title">End-To-End Market Research Solutions</h2>
          <p className="end-to-end-desc">
            From research design and respondent recruitment to data collection, analysis, and reporting, Unimrkt Research provides comprehensive market research solutions tailored to your business objectives. Our expert team delivers accurate, actionable insights that help organizations make informed decisions, uncover opportunities, and drive sustainable growth.
          </p>
        </div>

        <div
          className="end-to-end-accordion"
          onMouseLeave={() => setExpandedCard(null)}
        >
          {/* Card 1: Primary Research */}
          <div
            className={`end-to-end-card ${expandedCard === 1 ? 'is-expanded' : ''}`}
            data-card="1"
            onMouseEnter={() => setExpandedCard(1)}
            onClick={(e) => {
              if (e.target.closest('.end-to-end-btn')) return;
              setExpandedCard(1);
            }}
          >
            <img src="/asstes/images/telephonic-surveys-card-img.png" alt="Primary Research" className="end-to-end-card-bg" />
            <div className="end-to-end-card-overlay"></div>
            <div className="end-to-end-card-content">
              <div className="end-to-end-icon-wrap" aria-hidden="true">
                <svg className="end-to-end-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="24" r="21" strokeWidth="1.8" />
                  <circle cx="16" cy="24" r="3.5" fill="currentColor" />
                  <circle cx="28" cy="16" r="3.5" fill="currentColor" />
                  <circle cx="30" cy="31" r="3.5" fill="currentColor" />
                  <line x1="19" y1="22" x2="25" y2="18" />
                  <line x1="19" y1="26" x2="27" y2="29.5" />
                  <line x1="28" y1="19.5" x2="29.5" y2="27.5" />
                </svg>
              </div>
              <div className="end-to-end-text-wrap">
                <h3 className="end-to-end-card-title">Primary Research</h3>
                <p className="end-to-end-card-desc">
                  Gather first-hand insights from target audiences through qualitative and quantitative research. Understand customer needs, behaviours, attitudes and experiences to uncover meaningful insights and support confident business decisions.
                </p>
                <Link href="/primary-research" className="end-to-end-btn">
                  <span>EXPLORE RESEARCH</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Qualitative Research */}
          <div
            className={`end-to-end-card ${expandedCard === 2 ? 'is-expanded' : ''}`}
            data-card="2"
            onMouseEnter={() => setExpandedCard(2)}
            onClick={(e) => {
              if (e.target.closest('.end-to-end-btn')) return;
              setExpandedCard(2);
            }}
          >
            <img src="/asstes/images/customer-experience-img.png" alt="Qualitative Research" className="end-to-end-card-bg" />
            <div className="end-to-end-card-overlay"></div>
            <div className="end-to-end-card-content">
              <div className="end-to-end-icon-wrap" aria-hidden="true">
                <svg className="end-to-end-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="24" r="21" strokeWidth="1.8" />
                  <circle cx="24" cy="18" r="4.5" strokeWidth="2" />
                  <path d="M16 30c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeWidth="2" />
                  <path d="M12 36c2.5-3 6.5-4 12-4s9.5 1 12 4" strokeWidth="2" />
                </svg>
              </div>
              <div className="end-to-end-text-wrap">
                <h3 className="end-to-end-card-title">Qualitative Research</h3>
                <p className="end-to-end-card-desc">
                  Uncover deep consumer motivations, perceptions, and emotional drivers through focused group discussions, in-depth interviews, and ethnographic studies that reveal the underlying reasons behind market decisions.
                </p>
                <Link href="/telephonic-surveys" className="end-to-end-btn">
                  <span>EXPLORE RESEARCH</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Quantitative Research */}
          <div
            className={`end-to-end-card ${expandedCard === 3 ? 'is-expanded' : ''}`}
            data-card="3"
            onMouseEnter={() => setExpandedCard(3)}
            onClick={(e) => {
              if (e.target.closest('.end-to-end-btn')) return;
              setExpandedCard(3);
            }}
          >
            <img src="/asstes/images/smart-survey-management-card-img.png" alt="Quantitative Research" className="end-to-end-card-bg" />
            <div className="end-to-end-card-overlay"></div>
            <div className="end-to-end-card-content">
              <div className="end-to-end-icon-wrap" aria-hidden="true">
                <svg className="end-to-end-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="24" r="21" strokeWidth="1.8" />
                  <path d="M24 14v10l7 4" strokeWidth="2" />
                  <circle cx="24" cy="24" r="10" strokeWidth="2" />
                  <path d="M14 32v2M19 28v6M24 25v9M29 22v12" strokeWidth="2" />
                </svg>
              </div>
              <div className="end-to-end-text-wrap">
                <h3 className="end-to-end-card-title">Quantitative Research</h3>
                <p className="end-to-end-card-desc">
                  Collect measurable, statistically reliable data through robust online surveys, CATI, and multi-channel questionnaires to validate hypotheses and measure market trends with scientific accuracy.
                </p>
                <Link href="/telephonic-surveys" className="end-to-end-btn">
                  <span>EXPLORE RESEARCH</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4: Business Research */}
          <div
            className={`end-to-end-card ${expandedCard === 4 ? 'is-expanded' : ''}`}
            data-card="4"
            onMouseEnter={() => setExpandedCard(4)}
            onClick={(e) => {
              if (e.target.closest('.end-to-end-btn')) return;
              setExpandedCard(4);
            }}
          >
            <img src="/asstes/images/market-trends-card-img2.png" alt="Business Research" className="end-to-end-card-bg" />
            <div className="end-to-end-card-overlay"></div>
            <div className="end-to-end-card-content">
              <div className="end-to-end-icon-wrap" aria-hidden="true">
                <svg className="end-to-end-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="24" r="21" strokeWidth="1.8" />
                  <circle cx="24" cy="24" r="5" strokeWidth="2" />
                  <path d="M24 13v3M24 32v3M13 24h3M32 24h3" strokeWidth="2" />
                  <path d="M16 16l2.5 2.5M29.5 29.5l2.5 2.5M16 32l2.5-2.5M29.5 18.5l2.5-2.5" strokeWidth="2" />
                  <polyline points="28 15 34 15 34 21" strokeWidth="2" />
                  <line x1="34" y1="15" x2="26" y2="23" strokeWidth="2" />
                </svg>
              </div>
              <div className="end-to-end-text-wrap">
                <h3 className="end-to-end-card-title">Business Research</h3>
                <p className="end-to-end-card-desc">
                  Gain strategic competitive intelligence, market sizing, industry benchmarking, and supply-chain evaluations to inform high-stakes corporate decisions and capitalize on new market opportunities.
                </p>
                <Link href="/blog" className="end-to-end-btn">
                  <span>EXPLORE RESEARCH</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 5: Research Support Functions */}
          <div
            className={`end-to-end-card ${expandedCard === 5 ? 'is-expanded' : ''}`}
            data-card="5"
            onMouseEnter={() => setExpandedCard(5)}
            onClick={(e) => {
              if (e.target.closest('.end-to-end-btn')) return;
              setExpandedCard(5);
            }}
          >
            <img src="/asstes/images/centralized-data-card-img.png" alt="Research Support Functions" className="end-to-end-card-bg" />
            <div className="end-to-end-card-overlay"></div>
            <div className="end-to-end-card-content">
              <div className="end-to-end-icon-wrap" aria-hidden="true">
                <svg className="end-to-end-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="24" r="21" strokeWidth="1.8" />
                  <rect x="14" y="16" width="20" height="15" rx="3" strokeWidth="2" />
                  <circle cx="26" cy="24" r="4" strokeWidth="2" />
                  <line x1="29" y1="27" x2="33" y2="31" strokeWidth="2.5" />
                  <line x1="14" y1="21" x2="34" y2="21" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="end-to-end-text-wrap">
                <h3 className="end-to-end-card-title">Research Support Functions</h3>
                <p className="end-to-end-card-desc">
                  Empower your research operations with specialized survey programming, data processing, statistical modeling, advanced translation, and reporting services delivered by experienced specialists.
                </p>
                <Link href="/blog" className="end-to-end-btn">
                  <span>EXPLORE RESEARCH</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

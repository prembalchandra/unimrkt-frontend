'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const faqDatabase = [
  // General & About
  {
    category: 'General',
    question: 'What is Unimrkt Research and what services do you provide?',
    answer:
      'Unimrkt Research is a global market research and data collection agency founded in 2009. We offer end-to-end qualitative and quantitative research services, Computer-Assisted Telephone Interviewing (CATI), online survey panels, healthcare studies, data analytics, and secondary market intelligence across 90+ countries.',
  },
  {
    category: 'General',
    question: 'Where are your offices and research centers located?',
    answer:
      'Our primary operational headquarters and multilingual research facilities are based in Gurugram, India, supported by regional business offices in the United States and the United Kingdom. We operate 24/7 across multiple time zones.',
  },
  {
    category: 'General',
    question: 'What certifications and quality standards do you follow?',
    answer:
      'Unimrkt Research is ISO 20252:2019 certified for market and opinion research, and ISO 27001:2013 certified for information security management. We strictly adhere to ESOMAR, MRSI, and Insights Association codes of ethics and GDPR/CCPA data privacy compliance.',
  },

  // Primary & Secondary Research
  {
    category: 'Primary Research',
    question: 'What is the difference between primary and secondary research at Unimrkt?',
    answer:
      'Primary research involves original, first-hand data collection directly from targeted audiences via phone interviews (CATI), web surveys, in-depth interviews (IDIs), and focus groups. Secondary research leverages verified existing publications, commercial databases, company filings, and statistical repositories to synthesize market landscapes and competitive benchmarking.',
  },
  {
    category: 'Primary Research',
    question: 'Can you reach niche B2B decision-makers and C-suite executives?',
    answer:
      'Yes. Our specialized B2B recruit teams have extensive experience reaching high-value profiles such as CTOs, CFOs, hospital procurement directors, fleet managers, supply chain leaders, and cybersecurity experts across North America, Europe, APAC, and LATAM.',
  },
  {
    category: 'Primary Research',
    question: 'Do you offer questionnaire design and survey programming?',
    answer:
      'Yes, we provide turnkey questionnaire design, logic routing, complex quotas, multi-language localization, and survey scripting across major platforms like Decipher, Confirmit, Qualtrics, and programmed web instruments.',
  },

  // CATI & Telephonic Surveys
  {
    category: 'CATI & Telephonic',
    question: 'What is CATI and why should I choose it over web surveys?',
    answer:
      'CATI stands for Computer-Assisted Telephone Interviewing. It is ideal when you need deep qualitative probes, higher response commitment from busy senior executives, real-time response validation, and reaching segments where email contact lists have low deliverability.',
  },
  {
    category: 'CATI & Telephonic',
    question: 'How many CATI stations do you operate and in what languages?',
    answer:
      'We operate over 450+ dedicated CATI stations with native and fluent interviewers covering English, German, French, Spanish, Italian, Japanese, Mandarin, Arabic, Portuguese, Hindi, and 20+ other regional languages.',
  },
  {
    category: 'CATI & Telephonic',
    question: 'Are CATI calls recorded and monitored for quality assurance?',
    answer:
      'Yes, with respondent consent, 100% of CATI calls are recorded. Our dedicated QA audit team monitors at least 15-20% of calls live and conducts acoustic post-interview verifications to ensure protocol compliance and data truth.',
  },

  // Global Panels & Sampling
  {
    category: 'Panels & Sampling',
    question: 'How large is your global panel reach?',
    answer:
      'We have access to over 120M+ validated panel respondents across 90+ countries spanning B2B professionals, healthcare workers, physicians (KOLs), consumers, and niche tech audiences.',
  },
  {
    category: 'Panels & Sampling',
    question: 'How do you prevent fraudulent bots and duplicate respondents?',
    answer:
      'We deploy multi-tier fraud detection including digital device fingerprinting, IP geo-location verification, CAPTCHA gating, trap/attention-check questions, and algorithmic response duration scoring to purge fraudulent data automatically.',
  },

  // Quality & Timelines
  {
    category: 'Quality & Delivery',
    question: 'What deliverables do you provide at project completion?',
    answer:
      'We deliver clean, verified datasets in SPSS, Excel, CSV, or ASCII formats, accompanied by weighted data tables, banner cross-tabs, PowerPoint executive summaries, verbatim transcripts, and interactive business intelligence dashboards.',
  },
  {
    category: 'Quality & Delivery',
    question: 'What is the typical turnaround time for a custom research project?',
    answer:
      'Turnaround times depend on sample size and incidence rate (IR). Standard B2B and consumer web surveys often take 3 to 7 business days, while complex multi-country CATI or executive qualitative studies typically complete within 2 to 4 weeks.',
  },
  {
    category: 'Quality & Delivery',
    question: 'How do I request a quote or RFP proposal?',
    answer:
      'You can submit your project requirements via our online Contact Form, or email us directly at sales@unimrkt.com. Our research directors usually respond with a feasibility assessment and detailed proposal within 2 to 4 hours.',
  },
];

const categories = [
  'All',
  'General',
  'Primary Research',
  'CATI & Telephonic',
  'Panels & Sampling',
  'Quality & Delivery',
];

export default function FaqContent() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = useMemo(() => {
    return faqDatabase.filter((faq) => {
      const matchesCategory =
        selectedCategory === 'All' || faq.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section-area" style={{ padding: '60px 0 100px' }}>
      <div className="srcn-container">
        {/* Search Bar & Controls */}
        <div style={{ maxWidth: '720px', margin: '0 auto 40px', textAlign: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#fff',
              border: '2px solid #e5e7eb',
              borderRadius: '999px',
              padding: '8px 20px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
            }}
          >
            <i className="fa-solid fa-magnifying-glass" style={{ color: '#9ca3af', marginRight: '12px' }}></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions by keyword (e.g. CATI, ISO, sample, B2B)..."
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                fontSize: '1rem',
                color: '#1f2937',
                background: 'transparent',
              }}
              aria-label="Search FAQs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#9ca3af',
                  fontSize: '0.9rem',
                }}
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: selectedCategory === cat ? '1px solid #ff2b4a' : '1px solid #e5e7eb',
                background: selectedCategory === cat ? '#ff2b4a' : '#fff',
                color: selectedCategory === cat ? '#fff' : '#4b5563',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-container" style={{ maxWidth: '960px', margin: '0 auto' }}>
          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6b7280' }}>
              <i className="fa-solid fa-circle-exclamation" style={{ fontSize: '2.5rem', color: '#d1d5db', marginBottom: '16px' }}></i>
              <h3>No matching questions found</h3>
              <p style={{ marginTop: '8px' }}>
                Try searching with different keywords or{' '}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  style={{ color: '#ff2b4a', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}
                >
                  view all questions
                </button>
                .
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className={`faq-accordion-item ${isOpen ? 'active' : ''}`}>
                  <div className="faq-accordion-header" onClick={() => toggleFaq(index)}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          textTransform: 'uppercase',
                          fontWeight: 700,
                          padding: '3px 8px',
                          borderRadius: '4px',
                          background: isOpen ? '#ffebee' : '#f3f4f6',
                          color: isOpen ? '#ff2b4a' : '#6b7280',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {faq.category}
                      </span>
                      <span className="faq-question-text">{faq.question}</span>
                    </div>
                    <span className="faq-icon-indicator">
                      <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </span>
                  </div>

                  <div
                    className="faq-accordion-body"
                    style={{
                      display: isOpen ? 'block' : 'none',
                      maxHeight: isOpen ? '800px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.35s ease',
                    }}
                  >
                    <div className="faq-accordion-content" style={{ lineHeight: '1.7', color: '#4b5563', padding: '16px 20px 24px' }}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help Card */}
        <div
          style={{
            maxWidth: '960px',
            margin: '60px auto 0',
            background: '#f9fafb',
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            padding: '32px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '6px' }}>
              Still have questions about your project?
            </h4>
            <p style={{ color: '#6b7280', margin: 0, fontSize: '0.95rem' }}>
              Our senior research directors are ready to discuss your specific feasibility, methodology, and pricing.
            </p>
          </div>
          <Link href="/contact" className="btn-sm">
            <span>Contact Us Now</span>
            <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

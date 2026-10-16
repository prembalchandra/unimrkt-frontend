'use client';

import React, { useState, useEffect } from 'react';

const teamMembers = Array.from({ length: 17 }, (_, index) => ({
  id: index + 1,
  name: 'Anurag Magoo',
  role: 'Co-Founder',
  image: '/asstes/images/parkman-img.png',
  bio: 'Anurag Magoo is the Co-Founder of Unimrkt Research, with specializations in Key Account Management, Research Analysis, Strategy Planning & Execution, and Process Reengineering. He has a post-graduate diploma in Global Sales and Marketing and is also a qualified Six Sigma Green Belt executive. In addition, he has also been an internal auditor for ISO 20252 & ISO 9001. With over 26+ years of industry experience, he developed his early career with American Express and was the Head of Research Operations at Exevo for more than 9 years. Before joining Unimrkt, he was the Executive Director of Cimigo India.',
  linkedin: 'https://linkedin.com',
}));

const CARDS_PER_PAGE = 9;

export default function TeamDirectory() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMember, setSelectedMember] = useState(null);

  const totalPages = Math.ceil(teamMembers.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const visibleMembers = teamMembers.slice(startIndex, startIndex + CARDS_PER_PAGE);

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    if (!selectedMember) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMember]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      document.querySelector('#teamProfileGrid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="team-page-section" aria-labelledby="team-page-title">
      <div className="srcn-container">
        <h2 id="team-page-title" className="section-main-heading">
          People. Expertise. Impact.
        </h2>

        <div className="team-profile-grid" id="teamProfileGrid">
          {visibleMembers.map((member) => (
            <article
              key={member.id}
              className="team-profile-card"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedMember(member)}
            >
              <div className="team-profile-photo">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-profile-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div
                  className="team-profile-actions"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="team-view-profile-btn"
                    type="button"
                    onClick={() => setSelectedMember(member)}
                  >
                    <span>VIEW PROFILE</span>
                    <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                  </button>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-linkedin-icon"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Team Pagination */}
        {totalPages > 1 && (
          <nav className="team-pagination blog-pagination-area" aria-label="Team pages">
            <button
              type="button"
              className="team-page-button team-page-arrow"
              disabled={currentPage <= 1}
              onClick={() => handlePageChange(currentPage - 1)}
              aria-label="Previous page"
            >
              <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
            </button>
            <div className="team-page-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`team-page-button ${page === currentPage ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                  aria-label={`Page ${page}`}
                  aria-current={page === currentPage ? 'page' : 'false'}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="team-page-button team-page-arrow"
              disabled={currentPage >= totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              aria-label="Next page"
            >
              <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
          </nav>
        )}
      </div>

      {/* Team Member Profile Modal - Centered (Matches User Screenshot) */}
      {selectedMember && (
        <div
          className="team-profile-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedMember(null);
          }}
        >
          <div
            className="team-profile-modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="teamProfileModalName"
          >
            <button
              className="team-modal-close-btn"
              type="button"
              aria-label="Close profile"
              onClick={() => setSelectedMember(null)}
            >
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>

            <div className="team-modal-grid-layout">
              {/* Left Photo & LinkedIn Badge */}
              <div className="team-modal-photo-col">
                <div className="team-modal-photo-wrap">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                  />
                </div>
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-modal-linkedin-badge"
                  aria-label="View LinkedIn profile"
                >
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                </a>
              </div>

              {/* Right Details: Name + Role + Red Accent Line + Bio */}
              <div className="team-modal-content-col">
                <h2 id="teamProfileModalName" className="team-modal-person-name">
                  {selectedMember.name}
                </h2>
                <p className="team-modal-person-role">
                  {selectedMember.role}
                </p>
                <span className="team-modal-red-bar" aria-hidden="true"></span>
                <p className="team-modal-person-bio">
                  {selectedMember.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

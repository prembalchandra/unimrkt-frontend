/**
 * UNIMRKT RESEARCH BLOG PAGE - JAVASCRIPT
 * Interactive controls: Filter tabs, Slider navigation, FAQ accordion, Mobile menu & Sticky header
 */

function initMainApp() {
  const officeMapElement = document.querySelector('#officeMap');
  if (officeMapElement && typeof L !== 'undefined') {
    const officeLocations = [
      { name: 'India Office', city: 'Gurugram, India', flag: '🇮🇳', coordinates: [28.4946, 77.088] },
      { name: 'United States Office', city: 'Great Neck, USA', flag: '🇺🇸', coordinates: [40.8007, -73.7285] },
      { name: 'United Kingdom Office', city: 'Oxford, UK', flag: '🇬🇧', coordinates: [51.7632, -1.2065] }
    ];
    const officeMap = L.map(officeMapElement, { scrollWheelZoom: false });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(officeMap);

    const officeBounds = [];
    officeLocations.forEach(office => {
      const markerIcon = L.divIcon({
        className: '',
        html: `<span class="office-map-marker"><span>${office.flag}</span></span>`,
        iconSize: [42, 42],
        iconAnchor: [21, 42]
      });
      const marker = L.marker(office.coordinates, { icon: markerIcon }).addTo(officeMap);
      marker.bindTooltip(
        `<span class="office-map-tooltip-country">${office.flag}</span>${office.name}<span class="office-map-tooltip-city">${office.city}</span>`,
        { className: 'office-map-tooltip', direction: 'top', offset: [0, -30], opacity: 1 }
      );
      officeBounds.push(office.coordinates);
    });

    officeMap.fitBounds(officeBounds, { padding: [32, 32], maxZoom: 4 });
  }

  // 1. STICKY HEADER ON SCROLL (Handled by React Header component)
  // 2. MOBILE NAVIGATION (Handled natively by React Header.jsx component)

  // BLOG ARTICLE SHARE
  const blogShareButton = document.querySelector('#blogShareButton');
  const blogShareStatus = document.querySelector('#blogShareStatus');
  blogShareButton?.addEventListener('click', async () => {
    if (!navigator.clipboard?.writeText) {
      if (blogShareStatus) blogShareStatus.textContent = 'Copy this page address from your browser to share the article.';
      return;
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      if (blogShareStatus) blogShareStatus.textContent = 'Article link copied.';
    } catch {
      if (blogShareStatus) blogShareStatus.textContent = 'Could not copy automatically. Copy this page address from your browser to share the article.';
    }
  });

  // 3. BLOG CATEGORY FILTER TABS
  const filterBtns = document.querySelectorAll('.blog-filter-btn');
  const blogCards = document.querySelectorAll('.blog-col');
  const pagination = document.querySelector('.blog-pagination-area');
  const pageButtons = pagination?.querySelectorAll('.pagination-item:not(.arrow-btn)') || [];
  const previousPageBtn = pagination?.querySelector('.arrow-btn[aria-label="Previous page"]');
  const nextPageBtn = pagination?.querySelector('.arrow-btn[aria-label="Next page"]');
  const cardsPerPage = 6;
  let activeCategory = 'all';
  let currentPage = 1;

  function renderBlogPage() {
    const matchingCards = Array.from(blogCards).filter(card => {
      return activeCategory === 'all' || card.getAttribute('data-category') === activeCategory;
    });
    const pageCount = Math.max(1, Math.ceil(matchingCards.length / cardsPerPage));
    currentPage = Math.min(currentPage, pageCount);
    const firstCardIndex = (currentPage - 1) * cardsPerPage;
    const visibleCards = new Set(matchingCards.slice(firstCardIndex, firstCardIndex + cardsPerPage));

    blogCards.forEach(card => {
      card.style.display = visibleCards.has(card) ? 'flex' : 'none';
    });

    pageButtons.forEach((button, index) => {
      const pageNumber = index + 1;
      button.hidden = pageNumber > pageCount;
      button.classList.toggle('active', pageNumber === currentPage);
      button.setAttribute('aria-current', pageNumber === currentPage ? 'page' : 'false');
    });

    if (previousPageBtn) {
      previousPageBtn.disabled = currentPage === 1;
    }
    if (nextPageBtn) {
      nextPageBtn.disabled = currentPage === pageCount;
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter') || 'all';
      currentPage = 1;
      renderBlogPage();
    });
  });

  pageButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentPage = Number(button.textContent.trim());
      renderBlogPage();
      document.querySelector('.blog-grid-area')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  previousPageBtn?.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage -= 1;
      renderBlogPage();
      document.querySelector('.blog-grid-area')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  nextPageBtn?.addEventListener('click', () => {
    const pageCount = Math.ceil(Array.from(blogCards).filter(card => {
      return activeCategory === 'all' || card.getAttribute('data-category') === activeCategory;
    }).length / cardsPerPage);

    if (currentPage < pageCount) {
      currentPage += 1;
      renderBlogPage();
      document.querySelector('.blog-grid-area')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  if (pagination && blogCards.length > 0) {
    renderBlogPage();
  }

  // 4. RESEARCH METHODOLOGIES SLIDER
  const researchSlider = document.querySelector('#research-methodologies-slider');
  const researchPagination = document.querySelector('.research-methodologies-pagination');

  if (researchSlider && typeof Swiper !== 'undefined') {
    new Swiper(researchSlider, {
      slideClass: 'research-methodologies-col',
      wrapperClass: 'research-methodologies-grid',
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 18,
      loop: true,
      speed: 650,
      grabCursor: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: researchPagination || '.research-methodologies-pagination',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 16
        },
        640: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 24
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 24
        }
      }
    });
  }

  // 5. CONTACT PROCESS SLIDER
  const contactProcessSlider = document.querySelector('.contact-process-slider');
  if (contactProcessSlider && typeof Swiper !== 'undefined') {
    new Swiper(contactProcessSlider, {
      slidesPerView: 1,
      spaceBetween: 18,
      watchOverflow: true,
      slidesPerGroup: 1,
      pagination: {
        el: contactProcessSlider.querySelector('.contact-process-pagination'),
        clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 18
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 22
        }
      }
    });
  }



    // 5. CONTACT PROCESS SLIDER

const testimonialProcessSlider = document.querySelector(
  '.testimonial-process-slider'
);

if (testimonialProcessSlider && typeof Swiper !== 'undefined') {
  new Swiper(testimonialProcessSlider, {
    slidesPerView: 1,
    spaceBetween: 18,
    watchOverflow: true,
    slidesPerGroup: 1,

    pagination: {
      el: testimonialProcessSlider.querySelector(
        '.contact-process-pagination'
      ),
      clickable: true
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 18
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 22
      }
    }
  });
}



  // 6. TELEPHONIC PROCESS SLIDER
  const telephonicSlider = document.querySelector('.telephonic-process-slider');
  const telephonicCards = document.querySelectorAll('.telephonic-process-card');
  const telephonicDotContainer = document.querySelector('.telephonic-process-dots');

  if (telephonicSlider && telephonicCards.length > 0) {
    let activeIndex = 0;
    let sliderTimer = null;

    function renderTelephonicSlider() {
      telephonicCards.forEach((card, index) => {
        card.classList.toggle('active', index === activeIndex);
      });

      if (telephonicDotContainer) {
        const dots = telephonicDotContainer.querySelectorAll('.telephonic-process-dot');
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === activeIndex);
          dot.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
        });
      }
    }

    if (telephonicDotContainer && telephonicDotContainer.children.length === 0) {
      telephonicCards.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'telephonic-process-dot' + (index === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Slide ${index + 1}`);
        dot.addEventListener('click', () => {
          activeIndex = index;
          renderTelephonicSlider();
          clearInterval(sliderTimer);
          sliderTimer = setInterval(() => {
            activeIndex = (activeIndex + 1) % telephonicCards.length;
            renderTelephonicSlider();
          }, 2500);
        });
        telephonicDotContainer.appendChild(dot);
      });
    }

    renderTelephonicSlider();
    sliderTimer = setInterval(() => {
      activeIndex = (activeIndex + 1) % telephonicCards.length;
      renderTelephonicSlider();
    }, 2500);
  }

  const measureCards = document.querySelectorAll('.measure-card');

  measureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('is-hovered');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('is-hovered');
    });
  });

  // 7. FAQ ACCORDION INTERACTIVITY
  const faqItems = document.querySelectorAll('.faq-accordion-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-accordion-header');
    const body = item.querySelector('.faq-accordion-body');

    header?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBody = otherItem.querySelector('.faq-accordion-body');
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        if (body) body.style.maxHeight = null;
      } else {
        item.classList.add('active');
        if (body) body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // Open first FAQ item by default
  if (faqItems.length > 0) {
    const firstBody = faqItems[0].querySelector('.faq-accordion-body');
    faqItems[0].classList.add('active');
    if (firstBody) firstBody.style.maxHeight = firstBody.scrollHeight + 'px';
  }



  // 7. CAREER OPENINGS FILTERS, DETAILS, AND LOAD MORE
  const careerFilters = document.querySelector('.career-job-filters');
  const careerSearchInput = careerFilters?.querySelector('input[name="job-search"]');
  const careerDepartmentSelect = careerFilters?.querySelector('select[name="department"]');
  const careerTypeSelect = careerFilters?.querySelector('select[name="job-type"]');
  const careerLocationSelect = careerFilters?.querySelector('select[name="location"]');
  const careerJobCards = Array.from(document.querySelectorAll('.career-job-card'));
  const careerLoadMoreButton = document.querySelector('.career-jobs-load-more');
  const careerEmptyMessage = document.querySelector('.career-jobs-empty');
  const careerDetailsModal = document.querySelector('#careerDetailsModal');
  const careerDetailsTitle = document.querySelector('#careerDetailsTitle');
  const careerDetailsMeta = document.querySelector('#careerDetailsMeta');
  const careerDetailsContent = document.querySelector('#careerDetailsContent');
  const careerApplicationModal = document.querySelector('#careerApplicationModal');
  const careerApplicationForm = careerApplicationModal?.querySelector('.career-application-form');
  const careerApplicationTitle = careerApplicationModal?.querySelector('#careerApplicationTitle');
  const careerInitialVisibleCount = 4;
  let careerVisibleCount = careerInitialVisibleCount;
  let selectedCareerTitle = '';

  function getMatchingCareerCards() {
    const query = careerSearchInput?.value.trim().toLowerCase() || '';
    const department = careerDepartmentSelect?.value.toLowerCase() || '';
    const type = careerTypeSelect?.value.toLowerCase() || '';
    const location = careerLocationSelect?.value.toLowerCase() || '';

    return careerJobCards.filter(card => {
      const text = card.textContent.toLowerCase();
      return (!query || text.includes(query))
        && (!department || card.dataset.department === department)
        && (!type || card.dataset.type === type)
        && (!location || card.dataset.location === location);
    });
  }

  function renderCareerJobs() {
    const matchingCards = getMatchingCareerCards();
    const visibleCards = new Set(matchingCards.slice(0, careerVisibleCount));

    careerJobCards.forEach(card => {
      card.hidden = !visibleCards.has(card);
    });

    if (careerEmptyMessage) {
      careerEmptyMessage.hidden = matchingCards.length > 0;
    }
    if (careerLoadMoreButton) {
      careerLoadMoreButton.hidden = matchingCards.length <= careerVisibleCount;
    }
  }

  careerFilters?.addEventListener('submit', event => {
    event.preventDefault();
    careerVisibleCount = careerInitialVisibleCount;
    renderCareerJobs();
  });

  [careerSearchInput, careerDepartmentSelect, careerTypeSelect, careerLocationSelect].forEach(control => {
    control?.addEventListener('input', () => {
      careerVisibleCount = careerInitialVisibleCount;
      renderCareerJobs();
    });
    control?.addEventListener('change', () => {
      careerVisibleCount = careerInitialVisibleCount;
      renderCareerJobs();
    });
  });

  careerJobCards.forEach(card => {
    const toggle = card.querySelector('.career-job-details-toggle');
    const details = card.querySelector('.career-job-details');
    const applyButton = card.querySelector('.career-job-apply-trigger');
    const title = card.querySelector('.career-job-main h3')?.textContent.trim() || '';
    const metadata = Array.from(card.querySelectorAll('.career-job-meta li'))
      .map(item => item.textContent.trim())
      .join(' · ');

    toggle?.addEventListener('click', () => {
      if (!careerDetailsModal || !careerDetailsTitle || !careerDetailsContent || !details) return;
      selectedCareerTitle = title;
      careerDetailsTitle.textContent = title;
      if (careerDetailsMeta) careerDetailsMeta.textContent = metadata;
      careerDetailsContent.innerHTML = details.innerHTML;
      careerDetailsModal.showModal();
    });

    applyButton?.addEventListener('click', () => {
      openCareerApplication(title);
    });
  });

  function openCareerApplication(title) {
    if (!careerApplicationModal || !careerApplicationForm) return;
    selectedCareerTitle = title;
    if (careerApplicationTitle) careerApplicationTitle.textContent = `Apply for ${title}`;
    const positionInput = careerApplicationForm.querySelector('input[name="Position"]');
    if (positionInput) positionInput.value = title;
    careerApplicationForm.reset();
    if (positionInput) positionInput.value = title;
    careerApplicationForm.querySelector('.career-application-status').textContent = '';
    careerApplicationModal.showModal();
  }

  careerDetailsModal?.querySelector('.career-modal-apply')?.addEventListener('click', () => {
    careerDetailsModal.close();
    openCareerApplication(selectedCareerTitle);
  });

  document.querySelectorAll('.career-modal').forEach(modal => {
    modal.querySelector('.career-modal-close')?.addEventListener('click', () => modal.close());
    modal.addEventListener('click', event => {
      if (event.target === modal) modal.close();
    });
  });

  careerApplicationForm?.addEventListener('submit', event => {
    event.preventDefault();
    const resumeInput = careerApplicationForm.querySelector('input[name="Resume"]');
    const resumeFile = resumeInput?.files?.[0];
    if (resumeInput) {
      resumeInput.setCustomValidity(
        resumeFile && resumeFile.size > 5 * 1024 * 1024 ? 'Please select a file smaller than 5 MB.' : ''
      );
      if (!careerApplicationForm.reportValidity()) return;
    }

    const formData = new FormData(careerApplicationForm);
    const emailBody = [
      `Position: ${formData.get('Position')}`,
      `Full Name: ${formData.get('Full Name')}`,
      `Email: ${formData.get('Email')}`,
      `Phone: ${formData.get('Phone')}`,
      `Experience: ${formData.get('Experience')}`,
      `Current Location: ${formData.get('Current Location')}`,
      `Resume filename: ${resumeFile?.name || 'Not provided'}`,
      `Additional Message: ${formData.get('Message') || 'None'}`,
      '',
      'Please attach my resume to this application.'
    ].join('\n');
    const subject = encodeURIComponent(`Job Application: ${formData.get('Position')}`);
    const body = encodeURIComponent(emailBody);
    const status = careerApplicationForm.querySelector('.career-application-status');
    if (status) status.textContent = 'Opening your email app. Please attach your resume before sending.';
    window.location.href = `mailto:careers@unimrkt.com?subject=${subject}&body=${body}`;
  });

  careerLoadMoreButton?.addEventListener('click', () => {
    careerVisibleCount += careerInitialVisibleCount;
    renderCareerJobs();
  });

  renderCareerJobs();

  // 7. GALLERY FILTER + LOAD MORE + LIGHTBOX
  const galleryCards = Array.from(document.querySelectorAll('.gallery-card'));
  const galleryFilterButtons = Array.from(document.querySelectorAll('.gallery-filter-btn'));
  const galleryLoadMoreBtn = document.querySelector('.gallery-load-more-btn');
  const galleryLoadMoreWrap = document.querySelector('.gallery-load-more-wrap');
  const galleryLightbox = document.getElementById('galleryLightbox');
  const gallerySliderStage = document.getElementById('gallerySliderStage');
  const galleryCloseBtn = document.querySelector('.gallery-lightbox-close');
  const galleryPrevBtn = document.querySelector('.gallery-arrow-prev');
  const galleryNextBtn = document.querySelector('.gallery-arrow-next');

  let galleryVisibleCount = 6;
  let galleryActiveFilter = 'all';
  let galleryActiveIndex = 0;

  function getGalleryFilteredCards() {
    if (!galleryCards.length) return [];
    return galleryCards.filter(card => {
      const category = card.dataset.category || 'all';
      return galleryActiveFilter === 'all' || category === galleryActiveFilter;
    });
  }

  function renderGalleryCards() {
    const filteredCards = getGalleryFilteredCards();

    galleryCards.forEach(card => {
      const indexInFiltered = filteredCards.indexOf(card);
      const isVisible = indexInFiltered >= 0 && indexInFiltered < galleryVisibleCount;
      card.hidden = !isVisible;
    });

    if (galleryLoadMoreWrap) {
      galleryLoadMoreWrap.hidden = filteredCards.length <= galleryVisibleCount;
    }
  }

  function getGalleryImagesFromCards(cards) {
    return cards.map(card => {
      const img = card.querySelector('img');
      return {
        src: img?.src || '',
        alt: img?.alt || 'Gallery image'
      };
    });
  }

  function renderGallerySlider() {
    const filteredCards = getGalleryFilteredCards();
    const images = getGalleryImagesFromCards(filteredCards);

    if (!images.length || !gallerySliderStage) return;

    gallerySliderStage.innerHTML = images.map((image, index) => {
      const isActive = index === galleryActiveIndex ? 'active' : '';
      return `
        <div class="gallery-slide ${isActive}">
          <img src="${image.src}" alt="${image.alt}" />
        </div>
      `;
    }).join('');
  }

  function openGalleryLightbox(card) {
    const filteredCards = getGalleryFilteredCards();
    const targetIndex = filteredCards.indexOf(card);
    if (targetIndex < 0) return;

    galleryActiveIndex = targetIndex;
    renderGallerySlider();
    galleryLightbox?.classList.add('open');
    galleryLightbox?.setAttribute('aria-hidden', 'false');
  }

  function closeGalleryLightbox() {
    galleryLightbox?.classList.remove('open');
    galleryLightbox?.setAttribute('aria-hidden', 'true');
  }

  galleryFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
      galleryFilterButtons.forEach(item => item.classList.toggle('active', item === button));
      galleryActiveFilter = button.dataset.filter || 'all';
      galleryVisibleCount = 8;
      renderGalleryCards();
    });
  });

  galleryLoadMoreBtn?.addEventListener('click', () => {
    const filteredCards = getGalleryFilteredCards();
    galleryVisibleCount = Math.min(galleryVisibleCount + 3, filteredCards.length);
    renderGalleryCards();
  });

  galleryCards.forEach(card => {
    card.addEventListener('click', () => openGalleryLightbox(card));
  });

  galleryCloseBtn?.addEventListener('click', closeGalleryLightbox);
  galleryLightbox?.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeLightbox === 'true') {
      closeGalleryLightbox();
    }
  });

  galleryPrevBtn?.addEventListener('click', () => {
    const filteredCards = getGalleryFilteredCards();
    if (!filteredCards.length) return;
    galleryActiveIndex = (galleryActiveIndex - 1 + filteredCards.length) % filteredCards.length;
    renderGallerySlider();
  });

  galleryNextBtn?.addEventListener('click', () => {
    const filteredCards = getGalleryFilteredCards();
    if (!filteredCards.length) return;
    galleryActiveIndex = (galleryActiveIndex + 1) % filteredCards.length;
    renderGallerySlider();
  });

  document.addEventListener('keydown', (event) => {
    if (!galleryLightbox || !galleryLightbox.classList.contains('open')) return;
    if (event.key === 'Escape') closeGalleryLightbox();
    if (event.key === 'ArrowRight') {
      const filteredCards = getGalleryFilteredCards();
      if (!filteredCards.length) return;
      galleryActiveIndex = (galleryActiveIndex + 1) % filteredCards.length;
      renderGallerySlider();
    }
    if (event.key === 'ArrowLeft') {
      const filteredCards = getGalleryFilteredCards();
      if (!filteredCards.length) return;
      galleryActiveIndex = (galleryActiveIndex - 1 + filteredCards.length) % filteredCards.length;
      renderGallerySlider();
    }
  });

  closeGalleryLightbox();
  renderGalleryCards();

  // 8. MARKET INTELLIGENCE HERO SERVICES (INDEX.HTML)
  const miServices = document.querySelectorAll('.mi-service');
  miServices.forEach(item => {
    const activate = () => {
      miServices.forEach(s => s.classList.remove('is-active'));
      item.classList.add('is-active');
    };
    item.addEventListener('click', activate);
    item.addEventListener('mouseenter', activate);
  });

    // 9. EXPLORING MARKET TRENDS SLIDER (AUTOPLAY, PHONE 1 CARD, TABLET 3 CARDS)
  document.querySelectorAll('.market-trends-section').forEach(section => {
    const slider = section.querySelector('.market-trends-swiper');
    const nextBtn = section.querySelector('.market-trends-next');
    const prevBtn = section.querySelector('.market-trends-prev');

    if (slider && typeof Swiper !== 'undefined') {
      new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 16,
        grabCursor: true,
        loop: true,
        speed: 650,
        autoplay: {
          delay: 2800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
        }
      });
    }
  });
  // 10. DIVERSE INDUSTRIES SLIDER (3 CARDS + RED PAGINATION DOTS + AUTOPLAY)
  const industrySlider = document.querySelector('#diverse-industries-slider');
  if (industrySlider && typeof Swiper !== 'undefined') {
    new Swiper(industrySlider, {
      slidesPerView: 1, // Phone me 1 full card
      spaceBetween: 16,
      grabCursor: true,
      loop: true,
      speed: 650,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.industry-slider-pagination',
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        }
      }
    });
  }

  // =========================================================================
  // CASE STUDY FILTER DROPDOWNS, DROPDOWN SEARCH & FULL PAGINATION
  // =========================================================================
  function initCaseStudyExplorer() {
    const caseDropdowns = document.querySelectorAll('.cs-dropdown');
    const caseCards = document.querySelectorAll('.case-card');
    const allBtn = document.querySelector('.filter-all-btn');
    const paginationContainer = document.querySelector('.case-pagination');
    const pageNumbersWrap = paginationContainer?.querySelector('.page-numbers-container');
    const prevBtn = paginationContainer?.querySelector('.prev-btn');
    const nextBtn = paginationContainer?.querySelector('.next-btn');

    if (caseCards.length === 0) return;

    const cardsPerPage = 6;
    let currentPage = 1;
    let activeIndustry = 'all';
    let activeResearch = 'all';

    function getMatchingCaseCards() {
      return Array.from(caseCards).filter(card => {
        const cardIndustry = card.getAttribute('data-category');
        const cardResearch = card.getAttribute('data-research');

        const matchesIndustry = activeIndustry === 'all' || cardIndustry === activeIndustry;
        const matchesResearch = activeResearch === 'all' || cardResearch === activeResearch;

        return matchesIndustry && matchesResearch;
      });
    }

    function renderCaseStudies(shouldScroll = false) {
      const matching = getMatchingCaseCards();
      const totalPages = Math.max(1, Math.ceil(matching.length / cardsPerPage));

      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;

      const startIndex = (currentPage - 1) * cardsPerPage;
      const endIndex = startIndex + cardsPerPage;
      const visibleSet = new Set(matching.slice(startIndex, endIndex));

      // Show / Hide cards
      caseCards.forEach(card => {
        if (visibleSet.has(card)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });

      // Update ALL button active state
      if (allBtn) {
        if (activeIndustry === 'all' && activeResearch === 'all') {
          allBtn.classList.add('active');
        } else {
          allBtn.classList.remove('active');
        }
      }

      // Render pagination buttons
      if (pageNumbersWrap) {
        pageNumbersWrap.innerHTML = '';
        for (let p = 1; p <= totalPages; p++) {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'page-btn' + (p === currentPage ? ' active' : '');
          btn.setAttribute('data-page', p);
          btn.textContent = p;
          btn.addEventListener('click', () => {
            currentPage = p;
            renderCaseStudies(true);
          });
          pageNumbersWrap.appendChild(btn);
        }
      }

      // Prev / Next button states
      if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
        prevBtn.style.opacity = currentPage === 1 ? '0.45' : '1';
        prevBtn.style.cursor = currentPage === 1 ? 'not-allowed' : 'pointer';
      }
      if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.style.opacity = currentPage === totalPages ? '0.45' : '1';
        nextBtn.style.cursor = currentPage === totalPages ? 'not-allowed' : 'pointer';
      }

      // Hide pagination if only 1 page
      if (paginationContainer) {
        paginationContainer.style.display = totalPages > 1 ? 'flex' : (matching.length === 0 ? 'none' : 'flex');
      }

      // Smooth scroll if requested
      if (shouldScroll) {
        document.querySelector('#blogs-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // Previous & Next button handlers
    prevBtn?.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderCaseStudies(true);
      }
    });

    nextBtn?.addEventListener('click', () => {
      const matching = getMatchingCaseCards();
      const totalPages = Math.max(1, Math.ceil(matching.length / cardsPerPage));
      if (currentPage < totalPages) {
        currentPage++;
        renderCaseStudies(true);
      }
    });

    // Toggle & Manage Dropdowns with Search
    caseDropdowns.forEach(dropdown => {
      const toggleBtn = dropdown.querySelector('.filter-dropdown-btn');
      const searchInput = dropdown.querySelector('.cs-dropdown-search-input');
      const items = dropdown.querySelectorAll('.cs-dropdown-item');
      const emptyMsg = dropdown.querySelector('.cs-dropdown-empty');

      if (!toggleBtn) return;

      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = dropdown.classList.contains('active');
        caseDropdowns.forEach(d => d.classList.remove('active'));

        if (!isActive) {
          dropdown.classList.add('active');
          if (searchInput) {
            searchInput.value = '';
            items.forEach(i => i.style.display = 'block');
            if (emptyMsg) emptyMsg.style.display = 'none';
            setTimeout(() => searchInput.focus(), 50);
          }
        }
      });

      // Dropdown search input event
      if (searchInput) {
        searchInput.addEventListener('click', (e) => e.stopPropagation());
        searchInput.addEventListener('input', (e) => {
          const query = e.target.value.trim().toLowerCase();
          let matchCount = 0;

          items.forEach(item => {
            const text = item.textContent.trim().toLowerCase();
            if (text.includes(query)) {
              item.style.display = 'block';
              matchCount++;
            } else {
              item.style.display = 'none';
            }
          });

          if (emptyMsg) {
            emptyMsg.style.display = matchCount === 0 ? 'block' : 'none';
          }
        });

        // Pressing Enter in search selects first visible item
        searchInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            const firstVisible = Array.from(items).find(i => i.style.display !== 'none');
            if (firstVisible) firstVisible.click();
          }
        });
      }

      // Handle Dropdown Item Clicks
      items.forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();

          items.forEach(i => i.classList.remove('active'));
          item.classList.add('active');

          const labelSpan = dropdown.querySelector('.dropdown-label');
          if (item.hasAttribute('data-filter')) {
            activeIndustry = item.getAttribute('data-filter');
            if (labelSpan) {
              labelSpan.textContent = activeIndustry === 'all' ? 'Industries' : item.textContent.trim();
            }
          } else if (item.hasAttribute('data-research')) {
            activeResearch = item.getAttribute('data-research');
            if (labelSpan) {
              labelSpan.textContent = activeResearch === 'all' ? 'Research Type' : item.textContent.trim();
            }
          }

          dropdown.classList.remove('active');
          currentPage = 1;
          renderCaseStudies();
        });
      });
    });

    // ALL button click
    if (allBtn) {
      allBtn.addEventListener('click', () => {
        activeIndustry = 'all';
        activeResearch = 'all';

        // Reset dropdown labels
        const indLabel = document.querySelector('#dropdown-industries .dropdown-label');
        if (indLabel) indLabel.textContent = 'Industries';
        const resLabel = document.querySelector('#dropdown-research-type .dropdown-label');
        if (resLabel) resLabel.textContent = 'Research Type';

        // Reset dropdown active items
        document.querySelectorAll('.cs-dropdown-item').forEach(i => {
          const val = i.getAttribute('data-filter') || i.getAttribute('data-research');
          i.classList.toggle('active', val === 'all');
        });

        caseDropdowns.forEach(d => d.classList.remove('active'));
        currentPage = 1;
        renderCaseStudies();
      });
    }

    // Close dropdowns on outside click
    document.addEventListener('click', () => {
      caseDropdowns.forEach(d => d.classList.remove('active'));
    });

    // Initial render
    renderCaseStudies();
  }

  initCaseStudyExplorer();

  // END-TO-END ACCORDION CARDS (EXPAND ON HOVER / TOUCH)
  const endToEndCards = document.querySelectorAll('.end-to-end-card');
  const accordionContainer = document.querySelector('.end-to-end-accordion');
  if (endToEndCards.length > 0) {
    endToEndCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        endToEndCards.forEach(c => c.classList.remove('is-expanded'));
        card.classList.add('is-expanded');
      });
      card.addEventListener('click', (e) => {
        if (e.target.closest('.end-to-end-btn')) return;
        endToEndCards.forEach(c => c.classList.remove('is-expanded'));
        card.classList.add('is-expanded');
      });
    });

    if (accordionContainer) {
      accordionContainer.addEventListener('mouseleave', () => {
        endToEndCards.forEach(c => c.classList.remove('is-expanded'));
      });
    }
  }

}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMainApp);
  } else {
    initMainApp();
  }
}



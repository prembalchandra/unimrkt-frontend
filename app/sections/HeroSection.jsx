'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const servicesList = [
  { icon: 'fa-regular fa-comments', label: 'Online Bulletin Board' },
  { icon: 'fa-solid fa-location-crosshairs', label: 'Intercept Interview' },
  { icon: 'fa-solid fa-earth-americas', label: 'Country Research' },
  { icon: 'fa-solid fa-lightbulb', label: 'Competitive Intelligence' },
  { icon: 'fa-solid fa-list-check', label: 'Survey Programming' },
  { icon: 'fa-solid fa-microphone-lines', label: 'In-Depth Interview' },
  { icon: 'fa-solid fa-phone', label: 'Telephonic Interview' },
];

export default function HeroSection({
  eyebrow = 'Market Intelligence',
  title = 'Structured Market Data For Unprecedented Clarity',
  description = 'Delivering structured market data enabling organizations to gain complete clarity into market dynamics, minimize risks, and uncover new opportunities.',
  videoUrl = '/asstes/images/home-banner-video.mp4',
  services = servicesList,
  ctaButton = { label: 'Discover Our Services', url: '/services' },
} = {}) {
  const [activeIndex, setActiveIndex] = useState(3);
  const activeServices = services && services.length > 0 ? services : servicesList;

  // Auto-rotate the highlighted service
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % activeServices.length);
    }, 2600);

    return () => clearInterval(interval);
  }, [activeServices.length]);

  return (
    <section className="mi-hero" aria-label="Market intelligence introduction">
      <div className="mi-hero__fallback" aria-hidden="true"></div>
      <video className="mi-hero__video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
        <source src={videoUrl || '/asstes/images/home-banner-video.mp4'} type="video/mp4" />
      </video>
      <div className="mi-hero__shade" aria-hidden="true"></div>

      <div className="mi-hero__inner">
        <div className="mi-hero__copy">
          <p className="mi-hero__eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="mi-hero__description">{description}</p>
          <Link className="mi-hero__cta" href={ctaButton?.url || '/services'}>
            {ctaButton?.label || 'Discover Our Services'} <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="mi-hero__services" aria-label="Our research services">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className={`mi-service ${activeIndex === index ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <span className="mi-service__icon" aria-hidden="true">
                <i className={service.icon}></i>
              </span>
              <span>{service.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

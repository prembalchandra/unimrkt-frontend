import React from 'react';
import AboutHero from './sections/AboutHero';
import AboutOverview from './sections/AboutOverview';
import ResearchReachSection from '../sections/ResearchReachSection';
import ResearchCta from './sections/ResearchCta';

export const metadata = {
  title: 'About Us | Unimrkt Research',
  description:
    'Learn about Unimrkt Research, our history, mission, global footprint across 90+ countries, and ISO-certified research standards.',
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutOverview />
      <ResearchReachSection />
      <ResearchCta />
    </main>
  );
}

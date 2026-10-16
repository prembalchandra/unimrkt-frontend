import React from 'react';
import IndustriesHero from './sections/IndustriesHero';
import IndustriesGrid from './sections/IndustriesGrid';
import ResearchCta from './sections/ResearchCta';

export const metadata = {
  title: 'Industries We Serve | Unimrkt Research',
  description:
    'Explore Unimrkt Research industry verticals including Automotive, Healthcare, BFSI, Retail, Technology, and FMCG across 90+ countries.',
};

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesHero />
      <IndustriesGrid />
      <ResearchCta />
    </main>
  );
}

import React from 'react';
import CompanyHero from './sections/CompanyHero';
import CompanyOverview from './sections/CompanyOverview';
import ResearchCta from './sections/ResearchCta';

export const metadata = {
  title: 'About Our Company | Unimrkt Research',
  description:
    'Learn about Unimrkt Research, our history, mission, global footprint across 90+ countries, and ISO-certified research standards.',
};

export default function OurCompanyPage() {
  return (
    <main>
      <CompanyHero />
      <CompanyOverview />
      <ResearchCta />
    </main>
  );
}

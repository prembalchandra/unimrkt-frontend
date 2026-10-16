import React from 'react';
import AutomotiveHero from './sections/AutomotiveHero';
import AutomotiveOverview from './sections/AutomotiveOverview';
import ResearchCta from './sections/ResearchCta';

export const metadata = {
  title: 'Automotive & Smart Mobility Market Research | Unimrkt Research',
  description:
    'Comprehensive automotive market research solutions covering EV transition, connected software cockpits, commercial fleets, and dealership experiences.',
};

export default function AutomotivesPage() {
  return (
    <main>
      <AutomotiveHero />
      <AutomotiveOverview />
      <ResearchCta />
    </main>
  );
}

import React from 'react';
import AutomotiveHeroOverview from './sections/AutomotiveHeroOverview';
import AutomotiveIntelligenceCards from './sections/AutomotiveIntelligenceCards';
import AutomotiveEcosystemSlider from './sections/AutomotiveEcosystemSlider';
import AutomotiveChallengesDark from './sections/AutomotiveChallengesDark';
import AutomotiveSegmentsSlider from './sections/AutomotiveSegmentsSlider';
import AutomotiveMethodologiesSlider from './sections/AutomotiveMethodologiesSlider';
import AutomotiveEmpowerCta from './sections/AutomotiveEmpowerCta';
import ResearchCta from './sections/ResearchCta';

export const metadata = {
  title: 'Automotive & Smart Mobility Market Research | Unimrkt Research',
  description:
    'Comprehensive automotive market research solutions covering EV transition, connected software cockpits, commercial fleets, and dealership experiences.',
};

export default function AutomotivesPage() {
  return (
    <main>
      <AutomotiveHeroOverview />
      <AutomotiveIntelligenceCards />
      <AutomotiveEcosystemSlider />
      <AutomotiveChallengesDark />
      <AutomotiveSegmentsSlider />
      <AutomotiveMethodologiesSlider />
      <AutomotiveEmpowerCta />
      <ResearchCta />
    </main>
  );
}

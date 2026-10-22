import React from 'react';
import FaqHero from './sections/FaqHero';
import FaqContent from './sections/FaqContent';
import ResearchCta from './sections/ResearchCta';

export const metadata = {
  title: 'Frequently Asked Questions (FAQ) | Unimrkt Research',
  description:
    'Find answers to frequently asked questions about Unimrkt Research, CATI surveys, primary and secondary research, global sampling panels, and quality standards.',
};

export default function FaqPage() {
  return (
    <main>
      <FaqHero />
      <FaqContent />
      <ResearchCta />
    </main>
  );
}

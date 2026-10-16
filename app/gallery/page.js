import React from 'react';
import GalleryHero from './sections/GalleryHero';
import GalleryGrid from './sections/GalleryGrid';
import ResearchCta from './sections/ResearchCta';

export const metadata = {
  title: 'Gallery | Unimrkt Research',
  description:
    'Explore the Unimrkt Research gallery to discover our research activities, events, team moments, and corporate highlights.',
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <GalleryGrid />
      <ResearchCta />
    </main>
  );
}

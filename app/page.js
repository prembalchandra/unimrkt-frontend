import React from 'react';
import HeroSection from './sections/HeroSection';
import QuestionCtaSection from './sections/QuestionCtaSection';
import ResearchReachSection from './sections/ResearchReachSection';
import DiverseIndustriesSection from './sections/DiverseIndustriesSection';

export const metadata = {
  title: 'Unimrkt Research | Structured Market Intelligence',
  description:
    'Delivering structured market data enabling organizations to gain complete clarity into market dynamics, minimize risks, and uncover new opportunities.',
};

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <QuestionCtaSection />
      <ResearchReachSection />
      <DiverseIndustriesSection />
    </div>
  );
}

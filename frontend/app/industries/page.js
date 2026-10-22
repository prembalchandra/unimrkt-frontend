import React from 'react';
import IndustriesHero from './sections/IndustriesHero';
import IndustriesGrid from './sections/IndustriesGrid';
import PartnerIndustriesSection from './sections/PartnerIndustriesSection';
import QuestionCtaSection from '@/app/homesections/QuestionCtaSection';
import QuestionsToInsightsSection from './sections/QuestionsToInsightsSection';
import BusinessOutcomesSection from './sections/BusinessOutcomesSection';
import LocalInsightGlobalReach from './sections/LocalInsightGlobalReach';
import ResearchProcessImpact from './sections/ResearchProcessImpact';
import TrustedPartnersTestimonials from './sections/TrustedPartnersTestimonials';
import IndustriesFaq from './sections/IndustriesFaq';
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
      <PartnerIndustriesSection />
      <QuestionCtaSection />
      <QuestionsToInsightsSection />
      <BusinessOutcomesSection />
      <LocalInsightGlobalReach />
      <ResearchProcessImpact />
      <TrustedPartnersTestimonials />
      <IndustriesFaq />
      <ResearchCta />
    </main>
  );
}

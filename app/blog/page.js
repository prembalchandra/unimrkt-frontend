import React from 'react';
import BlogHero from './sections/BlogHero';
import BlogGrid from './sections/BlogGrid';
import MarketTrendsSlider from './sections/MarketTrendsSlider';
import BlogFaq from './sections/BlogFaq';
import InsightsEditorial from './sections/InsightsEditorial';
import ResearchCta from './sections/ResearchCta';

export const metadata = {
  title: 'Blog & Market Research Insights | Unimrkt Research',
  description:
    'Explore the latest market research insights, B2B intelligence, consumer behaviour trends, and industry analysis from Unimrkt Research.',
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogGrid />
      <MarketTrendsSlider />
      <BlogFaq />
      <InsightsEditorial />
      <ResearchCta />
    </main>
  );
}

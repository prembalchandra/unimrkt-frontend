import React from 'react';
import HeroSection from './homesections/HeroSection';
import GlobalResearchSection from './homesections/GlobalResearchSection';
import SolutionsSection from './homesections/SolutionsSection';
import CapabilitiesSection from './homesections/CapabilitiesSection';
import AdvancedAreaSection from './homesections/AdvancedAreaSection';
import ResearchReachSection from './homesections/ResearchReachSection';
import IndustriesSection from './homesections/IndustriesSection';
import MarketplacesSection from './homesections/MarketplacesSection';
import MomentsSection from './homesections/MomentsSection';
import HomeLatestBlog from './homesections/HomeLatestBlog';
import HomeFaq from './homesections/HomeFaq';
import HomeInsightsEditorial from './homesections/HomeInsightsEditorial';
import QuestionCtaSection from './homesections/QuestionCtaSection';
import HomeresearchCta from './homesections/HomeresearchCta';
import { getBlogPosts } from '../lib/strapi';

export const metadata = {
  title: 'Unimrkt Research | Structured Market Intelligence',
  description:
    'Delivering structured market data enabling organizations to gain complete clarity into market dynamics, minimize risks, and uncover new opportunities.',
};

export default async function HomePage() {
  const latestBlogs = await getBlogPosts(6).catch(() => []);

  return (
    <div className="home-page">
      {/* 1. Hero Section with 3D Services Wheel */}
      <HeroSection />

      {/* 2. Global Research, Local Understanding */}
      <GlobalResearchSection />

      {/* 3. Research Solutions That Drive Growth */}
      <SolutionsSection />

      {/* 4. Capabilities & Counter Stats */}
      <CapabilitiesSection />

      {/* 5. Advanced CATI Infrastructure */}
      <AdvancedAreaSection />

      {/* 6. Research Reach That Goes Beyond Markets */}
      <ResearchReachSection />

      {/* 7. Specialized Industries Global Grid / Carousel */}
      <IndustriesSection />

      {/* 8. Global Office Hubs (India, USA, UK) */}
      <MarketplacesSection />

      {/* 9. Moments Gallery & Video Showcase */}
      <MomentsSection />

      {/* 10. Latest Blogs & Market Trends */}
      <HomeLatestBlog initialBlogs={latestBlogs} />

      {/* 11. Frequently Asked Questions */}
      <HomeFaq />

      {/* 12. Deep Editorial Insights Wrap */}
      <HomeInsightsEditorial />

      {/* 13. Have A Question? Let's Find The Answer */}
      <QuestionCtaSection />

      {/* 14. Global Research Panel Video CTA */}
      <HomeresearchCta />
    </div>
  );
}

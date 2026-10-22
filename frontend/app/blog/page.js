import React from 'react';
import BlogHero from './sections/BlogHero';
import BlogGrid from './sections/BlogGrid';
import CommonBlogSection from '../../components/CommonBlogSection';
import BlogFaq from './sections/BlogFaq';
import InsightsEditorial from './sections/InsightsEditorial';
import ResearchCta from './sections/ResearchCta';
import { getBlogPosts } from '../../lib/strapi';

export const metadata = {
  title: 'Blog & Market Research Insights | Unimrkt Research',
  description:
    'Explore the latest market research insights, B2B intelligence, consumer behaviour trends, and industry analysis from Unimrkt Research.',
};

export default async function BlogPage() {
  const strapiBlogs = await getBlogPosts(20);

  return (
    <main>
      <BlogHero />
      <BlogGrid initialBlogs={strapiBlogs} />
      <CommonBlogSection />
      <BlogFaq />
      <InsightsEditorial />
      <ResearchCta />
    </main>
  );
}

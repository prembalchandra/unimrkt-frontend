import React from 'react';
import BlogDetailBreadcrumb from './sections/BlogDetailBreadcrumb';
import BlogDetailContent from './sections/BlogDetailContent';

export const metadata = {
  title: 'Key Trends Shaping the Future of the Automotive Industry | Unimrkt Research',
  description:
    'Explore the key trends reshaping the automotive industry, from electrification and software-defined vehicles to connected experiences and sustainability.',
};

export default function BlogDetailsPage() {
  return (
    <main>
      <BlogDetailBreadcrumb />
      <BlogDetailContent />
    </main>
  );
}

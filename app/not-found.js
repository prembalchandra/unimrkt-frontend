import React from 'react';
import NotFoundHero from './404/sections/NotFoundHero';

export const metadata = {
  title: '404 - Page Not Found | Unimrkt Research',
  description: "Wrong turn. Right mindset. The page you are looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return (
    <main>
      <NotFoundHero />
    </main>
  );
}

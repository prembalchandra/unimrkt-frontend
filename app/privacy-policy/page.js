import React from 'react';
import PrivacyHero from './sections/PrivacyHero';
import PrivacyContent from './sections/PrivacyContent';

export const metadata = {
  title: 'Privacy Policy | Unimrkt Research',
  description:
    'Learn how Unimrkt Research collects, uses, and protects personal information in accordance with international privacy laws.',
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyHero />
      <PrivacyContent />
    </main>
  );
}

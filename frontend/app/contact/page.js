import React from 'react';
import ContactHero from './sections/ContactHero';
import ResearchImpact from './sections/ResearchImpact';
import OfficePresence from './sections/OfficePresence';
import ResearchValue from './sections/ResearchValue';
import ContactProcess from './sections/ContactProcess';
import ContactForm from './sections/ContactForm';
import ContactFaq from './sections/ContactFaq';
import InsightsEditorial from './sections/InsightsEditorial';
import ResearchCta from './sections/ResearchCta';

export const metadata = {
  title: 'Contact Us | Unimrkt Research',
  description:
    'Contact Unimrkt Research to turn your business questions into clear answers. Explore our global office locations in India, USA, and UK.',
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ResearchImpact />
      <OfficePresence />
      <ResearchValue />
      <ContactProcess />
      <ContactForm />
      <ContactFaq />
      <InsightsEditorial />
      <ResearchCta />
    </main>
  );
}

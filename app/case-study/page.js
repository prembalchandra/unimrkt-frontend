import CaseStudyHero from './sections/CaseStudyHero';
import CaseStudyExplorer from './sections/CaseStudyExplorer';
import ResearchValue from './sections/ResearchValue';
import ContactProcess from './sections/ContactProcess';
import CaseStudyFaq from './sections/CaseStudyFaq';
import InsightsEditorial from './sections/InsightsEditorial';
import ResearchCta from './sections/ResearchCta';

export const metadata = {
  title: 'Case Studies | Unimrkt Research',
  description: 'Discover how our tailored market research solutions help businesses solve critical challenges, uncover growth opportunities, and make confident decisions.',
};

export default function CaseStudyPage() {
  return (
    <>
      <CaseStudyHero />
      <CaseStudyExplorer />
      <ResearchValue />
      <ContactProcess />
      <CaseStudyFaq />
      <InsightsEditorial />
      <ResearchCta />
    </>
  );
}

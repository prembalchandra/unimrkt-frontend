import CaseStudyHero from './sections/CaseStudyHero';
import CaseStudyExplorer from './sections/CaseStudyExplorer';
import ResearchValue from './sections/ResearchValue';
import ContactProcess from './sections/ContactProcess';
import CaseStudyFaq from './sections/CaseStudyFaq';
import InsightsEditorial from './sections/InsightsEditorial';
import ResearchCta from './sections/ResearchCta';

import { getCaseStudies } from '../../lib/strapi';

export const metadata = {
  title: 'Case Studies | Unimrkt Research',
  description: 'Discover how our tailored market research solutions help businesses solve critical challenges, uncover growth opportunities, and make confident decisions.',
};

export default async function CaseStudyPage() {
  const strapiStudies = await getCaseStudies(24).catch(() => []);

  return (
    <>
      <CaseStudyHero />
      <CaseStudyExplorer initialCaseStudies={strapiStudies} />
      <ResearchValue />
      <ContactProcess />
      <CaseStudyFaq />
      <InsightsEditorial />
      <ResearchCta />
    </>
  );
}

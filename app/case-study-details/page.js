import CaseDetailHero from './sections/CaseDetailHero';
import CaseDetailChallenge from './sections/CaseDetailChallenge';
import CaseDetailResearchQuestion from './sections/CaseDetailResearchQuestion';
import CaseDetailApproach from './sections/CaseDetailApproach';
import CaseDetailImpact from './sections/CaseDetailImpact';
import CaseDetailFaq from './sections/CaseDetailFaq';
import InsightsEditorial from './sections/InsightsEditorial';
import ResearchCta from './sections/ResearchCta';

export const metadata = {
  title: 'Case Study: Understanding Customer Expectations | Unimrkt Research',
  description: 'How research uncovered evolving customer needs, digital expectations, and decision-making drivers to help a financial services organization strengthen its customer strategy.',
};

export default function CaseStudyDetailPage() {
  return (
    <>
      <CaseDetailHero />
      <CaseDetailChallenge />
      <CaseDetailResearchQuestion />
      <CaseDetailApproach />
      <CaseDetailImpact />
      <CaseDetailFaq />
      <InsightsEditorial />
      <ResearchCta />
    </>
  );
}

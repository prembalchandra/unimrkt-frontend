import TelephonicHero from './sections/TelephonicHero';
import ResearchImpact from './sections/ResearchImpact';
import TelephonicOverview from './sections/TelephonicOverview';
import WhyTelephonic from './sections/WhyTelephonic';
import TelephonicProcess from './sections/TelephonicProcess';
import MeasureSection from './sections/MeasureSection';
import QualityFirst from './sections/QualityFirst';
import TelephonicFaq from './sections/TelephonicFaq';
import InsightsEditorial from './sections/InsightsEditorial';
import ResearchCta from './sections/ResearchCta';

export const metadata = {
  title: 'Telephonic Surveys | Unimrkt Research',
  description: 'Reach the right respondents and capture reliable insights through professionally managed telephonic surveys.',
};

export default function TelephonicSurveysPage() {
  return (
    <>
      <TelephonicHero />
      <ResearchImpact />
      <TelephonicOverview />
      <WhyTelephonic />
      <TelephonicProcess />
      <MeasureSection />
      <QualityFirst />
      <TelephonicFaq />
      <InsightsEditorial />
      <ResearchCta />
    </>
  );
}

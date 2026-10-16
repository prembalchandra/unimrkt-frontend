import WorkHero from './sections/WorkHero';
import CareerValues from './sections/CareerValues';
import CareerBenefits from './sections/CareerBenefits';
import CareerOpenings from './sections/CareerOpenings';
import CareerJourney from './sections/CareerJourney';
import CareerJoin from './sections/CareerJoin';
import WorkFaq from './sections/WorkFaq';
import InsightsEditorial from './sections/InsightsEditorial';
import ResearchCta from './sections/ResearchCta';

export const metadata = {
  title: 'Work With Us | Unimrkt Research',
  description: 'At Unimrkt, we give our employees a space to learn, grow and innovate. Explore open career opportunities in market research.',
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <CareerValues />
      <CareerBenefits />
      <CareerOpenings />
      <CareerJourney />
      <CareerJoin />
      <WorkFaq />
      <InsightsEditorial />
      <ResearchCta />
    </>
  );
}

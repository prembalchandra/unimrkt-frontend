import PrimaryHero from './sections/PrimaryHero';
import TrustedClients from './sections/TrustedClients';
import PrimaryOverview from './sections/PrimaryOverview';
import PrimaryServices from './sections/PrimaryServices';
import UnimrktResearchArea from './sections/UnimrktResearchArea';
import ResearchMethodologies from './sections/ResearchMethodologies';
import IndustriesArea from './sections/IndustriesArea';
import ContactFormSection from './sections/ContactFormSection';

export const metadata = {
  title: 'Primary Research Services | Unimrkt Research',
  description: 'Collect first-hand market intelligence through customized primary research solutions that uncover customer opinions, validate business decisions, and fuel strategic growth.',
};

export default function PrimaryResearchPage() {
  return (
    <>
      <PrimaryHero />
      <TrustedClients />
      <PrimaryOverview />
      <PrimaryServices />
      <UnimrktResearchArea />
      <ResearchMethodologies />
      <IndustriesArea />
      <ContactFormSection />
    </>
  );
}

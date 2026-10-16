import ServicesHero from './sections/ServicesHero';
import EndToEndSolutions from './sections/EndToEndSolutions';
import WhyChooseUs from './sections/WhyChooseUs';
import MarketTrendsSlider from './sections/MarketTrendsSlider';
import ServicesFaq from './sections/ServicesFaq';
import InsightsEditorial from './sections/InsightsEditorial';
import ResearchCta from './sections/ResearchCta';

export const metadata = {
  title: 'Services | Unimrkt Research',
  description: 'Comprehensive qualitative and quantitative research services tailored to uncover opportunities and drive sustainable growth.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <EndToEndSolutions />
      <WhyChooseUs />
      <MarketTrendsSlider />
      <ServicesFaq />
      <InsightsEditorial />
      <ResearchCta />
    </>
  );
}

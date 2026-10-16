import TeamHero from './sections/TeamHero';
import TeamDirectory from './sections/TeamDirectory';
import ResearchCta from './sections/ResearchCta';

export const metadata = {
  title: 'Our Team | Unimrkt Research',
  description: 'A diverse team of research experts bringing experience, insight, and strategic thinking to every project.',
};

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamDirectory />
      <ResearchCta />
    </>
  );
}

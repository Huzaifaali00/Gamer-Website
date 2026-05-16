import HeroSection from '@/components/HeroSection';
import BioTeaser from '@/components/BioTeaser';
import StreamStatus from '@/components/StreamStatus';
import SocialsRow from '@/components/SocialsRow';
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <BioTeaser />
      <StreamStatus />
      <SocialsRow />
    </div>
  );
}

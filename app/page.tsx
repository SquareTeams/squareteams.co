import Image from "next/image";
import HeroHeader from './components/HeroHeader';
import LandingEntry from './components/LandingEntry';
import LandingWhoAreWe from './components/LandingWhoAreWe';
import LandingWhatWeDo from './components/LandingWhatWeDo';
import Footer from './components/Footer';

export default function Page() {
  return (
    <div className="site-body">
      <LandingEntry />
      <div className="site-content">
        <HeroHeader />
        <LandingWhoAreWe />
        <LandingWhatWeDo />
        <Footer />
      </div>
    </div>
  );
}
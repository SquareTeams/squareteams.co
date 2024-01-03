'use client'
import { useEffect } from 'react';
import HeroHeader from './components/HeroHeader';
import LandingEntry from './components/LandingEntry';
import LandingWhoAreWe from './components/LandingWhoAreWe';
import LandingWhatWeDo from './components/LandingWhatWeDo';
import Footer from './components/Footer';

export default function Page() {

  useEffect(() => {
    (async () => {
      const { default: LocomotiveScroll } = await import('locomotive-scroll');
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

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
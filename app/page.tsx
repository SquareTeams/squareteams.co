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
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          wrapper: window,
          content: document.documentElement,
          lerp: 0.1,
          duration: 1.2,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: .8,
          normalizeWheel: true
        },
      } as any);
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
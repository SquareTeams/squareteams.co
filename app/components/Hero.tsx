'use client'

import Image from 'next/image'
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Hero() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleEntryStarted = () => {
      setTimeout(() => {
        gsap.to('.text-animation', {
          opacity: 0.7,
          x: 0,
          duration: 2,
          stagger: 1,
        });

        gsap.to('.hero-tagline-animation', {
          opacity: 1,
          x: 0,
          duration: 4,
          stagger: 1,
        });
      }, 1600);
    };

    document.addEventListener('entryStarted', handleEntryStarted);
    return () => {
      document.removeEventListener('entryStarted', handleEntryStarted);
    };
  }, []);

  return (
    <div className="hero-header bg-cover bg-center h-screen relative">
      <Image
        alt="Hero Background"
        src="/assets/hero_bg_v2.jpg"
        fill
        priority
        quality={100}
        style={{ zIndex: -1, objectFit: 'cover' }}
      />
      {/* Hero Content */}
      <div data-scroll data-scroll-speed="0.3" className="container mx-auto max-w-screen-2xl h-dvh flex items-center justify-start text-left">
        <div className="hero-tagline absolute md:static bottom-5 md:bottom-32 opacity-0 hero-tagline-animation text-black text-3xl sm:text-5xl md:text-6xl xl:text-7xl space-y-1 md:space-y-4 ms-10 lg:ms-18 xl:ms-10 p-6">
          <p className="opacity-0 text-animation">Igniting Creativity.</p>
          <p className="opacity-0 font-bold text-animation">Building Community.</p>
          <p className="opacity-0 text-animation">Crafting Tomorrow.</p>
        </div>
      </div>
    </div>
  );
}

'use client'

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface LandingWhoAreWeProps {}

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const LandingWhoAreWe: React.FC<LandingWhoAreWeProps> = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const card_1 = useRef<HTMLDivElement>(null);
  const card_2 = useRef<HTMLDivElement>(null);
  const card_3 = useRef<HTMLDivElement>(null);

  const [randomImages, setRandomImages] = useState<number[]>([]);

  useEffect(() => {
    const generateRandomImages = (): number[] => {
      const uniqueRandomNumbers: number[] = [];
      while (uniqueRandomNumbers.length < 3) {
        const randomNumber = getRandomInt(1, 4);
        if (!uniqueRandomNumbers.includes(randomNumber)) {
          uniqueRandomNumbers.push(randomNumber);
        }
      }
      return uniqueRandomNumbers;
    };

    setRandomImages(generateRandomImages());
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: '300px bottom',
        end: 'bottom+=700px bottom',
        scrub: true,
        markers: false,
      },
      bottom: '-200px',
      opacity: 1,
    });

    gsap.to(card_1.current, {
      scrollTrigger: {
        trigger: card_1.current,
        start: '-400px bottom',
        end: 'bottom+=200px bottom',
        scrub: true,
        markers: false,
      },
      bottom: '-200px',
      opacity: 1,
    });

    gsap.to(card_2.current, {
      scrollTrigger: {
        trigger: card_2.current,
        start: '-200px bottom',
        end: 'bottom+=200px bottom',
        scrub: true,
        markers: false,
      },
      bottom: '-200px',
      opacity: 1,
    });

    gsap.to(card_3.current, {
      scrollTrigger: {
        trigger: card_3.current,
        start: '-400px bottom',
        end: 'bottom+=200px bottom',
        scrub: true,
        markers: false,
      },
      bottom: '-200px',
      opacity: 1,
    });

    if (card_1.current) {
      card_1.current.style.backgroundImage = `url("/assets/sec_1/sec1_diff-${randomImages[0]}.jpg")`;
    }

    if (card_2.current) {
      card_2.current.style.backgroundImage = `url("/assets/sec_1/sec1_diff-${randomImages[1]}.jpg")`;
    }

    if (card_3.current) {
      card_3.current.style.backgroundImage = `url("/assets/sec_1/sec1_diff-${randomImages[2]}.jpg")`;
    }
  }, [randomImages]);

  return (
    <div className="bg-gray-100 py-16 min-h-50-screen md:min-h-screen">
      <div className="mx-auto text-center">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-5 px-12 lg-px-24 opacity-0" ref={titleRef}>
            <h2 className="text-3xl md:text-6xl 2xl:text-8xl font-bold mb-4 text-black font-bold uppercase">Who Are We?</h2>
            <p className="text-gray-600 opacity-70 text-xl md:text-3xl 2xl:text-4xl max-w-screen-2xl mx-auto">
              At Square, we are more than just a community—we are a dynamic hub of passionate creators and innovators, united by a shared mission to empower and elevate.
              Born from the collective spirit of visionaries and creative minds, Square is your go-to destination for collaboration, inspiration, and growth.
            </p>
          </div>
          <div className="col-span-5 mt-12 lg:mt-24 px-5 md:px-0">
            <div className="container mx-auto grid grid-cols-3 gap-3 md:gap-8">
              <div className="col-span-1 relative group">
                <div ref={card_1} data-scroll data-scroll-speed="0.3" className="sec1-card aspect-w-4 aspect-h-5 bg-cover bg-center w-full rounded-lg overflow-hidden shadow-md opacity-0">
                  <div className="relative w-full h-full group-hover:scale-105 transition-transform transform">
                    <div className="absolute inset-0"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 relative group mt-0 md:mt-12">
                <div ref={card_2} data-scroll data-scroll-speed="0.5" className="sec1-card aspect-w-4 aspect-h-5 bg-cover bg-center w-full rounded-lg overflow-hidden shadow-md opacity-20">
                  <div className="relative w-full h-full group-hover:scale-105 transition-transform transform">
                    <div className="absolute inset-0"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 relative group">
                <div ref={card_3} data-scroll data-scroll-speed="0.3" className="sec1-card aspect-w-4 aspect-h-5 bg-cover bg-center w-full rounded-lg overflow-hidden shadow-md opacity-0">
                  <div className="relative w-full h-full group-hover:scale-105 transition-transform transform">
                    <div className="absolute inset-0"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Other JSX elements if present */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingWhoAreWe;
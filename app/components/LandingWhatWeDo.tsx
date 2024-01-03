'use client'

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function LandingWhatWeDo() {
  const lists = [
    "EMPOWERING CREATORS",
    "CREATIVE MEDIA AND PUBLICATIONS",
    "INNOVATIVE PRODUCTS",
  ];

  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: '200px bottom',
        end: 'bottom+=700px bottom',
        scrub: true,
        markers: false,
      },
      left: 0,
      opacity: 1,
    });
    
    gsap.to(buttonRef.current, {
      scrollTrigger: {
        trigger: buttonRef.current,
        start: '200px bottom',
        end: 'bottom+=700px bottom',
        scrub: true,
        markers: false,
      },
      bottom: '-200px',
      opacity: 1,
    });
  }, []);

  return (
    <div className="bg-neutral-900 text-white pt-24 pb-56 2xl:min-h-screen">
      <div className="mx-auto text-left items-center py-24 px-12 lg:px-24">
        <div className="grid grid-cols-10">
          <div className="col-span-10 md:col-span-3 opacity-0 relative -left-48" ref={titleRef}>
            <h2 className="text-3xl font-bold mb-4 lg:mb-8 text-4xl md:text-6xl 2xl:text-7xl mb-12 py-4 xl:py-8">WHAT WE DO?</h2>
          </div>
          <div className="col-span-10 md:col-span-7 flex flex-col items-start space-y-1 md:space-y-4 mb-8">
            {
              lists.map((list, index) => (
                <AnimatedList key={index} text={list} />
              ))
            }
            <a href="/about" ref={buttonRef} className="bg-blue-500 hover:bg-blue-400 text-white px-5 py-2 lg:py-6 w-full text-lg lg:text-3xl 2xl:text-5xl text-center opacity-0">Get To Know More <span className="ms-4">&#9654;</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}

interface AnimatedListProps {
  text: string;
}

const AnimatedList: React.FC<AnimatedListProps> = ({ text }) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: '200px bottom',
        end: 'bottom+=700px bottom',
        scrub: true,
        markers: false,
      },
      bottom: '-200px',
      opacity: 1,
    });
  }, []);

  return (
    <div ref={containerRef} className="flex items-center py-4 xl:py-8 w-full opacity-0">
      <div className="text-3xl 2xl:text-7xl mr-2">&#9654;</div>
      <p className="ml-2 text-2xl md:text-4xl xl:text-5xl 2xl:text-7xl">{text}</p>
    </div>
  );
};
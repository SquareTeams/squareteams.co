'use client'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react'
 
export default function LandingWhoAreWe() {
  const titleRef = useRef(null);
  const card_1 = useRef(null);
  const card_2 = useRef(null);
  const card_3 = useRef(null);

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
  }, []);

  return (
    <div className="bg-gray-100 py-16 min-h-screen">
      <div className="mx-auto text-center">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-5 px-12 lg-px-24 opacity-0" ref={titleRef}>
            <h2 className="text-3xl md:text-6xl 2xl:text-8xl font-bold mb-4 text-black font-bold uppercase">Who Are We?</h2>
            <p className="text-gray-600 opacity-70 text-xl md:text-3xl 2xl:text-4xl max-w-screen-2xl mx-auto">
              At Square, we are more than just a community—we are a dynamic hub of passionate creators and innovators, united by a shared mission to empower and elevate.
              Born from the collective spirit of visionaries and creative minds, Square is your go-to destination for collaboration, inspiration, and growth.
            </p>
          </div>
          <div className="col-span-5 mt-24">
            <div className="container mx-auto grid grid-cols-3 gap-8">
              <div className="col-span-1 relative group">
                <div ref={card_1} data-scroll data-scroll-speed="0.3" className="sec1-card aspect-w-4 aspect-h-5 bg-cover bg-center w-full rounded-lg overflow-hidden shadow-md opacity-0">
                  <div className="relative w-full h-full group-hover:scale-105 transition-transform transform">
                    <div className="absolute inset-0" style={{ backgroundImage: 'url("/assets/sec_1/ilustrator.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 relative group" style={{ marginTop: '120px' }}>
                <div ref={card_2} data-scroll data-scroll-speed="0.5" className="sec1-card aspect-w-4 aspect-h-5 bg-cover bg-center w-full rounded-lg overflow-hidden shadow-md opacity-0">
                  <div className="relative w-full h-full group-hover:scale-105 transition-transform transform">
                    <div className="absolute inset-0" style={{ backgroundImage: 'url("/assets/sec_1/photog.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 relative group">
                <div ref={card_3} data-scroll data-scroll-speed="0.3" className="sec1-card aspect-w-4 aspect-h-5 bg-cover bg-center w-full rounded-lg overflow-hidden shadow-md opacity-0">
                  <div className="relative w-full h-full group-hover:scale-105 transition-transform transform">
                    <div className="absolute inset-0" style={{ backgroundImage: 'url("/assets/sec_1/coser.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}
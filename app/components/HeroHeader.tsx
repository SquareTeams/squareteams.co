'use client'

import Image from 'next/image'
import React, { useState, useRef, useLayoutEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function HeroHeader() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top',
        end: '+=500px',
        scrub: true,
        markers: false,
      }
    });

    const bounceDuration = 300;
    if (isMenuOpen) {
      anime({
        targets: menuRef.current,
        translateY: ['0%', '5%', '0%'],
        duration: bounceDuration,
        easing: 'easeInOutQuad',
      });
    } else {
      anime({
        targets: menuRef.current,
        translateY: ['0%', '5%', '-100%'],
        duration: bounceDuration,
        easing: 'easeInOutQuad',
      });
    }
  }, [isMenuOpen]);

  return (
    <div className="bg-cover bg-center h-screen relative" style={{ backgroundImage: 'url("/assets/hero_bg.jpg")' }}>
      {/* Navbar */}
      <nav className="bg-transparent p-4 absolute top-0 left-0 right-0">
        <div className="mx-auto flex items-center justify-between px-6 xl:px-18">
          {/* Navbar Brand with Logo */}
          <div className="flex items-center">
            <Image width={400} height={400} alt="Square Logo" src="/assets/square_md.png" className="h-12 md:h-12 w-auto" />
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <button
            className="text-black opacity-50 focus:outline-none z-50"
            onClick={toggleMenu}
          >
            <svg className="h-12 md:h-12 w-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hamburger Menu (Mobile) */}
      <div className={`fixed top-0 left-0 right-0 bottom-0 bg-neutral-800 p-4 z-50 hamburger-menu ${isMenuOpen ? 'visible' : ''}`} ref={menuRef}>
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="h-12 md:h-12 w-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="flex flex-col items-center justify-center h-full">
          <a href="#" className="text-white text-3xl hover:text-5xl md:text-6xl md:hover:text-8xl block mb-6 md:mb-12 uppercase accent hover:font-bold ease-in-out duration-500">Home</a>
          <a href="/about" className="text-white text-3xl hover:text-5xl md:text-6xl md:hover:text-8xl block mb-6 md:mb-12 uppercase accent hover:font-bold ease-in-out duration-500">About</a>
          <a href="/store" className="text-white text-3xl hover:text-5xl md:text-6xl md:hover:text-8xl block mb-6 md:mb-12 uppercase accent hover:font-bold ease-in-out duration-500">Store</a>
          <a href="/contact" className="text-white text-3xl hover:text-5xl md:text-6xl md:hover:text-8xl block mb-6 md:mb-12 uppercase accent hover:font-bold ease-in-out duration-500">Contact</a>
        </div>
      </div>

      {/* Hero Content */}
      <div data-scroll data-scroll-speed="0.3" className="container mx-auto max-w-screen-2xl h-full flex items-center justify-start text-left">
        <div className="text-black text-3xl sm:text-5xl md:text-6xl xl:text-7xl space-y-1 md:space-y-4 ms-10 lg:ms-18 xl:ms-10">
          <p className="opacity-70">Igniting Creativity.</p>
          <p className="opacity-70 font-bold">Building Community.</p>
          <p className="opacity-70">Crafting Tomorrow.</p>
        </div>
      </div>
    </div>
  );
}
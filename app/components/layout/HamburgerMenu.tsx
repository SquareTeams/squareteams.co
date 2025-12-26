'use client'

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function HamburgerMenu({ isOpen, toggleMenu }: HamburgerMenuProps) {
  const menuRef = useRef(null);

  useLayoutEffect(() => {
    const bounceDuration = 0.3;
    if (isOpen) {
      gsap.to(menuRef.current, {
        translateY: '0%',
        duration: bounceDuration,
        ease: 'power2.inOut',
      });
    } else {
      gsap.to(menuRef.current, {
        translateY: '-100%',
        duration: bounceDuration,
        ease: 'power2.inOut',
      });
    }
  }, [isOpen]);

  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 bg-neutral-800 p-4 z-50 hamburger-menu ${isOpen ? 'visible' : ''}`} ref={menuRef}>
      <button
        className="absolute top-4 right-4 text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg className="h-12 md:h-12 w-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <div className="flex flex-col items-center justify-center h-dvh">
        <a href="#" className="text-white text-3xl hover:text-5xl md:text-6xl md:hover:text-8xl block mb-6 md:mb-12 uppercase accent hover:font-bold ease-in-out duration-500">Home</a>
        <a href="/about" className="text-white text-3xl hover:text-5xl md:text-6xl md:hover:text-8xl block mb-6 md:mb-12 uppercase accent hover:font-bold ease-in-out duration-500">About</a>
        <a href="https://wearesquares.com/blog" className="text-white text-3xl hover:text-5xl md:text-6xl md:hover:text-8xl block mb-6 md:mb-12 uppercase accent hover:font-bold ease-in-out duration-500">Blog</a>
        <a href="/store" className="text-white text-3xl hover:text-5xl md:text-6xl md:hover:text-8xl block mb-6 md:mb-12 uppercase accent hover:font-bold ease-in-out duration-500">Store</a>
        <a href="/contact" className="text-white text-3xl hover:text-5xl md:text-6xl md:hover:text-8xl block mb-6 md:mb-12 uppercase accent hover:font-bold ease-in-out duration-500">Contact</a>
      </div>
    </div>
  )
}

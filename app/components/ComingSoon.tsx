'use client'

import React, { useLayoutEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function ComingSoon() {
    useLayoutEffect(() => {
      // Animation for the text
      anime({
        targets: '.coming-soon-text',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeInOutQuad',
        delay: 500,
      });
  
      // Animation for the "cards"
      anime({
        targets: '.card-container',
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: 700,
      });
    }, []);
  
    return (
      <div className="bg-cover bg-center h-screen relative flex items-center justify-center" style={{ backgroundImage: 'url("/assets/hero_bg.jpg")', backgroundColor: '#ffffff' }}>
        <div className="text-gray-800 text-center bg-white rounded-lg shadow-lg bg-opacity-75 card-container p-24 opacity-0">
          <h1 className="text-6xl font-bold mb-4 coming-soon-text">Coming Soon!</h1>
          <p className="text-lg mb-8 coming-soon-text">
            We&apos;re working on something amazing for you! Stay tuned for our upcoming launch.
          </p>
          <div className="flex justify-center">
            <a href="/" className="accent-bg text-white font-bold uppercase px-6 py-3 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800 hover:bg-opacity-75">
              Take me to Front Page
            </a>
          </div>
        </div>
      </div>
    );
  }
'use client'

import { useEffect, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function LandingEntry() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    const square = document.querySelector('.square');

    // Blinking Animation
    anime({
      targets: '.square',
      opacity: [0, 1],
      direction: 'alternate',
      loop: true,
      easing: 'linear',
      duration: 500,
    });

    // Adjusting Size and Removing Element on Hover
    const containerAnimation = anime({
      targets: '.landing-container',
      width: window.matchMedia("(orientation: portrait)").matches ? '150vh' : '150vw',
      easing: 'easeInOutQuad',
      duration: 1000,
      autoplay: false,
      begin: function () {
        document.querySelector('body').style.overflowY = 'scroll';
      },
      complete: function () {
        document.querySelector('.landing-background').style.opacity = 0;
        const landingEntryElement = document.querySelector('.landing-entry');

        setTimeout( () => {
          if (landingEntryElement) {
            landingEntryElement.style.opacity = 0; 
            landingEntryElement.style.display = 'none'; 
          } else {
            console.log('Element not found');
          }
        }, 1000);

        setTimeout( () => {
          if (landingEntryElement) {
            landingEntryElement.remove();
          } else {
            console.log('Element not found');
          }
        }, 2000);
      },
    });

    const handleLandingEntryAnimation = function (event) {
      if (!event.target.classList.contains('handled')) {
        event.target.classList.add('handled');
        containerAnimation.play();

        document.removeEventListener('mouseenter', handleLandingEntryAnimation);
        document.removeEventListener('touchstart', handleLandingEntryAnimation);
      }
    };

    if (square) {
      square.addEventListener('mouseenter', handleLandingEntryAnimation);
      square.addEventListener('touchstart', handleLandingEntryAnimation);
    };
  });

  return (
    <div className="landing-entry">
      <div className="landing-background"></div>
      <div className="landing-container">
        <svg
          width="243.5921mm"
          height="247.39624mm"
          viewBox="0 0 243.5921 247.39624"
          version="1.1"
          id="svg1"
          className="square"
        >
          <g transform="translate(-263.24363,33.1757)">
            <path
              fill="#93d5f8"
              opacity="1"
              stroke="none"
              d="m 287.40083,214.18742 c -4.6462,-4.8e-4 -8.66515,0.0863 -12.67891,-0.0192 -6.36559,-0.17068 -11.30033,-5.09621 -11.42009,-11.47795 -0.11507,-6.12851 -0.024,-12.2608 -0.024,-18.39146 5e-5,-67.85966 -10e-4,-135.719318 0.002,-203.579025 4.8e-4,-9.793331 4.17093,-13.89316 14.11979,-13.893448 71.45348,-0.0023 142.90696,-0.0035 214.36044,0.0011 10.59271,6.71e-4 15.07528,4.468426 15.07533,14.97963 4.8e-4,72.510465 5.3e-4,145.020983 -2.4e-4,217.531453 -10e-5,10.54486 -4.40365,14.84874 -15.22491,14.84927 -67.85971,0.004 -135.71942,0.001 -204.20873,0.001 M 286.11865,65.805532 c 0,41.322778 0,82.645498 0,123.919848 65.91738,0 131.08784,0 196.26213,0 0,-66.37932 0,-132.396672 0,-198.4705906 -65.51206,0 -130.68276,0 -196.19539,0 0,11.055661 0,21.7880816 -0.0384,33.7246266 0.0144,13.218485 0.0288,26.436971 -0.024,40.826116 z"
              id="path2"
              style={{ fill: '#93d5f8', fillOpacity: 1, strokeWidth: 1.26853 }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
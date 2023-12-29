'use client'

import { useState } from 'react'
 
export default function HeroHeader() {
  
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-cover bg-center h-screen relative" style={{backgroundImage: 'url("/assets/hero_bg.jpg")'}}>
      {/* Navbar */}
      <nav className="bg-transparent p-4 absolute top-0 left-0 right-0">
        <div className="container mx-auto flex items-center justify-between max-w-screen-2xl">
          {/* Navbar Brand with Logo */}
          <div className="flex items-center">
            <img src="/assets/square_md.png" alt="Logo" className="h-8 md:h-12 w-auto"/>
          </div>
          
          {/* Hamburger Menu Button for Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-black font-bold opacity-70 hover:opacity-100 uppercase">Home</a>
            <a href="#" className="text-black font-bold opacity-70 hover:opacity-100 uppercase">About</a>
            <a href="#" className="text-black font-bold opacity-70 hover:opacity-100 uppercase">Services</a>
            <a href="#" className="text-black font-bold opacity-70 hover:opacity-100 uppercase">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hamburger Menu (Mobile) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 p-4">
          <a href="#" className="text-white block mb-2">Home</a>
          <a href="#" className="text-white block mb-2">About</a>
          <a href="#" className="text-white block mb-2">Services</a>
          <a href="#" className="text-white block">Contact</a>
        </div>
      )}

      {/* Hero Content */}
      <div className="container mx-auto max-w-screen-2xl h-full flex items-center justify-start text-left">
        <div className="text-black text-3xl sm:text-5xl md:text-6xl space-y-1 md:space-y-4 ms-10 md:ms-18 xl:ms-24">
          <p class="opacity-70">Igniting Creativity.</p>
          <p class="opacity-70 font-bold">Building Community.</p>
          <p class="opacity-70">Crafting Tomorrow.</p>
        </div>
      </div>
    </div>
  )
}
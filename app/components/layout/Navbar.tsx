'use client'

import Image from 'next/image';

interface NavbarProps {
  toggleMenu: () => void;
}

export default function Navbar({ toggleMenu }: NavbarProps) {
  return (
    <nav className="bg-transparent p-4 absolute top-0 left-0 right-0">
      <div className="mx-auto flex items-center justify-between px-6 xl:px-18">
        {/* Navbar Brand with Logo */}
        <div className="flex items-center">
          <Image alt="Square Logo" src="/assets/square_md.png" width={48} height={48} className="h-12 md:h-12 w-auto" />
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <button
          className="text-black opacity-70 focus:outline-none z-50"
          onClick={toggleMenu}
        >
          <svg className="h-12 md:h-12 w-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  )
}

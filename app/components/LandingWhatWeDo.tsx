'use client'

import { useState } from 'react'
 
export default function LandingWhatWeDo() {
  return (
    <div className="bg-neutral-900 text-white pt-24 pb-56">
      <div className="container mx-auto text-left max-w-screen-lg px-4 items-center">
        <h2 className="text-3xl font-bold mb-8 text-3xl md:text-5xl mb-12">WHAT WE DO?</h2>
        <div className="flex flex-col items-start space-y-4 md:space-y-8 mb-8 ms md:ms-60">
          <div className="flex items-center">
            <div className="text-3xl md:text-5xl mr-2">&#9654;</div>
            <p className="ml-2 text-2xl md:text-4xl">EMPOWERING CREATORS</p>
          </div>
          <div className="flex items-center">
            <div className="text-3xl md:text-5xl mr-2">&#9654;</div>
            <p className="ml-2 text-2xl md:text-4xl">CREATIVE MEDIA AND PUBLICATIONS</p>
          </div>
          <div className="flex items-center">
            <div className="text-3xl md:text-5xl mr-2">&#9654;</div>
            <p className="ml-2 text-2xl md:text-4xl">INNOVATIVE PRODUCTS</p>
          </div>
          <button className="bg-blue-500 text-white px-5 py-2 w-full text-lg">Get To Know More &#9654;</button>
        </div>
      </div>
    </div>
  )
}
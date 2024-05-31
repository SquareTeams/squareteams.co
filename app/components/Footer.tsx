'use client'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="bg-gray-100 text-black">
      <div className="container mx-auto text-left py-20 items-center grid grid-cols-2">
        <div className="footer-social-section col-span-2 md:col-span-1 text-center md:text-left">
          <ul className="list-none space-y-4">
            <li className="uppercase opacity-70 hover:opacity-100 text-2xl md:text-4xl font-bold"><a href="/about" target="_blank">Find Out More On What We Do</a></li>
            <li className="uppercase opacity-70 hover:opacity-100 text-2xl md:text-4xl"><a href="https://discord.gg/MHtHctef" target="_blank">Join Our Community</a></li>
            <li className="uppercase opacity-70 hover:opacity-100 text-2xl md:text-4xl">Follow Our Socials</li>
            <li className="text-4xl">
              <a href="https://www.instagram.com/squareteams/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="me-4"/></a>
              <a href="https://www.x.com/square_teams/" target="_blank"><FontAwesomeIcon icon={faXTwitter} className="me-4"/></a>
              <a href="https://www.tiktok.com/@squareteams/" target="_blank"><FontAwesomeIcon icon={faTiktok} className="me-0 md:me-4"/></a>
            </li>
          </ul>
        </div>
        <div className="footer-info-section col-span-2 md:col-span-1 text-center md:text-left">
          <div className="flex flex-col items-end">
            <div className="w-auto mx-auto md:mx-0">
              <img src="/assets/square_md.png" alt="Square Logo" className="h-12 md:h-20 w-auto mb-12 mx-auto mt-12 md:mt-0"/>
              <p className="uppercase opacity-70 ">Bussiness Inquiry:</p>
              <a className="uppercase opacity-70 text-xl md:text-2xl font-bold" href="emailto:info@squareteams.co">info@squareteams.co</a>
            </div>
          </div>
        </div>
        <div className="w-full mt-12 col-span-2 text-center md:text-left">
          <span className="opacity-50 uppercase text-sm">Square Teams ©2023</span>
        </div>
      </div>
    </div>
  )
}
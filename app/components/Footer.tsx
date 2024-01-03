'use client'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="bg-gray-100 text-black">
      <div className="container mx-auto text-left py-20 items-center grid grid-cols-2">
        <div className="footer-social-section">
          <ul className="list-none space-y-4">
            <li className="uppercase opacity-70 hover:opacity-100 text-2xl md:text-4xl font-bold"><a href="" target="_blank">Find Out More On What We Do</a></li>
            <li className="uppercase opacity-70 hover:opacity-100 text-2xl md:text-4xl"><a href="" target="_blank">Join Our Community</a></li>
            <li className="uppercase opacity-70 hover:opacity-100 text-2xl md:text-4xl">Follow Our Socials</li>
            <li className="text-4xl">
              <a href="https://www.instagram.com/squareteams/"><FontAwesomeIcon icon={faInstagram} className="me-4"/></a>
              <a href="https://www.x.com/squareteams/"><FontAwesomeIcon icon={faXTwitter} className="me-4"/></a>
              <a href="https://www.tiktok.com/@squareteams/"><FontAwesomeIcon icon={faTiktok} className="me-4"/></a>
            </li>
          </ul>
        </div>
        <div className="footer-info-section">
          <div className="flex flex-col items-end">
            <div className="w-auto">
              <img src="/assets/square_md.png" alt="Square Logo" className="h-12 md:h-20 w-auto mb-12"/>
              <p className="uppercase opacity-70 ">Bussiness Inquiry:</p>
              <a className="uppercase opacity-70 text-xl md:text-2xl font-bold" href="emailto:info@squareteams.co">info@squareteams.co</a>
            </div>
          </div>
        </div>
        <div className="w-full mt-12">
          <span className="opacity-50 uppercase text-sm">Square Teams ©2023</span>
        </div>
      </div>
    </div>
  )
}
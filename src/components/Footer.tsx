import React from 'react'
import Image from 'next/image'
import logo from "./../../public/logo.jpg"

const Footer = () => {
  return (
    <div className="flex mt-[8rem] gap-3 flex-col justify-center items-center text-center">
      <Image
        src={logo}
        alt="Pura vida logo"
        className="aspect-square w-20 border border-amber-500 mb-5"
      ></Image>
      <p className="text-[1.75rem] text-amber-500 font-custom ">
        Stay in touch
      </p>
      <p className="uppercase text-base text-gray-700">
        Follow us on social media
      </p>
      <ul className="flex flex-wrap justify-center items-center divide-x mx-7 divide-gray-400 mt-[2rem] border-t border-gray-400 pt-[1rem] mb-[3rem]">
  <li className="uppercase text-base text-gray-500 px-3 ">© Pura vida</li>
  <li className="uppercase text-base text-gray-500 px-3 ">Kontakt</li>
  <li className="uppercase text-base text-gray-500 px-3 ">All rights reserved</li>
</ul>
    </div>
  );
}

export default Footer;
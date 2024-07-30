
// components/Services.js

import React from 'react'
import BgImage from './../../public/section bg.png'

const Services = () => {
  return (
    <div className="bg-section mb-[6rem]">
      <div
        className="bg-cover bg-center h-0 pb-[56.25%] opacity-70"
        style={{ backgroundImage: `url("${BgImage.src}")` }}
      >
        <div className="flex gap-2 flex-col text-center pt-[6rem]">
          <h2 className="text-xl uppercase mb-2 font-custom font-extrabold">Much more than just a beach</h2>
          <h3 className=" text-[2rem] xs:text-[2.5rem]  leading-[2.75rem] uppercase text-white">
            Services and contact{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Services
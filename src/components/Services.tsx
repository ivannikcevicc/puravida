
// components/Services.js

import React from 'react'
import BgImage from './../../public/section bg.png'
import { FaPhone } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { IoLocationOutline, IoLogoInstagram } from 'react-icons/io5';

const Services = () => {
  return (
    <div className="bg-section mb-[6rem]">
      <div
        className="bg-cover bg-center pb-[90%] xs:pb-[60%]  sm:pb-[45%] md:pb-[40%] lg:pb-[25%]  xl:pb-[15%] bg-no-repeat "
        style={{ backgroundImage: `url("https://playa.ancorathemes.com/wp-content/uploads/2017/06/blue_bg2.jpg?id=498")` }}
      >
        <div className="flex flex-col  pt-[6rem]">
          <div className="flex flex-col gap-2 mt-[4rem]  md:mt-[5rem] mb-[6rem]  md:mb-[8rem] text-center mx-auto max-w-[90%] sm:max-w-[85%]">
            <h2 className="text-lg sm:text-xl uppercase mb-2 font-custom font-extrabold">
              Much more than just a beach
            </h2>
            <h3 className=" text-[1.75rem] xs:text-[2.25rem] sm:text-[3rem] mt-2  leading-[2.75rem] uppercase font-bold text-white">
              Services and contact{" "}
            </h3>
          </div>
          <div className="flex md:flex-row max-w-[1200px] mx-auto px-[2%] gap-6 sm:px-[5%] flex-col">
            <div className="flex xs:flex-row flex-col gap-6 justify-around w-full md:w-1/2">
              <div className="flex flex-col gap-5 justify-center items-center text-center">
                <div className="p-[3rem] bg-white bg-opacity-30 rounded-full flex justify-center items-center">
                  <FaPhone size={40} color="white" />
                </div>
                <h4 className="font-bold text-md uppercase max-w-[70%] mx-auto">
                  {" "}
                  Call us today +382 68 26 25 25
                </h4>
              </div>
              <div className="flex flex-col gap-5 justify-center items-center text-center">
                <div className="p-[3rem] bg-white bg-opacity-30 rounded-full flex justify-center items-center">
                  <MdAccessTime size={40} color="white" />
                </div>
                <h4 className="font-bold text-md uppercase max-w-[70%] mx-auto">
                  {" "}
                  
      Work Time 8:00 - 18:00
                </h4>
              </div>
            </div>
            <div className="flex xs:flex-row flex-col gap-6 justify-around w-full md:w-1/2">
              <div className="flex flex-col gap-5 justify-center items-center text-center">
                <div className="p-[3rem] bg-white bg-opacity-30 rounded-full flex justify-center items-center">
                  <IoLocationOutline size={40} color="white" />
                </div>
                <h4 className="font-bold text-md uppercase max-w-[70%] mx-auto">
                  {" "}
                  Drobni pijesak, Montenegro
                </h4>
              </div>
              <div className="flex flex-col gap-5 justify-center items-center text-center">
                <div className="p-[3rem] bg-white bg-opacity-30 rounded-full flex justify-center items-center">
                  <IoLogoInstagram size={40} color="white" />
                </div>
                <h4 className="font-bold text-md  max-w-[70%] mx-auto">INSTAGRAM @pura_vida_beach
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services
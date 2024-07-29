import React from 'react'
import BgImage from "./../../public/private-event-bg-img.png"
import Image from "next/image";
const Events = () => {
  return (
    <div
      className=" mt-[-140px] z-[1]"
      style={{
        backgroundImage: `url(${BgImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-[400px]   text-white max-w-[1260px] px-[2%] sm:px-[5%] mx-auto py-[6rem]">
        <div className="mb-[4rem] text-center pt-[5rem]">
          <h2 className="text-xl uppercase font-bold mb-4">PRIVATE EVENTS</h2>

          <h3 className=" text-2xl xs:text-5xl font-custom mb-6 mt-8">
            Occasions to Remember{" "}
          </h3>
          <p className="font-light text-xs xs:text-sm max-w-[800px]  px-[2%] sm:px-[5%] mx-auto leading-6 xs:leading-7 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat
          </p>
          <button className="relative border-2 mt-4 border-white transition-all duration-300 ease-out hover:border-amber-500 hover:text-white bg-transparent text-white py-3 px-12 overflow-hidden group">
            <span className="relative z-10">Learn More</span>
            <span className="absolute inset-0 bg-amber-500 transform opacity-0 group-hover:opacity-100 scale-x-[.8] scale-y-[.9] group-hover:scale-y-100 transition-all duration-[275ms] ease-out group-hover:scale-x-100"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Events
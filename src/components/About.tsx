"use client";
import React from "react"
import Image from "next/image";
import AboutImg from "./../../public/about img 2.jpg";
const About = () => {
  return (
    <div className="relative max-w-[1260px] flex flex-col lg:flex-row items-center justify-center mx-auto  p-3 xs:p-6 md:p-12">
      {/* Text Box */}
      <div className="relative z-10 mt-4 xs:mt-0 p-[7.5%] xs:p-[15%] lg:p-[5rem] bg-white shadow-xl flex-1 lg:mr-6 flex items-center lg:order-1 order-2 min-h-[calc(100%-20px)]">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2">
            <h2 className="text-xl uppercase font-bold mb-2">Welcome</h2>
            <figure className="elementor-image-box-img">
              <Image
                decoding="async"
                width="38"
                height="1"
                src="https://live.templateelementor.com/palmbeach/wp-content/uploads/sites/23/2021/08/prefix-right-img-1.png"
                className="h-auto max-w-full translate-y-[-0.5rem] lg:relative absolute right-[50%] translate-x-[50%] lg:translate-x-0 lg:right-0"
                alt="prefix-right-img"
              ></Image>
            </figure>
          </div>

          <h3 className=" text-2xl xs:text-4xl ">
            To the magical place in Palm Beach{" "}
          </h3>
          <p className="text-md xs:text-lg ">
            Lorem ipsum dolor sit amt, consectetur adipiscing lit,sed do
            eiusmod tempor ncididunt ut labore et doloremagna aliqua. Ut enim ad
            minim veniam, quis nostrudexercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptatevelit esse cillum dolore eu fugiat
            llapariatur. Excepteur sint occaecat pidatat non proident, unt in
            culpa qui officialdeserunt mollit anim id est laborum.{" "}
          </p>
          <button className="relative border-2 mt-4 border-black transition-all duration-300 ease-out hover:border-amber-500 hover:text-white bg-transparent text-black py-3 px-6 overflow-hidden group">
            <span className="relative z-10">Learn More</span>
            <span className="absolute inset-0 bg-amber-500 transform opacity-0 group-hover:opacity-100 scale-x-[.8] scale-y-[.9] group-hover:scale-y-100 transition-all duration-[275ms] ease-out group-hover:scale-x-100"></span>
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden lg:overflow-visible mt-6 md:mt-0 w-full lg:w-1/2 h-full lg:order-2 order-1">
        <div className="overflow-hidden lg:overflow-visible md:-ml-12 h-full">
          <Image
            src={AboutImg}
            alt="Example Image"
            layout="responsive"
            className="object-fill shadow-md h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

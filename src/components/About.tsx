"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import AboutImg from "./../../public/about img 2.jpg";

const About = ({inverted, subheading, heading, text, buttonText, buttonLink, image} : {inverted?: boolean, image: StaticImageData, subheading: string, heading: string, text: string, buttonText: string, buttonLink: string}) => {
  return (
    <div className={`relative max-w-[1260px] flex flex-col md:flex-row items-center justify-center mx-auto p-3 sm:p-6 md:p-12`}>
      {/* Text Box */}
      <div className={`relative pt-[3rem]  p-[5%] xs:p-[7.5%] sm:p-[10%] md:p-[3rem] bg-white shadow-xl flex-1  flex items-center min-h-[calc(100%-20px)] order-2 ${inverted ? " md:ml-[-1.5rem] md:mr-6 z-[-1]" : "md:order-1  md:mr-[-1.5rem] z-10"}`}>
        <div className="flex flex-col gap-8">
          <div className="flex gap-2">
            <h2 className="text-xl uppercase font-bold mb-2">{subheading}</h2>
            <figure className="elementor-image-box-img">
              <Image
                decoding="async"
                width="38"
                height="1"
                src="https://live.templateelementor.com/palmbeach/wp-content/uploads/sites/23/2021/08/prefix-right-img-1.png"
                className="h-auto max-w-full translate-y-[-0.5rem] lg:relative absolute right-[50%] translate-x-[50%] lg:translate-x-0 lg:right-0"
                alt="prefix-right-img"
              />
            </figure>
          </div>

          <h3 className="text-[2rem] xs:text-[2.5rem] font-custom leading-[2.75rem]">
            {heading}
          </h3>
          <p className="text-md xs:text-lg ">
            {text}
          </p>
          <button className="relative border-2 mt-4 border-black transition-all duration-300 ease-out hover:border-amber-500 hover:text-white bg-transparent text-black py-3 px-6 overflow-hidden group">
            <a href={buttonLink} target="_blank" rel="noreferrer">
              <span className="relative z-10">{buttonText}</span>
              <span className="absolute inset-0 bg-amber-500 transform opacity-0 group-hover:opacity-100 scale-x-[.8] scale-y-[.9] group-hover:scale-y-100 transition-all duration-[275ms] ease-out group-hover:scale-x-100"></span>
            </a>
          </button>
        </div>
      </div>

      {/* Image */}
      <div className={`relative overflow-hidden md:overflow-visible mt-6 md:mt-0 w-full md:w-1/2 order-1 ${inverted ? " z-[-1]" : "md:order-2"}`}>
        <div className="relative h-0 pb-[107.78%] md:pb-[177.78%] lg:pb-[107.78%]"> {/* This is to maintain the 9:16 aspect ratio */}
          <Image
            src={image}
            alt="Example Image"
            layout="fill"
            className="object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

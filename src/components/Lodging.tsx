import React from 'react'
import Image from "next/image";
import Image1 from "./../../public/header img.jpg";
import Image2 from "./../../public/lodging image.jpg";
import Image3 from "./../../public/lodging image 2.jpg";
import Image4 from "./../../public/header img 3.jpg";
const Lodging = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(https://live.templateelementor.com/palmbeach/wp-content/uploads/sites/23/2021/08/inspired-lodging-bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-yellow-500 opacity-30"></div>
      <div className="max-w-[1260px] px-[2%] sm:px-[5%] mx-auto py-[6rem]">
        <div className="mb-[4rem]">
          <div className="flex gap-2">
            <h2 className="text-xl uppercase font-bold mb-4">Room type</h2>
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

          <h3 className=" text-2xl xs:text-5xl font-custom mb-6">
            Inspired Lodging{" "}
          </h3>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-5">
          <div className="w-full h-full  relative group">
            <a
              href="https://www.instagram.com/p/C9uHjv7I1vf/?img_index=1"
              target="_blank"
            >
              <Image
                src={Image1}
                alt={"gallery image"}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 duration-300 transition-opacity"></div>
            </a>
          </div>
          <div className="w-full h-full relative group">
            <a href="https://www.instagram.com/p/Ct7CyHPoJ1t/" target="_blank">
              <Image
                src={Image2}
                alt={"gallery image"}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 duration-300 transition-opacity"></div>
            </a>
          </div>
          <div className="w-full h-full relative group">
            <a href="https://www.instagram.com/p/Cf9P5huoG6r/" target="_blank">
              <Image
                src={Image3}
                alt={"gallery image"}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 duration-300 transition-opacity"></div>
            </a>
          </div>
          <div className="w-full h-full relative group">
            <a href="https://www.instagram.com/p/Ct7CyHPoJ1t/" target="_blank">
              <Image
                src={Image4}
                alt={"gallery image"}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 duration-300 transition-opacity"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lodging
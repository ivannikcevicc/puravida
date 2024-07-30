import React from 'react'
import BgImage from "./../../public/private-event-bg-img.png"
import Image1 from "./../../public/events img.png"
import Image from "next/image";
const Events = () => {
  return (
    <div
      className=" mt-[-140px] z-[1] "
      style={{
        backgroundImage: `url(${BgImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-[400px]   text-white max-w-[1260px] px-[2%] sm:px-[5%] mx-auto pt-[6rem]">
        <div className="mb-[4rem] text-center pt-[5rem]">
          <h2 className="text-xl uppercase font-bold mb-4 mt-[4rem]">
            Awards - the guardian
          </h2>

          <h3 className=" text-2xl xs:text-5xl font-custom mb-6 mt-8">
            40 of the best beaches in europe{" "}
          </h3>
          <p className="font-light text-xs xs:text-sm max-w-[800px]  px-[2%] sm:px-[5%] mx-auto leading-6 xs:leading-7 mb-6">
            On August 30, 2022, Drobni Pijesak Beach in Budvanska Rivijera,
            Montenegro, was honored as one of Europe&apos;s top 40 beaches, a
            testament to its exceptional charm and allure. This recognition
            highlights the beaches appeal to travelers seeking extraordinary
            coastal destinations.
          </p>
          <button className="relative border-2 mt-4 border-white transition-all duration-300 ease-out hover:border-amber-500 hover:text-white bg-transparent text-white py-3 px-12 overflow-hidden group">
            <a href="https://www.theguardian.com/travel/2022/apr/30/40-best-beaches-in-europe" target="_blank" rel="noopener noreferrer">
            <span className="relative z-10">Learn More</span>
            <span className="absolute inset-0 bg-amber-500 transform opacity-0 group-hover:opacity-100 scale-x-[.8] scale-y-[.9] group-hover:scale-y-100 transition-all duration-[275ms] ease-out group-hover:scale-x-100"></span>
            </a>
          </button>
          <p className="font-semibold text-md xs:text-lg max-w-[800px] mt-8  px-[2%] sm:px-[5%] mx-auto mb-6">
            <a href="https://montebooking.me/news/beach-drobni-pjesak-on-the-guardians-list-of-the-best-beaches-in-europe" target='_blank' className='text-blue-500 border-b-2 border-transparent hover:border-blue-600 transition-all pb-[.1rem] '>
            Beach Drobni pjesak on the Guardian&apos;s list of the best beaches in Europe
            </a>
          </p>
        </div>
      </div>
      <div className="pt-10 px-[5%] mx-auto gap-[2rem] md:gap-4 max-w-[1260px] flex md:flex-row flex-col justify-center pb-[12rem] md:pb-[6rem]">
        <div className="w-full md:w-[40%] flex flex-col justify-center items-center">
          <Image
            src={Image1}
            alt={"gallery image"}
            className="w-full h-full object-cover aspect-[4/3]"
          />
        </div>
        <div className="w-full md:w-[60%] flex flex-col justify-center">
          <div className="mb-[4rem] ml-0 md:ml-[4rem] text-white">
            <div className="flex gap-2">
              <h2 className="text-xl uppercase font-bold mb-4">Beauty of nature</h2>
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
              Beautiful landscape{" "}
            </h3>
            <p className="font-light text-xs xs:text-sm max-w-[800px] leading-6 xs:leading-7 mb-6">
              Nestled in a picturesque setting, Drobni Pijesak Beach embodies
              the essence of &quot;Pura Vida&quot; with its pristine sands and
              crystal-clear waters. The hidden gem offers a serene escape framed
              by dramatic cliffs and lush greenery. Its tranquil ambiance,
              coupled with natural beauty and an idyllic setting, makes it a
              perfect spot for relaxation and enjoying the unspoiled Adriatic
              coast.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events
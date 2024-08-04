'use client'
import React from 'react'
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
  } from "swiper/modules";
  import Image from "next/image";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "swiper/css/autoplay";
const Testimonials = () => {
  return (
    <div className="bg-section">
      <div
        className="bg-cover bg-center pb-[7rem] bg-no-repeat mb-[6rem] "
        style={{
          backgroundImage: `url("https://playa.ancorathemes.com/wp-content/uploads/2017/06/bg-24.jpg?id=472")`,
        }}
      >
        <div className="flex flex-col  pt-[6rem]">
          <div className="flex flex-col gap-2 mt-[4rem]  md:mt-[5rem] mb-[3rem]  md:mb-[4rem] text-center mx-auto max-w-[90%] sm:max-w-[85%]">
            <h2 className="text-lg sm:text-xl uppercase mb-2 font-custom font-extrabold">
              Testimonials
            </h2>
            <h3 className=" text-[2rem] tracking-tight xs:text-[3rem] sm:text-[4rem] mt-2  leading-[3rem] sm:leading-[4rem] uppercase font-bold text-white">
              Read visitors reviews
            </h3>
          </div>
        </div>
        <Swiper
          modules={[ Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="h-full"
          style={{
            //@ts-ignore
            "--swiper-pagination-color": "#f97316",
            "--swiper-navigation-color": "#f97316",
          }}
        >
          {[{
            text: "My family is fond of swimming and thus swimming pool at the Club is definitely fun because it’s not just an Olympic rectangular pool. My son is just 2 years old and he has the best of fun in the lagoon section of the swimming pool which is just less than a feet deep. My family and I absolutely love this place.",
            author: "Homer Lewis & Sheryl Lloyd",
            image: "https://playa.ancorathemes.com/wp-content/uploads/2017/06/image-18-300x300.jpg",
          }, {
            text: "My family is fond of swimming and thus swimming pool at the Club is definitely fun because it’s not just an Olympic rectangular pool. My son is just 2 years old and he has the best of fun in the lagoon section of the swimming pool which is just less than a feet deep. My family and I absolutely love this place.",
            author: "Homer Lewis & Sheryl Lloyd",
            image: "https://playa.ancorathemes.com/wp-content/uploads/2017/06/image-18-300x300.jpg",
          }, {
            text: "My family is fond of swimming and thus swimming pool at the Club is definitely fun because it’s not just an Olympic rectangular pool. My son is just 2 years old and he has the best of fun in the lagoon section of the swimming pool which is just less than a feet deep. My family and I absolutely love this place.",
            author: "Homer Lewis & Sheryl Lloyd",
            image: "https://playa.ancorathemes.com/wp-content/uploads/2017/06/image-18-300x300.jpg",
          }].map((item, index) => (
            <SwiperSlide key={index} className="relative overflow-hidden">
              <div className="flex text-white justify-center items-center text-center max-w-[900px] pb-[5rem] mx-auto px-[2%] gap-6 sm:px-[5%] flex-col">
                <div className="text-[120px] font-extrabold leading-[.75] mb-[-4rem] uppercase ">
                &quot;
                </div>
                <p className="text-md sm:text-lg">
                  {item.text}
                </p>
                <p className=" font-custom font-bold text-xl sm:text-2xl">
                  {item.author}
                </p>
                <Image className='aspect-square' width={96} height={96} src={item.image} alt={"Author image"}/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
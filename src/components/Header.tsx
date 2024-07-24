"use client";

import React, { useRef } from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "./../../public/header img.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Header = () => {
  return (
    <div className="h-[85vh]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={() => {}}
        onSlideChange={() => {}}
        className="h-full"
        style={{
          //@ts-ignore
          "--swiper-pagination-color": "#f97316",
          "--swiper-navigation-color": "#f97316",
        }}
      >
        <SwiperSlide className="">
          <Image
            className="w-full h-full object-cover"
            layout="fill"
            src={Image1}
            alt="1"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            className="w-full h-full object-cover"
            layout="fill"
            src={Image1}
            alt="1"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            className="w-full h-full object-cover"
            layout="fill"
            src={Image1}
            alt="1"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;

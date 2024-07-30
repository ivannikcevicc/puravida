//@ts-nocheck

"use client";

import React, { useState } from "react";
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
import Image2 from "./../../public/header img 2.jpg";
import Image3 from "./../../public/header img 3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
const Header = () => {
  const [slideDirection, setSlideDirection] = useState("left");
  const [key, setKey] = useState(0);

  const handleSlideChange = (swiper) => {
    if (swiper.activeIndex > swiper.previousIndex) {
      setSlideDirection("left");
    } else {
      setSlideDirection("right");
    }

    setKey((prevKey) => prevKey + 1);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const textVariants = {
    hidden: (direction) => ({
      x: direction === "left" ? "-100%" : "100%",
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.3,
      },
    },
  };

  return (
    <div className="h-[85vh] relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={handleSlideChange}
        className="h-full"
        style={{
          //@ts-ignore
          "--swiper-pagination-color": "#f97316",
          "--swiper-navigation-color": "#f97316",
        }}
      >
        {[
          {
            image: Image1,
            text1: "Pura Vida",
            text2: "beach longue",
            text3: "Drobni pijesak",
            icon: <IoLocationOutline size={30} className="justify-self-end self-end translate-y-[-0.4rem] mr-1 text-amber-500"/>,
          },
          {
            image: Image2,
            text1: "Beachfront",
            text2: "The Spot",
            text3: "For Success",
          },
          {
            image: Image3,
            text1: "Paradise Hub",
            text2: "The Place",
            text3: "Of Peace",
          },
        ].map((item, index) => (
          <SwiperSlide key={index} className="relative overflow-hidden">
            <div className="relative w-full h-full bg-amber-500 overflow-hidden">
              <Image
                className="w-full h-full object-cover opacity-70"
                layout="fill"
                src={item.image.src}
                alt={`Heading image ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <motion.div
                key={key}
                className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                custom={slideDirection} // Pass direction to variants
              >
                <motion.h2
                  className="text-[2rem] xs:text-[3rem] sm:text-[4rem] mb-4 leading-[2.5rem] xs:leading-[3.5rem]"
                  variants={textVariants}
                  custom={slideDirection}
                >
                  {item.text1}
                </motion.h2>
                <motion.p
                  className="text-2xl mb-4 font-custom"
                  variants={textVariants}
                  custom={slideDirection}
                >
                  {item.text2}
                </motion.p>
                <motion.h3
                  className="text-[2rem] xs:text-[3rem] sm:text-[4rem] mb-4 leading-[2.5rem] flex xs:leading-[3.5rem]"
                  variants={textVariants}
                  custom={slideDirection}
                >
                  {item.icon} {item.text3} 
                </motion.h3>
                <button className="relative border-2 mt-4 border-white transition-all duration-300 ease-out hover:border-amber-500 bg-transparent text-white py-3 px-6 overflow-hidden group">
                  <span className="relative z-10">Learn More</span>
                  <span className="absolute inset-0 bg-amber-500 transform opacity-0 group-hover:opacity-100 scale-x-[.8] scale-y-[.9] group-hover:scale-y-100 transition-all duration-[275ms] ease-out group-hover:scale-x-100"></span>
                </button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;

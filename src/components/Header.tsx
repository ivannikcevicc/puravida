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
const Header = () => {
  const [slideDirection, setSlideDirection] = useState("left");
  const [key, setKey] = useState(0); // Key to force re-render

  //@ts-ignore
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
        staggerChildren: 0.3, // Adjust the stagger timing here
        duration: 0.5,
      },
    },
  };

  const textVariants = {
    // @ts-ignore
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
        duration: 0.15,
      },
    },
  };

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
        onSlideChange={handleSlideChange}
        className="h-full"
        style={{
          //@ts-ignore
          "--swiper-pagination-color": "#f97316",
          "--swiper-navigation-color": "#f97316",
        }}
      >
        {[Image1, Image2, Image3].map((src, index) => (
          <SwiperSlide key={index} className="">
            <div className="relative w-full h-full bg-orange-400">
              <Image
                className="w-full h-full object-cover opacity-70"
                layout="fill"
                src={src}
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
                  className="text-[4rem] mb-4 leading-10"
                  variants={textVariants}
                  custom={slideDirection}
                >
                  Pura Vida
                </motion.h2>
                <motion.p
                  className="text-2xl mb-4 font-custom"
                  variants={textVariants}
                  custom={slideDirection}
                >
                  beach longue
                </motion.p>
                <motion.h3
                  className="text-[4rem] mb-4 leading-10"
                  variants={textVariants}
                  custom={slideDirection}
                >
                  Drobni pijesak
                </motion.h3>
                <button className="relative border-2 mt-4 border-orange-500 bg-transparent text-white py-3 px-6 overflow-hidden group">
                  <span className="relative z-10">Learn More</span>
                  <span className="absolute inset-0 bg-orange-500 transform opacity-0 group-hover:opacity-100 scale-x-[.7] scale-y-[.9] group-hover:scale-y-100 transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
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

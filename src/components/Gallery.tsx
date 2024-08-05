'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Image1 from './../../public/header img.jpg';
import Image2 from './../../public/header img 2.jpg';
import Image3 from './../../public/header img 3.jpg';
import Image4 from './../../public/about img.jpg';
import Image5 from './../../public/header img 2.jpg';
import Image6 from './../../public/header img 3.jpg';
import Image7 from './../../public/header img.jpg';

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
];

const spans = [
  { gridColumn: 'span 1', gridRow: 'span 2' },
  { gridColumn: 'span 1', gridRow: 'span 1' },
  { gridColumn: 'span 1', gridRow: 'span 1' },
  { gridColumn: 'span 1', gridRow: 'span 2' },
  { gridColumn: 'span 1', gridRow: 'span 1' },
  { gridColumn: 'span 1', gridRow: 'span 2' },
  { gridColumn: 'span 1', gridRow: 'span 2' },
];

const Gallery = () => {
  return (
    <div className="mb-[6rem]">
      <div className="flex flex-col py-[6rem]">
        <div className="flex flex-col gap-2 mt-[4rem] md:mt-[5rem] mb-[3rem] md:mb-[4rem] text-center mx-auto max-w-[90%] sm:max-w-[85%]">
          <h2 className="text-lg sm:text-xl uppercase mb-2 font-custom font-extrabold">
            Gallery
          </h2>
          <h3 className="text-[2rem] tracking-tight xs:text-[3rem] sm:text-[4rem] mt-2 leading-[3rem] sm:leading-[4rem] uppercase font-semibold">
            Read visitors reviews
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full rounded-lg shadow-md overflow-hidden"
              style={{
                ...spans[index % spans.length],
                minHeight:
                  spans[index % spans.length].gridRow === "span 2"
                    ? "400px"
                    : "200px",
              }}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative border-2 mt-4 border-white transition-all duration-300 ease-out hover:border-amber-500 hover:text-white bg-transparent text-white py-3 px-6 overflow-hidden group"
                >
                  <a href={"/"} target="_blank" rel="noreferrer">
                    <span className="relative z-10">View Image</span>
                    <span className="absolute inset-0 bg-amber-500 transform opacity-0 group-hover:opacity-100 scale-x-[.8] scale-y-[.9] group-hover:scale-y-100 transition-all duration-[275ms] ease-out group-hover:scale-x-100"></span>
                  </a>
                </motion.button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

import React from 'react';

const images = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
  '/path/to/image4.jpg',
  '/path/to/image5.jpg',
  '/path/to/image6.jpg',
];

const Gallery = () => {
  const getRandomSpan = () => {
    const spans = [1, 2]; // You can customize the spans as needed
    return spans[Math.floor(Math.random() * spans.length)];
  };

  return (
    <div className="mb-[6rem]">
      <div className="flex flex-col py-[6rem]">
        <div className="flex flex-col gap-2 mt-[4rem] md:mt-[5rem] mb-[3rem] md:mb-[4rem] text-center mx-auto max-w-[90%] sm:max-w-[85%]">
          <h2 className="text-lg sm:text-xl uppercase mb-2 font-custom font-extrabold">
            Gallery
          </h2>
          <h3 className="text-[2rem] tracking-tight xs:text-[3rem] sm:text-[4rem] mt-2 leading-[3rem] sm:leading-[4rem] uppercase font-bold text-white">
            Read visitors reviews
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative w-full h-60 bg-cover bg-center rounded-lg shadow-md`}
              style={{
                backgroundImage: `url(${src})`,
                gridColumn: `span ${getRandomSpan()}`,
                gridRow: `span ${getRandomSpan()}`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

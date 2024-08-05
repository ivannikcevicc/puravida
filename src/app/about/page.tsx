import HeadingPage from '@/components/HeadingPage'
import React from 'react'
import BgImage from "./../../../public/header img 2.jpg"
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
const AboutPage = () => {
  return (
    <div>
      <HeadingPage title={"About"} bg={BgImage.src} />
      <div className="flex flex-col  pb-[3rem]">
          <div className="flex flex-col gap-2 mt-[4rem]  md:mt-[5rem] mb-[3rem]  md:mb-[4rem] text-center mx-auto max-w-[90%] sm:max-w-[85%]">
            <h2 className="text-lg sm:text-xl uppercase mb-2 font-custom font-extrabold">
              About page
            </h2>
            <h3 className=" text-[2rem] tracking-tight xs:text-[3rem] sm:text-[4rem] mt-2  leading-[3rem] sm:leading-[4rem] uppercase font-semibold text-amber-600">
              About Pura Vida Beach
            </h3>
          </div>
        </div>
      <About
        inverted={true}
        image={BgImage}
        subheading="Welcome"
        heading="About Pura Vida"
        text="Nestled along the stunning coastline, Pura Vida Beach is a hidden gem known for its pristine sands and crystal-clear waters. This serene paradise offers a perfect escape for those seeking tranquility and natural beauty. Whether you're looking to relax under the sun, take a refreshing swim, or explore the vibrant marine life, Pura Vida Beach promises an unforgettable experience for all who visit."        buttonText="Learn More"
        buttonLink="https://www.google.com"
      />
      <About
        image={BgImage}
        subheading="Location"
        heading="
Discover Pura Vida"
        text="Located in the stunning country of Montenegro, Pura Vida Beach has earned a spot in The Guardian's top 40 beaches list. Known for its beautiful sandy shores and crystal-clear waters, this beach is a must-visit destination. Enjoy a meal at the charming on-site restaurant, Baldahins, while taking in the breathtaking views. Whether you're looking to relax or explore, Pura Vida Beach offers an unforgettable experience."   buttonText="Learn More"
        buttonLink="https://www.google.com"
      />
      <Gallery/>
      <Testimonials />
    </div>
  );
}

export default AboutPage
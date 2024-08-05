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
              Testimonials
            </h2>
            <h3 className=" text-[2rem] tracking-tight xs:text-[3rem] sm:text-[4rem] mt-2  leading-[3rem] sm:leading-[4rem] uppercase font-semibold text-amber-600">
              Read visitors reviews
            </h3>
          </div>
        </div>
      <About
        inverted={true}
        image={BgImage}
        subheading="Welcome"
        heading="Headinggggg"
        text="Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Tex  Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Tex"
        buttonText="Learn More"
        buttonLink="https://www.google.com"
      />
      <About
        image={BgImage}
        subheading="Welcome"
        heading="Headinggggg"
        text="Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Tex  Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Tex"
        buttonText="Learn More"
        buttonLink="https://www.google.com"
      />
      <Gallery/>
      <Testimonials />
    </div>
  );
}

export default AboutPage
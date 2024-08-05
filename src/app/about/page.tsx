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
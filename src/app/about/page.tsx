import HeadingPage from '@/components/HeadingPage'
import React from 'react'
import BgImage from "./../../../public/header img 2.jpg"
import Testimonials from '@/components/Testimonials'
const AboutPage = () => {
  return (
    <div>
        <HeadingPage title={"About"} bg={BgImage.src} />
        <Testimonials/>
    </div>
  )
}

export default AboutPage
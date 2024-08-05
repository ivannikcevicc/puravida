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
          modules={[Pagination, A11y]}
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
          {[
            {
              text: `Splendid gravel and pebble beach a short distance from Budva, immediately after Sveti Stefan. There is a bar and a restaurant, as well as a free beach and an equipped area. Quiet and surrounded by greenery.`,
               author: "Ful-Kat",
              image:
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/de/b9/b3/planetcity.jpg?w=100&h=-1&s=1",
            },
            {
              text: "They don't say that the best locations are the hardest to get to for nothing. This applies to the Montenegrin beach Drobni pijesak.",
              author: "Telegraf.rs",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSRHdTS08lTFe1Bhb3C3ztHqMc4R2-yIPVg&s",
            },
            {
              text: "Very nice beach not crowded at all in June. We paid 50 eur for sunbeds and beanbags. Bottle of wine and water included. Service was very good and food in beach bar as well. Food is normal priced and worth it. Parking is more expensive than previous years. 10 eur for approx 6 hours.",
              author: "Mladen K, TripAdvisor",
              image:
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/ee/db/default-avatar-2020-10.jpg?w=100&h=-1&s=1",
            },
            {
              text: "Amazing beach, great parking (5EUR/day), sunbed set for 15EUR, good beach restaurant Pura Vida. I can only recommend, worth visit!",
              author: "Radka H, TripAdvisor",
              image:
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/eb/a3/default-avatar-2020-38.jpg?w=100&h=-1&s=1",
            },
            {
              text: "I love the beach, the stuff is very friendly! I love the food and the new restaurant is so beautiful I loved it there!",
              author: "Jan",
              image:
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f1/b8/default-avatar-2020-22.jpg?w=100&h=-1&s=1",
            },
            {
              text: "This beach is located few kilometres from Petrovac, towards Budva (closer to Petrovac, than Budva). There is a parking, when we visited it the cost for the whole day was 3 Euros. It is good there are a lot of trees, so you can leave your car in the shade. And the beach... I really enjoyed here, it is small beach and it is not overcrowded, that is important if you are visiting in the peak of the season. There is also small restaurant / caffe next to the coast, so you can order something. Water is clear and not polluted. Definitely reccommending this one to all of you!",
              author: "Tanja",
              image:
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/10/cf/08/tanja-c.jpg?w=100&h=-1&s=1",
            },
            {
              text: "Really nice white pebble beach. Situated down a very steep road. Car parking 4 euro / 6 euro for the day depending on which car park you choose (6 euro is ever so slightly closer) Lovely swimming with rocks for jumping/snorkelling. 12 euro per sunbed set. Good Value considering a few km north at Sveti Stefan it’s at least 20 euro. Bar and restaurant. Toilets a bit basic. Would recommend and return .",
              author: "Hasford",
              image:
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e3/1f/default-avatar-2020-46.jpg?w=100&h=-1&s=1",
            },
            {
              text: `The beach is settled between Petrovac and Budva. It is possible to reach a beach by car. There is a well organized 3 car parks, the most lower is more expensive than 2 others but it worth if you stay all the day. On the beach there are parasols and sunbeds (13 Euro 1st row). There is a nice bar. Pura Vida, on the beach and restaurant Smokov Vijenac. We have been visiting this beach for more than 15 years and it is really one of the most beautiful site in Montenegro.`,
              author: "VRACH_MNE",
              image:
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/74/32/44/mihailo-g.jpg?w=100&h=-1&s=1",
            },
          ].map((item, index) => (
            <SwiperSlide key={index} className="relative overflow-hidden">
              <div className="flex text-white justify-center items-center text-center max-w-[900px] pb-[5rem] mx-auto px-[2%] gap-6 sm:px-[5%] flex-col">
                <div className="text-[120px] font-extrabold leading-[.75] mb-[-4rem] uppercase ">
                  &quot;
                </div>
                <p className="text-md sm:text-lg">{item.text}</p>
                <p className=" font-custom font-bold text-xl sm:text-2xl">
                  {item.author}
                </p>
                <Image
                  className="aspect-square"
                  width={96}
                  height={96}
                  src={item.image}
                  alt={"Author image"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
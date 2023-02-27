"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,  } from "swiper";
import "swiper/css";
import Image from "next/image";
import "swiper/css/bundle";
const HeroSlider = () => {
  return (

    <section className="overflow-x-hidden"> 

    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        
   
      navigation
      autoplay
      // loop
      breakpoints={{
        480: { slidesPerView: 1.5 },
        640: { slidesPerView: 2.5 },
        760: { slidesPerView: 3.3 },
        960: { slidesPerView: 4.3 },
        
      }}
      rewind={false}
      className="w-[90%] my-5"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Image
          width={500}
          height={100}
          src="/images/card1.jpeg"
          alt="card"
          className="rounded-lg max-lg:w-[900rem]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={500}
          height={100}
          src="/images/card2.jpg"
          alt=""
          className="rounded-lg max-lg:w-[900rem]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={500}
          height={100}
          src="/images/card3.jpeg"
          alt=""
          className="rounded-lg max-lg:w-[900rem]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={500}
          height={100}
          src="/images/card4.jpg"
          alt=""
          className="rounded-lg max-lg:w-[900rem]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={500}
          height={100}
          src="/images/card5.jpg"
          alt=""
          className="rounded-lg max-lg:w-[900rem]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={500}
          height={100}
          src="/images/card6.jpg"
          alt=""
          className="rounded-lg max-lg:w-[900rem]"
        />
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default HeroSlider;

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,  } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      autoplay
      // loop
      
      rewind={false}

className="w-[90%] my-5"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src="/images/card1.jpeg" alt="card"  className="rounded-lg"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/card2.jpg" alt=""  className="rounded-lg"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/card3.jpeg" alt=""  className="rounded-lg"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/card4.jpg" alt=""  className="rounded-lg"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/card5.jpg" alt="" className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/card6.jpg" alt=""  className="rounded-lg"/>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import './Slider.css'
import { EffectFade, Navigation, Pagination, Scrollbar, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface IAppSliderProps {
  children: any
}

export const AppSlider = ({children}: IAppSliderProps) => {
  return (
    <div className="sliderContainer">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Mousewheel, Pagination]}
        className="mySwiperProject"
      >
        {children}
      </Swiper>
    </div>
  );
};

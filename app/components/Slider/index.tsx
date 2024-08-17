"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import styles from './Slider.module.css'

interface IAppSliderProps {
  children: any
}

export const AppSlider = ({children}: IAppSliderProps) => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        autoHeight={true}
        direction={'vertical'}
        effect={'fade'}
        mousewheel={true}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={false}
        modules={[EffectFade, Mousewheel, Pagination]}
        className={styles.mySwiperProject}
      >
        {children}
      </Swiper>
    </div>
  );
};

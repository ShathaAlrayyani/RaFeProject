"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Slider.module.css'

interface IAppSliderProps {
  cardsNumber: number
  children: any
}

export const AppSlider = ({cardsNumber, children}: IAppSliderProps) => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: cardsNumber < 2.5 ? cardsNumber : 2.5,
          },
          425: {
            slidesPerView: cardsNumber < 1.5 ? cardsNumber : 1.5,
          }
        }}
        className={styles.mySwiperProject}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[ Pagination, Navigation, Keyboard, Mousewheel]}
        // navigation={true}
      >
        {children}
      </Swiper>
    </div>
  );
};

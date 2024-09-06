"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react"; // Import useRef for Swiper control
import styles from "./Slider.module.css";

interface IAppSliderProps {
  cardsNumber: number;
  children: any;
}

export const AppSlider = ({ cardsNumber, children }: IAppSliderProps) => {
  const [isThereNext, setIsThereNext] = useState<boolean>(true);
  const [isTherePrev, setIsTherePrev] = useState<boolean>(false);
  const swiperRef = useRef<any>(null);

  const handleNext = () => {
    if (!swiperRef.current.swiper.slideNext()) {
    }
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

const handleSlideChange = (swiper:any) => {
  setIsTherePrev(!swiper.isBeginning)
  setIsThereNext(!swiper.isEnd)
}

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        ref={swiperRef}
        breakpoints={{
          768: {
            slidesPerView: cardsNumber < 2.5 ? cardsNumber : 2.5,
          },
          425: {
            slidesPerView: cardsNumber < 1.5 ? cardsNumber : 1.5,
          },
        }}
        className={styles.mySwiperProject}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        mousewheel={false}
        modules={[Navigation, Keyboard]}
        navigation={false}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        onSwiper={(swiper) => console.log(swiper.isBeginning)}
      >
        {children}
      </Swiper>

      {cardsNumber > 2 ? (
        <>
          {isTherePrev && (
            <button
              className={styles.swiperButtonPrev}
              onClick={handlePrev}
            >
              <span className={styles.swiperPrevButtonIcon}>&#9664;</span>{" "}
            </button>
          )}
          {isThereNext && (
            <button
              className={styles.swiperButtonNext}
              onClick={handleNext}
            >
              <span className={styles.swiperNextButtonIcon}>&#9654;</span>{" "}
            </button>
          )}
        </>
      ) : null}
    </div>
  );
};

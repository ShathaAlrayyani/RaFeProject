"use client";
import Image from "next/image";
import {
  Header,
  AppSlider,
  IntroductionPage,
  MissionVisionPage,
} from "./components";
import { SwiperSlide } from "swiper/react";
import BgImage from './assets/bgImg.png'

export default function Home() {

  return (
    <>
      <main>
        <Header />
        <main className="appWrapper">
        <Image src={BgImage} alt="about us" className='bgImage' />
          <AppSlider>
              <SwiperSlide>
                <IntroductionPage/>
              </SwiperSlide>
              <SwiperSlide>
                <MissionVisionPage/>
              </SwiperSlide>
          </AppSlider>
        </main>
      </main>
    </>
  );
}

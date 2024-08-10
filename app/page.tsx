"use client";
import Image from "next/image";
import {
  Header,
  AppSlider,
  IntroductionPage,
  MissionVisionPage,
  TeamCompanyPage,
} from "./components";
import { SwiperSlide } from "swiper/react";

export default function Home() {

  return (
    <>
      <main>
        <Header />
        <main className="appWrapper">
        {/* <Image src={BgImage} alt="about us" className='bgImage' /> */}
        <IntroductionPage/>
        {/* <MissionVisionPage/>
        <TeamCompanyPage/> */}
          {/* <AppSlider>
              <SwiperSlide>
                <IntroductionPage/>
              </SwiperSlide>
              <SwiperSlide>
                <MissionVisionPage/>
              </SwiperSlide>
              <SwiperSlide>
                <TeamCompanyPage/>
              </SwiperSlide>
          </AppSlider> */}
        </main>
      </main>
    </>
  );
}

"use client";
import Image from "next/image";
import {
  AboutUsSection,
  AppSlider,
  Header,
  IntroductionSection,
  MissionVisionSection,
  TeamCompanySection,
} from "./components";
import { SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <>
      <main>
        <Header acivePage="Home" />
        <main className="appWrapper">
          <IntroductionSection />
          <AboutUsSection />
          <MissionVisionSection />
          <TeamCompanySection />
          {/* <AppSlider>
              <SwiperSlide>
                <IntroductionSection />
              </SwiperSlide>
              <SwiperSlide>
                <AboutUsSection />
              </SwiperSlide>
              <SwiperSlide>
                <MissionVisionSection />
              </SwiperSlide>
              <SwiperSlide>
                <TeamCompanySection />
              </SwiperSlide>
          </AppSlider> */}
        </main>
      </main>
    </>
  );
}

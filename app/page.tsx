"use client";
import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  AboutUsSection,
  AppSlider,
  Header,
  IntroductionSection,
  KeyServicesSection,
  MissionVisionSection,
  TeamCompanySection,
} from "./components";
import { SwiperSlide } from "swiper/react";

export const sectionsElements = [
  {
    component: <IntroductionSection />,
  },
  {
    component: <AboutUsSection />,
  },
  {
    component: <MissionVisionSection />,
  },
  {
    component: <KeyServicesSection />,
  },
  {
    component: <TeamCompanySection />,
  },
];

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-cubic",
      offset: 50,
      disableMutationObserver: true, // Optional: Disable auto-application of styles
      startEvent: "DOMContentLoaded",
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Header acivePage="Home" />
      <main className="appWrapper">
        {sectionsElements.map((section, index) => (
          <Fragment key={index + 123}>{section.component}</Fragment>
        ))}
        {/* <AppSlider>
          {sectionsElements.map((section, i) => (
            <SwiperSlide key={`section-${i}`}>{section.component}</SwiperSlide>
          ))}
        </AppSlider> */}
      </main>
    </main>
  );
}

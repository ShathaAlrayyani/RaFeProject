"use client";
import { useEffect } from "react";
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

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-cubic",
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Header acivePage="Home" />
      <main className="appWrapper">
        <IntroductionSection />
        <AboutUsSection />
        <MissionVisionSection />
        <KeyServicesSection />
        <TeamCompanySection />
      </main>
    </main>
  );
}

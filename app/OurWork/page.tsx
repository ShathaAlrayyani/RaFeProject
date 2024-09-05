"use client";
import styles from "./OurWork.module.css";
import { Footer, Header, SummarySection, Tabs } from "../components";
import { CardsSlider } from "../components/OurWork";

export default function OurWork() {
  return (
    <>
      <main>
        <Header acivePage="Our Work" />
        <main className="appWrapper">
          <SummarySection />
          <div className={styles.desktopView}>
            <Tabs />
          </div>
          <div className={styles.mobileView}>
            <CardsSlider/>
          </div>
          <Footer />
        </main>
      </main>
    </>
  );
}

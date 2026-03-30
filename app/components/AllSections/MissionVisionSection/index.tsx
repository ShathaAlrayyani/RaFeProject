import Image from "next/image";
// import TeamImg from "../../../assets/photos/_MG_3613.jpg"
import styles from "./MissionVisionSection.module.css";
import { useEffect, useRef } from "react";
import { MissionImgSrc } from "@/app/constants/mainPage";

export const MissionVisionSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.2 } // Adjust as needed
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array to run only once
  return (
    <div
      ref={sectionRef}
      className={`${styles.missionVisionWrapper} ${styles.hidden}`}
    >
      <div className={styles.bgOverlay}></div>
      <Image
        alt="about us"
        className={styles.bgImg}
        height={1200}
        src={MissionImgSrc}
        width={1200}
      />
      <div className={styles.sectionWrapper}>
        <h1 className={styles.title}>Mission</h1>
        <div className={styles.card}>
          RA Is the imperative verb of the verb see This reflects our vision of
          providing a media material for the Middle East, a combination of
          technology and creativity in one place.
        </div>
      </div>
      <h1 className={styles.mobileTitle}>And</h1>
      <div className={styles.sectionWrapper}>
        <div className={styles.card}>
          We took it upon ourselves as a team to work on improving the
          advertising and media content in the market to provide a product
          worthy of the customer&apos;s name to achieve his goals.
        </div>
        <h1 className={styles.title}>Vision</h1>
      </div>
    </div>
  );
};

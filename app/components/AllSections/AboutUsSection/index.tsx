import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./AboutUsSection.module.css";

const imgSrc =
  "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Photos/_MG_3533.jpg";

export const AboutUsSection = () => {
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
      className={`${styles.aboutUsSectionWrapper} ${styles.hidden}`}
    >
      <div className={styles.aboutUsOrangeBg} />
      <Image
        alt="about us"
        className={styles.bgImage}
        height={1200}
        src={imgSrc}
        width={1400}
      />
      <div className={styles.aboutUsContent}>
        <h1 className={styles.title}>About</h1>
        <h2 className={styles.subTitle}>
          RA is an art production company based in Amman-Jordan.
        </h2>
        <p className={styles.contant}>
          It was established in 2022 and included a group of artists with more
          than 20 years of experience in the field of advertising industry,
          Motion Pictures, TV shows and everything related to visual
          advertising.
        </p>
      </div>
    </div>
  );
};

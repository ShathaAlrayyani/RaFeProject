import Image from "next/image";
import styles from "./KeyServicesSection.module.css";
import { keyServices } from "@/app/constants/mainPage";
import VerticalLine from "../../../assets/LineVertical.svg";
import HorizontalLine from "../../../assets/LineHorizental.svg";
import { useEffect, useRef } from "react";

const imgSrc =
  "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Photos/_MG_3621.jpg";

export const KeyServicesSection = () => {
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
      className={`${styles.keyServicesSectionWrapper} ${styles.hidden}`}
    >
      <h1 className={styles.title}>Key Services</h1>
      <div className={styles.cardsWrapper}>
        {keyServices.map((item, i) => (
          <div className={styles.card} key={`service-${i + 1}`}>
            <div className={styles.firstCard}>
              <VerticalLine className={styles.leftLine} />
              <VerticalLine className={styles.rightLine} />
              <HorizontalLine className={styles.topLine} />
              <HorizontalLine className={styles.bottomLine} />
              <div className={styles.iconWrapper}>
                <item.icon />
              </div>
              <h1 className={styles.cardTitle}>{item.title}</h1>
            </div>
            <div className={styles.secCard}>
              <Image
                alt="about us"
                className={styles.cardBgImage}
                height={1200}
                src={imgSrc}
                width={1200}
              />
              <div className={styles.cardDecription}>{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

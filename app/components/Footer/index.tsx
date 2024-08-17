import { useEffect, useRef } from "react";
import styles from "./Footer.module.css";
import EllipseIcon from "../../assets/Ellipse2.svg";
import TwoLinesIcon from "../../assets/TwoLines.svg";
import EmailIcon from "../../assets/EmailIcon.svg";
import PhoneIcon from "../../assets/PhoneIcon.svg";

export const Footer = () => {
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
      className={`${styles.footerWrapper} ${styles.hidden}`}
    >
      <div className={styles.contactUs}>
        <div className={styles.iconWithContent}>
          <EmailIcon />
          <h1>info@racreativesjo.com </h1>
        </div>

        <div className={styles.iconWithContent}>
          <PhoneIcon />
          <h1>+962 791118242</h1>
        </div>
      </div>
      <EllipseIcon className={styles.ellipseIcon} />
      <TwoLinesIcon className={styles.twoLinesIcon} />
    </div>
  );
};

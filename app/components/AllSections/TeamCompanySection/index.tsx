import { useEffect, useRef } from "react";
import styles from "./TeamCompanySection.module.css";
import Image from "next/image";

export const TeamCompanySection = () => {
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
      className={`${styles.teamCompanyWrapper} ${styles.hidden}`}
    >
      Team & Company
      {/* <Image src={TeamImg} alt="about us" className={styles.img} /> */}
    </div>
  );
};

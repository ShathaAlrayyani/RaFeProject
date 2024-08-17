import { useEffect, useRef } from "react";
import styles from "./TeamCompanySection.module.css";
import Image from "next/image";

const teamImg1 = "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Photos/_MG_3621.jpg";
const teamImg2 = "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Photos/_MG_3616.jpg";

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
      <div className={styles.sectionContainer}>
        <div className={styles.sectionContent}>
          <h1 className={styles.title}>Team</h1>
          <p className={styles.content}>
            Our production company has a talented and devoted crew, with each
            person playing an important part in bringing our ideas to fruition.
            With a varied range of experience and creativity, our team works
            fluidly to provide unique cinematic outcomes and experiences
          </p>
        </div>
        <div className={styles.imgWithSquare}>
          <Image
            alt="about us"
            className={styles.topSectionImg}
            height={1200}
            src={teamImg1}
            width={1200}
          />
          <div className={styles.topOrangeSquare} />
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.imgWithSquare}>
          <Image
            alt="about us"
            className={styles.bottomSectionImg}
            height={1200}
            src={teamImg2}
            width={1200}
          />
          <div className={styles.bottomOrangeSquare} />
        </div>
        <div className={styles.sectionContent}>
          <h1 className={styles.title}>Company</h1>
          <p className={styles.content}>
            Our film production company utilizes advanced equipment to enhance
            the whole filmmaking process. We employ the greatest cameras,
            lighting, and audio equipment to ensure top production quality.
            Furthermore, our powerful project management and collaboration
            software enables seamless communication.
          </p>
        </div>
      </div>
    </div>
  );
};

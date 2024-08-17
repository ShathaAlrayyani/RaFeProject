import Image from "next/image";
import styles from "./IntroductionSection.module.css";
import { useEffect, useRef, useState } from "react";
import { VideoBg } from "../../VideoBg";
import { AppModal } from "../../Modal";
import { Button, ButtonVarients } from "../../Button";

const imgSrc =
  "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Photos/_MG_7306.jpg";

export const IntroductionSection = () => {
  const [isCardModalOpen, setIsCardModalOpen] = useState<boolean>(false);
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

  const handleOnCardClick = () => {
    setIsCardModalOpen(true);
  };

  const handleModalClose = () => {
    setIsCardModalOpen(false);
  };

  return (
    <>
      <AppModal isOpen={isCardModalOpen} onClose={handleModalClose}>
        <VideoBg />
      </AppModal>

      <div
        ref={sectionRef}
        className={`${styles.aboutUsWrapper} ${styles.hidden}`}
      >
        <div className={styles.blueBg} />
        <Image
          alt="about us"
          className={styles.bgImage}
          height={1200}
          src={imgSrc}
          width={1200}
        />
        <div className={styles.content}>
          <div className={styles.title}>
            <h1 className={styles.aboutUsTitle}>
              Where
              <span className={styles.orangeTitle}> creative</span>
            </h1>
            <h1 className={styles.aboutUsTitle}>
              <span className={styles.orangeTitle}> process</span> happen!
            </h1>
          </div>
          <div className={styles.contentWrapper}>
            <p className={styles.enText}>
              It was established in 2022 and included a group of artists with
              more than 20 years of experience in the field of advertising
              industry, Motion Pictures, TV shows and everything related to
              visual advertising.
            </p>
            <div className={styles.buttonWrapper}>
              <Button
                btnStyle={ButtonVarients.PRIMARY}
                onClick={handleOnCardClick}
              >
                Show Reel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

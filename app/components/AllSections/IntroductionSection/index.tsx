import Image from "next/image";
import styles from "./IntroductionSection.module.css";
import { useState } from "react";
import { VideoBg } from "../../VideoBg";
import { AppModal } from "../../Modal";
import { Button, ButtonVarients } from "../../Button";

const imgSrc = "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Photos/_MG_7306.jpg"

export const IntroductionSection = () => {
  const [isCardModalOpen, setIsCardModalOpen] = useState<boolean>(false);

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

      <div className={styles.aboutUsWrapper}>
        <div className={styles.blueBg}/>
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
              <span className={styles.orangeTitle}>
                {" "}
                creative
              </span>
            </h1>
            <h1 className={styles.aboutUsTitle}>
              <span className={styles.orangeTitle}>
                 process
              </span>{" "}
              happen!
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

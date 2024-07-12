import Image from "next/image";
import AboutUsImg from "../../../assets/logoExtra/colored/out02.png";
import styles from "./IntroductionPage.module.css";
import { useState } from "react";
import { VideoBg } from "../../VideoBg";
import { AppModal } from "../../Modal";
import { Button, ButtonStyles } from "../../Button";
import VideoIcon from "../../../assets/extraIcons/video-svgrepo-com.svg";

interface ISlideProps {}
export const IntroductionPage = ({}: ISlideProps) => {
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
        {/* <VideoIcon className={styles.videoSvg}/> */}
        <Image src={AboutUsImg} alt="about us" className={styles.aboutUsImg} />
        <div className={styles.content}>
          <div className={styles.title}>
            <h1 className={styles.aboutUsTitle}>INTRODUCTION</h1>
            <h1 className={styles.aboutUsTitle}>المقدمة</h1>
          </div>
          <p className={styles.arText}>
            <span className={styles.textTitle}>
              .رَ هي شركة إنتاج فني مقرها في عمان-الأردن
            </span>
            <br />
            تم تأسيسها عام ٢٠٢٢ وتضمنت مجموعة من الفنانين ذوي الخبرة التي تزيد
            عن ٢٠ عام في مجال صناعة الإعلان،و الأفلام السينمائية و البرامج
            التلفزيونية وكل ما يتعلق بها بالإعلان المرئي
          </p>
          <p className={styles.enText}>
            <span className={styles.textTitle}>
              RA is an art production company based in Amman-Jordan.
            </span>
            <br />
            It was established in 2022 and included a group of artists with more
            than 20 years of experience in the field of advertising industry,
            Motion Pictures, TV shows and everything related to visual
            advertising.
          </p>
          <Button btnStyle={ButtonStyles.SECONDARY} onClick={handleOnCardClick}>
            Show Reel
          </Button>
        </div>
      </div>
    </>
  );
};

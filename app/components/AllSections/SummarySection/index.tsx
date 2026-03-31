import Image from "next/image";
import styles from "./SummarySection.module.css";
import { OurWorkImgSrc } from "@/app/constants/mainPage";

export const SummarySection = () => {
  return (
    <div className={styles.summarySectionWrapper}>
      <p className={styles.summaryContent}>
        At Ra, we create sketches that blend creativity with purpose. Our goal
        is to bring meaningful ideas to life, whether highlighting social issues
        or capturing the beauty in everyday moments. Through our sketches, we
        invite you to see the world in a new light and appreciate the little
        details that make life special. Enjoy the journey with us, where every
        sketch is an opportunity for reflection and excitement!
      </p>
      <Image
        alt="about us"
        className={styles.bgImg}
        height={1200}
        src={OurWorkImgSrc}
        width={1200}
      />
    </div>
  );
};

import Image from "next/image";
import styles from "./SummarySection.module.css";

const imgSrc = "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Photos/_MG_3366.jpg";

export const SummarySection = () => {
  return (
    <div className={styles.summarySectionWrapper}>
      <p className={styles.summaryContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit
      </p>
      <Image
        alt="about us"
        className={styles.bgImg}
        height={1200}
        src={imgSrc}
        width={1200}
      />
    </div>
  );
};

import Image from "next/image";
import styles from "./AboutUsSection.module.css";

const imgSrc =
  "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Photos/_MG_3533.jpg";

export const AboutUsSection = () => {
  return (
    <div className={styles.aboutUsSectionWrapper}>
        <div className={styles.aboutUsOrangeBg}/>
        <Image
        alt="about us"
        className={styles.bgImage}
        height={1200}
        src={imgSrc}
        width={1400}
      />
      <div className={styles.aboutUsContent}>
        <h1 className={styles.title}>About</h1>
        <h2 className={styles.subTitle}>RA is an art production company based in Amman-Jordan.</h2>
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

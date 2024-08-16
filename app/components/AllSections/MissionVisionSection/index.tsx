import Image from "next/image";
// import TeamImg from "../../../assets/photos/_MG_3613.jpg"
import styles from "./MissionVisionSection.module.css";
const imgSrc =
  "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Photos/_MG_3366.jpg";

export const MissionVisionSection = () => {
  return (
    <div
      className={styles.missionVisionWrapper}
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
    >
      <div className={styles.bgOverlay}></div>
      <Image
        alt="about us"
        className={styles.bgImg}
        height={1200}
        src={imgSrc}
        width={1200}
      />
      <div className={styles.sectionWrapper}>
        <h1 className={styles.title}>Mission</h1>
        <div className={styles.card}>
          RA Is the imperative verb of the verb see This reflects our vision of
          providing a media material for the Middle East, a combination of
          technology and creativity in one place.
        </div>
      </div>
      <div className={styles.sectionWrapper}>
        <div className={styles.card}>
          We took it upon ourselves as a team to work on improving the
          advertising and media content in the market to provide a product
          worthy of the customer&apos;s name to achieve his goals.
        </div>
        <h1 className={styles.title}>Vision</h1>
      </div>
    </div>
  );
};

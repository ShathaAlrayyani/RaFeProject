import Image from "next/image";
// import TeamImg from "../../../assets/photos/_MG_3613.jpg"
import styles from "./MissionVisionSection.module.css";

export const MissionVisionSection = () => {
  return (
    <div className={styles.missionVisionWrapper}>
      Mission & Vision
      {/* <Image src={TeamImg} alt="about us" className={styles.img} /> */}
    </div>
  );
};

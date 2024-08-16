import styles from "./TeamCompanySection.module.css";
// import TeamImg from "../../../assets/photos/_MG_3621.jpg"
import Image from "next/image";

export const TeamCompanySection = () => {
  return (
    <div className={styles.teamCompanyWrapper}>
      Team & Company
      {/* <Image src={TeamImg} alt="about us" className={styles.img} /> */}
    </div>
  );
};

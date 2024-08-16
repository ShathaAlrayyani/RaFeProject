import styles from "./TeamCompanySection.module.css";
import Image from "next/image";

export const TeamCompanySection = () => {
  return (
    <div className={styles.teamCompanyWrapper} >
      Team & Company
      {/* <Image src={TeamImg} alt="about us" className={styles.img} /> */}
    </div>
  );
};

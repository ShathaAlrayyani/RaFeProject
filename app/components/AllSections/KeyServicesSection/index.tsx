import Image from "next/image";
import styles from "./KeyServicesSection.module.css";
import { keyServices } from "@/app/constants/mainPage";
import VerticalLine from '../../../assets/LineVertical.svg'
import HorizontalLine from '../../../assets/LineHorizental.svg'

const imgSrc =
  "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Photos/_MG_3621.jpg";

export const KeyServicesSection = () => {
  return (
    <div className={styles.keyServicesSectionWrapper} data-aos="fade-up" >
      <h1 className={styles.title}>Key Services</h1>
      <div className={styles.cardsWrapper}>
        {keyServices.map((item, i) => (
          <div className={styles.card} key={`service-${i + 1}`} >
            <div className={styles.firstCard}>
              <VerticalLine className={styles.leftLine}/>
              <VerticalLine className={styles.rightLine}/>
              <HorizontalLine className={styles.topLine}/>
              <HorizontalLine className={styles.bottomLine}/>
              <div className={styles.iconWrapper}>
                <item.icon />
              </div>
              <h1 className={styles.cardTitle}>{item.title}</h1>
            </div>
            <div className={styles.secCard}>
              <Image
                alt="about us"
                className={styles.cardBgImage}
                height={1200}
                src={imgSrc}
                width={1200}
              />
              <div className={styles.cardDecription}>{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

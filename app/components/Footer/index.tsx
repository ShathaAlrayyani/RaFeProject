import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import EllipseIcon from "../../assets/Ellipse2.svg";
import TwoLinesIcon from "../../assets/TwoLines.svg";
import EmailIcon from "../../assets/EmailIcon.svg";
import PhoneIcon from "../../assets/PhoneIcon.svg";
import Link from "next/link";
import { socialMediaData } from "@/app/constants/mainPage";

const imgSrc =
  "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Logo/raCreativeWhite.png";

export const Footer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.2 } // Adjust as needed
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array to run only once

  return (
    <div
      ref={sectionRef}
      className={`${styles.footerWrapper} ${styles.hidden}`}
    >
      <div className={styles.clientMsg}>
        <Image
          alt="about us"
          className={styles.footerImage}
          height={1200}
          src={imgSrc}
          width={1400}
        />
        <div className={styles.footerContent}>
          <h1>Crafting Stories That Inspire, Entertain, And Transform.</h1>
          <div className={styles.socialMedia}>
            {socialMediaData.map((platform, index) => (
              <Link className={styles.mediaLink} href={platform.link} key={index + 1577}>
                {platform.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.contactUs}>
        <div className={styles.iconWithContent}>
          <EmailIcon />
          <h1>info@racreativesjo.com </h1>
        </div>

        <div className={styles.iconWithContent}>
          <PhoneIcon />
          <h1>+962 791 118 244</h1>
        </div>
      </div>

      <EllipseIcon className={styles.ellipseIcon} />
      <TwoLinesIcon className={styles.twoLinesIcon} />
    </div>
  );
};

import { useEffect, useRef } from "react";
import Image from "next/image";
import { OurClientBrand } from "@/app/constants/mainPage";
import styles from "./OurClientComponent.module.css";



interface IOurClientsSectionProps {
  brandsImgs: OurClientBrand[];
  title: string
}

export const OurClientComponent = ({brandsImgs, title}:IOurClientsSectionProps) => {
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
      className={`${styles.ourClientWrapper} ${styles.hidden}`}
    >
      <div className={styles.sectionTitle}>
        <h1>
            {title}
        </h1>
      </div>
      <div className={styles.brandsContainer}>
        {brandsImgs.map((brand, index)=>(
        <div className={styles.brandCard} key={brand.brandName + index}>
          <Image
            alt="about us"
            className={styles.brandImg}
            height={1200}
            src={brand.brandImgSrc}
            width={1200}
          />
        </div>

        ))}
      </div>
    </div>
  );
};

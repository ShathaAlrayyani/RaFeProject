import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./OurClientComponent.module.css";
import { OurClientBrand } from "@/app/constants/ourClients";
import { LoadingSinner } from "@/app/components/LoadingSinner";
import classNames from "classnames";

interface IOurClientsSectionProps {
  brandsImgs: OurClientBrand[];
  title: string;
}

export const OurClientComponent = ({
  brandsImgs,
  title,
}: IOurClientsSectionProps) => {
  const [isLoading, setIsLoading] = useState(true);
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

  const handleOnLoadingComplete = () => {
    console.log(isLoading);
    setIsLoading(false);
  };
  return (
    <div
      ref={sectionRef}
      className={`${styles.ourClientWrapper} ${styles.hidden}`}
    >
      <div className={styles.sectionTitle}>
        <h1>{title}</h1>
      </div>
      <div className={styles.brandsContainer}>
        {brandsImgs.map((brand, index) => (
          <div className={styles.brandCard} key={brand.brandName + index}>
            {/* {isLoading && <LoadingSinner isSmall />} */}
            <Image
              alt="about us"
              className={classNames(styles.brandImg, {
                [styles.hiddenImg]: isLoading,
              })}
              height={500} // Adjust as needed
              quality={50} // Optional: reduces size further
              src={brand.brandImgSrc}
              width={500} // Reduced dimensions
            />
          </div>
        ))}
      </div>
    </div>
  );
};

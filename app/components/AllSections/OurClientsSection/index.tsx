import { useEffect, useRef } from "react";
import styles from "./OurClientsSection.module.css";
import { OurClientComponent } from "./OurClientComponent";
import TopShapeIcon from "../../../assets/orangeCowIcon1.svg";
import BottomShapeIcon from "../../../assets/orangeCowIcon2.svg";
import { ourJorClients, ourUaeClients } from "@/app/constants/ourClients";

const imgSrc =
  "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Photos/_MG_7306.jpg";

export const OurClientsSection = () => {
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
      className={`${styles.ourClientsSectionWrapper} ${styles.hidden}`}
    >
      <TopShapeIcon className={styles.topIcon}/>
      <OurClientComponent
        brandsImgs={ourJorClients}
        title={"OUR CLIENTS IN JORDAN"}
      />
      <OurClientComponent
        brandsImgs={ourUaeClients}
        title={"OUR CLIENTS IN UAE"}
      />
      <BottomShapeIcon className={styles.bottomIcon} />
    </div>
  );
};

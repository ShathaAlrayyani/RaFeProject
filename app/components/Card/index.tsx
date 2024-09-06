import styles from "./Card.module.css";
import Image from "next/image";
import NoImgPlaceholder from "../../assets/noImg2.svg";
import { LoadingSinner } from "../LoadingSinner";

interface IAppCardProps {
  description: string;
  id: any;
  imgSrc: string;
  onClick?: () => void;
  title: string;
}

export const AppCard = ({
  description,
  id,
  imgSrc,
  onClick,
  title,
}: IAppCardProps) => {
  return (
    <div className={styles.appCard} onClick={onClick}>
      {!!!imgSrc || !!!title ? (
        <LoadingSinner />
      ) : (
        <>
          {imgSrc ? (
            <Image
              alt="about us"
              className={styles.cardImage}
              height={1200}
              src={imgSrc}
              width={1200}
            />
          ) : (
            <NoImgPlaceholder className={styles.cardIcon} />
          )}
          <div className={styles.cardContent}>
            <h1 className={styles.cardTitle}>{title}</h1>
            {/* <p className={styles.cardDesc}>{description}</p> */}
          </div>
        </>
      )}
    </div>
  );
};

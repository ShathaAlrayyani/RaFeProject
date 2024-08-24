import { useState } from "react";
import RaLogoSvg from "../../assets/RaLogo2.svg";
import styles from "./Header.module.css";
import { Button, ButtonVarients } from "../Button";
import Link from "next/link";
import Image from "next/image";
import ImgSrc from "../../assets/logoExtra/bgImg.png";

interface IHeaderProps {
  acivePage: string;
}

export const headerButtons = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/OurWork",
    title: "Our Work",
  },
];

export const Header = ({ acivePage }: IHeaderProps) => {
  const [aciveTab, setActiveTab] = useState<string>(acivePage);

  const handleActiveTab = (title: any) => {
    setActiveTab(title);
  };

  return (
    <div className={styles.headerComponent}>
      {/* <Image
        alt="about us"
        className={styles.bgImg}
        height={300}
        src={ImgSrc}
        width={500}
      /> */}
      <RaLogoSvg className={styles.svgIcon} />
      <div className={styles.headerSections}>
        {headerButtons.map((section, index) => (
          <Button
            btnStyle={ButtonVarients.TAB_BUTTON}
            isActiveTab={aciveTab == section.title ? true : false}
            key={index}
            onClick={() => handleActiveTab(section.title)}
          >
            <Link href={section.link}>{section.title}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

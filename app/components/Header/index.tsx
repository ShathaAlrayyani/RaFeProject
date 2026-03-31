import { useState } from "react";
import RaLogoSvg from "../../assets/RaLogo2.svg";
import styles from "./Header.module.css";
import { Button, ButtonVariants } from "../Button";
import Link from "next/link";
import Image from "next/image";
import { LogoImgSrc } from "@/app/constants/mainPage";


interface IHeaderProps {
  activePage?: string;
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

export const Header = ({ activePage }: IHeaderProps) => {
  const [activeTab, setActiveTab] = useState<string | undefined>(activePage);

  const handleActiveTab = (title: any) => {
    setActiveTab(title);
  };

  return (
    <div className={styles.headerComponent}>
      <div className={styles.imgWrapper}>
        <Image
          alt="about us"
          className={styles.bgImg}
          height={300}
          src={LogoImgSrc}
          width={500}
        />
      </div>
      <div className={styles.headerSections}>
        {headerButtons.map((section, index) => (
          <Button
            btnStyle={ButtonVariants.HEADER_BUTTON}
            isActiveTab={activeTab == section.title ? true : false}
            key={index}
            onBtnClick={() => handleActiveTab(section.title)}
          >
            <Link href={section.link}>{section.title}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

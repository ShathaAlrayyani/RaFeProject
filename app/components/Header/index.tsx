import React from "react";
import Image from "next/image";
import RaLogoSvg from "../../assets/RaLogo2.svg";
import RaTextPng from "../../assets/RaLogoText.png"
import style from './Header.module.css'

export const Header = () => {
  return (
    <div className={style.headerComponent}>
      <RaLogoSvg className={style.svgIcon} />
      <Image src={RaTextPng} alt="Ra Logo" width={100} height={15} />
    </div>
  );
};

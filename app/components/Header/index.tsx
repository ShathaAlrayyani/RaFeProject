import React, { useState } from "react";
import RaLogoSvg from "../../assets/RaLogo2.svg";
import style from './Header.module.css'
import { Button, ButtonVarients } from "../Button";
export const headerButtons = [
  {
    title:'Home',
  },
  {
    title: 'Our Work'
  }
]
export const Header = () => {
  const [aciveTab, setActiveTab] = useState<string>('Home')

  const handleActiveTab = (title: any) => {
    setActiveTab(title)
  }

  return (
    <div className={style.headerComponent}>
      <RaLogoSvg className={style.svgIcon} />
      <div className={style.headerSections}>
        {headerButtons.map((section, index)=>(
        <Button btnStyle={ButtonVarients.TAB_BUTTON} isActiveTab={aciveTab == section.title? true : false} key={index} onClick={()=>handleActiveTab(section.title)}>
          {section.title}
        </Button>
        ))}
      </div>
    </div>
  );
};

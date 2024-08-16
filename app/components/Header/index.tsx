import { useState } from "react";
import RaLogoSvg from "../../assets/RaLogo2.svg";
import style from './Header.module.css'
import { Button, ButtonVarients } from "../Button";
import Link from "next/link";

interface IHeaderProps {
  acivePage : string
}

export const headerButtons = [
  {
    link:'/',
    title:'Home',
  },
  {
    link: '/OurWork',
    title: 'Our Work',
  }
]

export const Header = ({acivePage}: IHeaderProps) => {
  const [aciveTab, setActiveTab] = useState<string>(acivePage)

  const handleActiveTab = (title: any) => {
    setActiveTab(title)
  }

  return (
    <div className={style.headerComponent}>
      <RaLogoSvg className={style.svgIcon} />
      <div className={style.headerSections}>
        {headerButtons.map((section, index)=>(
        <Button btnStyle={ButtonVarients.TAB_BUTTON} isActiveTab={aciveTab == section.title? true : false} key={index} onClick={()=>handleActiveTab(section.title)}>
          <Link href={section.link}>
          {section.title}
          </Link>
        </Button>
        ))}
      </div>
    </div>
  );
};

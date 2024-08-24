import classNames from "classnames";
import style from "./Button.module.css";
import { MouseEvent } from "react";

export enum ButtonVarients {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TAB_BUTTON = "tabButton"
}

interface IButtonProps {
  btnStyle: ButtonVarients;
  children: any;
  isActiveTab?:boolean
  onClick: (e:MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ btnStyle, children, isActiveTab=false, onClick }: IButtonProps) => {
  
  return (
    <button className={classNames(style[btnStyle], { [style.activeTab] : isActiveTab })} onClick={onClick}>
      {children}
    </button>
  );
};

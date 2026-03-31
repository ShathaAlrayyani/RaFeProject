import classNames from "classnames";
import style from "./Button.module.css";
import { MouseEvent } from "react";

export enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TAB_BUTTON = "tabButton",
  HEADER_BUTTON="headerButton"
}

interface IButtonProps {
  btnStyle: ButtonVariants;
  children: any;
  isActiveTab?: boolean;
  onBtnClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  btnStyle,
  children,
  isActiveTab = false,
  onBtnClick,
}: IButtonProps) => {
  return (
    <button
      className={classNames(style[btnStyle], {
        [`${style.activeTab}`]: isActiveTab,
      })}
      onClick={onBtnClick}
    >
      {children}
    </button>
  );
};

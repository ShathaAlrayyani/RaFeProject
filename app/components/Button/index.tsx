import style from "./Button.module.css";

export enum ButtonVarients {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TAB_BUTTON = "tabButton"
}

interface IButtonProps {
  btnStyle: ButtonVarients;
  children: any;
  isActiveTab?:boolean
  onClick: () => void;
}

export const Button = ({ btnStyle, children, isActiveTab=false, onClick }: IButtonProps) => {
  
  return (
    <button className={style[btnStyle]} onClick={onClick}>
      {children}
    </button>
  );
};

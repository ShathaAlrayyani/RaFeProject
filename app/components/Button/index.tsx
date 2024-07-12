import style from './Button.module.css'

export enum ButtonStyles {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface IButtonProps {
    btnStyle : ButtonStyles
    children: any
    onClick : ()=> void
}

export const Button = ({btnStyle, children, onClick}: IButtonProps) => {
  return (
    <button className={style[btnStyle]} onClick={onClick}>{children}</button>
  )
}

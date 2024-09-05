import styles from "./LoadingSinner.module.css";
import classNames from "classnames";

interface ILoadingSinnerProps {
  isWhite?: boolean
  isSmall?:boolean
}

export const LoadingSinner = ({ isWhite = false, isSmall=false }: ILoadingSinnerProps) => {
  return (
    <div className={styles.spinnerWrapper}>
      <div
        className={classNames(styles.spinner, {
          [styles.whiteSpinner]: isWhite,
          [styles.smallSpinner]: isSmall,
        })}
      >
        <div
          className={classNames(styles.innerCircle, {
            [styles.whiteSpinner]: isWhite,
          })}
        />
      </div>
    </div>
  );
};

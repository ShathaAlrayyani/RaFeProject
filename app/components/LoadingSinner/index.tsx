import styles from "./LoadingSinner.module.css";
import classNames from "classnames";

interface ILoadingSinnerProps {
  isWhite?: boolean;
}

export const LoadingSinner = ({ isWhite = false }: ILoadingSinnerProps) => {
  return (
    <div className={styles.spinnerWrapper}>
      <div
        className={classNames(styles.spinner, {
          [styles.whiteSpinner]: isWhite,
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

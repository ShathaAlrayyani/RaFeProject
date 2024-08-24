import styles from "./NoDataPlaceholder.module.css";
import NoDataIcon from "../../assets/NoData2.svg";
import classNames from "classnames";

interface INoDataPlaceholderProps {
  noDataHeader?: string;
  noDataText?: string;
  isWhite?: boolean
}

export const NoDataPlaceholder = ({
  noDataHeader="It's Empty In Here",
  noDataText="Oops! Seems Like There's Nothing In This Section Yet.",
  isWhite=false
}: INoDataPlaceholderProps) => {
  return (
    <div className={styles.noDataPlaceholder}>
      <NoDataIcon className={styles.sectioIcon}/>
      <div className={classNames(styles.contentWrapper, {[styles.whiteText]:isWhite})}>
        <h1 className={styles.title}>{noDataHeader}</h1>
        <p className={styles.content}>{noDataText}</p>
      </div>
    </div>
  );
};

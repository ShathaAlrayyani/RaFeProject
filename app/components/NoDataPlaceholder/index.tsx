import styles from "./NoDataPlaceholder.module.css";
import NoDataIcon from "../../assets/NoData2.svg";
import classNames from "classnames";

interface INoDataPlaceholderProps {
  isMobile?:boolean
  isWhite?: boolean
  noDataHeader?: string;
  noDataText?: string;
}

export const NoDataPlaceholder = ({
  isMobile=false,
  isWhite=false,
  noDataHeader="It's Empty In Here",
  noDataText="Oops! Seems Like There's Nothing In This Section Yet."
}: INoDataPlaceholderProps) => {
  return (
    <div className={styles.noDataPlaceholder}>
      <NoDataIcon className={styles.sectioIcon}/>
      <div className={classNames(styles.contentWrapper, {[styles.whiteText]:isWhite, [styles.mobileView]: isMobile})}>
        <h1 className={styles.title}>{noDataHeader}</h1>
        <p className={styles.content}>{noDataText}</p>
      </div>
    </div>
  );
};

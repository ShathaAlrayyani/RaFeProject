import styles from "./TabContent.module.css";
import { NoDataPlaceholder } from "../NoDataPlaceholder";
import { AppCard } from "../Card";

interface TabData {}
interface ITabContentProps {
  tabData: any;
}

export const TabContent = ({ tabData }: ITabContentProps) => {
  return (
    <div className={styles.tabContentWrapper}>
      {tabData.length > 0 ? (
        <>
        {tabData.map((data: any, index: number)=> (
          <AppCard key={index} description={data.description} imgSrc={data.imgSrc} title={data.title} id={data.id}/>
        ))}
        </>
      ) : (
        <>
        <NoDataPlaceholder/>
        </>
      )}
    </div>
  );
};

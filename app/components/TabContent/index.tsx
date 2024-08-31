import styles from "./TabContent.module.css";
import { NoDataPlaceholder } from "../NoDataPlaceholder";
import { AppCard } from "../Card";
import { useRouter } from "next/navigation";

interface ITabContentProps {
  tabData: any;
  tabName: string
}

export const TabContent = ({ tabData, tabName }: ITabContentProps) => {
  const router = useRouter();
  const handleCardClick = (id: string) => {
    router.push(`/OurWork/${tabName}/${id}`);
  };
  return (
    <div className={styles.tabContentWrapper}>
      {tabData.length > 0 ? (
        <>
          {tabData.map((data: any, index: number) => (
            <AppCard
              description={data.description}
              id={data.id}
              imgSrc={data.imgSrc}
              key={index}
              title={data.title}
              onClick={() => handleCardClick(data.id)}
            />
          ))}
        </>
      ) : (
        <>
          <NoDataPlaceholder isWhite />
        </>
      )}
    </div>
  );
};

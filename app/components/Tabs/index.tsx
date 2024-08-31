import { Button, ButtonVarients } from "../Button";
import classNames from "classnames";
import styles from "./Tabs.module.css";
import { useState } from "react";
import { TabContent } from "../TabContent";
import { tabsContent } from "@/app/constants/mainPage";
import BgIcon from "../../assets/VectorBg.svg";
import { LoadingSinner } from "../LoadingSinner";


export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Productions");

  const handleTabClick = (clickedTab: string) => {
    setActiveTab(clickedTab);
  };
  return (
    <div className={styles.tabsWrapper}>
      <BgIcon className={styles.bgIcon}/>
      <div className={styles.buttonsWrapper}>
        {tabsContent.map((tabData, index) => (
          <div
            className={classNames(styles.buttonContainer, {
              [styles.activeTab]: activeTab === tabData.tabName,
            })}
            key={index}
          >
            <Button
              btnStyle={ButtonVarients.TAB_BUTTON}
              isActiveTab={activeTab === tabData.tabName}
              onClick={() => handleTabClick(tabData.tabName)}
            >
              {tabData.tabName}
            </Button>
          </div>
        ))}
      </div>
      {!!tabsContent? tabsContent.map(
        (tabData, index) =>
          activeTab === tabData.tabName && (
            <TabContent key={index} tabData={tabData.data} tabName={tabData.id} />
          )
      ): (
        <LoadingSinner isWhite/>
      )}
    </div>
  );
};

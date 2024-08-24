import { Button, ButtonVarients } from "../Button";
import classNames from "classnames";
import styles from "./Tabs.module.css";
import { useState } from "react";
import { TabContent } from "../TabContent";
import BgIcon from "../../assets/VectorBg.svg";

export const productionsData = [
  {
    description: "سكتشات رَ الاصلية هي مجموعه من المشاهد التي تناقش  فكره او قضية معينة بحوارات تبدو سطحية ولكنها في الواقع تحمل في طياتها معاني ورموز كثيره",
    id: 1,
    imgSrc: "",
    title: "سكتشات رَ ",
  },
  {
    description: "سكتشات رَ الاصلية هي مجموعه من المشاهد التي تناقش  فكره او قضية معينة بحوارات تبدو سطحية ولكنها في الواقع تحمل في طياتها معاني ورموز كثيره",
    id: 2,
    imgSrc: "",
    title: "هات الي عندك",
  },
  {
    description: "سكتشات رَ الاصلية هي مجموعه من المشاهد التي تناقش  فكره او قضية معينة بحوارات تبدو سطحية ولكنها في الواقع تحمل في طياتها معاني ورموز كثيره",
    id: 3,
    imgSrc: "",
    title: "العكس صحيح",
  },
  {
    description: "سكتشات رَ الاصلية هي مجموعه من المشاهد التي تناقش  فكره او قضية معينة بحوارات تبدو سطحية ولكنها في الواقع تحمل في طياتها معاني ورموز كثيره",
    id: 4,
    imgSrc: "",
    title: "كتاب الخوف",
  },
  {
    description: "سكتشات رَ الاصلية هي مجموعه من المشاهد التي تناقش  فكره او قضية معينة بحوارات تبدو سطحية ولكنها في الواقع تحمل في طياتها معاني ورموز كثيره",
    id: 5,
    imgSrc: "",
    title: "Celebrity Quiz",
  },
];

export const tabsContent = [
  {
    data: productionsData,
    tabName: "Productions",
  },
  {
    data: [],
    tabName: "TV Commercials",
  },
  {
    data: [],
    tabName: "Documentaries",
  },
  {
    data: [],
    tabName: "Library",
  },
];

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Productions");

  const handleTabClick = (clickedTab: string) => {
    setActiveTab(clickedTab);
  };
  return (
    <div className={styles.tabsWrapper}>
      {/* <BgIcon className={styles.bgIcon}/> */}
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
      {tabsContent.map(
        (tabData, index) =>
          activeTab === tabData.tabName && (
            <TabContent key={index} tabData={tabData.data} />
          )
      )}
    </div>
  );
};

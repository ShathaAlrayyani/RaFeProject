import { tabsContent } from "@/app/constants/mainPage";
import styles from "./CardsSlider.module.css";
import { AppSlider } from "../../Slider";
import { LoadingSinner } from "../../LoadingSinner";
import { SwiperSlide } from "swiper/react";
import { AppCard } from "../../Card";
import { useRouter } from "next/navigation";
import { NoDataPlaceholder } from "../../NoDataPlaceholder";
import BgIcon from "../../../assets/VectorBg.svg";

export const CardsSlider = () => {
    const router = useRouter();
    const handleCardClick = (id: string, tabName:string) => {
      router.push(`/OurWork/${tabName}/${id}`);
    };
  return (
    <div className={styles.cardsSliderWrapper}>
        <BgIcon className={styles.bgIcon}/>
      {tabsContent.map((section, index) => (
        <div className={styles.sectionWrapper} key={index}>
          <div className={styles.titleWrapper}>
            <h1>{section.tabName}</h1>
          </div>
          <div className={styles.sliderWrapper}>
            {!!section.data && section?.data?.length > 0? (
                <AppSlider cardsNumber={section?.data?.length}>
                {section.data.map((data, index) => (
                  <SwiperSlide key={index + 123}>
                    <AppCard
                      description={data.description}
                      id={data.id}
                      imgSrc={data.imgSrc}
                      key={index}
                      title={data.title}
                      onClick={() => handleCardClick(data.id, section.id)}
                    />
                  </SwiperSlide>
                ))}
              </AppSlider>
            ) : (
              <NoDataPlaceholder isMobile isWhite/>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

"use client"
import { useState } from "react";
import { Header, VideoBg, AppCard, AppModal, ContentCard, AppSlider } from "./components"
import { allCards } from "./constants/mainPage";
import { SwiperSlide } from "swiper/react";

export default function Home() {
  const [isCardModalOpen, setIsCardModalOpen] = useState<boolean>(false)

  const handleOnCardClick= ()=> {
    setIsCardModalOpen(true)
  }

  const handleModalClose = () => {
    setIsCardModalOpen(false)
  }

  return (
    <main>
      <Header />
      <main className="appWrapper">
        <AppSlider>
        {allCards.map((cardItem, index) => (
          <SwiperSlide key={`card-1${index}`}>
            <AppCard onClick={handleOnCardClick} title={cardItem.title} Icon={cardItem.icon}/>
          </SwiperSlide>
          ))}
        </AppSlider>
      </main>
    </main>
  );
}

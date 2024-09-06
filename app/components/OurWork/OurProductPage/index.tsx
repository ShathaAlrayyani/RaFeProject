"use client";
import { useEffect, useRef, useState } from "react";
import { CardWithVideo } from "../../CardWithVideo";
import { LoadingSinner } from "../../LoadingSinner";
import { NoDataPlaceholder } from "../../NoDataPlaceholder";
import styles from "./OurProductPage.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { extractId, filterDataById, getURL } from "@/app/utils/common";
import classNames from "classnames";

export interface ShowDetailsProps {
  description: string;
  id: string;
  imgSrc: string;
  showName: string;
  videos: string[] | VideoObject[];
}
interface VideoObject {
  id: string;
  title: string;
  videoLink: string;
}

interface IOurProductPageProps {
  sectionName: string;
}

export const OurProductPage = ({ sectionName }: IOurProductPageProps) => {
  const [data, setData] = useState<ShowDetailsProps | undefined>();
  const pathname = usePathname();

  const getShowDetails = async () => {
    const showId = extractId(pathname);
    const url = getURL(sectionName);
    const res = await fetch(url);
    const data = await res.json();
    const filteredItem = filterDataById(data.data, "id", showId);
    return filteredItem;
  };

  useEffect(() => {
    const fetchData = async () => {
      const details = await getShowDetails();
      setData(details);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.sectionWrapper}>
      {!!!data ? (
        <LoadingSinner />
      ) : (
        <>
          <Image
            alt={data?.id ?? ""}
            className={styles.bgImg}
            height={1200}
            src={data?.imgSrc ?? ""}
            width={1200}
          />
          <div className={styles.overlay} />
          <div className={styles.upperPart}>
            <Image
              alt={data?.id ?? ""}
              className={styles.showImg}
              height={1200}
              src={data?.imgSrc ?? ""}
              width={1200}
            />
            <div className={styles.content}>
              <p>
                {data.description}
              </p>
            </div>
          </div>
          <div 
          className={styles.bottomPart}
          >
            <div className={styles.sectionTitle}>
              {data.showName}
            </div>
            <div className={styles.videoCardWrapper}>
              {!data?.videos ? (
                <LoadingSinner />
              ) : data?.videos && data?.videos?.length > 0 ? (
                data.videos.map((item, index) => (
                  <CardWithVideo
                    id={typeof item != "string" ? item.title : data.id}
                    key={index}
                    title={typeof item != "string" ? item.title : ""}
                    videoLink={typeof item === "string" ? item : item.videoLink}
                  />
                ))
              ) : (
                <NoDataPlaceholder />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

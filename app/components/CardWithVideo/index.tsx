import styles from "./CardWithVideo.module.css";

interface ICardWithVideoProps {
  id?: string;
  title?: string;
  videoLink: string;
}

export const CardWithVideo = ({
  id,
  title,
  videoLink,
}: ICardWithVideoProps) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.videoWrapper}>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.iframeVideo}
          referrerPolicy="strict-origin-when-cross-origin"
          src={videoLink}
          title="YouTube video player"
        />
      </div>
      {title && (<div className={styles.content}>
        <h1 className={styles.videoTitle}>{title}</h1>
      </div>)}
    </div>
  );
};

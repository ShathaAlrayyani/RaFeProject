import style from "./VideoBg.module.css";

export const VideoBg = () => {

  return (
    <div className={style.videoWrapper}>
      <video
        width="100%"
        height="100vh"
        controls
        className={style.raVideo}
      >
        <source src="https://ra-project.nyc3.cdn.digitaloceanspaces.com/ShowReel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

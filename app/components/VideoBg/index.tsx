"use client"
import { useRef, useEffect } from "react";
import style from './VideoBg.module.css'

export const VideoBg = () => {
  const videoRef = useRef<any>(null);
  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnded = () => {
      // Restart the video when it finishes
      videoElement.currentTime = 0;
      videoElement.play();
    };

    // Add event listener for the 'ended' event
    videoElement.addEventListener("ended", handleVideoEnded);

    // Clean up the event listener when the component unmounts
    return () => {
      videoElement.removeEventListener("ended", handleVideoEnded);
    };
  }, []);
  return (
    <div className={style.videoWrapper}>
      <video
        ref={videoRef}
        width="100%"
        height="100vh"
        autoPlay
        muted
        preload="none"
        className={style.raVideo}
      >
        <source src="https://ra-project.nyc3.cdn.digitaloceanspaces.com/ShowReel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

import React from "react";
import { getStrapiMedia } from "@/lib/media";
import MyImage from "./image";
import styles from "../styles/components/PrimaryImage.module.scss";
import ReactPlayer from "react-player";

const PrimaryImage = ({ primaryImage }) => {
  const left = primaryImage.leftContent;
  const right = primaryImage.rightContent;
  return (
    <div
      className={styles.primaryImage}
      style={{
        backgroundImage: `url(${getStrapiMedia(primaryImage.backgroundImage)})`,
        minHeight: `${Math.min(692, primaryImage.backgroundImage.height)}px`,
      }}
    >
      {left && renderMedia(left)}
      <div></div>
      {right && renderMedia(right)}
    </div>
  );
};

export default PrimaryImage;

function renderMedia(media) {
  if (media.mime.includes("image")) {
    return <MyImage image={media} />;
  } else if (media.mime.includes("video")) {
    return (
      <ReactPlayer
        url={getStrapiMedia(media)}
        controls
        loop
        muted
        playing
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
      />
    );
  }
}

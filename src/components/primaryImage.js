import React from "react";
import { getStrapiMedia } from "@/lib/media";
import MyImage from "./image";
import ReactPlayer from "react-player";
import { Parallax } from "react-parallax";

const PrimaryImage = ({ primaryImage }) => {
  const left = primaryImage.leftMedia;
  const right = primaryImage.rightMedia;
  const minHeight = Math.min(692, primaryImage.backgroundImage.height);

  return (
    <Parallax
      bgImage={getStrapiMedia(primaryImage.backgroundImage)}
      strength={300}
      bgClassName="max-w-none"
    >
      <div
        className="container flex flex-wrap justify-between"
        style={{ minHeight: `${minHeight}px` }}
      >
        {left && renderMedia(left)}
        <div></div>
        {right && renderMedia(right)}
      </div>
    </Parallax>
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

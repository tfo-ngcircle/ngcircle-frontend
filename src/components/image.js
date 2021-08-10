import React from "react";
import Image from "next/image";
import { getStrapiMedia } from "src/lib/media";

const MyImage = ({ image, style }) => {
  return (
    <Image
      src={getStrapiMedia(image)}
      alt={image.alternativeText || image.name}
      width={image.width}
      height={image.height}
      layout="intrinsic"
      loading="lazy"
      style={style}
    />
  );
};

export default MyImage;

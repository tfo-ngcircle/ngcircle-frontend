import React from "react";
import Image from "next/image";
import { getStrapiMedia } from "src/lib/media";

const MyImage = ({ image, style, className, layout }) => {
  return (
    <Image
      src={getStrapiMedia(image)}
      alt={image.alternativeText || image.name}
      width={image.width}
      height={image.height}
      layout={layout || "responsive"}
      loading="lazy"
      style={style}
      className={className}
    />
  );
};

export default MyImage;

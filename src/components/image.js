import React from "react";
import Image from "next/image";
import { getStrapiMedia } from "src/lib/media";

const MyImage = ({ image, style, className, layout, objectFit }) => {
  return (
    <Image
      src={getStrapiMedia(image)}
      alt={image.alternativeText || image.name}
      width={layout == "fill" ? undefined : image.width}
      height={layout == "fill" ? undefined : image.height}
      layout={layout || "responsive"}
      objectFit={objectFit}
      loading="lazy"
      style={style}
      className={className}
    />
  );
};

export default MyImage;

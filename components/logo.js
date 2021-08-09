import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/media";

const Logo = ({ image, showBorder }) => {
  return (
    <Link href="/" passHref>
      <a>
        <Image
          src={getStrapiMedia(image)}
          alt={image.name}
          className={showBorder ? "ngc-logo-bordered" : ""}
          width={image.width}
          height={image.height}
        />
      </a>
    </Link>
  );
};

export default Logo;

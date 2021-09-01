import { Parallax } from "react-parallax";
import { getStrapiMedia } from "@/lib/media";

function ParallaxImage({
  item,
  contentClassName,
  bgClassName,
  className,
  content,
}) {
  return (
    <Parallax
      bgImage={getStrapiMedia(item.media)}
      strength={item.parallax ? 500 : 0}
      contentClassName={contentClassName}
      bgClassName={bgClassName}
      className={className}
      style={{ height: item.height ? item.height : "unset" }}
    >
      {content}
    </Parallax>
  );
}

export default ParallaxImage;

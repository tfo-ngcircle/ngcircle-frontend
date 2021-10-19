import MyImage from "./image";
import ReactPlayer from "react-player";
import { getStrapiMedia } from "src/lib/media";

function Media({ media, ...props }) {
  if (media.mime.includes("image")) {
    return <MyImage image={media} {...props} />;
  } else if (media.mime.includes("video")) {
    return (
      <ReactPlayer
        {...props}
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

export default Media;

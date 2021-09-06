import MyImage from "./image";
import ReactPlayer from "react-player";

function Media({ media, className }) {
  if (media.mime.includes("image")) {
    return <MyImage image={media} className={className} />;
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

export default Media;

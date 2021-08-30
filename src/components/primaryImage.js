import { getStrapiMedia } from "@/lib/media";
import { Parallax } from "react-parallax";
import MyImage from "./image";
import ReactPlayer from "react-player";
import AwesomeSlider from "react-awesome-slider";
import styled from "styled-components";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import ReactMarkdown from "react-markdown";
import useCurrentBreakpoint from "@/lib/tw";
import React from "react";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function PrimaryImage({ primaryImage }) {
  const breakpoint = useCurrentBreakpoint();
  var heightPercentage = "";

  if (breakpoint === "xl" || breakpoint === "2xl") heightPercentage = "36%";
  else heightPercentage = "80%";

  switch (primaryImage.__component) {
    case "shared.slider":
      return (
        <Slider
          heightPercentage={heightPercentage}
          play={primaryImage.autoPlay}
          interval={primaryImage.interval}
        >
          {primaryImage.images.map((image, index) => (
            <div
              data-src={getStrapiMedia(image)}
              key={image.id}
              className="translate-y-0 text-black bg-white bg-opacity-80 p-8 shadow-lg max-w-2xl border-primary border-l-4 border-r-4 text-center"
            >
              {primaryImage.description[index] && (
                <ReactMarkdown>
                  {primaryImage.description[index].md}
                </ReactMarkdown>
              )}
            </div>
          ))}
        </Slider>
      );
    case "landing.primary-image":
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
  }
}

const Slider = styled(AutoplaySlider)`
  --slider-height-percentage: ${(props) => props.heightPercentage};
  --slider-transition-duration: 700ms;
  --organic-arrow-thickness: 4px;
  --organic-arrow-border-radius: 0px;
  --organic-arrow-height: 20px;
  --organic-arrow-color: #c00000;
  --control-button-width: 10%;
  --control-button-height: 25%;
  --control-button-background: transparent;
  --control-bullet-color: #65221d85;
  --control-bullet-active-color: #65221d;
  --loader-bar-color: #65221d;
  --loader-bar-height: 4px;
`;

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

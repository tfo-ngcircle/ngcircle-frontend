import React from "react";
import ReactMarkdown from "react-markdown";
import { Parallax } from "react-parallax";
import MyImage from "./image";
import { getStrapiMedia } from "@/lib/media";
import Spacer from "./spacer";

function Content({ items }) {
  return (
    <>
      {items.map((item, index) => {
        switch (item.__component) {
          case "shared.markdown":
            return (
              <div
                style={{
                  backgroundColor: item.backgroundColor,
                  color: item.textColor,
                }}
              >
                <ReactMarkdown
                  key={index}
                  className="container py-10 space-y-6"
                >
                  {item.md}
                </ReactMarkdown>
              </div>
            );
          case "shared.media":
            return (
              <div
                key={index}
                className={`${
                  item.fillScreenWidth ? "pt-16" : "container pt-16"
                }`}
              >
                <MyImage image={item.media} />
              </div>
            );
          case "shared.media-desc":
            return (
              <div
                key={index}
                className={`md:container ${
                  item.alignment === "left"
                    ? "text-left"
                    : item.alignment === "right"
                    ? "text-right"
                    : item.alignment === "justify"
                    ? "text-justify"
                    : "text-center"
                }`}
              >
                {getItem(index, item)}
              </div>
            );
          case "shared.spacer":
            return <Spacer spacer={item} />;
          default:
            break;
        }
      })}
    </>
  );
}

function getItem(index, item) {
  if (index % 2 == 0) {
    return (
      <div className="md:grid grid-cols-2 flex flex-col-reverse items-center">
        <Parallax
          bgImage={getStrapiMedia(item.media)}
          strength={item.parallax ? 500 : 0}
          contentClassName="m:h-full h-96"
          bgClassName="max-w-none"
        />
        <div>
          <ReactMarkdown className="m:p-24 p-10">
            {item.description}
          </ReactMarkdown>
        </div>
      </div>
    );
  } else
    return (
      <div className="md:grid grid-cols-2 items-center">
        <div>
          <ReactMarkdown className="m:p-24 p-10">
            {item.description}
          </ReactMarkdown>
        </div>
        <Parallax
          bgImage={getStrapiMedia(item.media)}
          strength={500}
          contentClassName="m:h-full h-96"
          bgClassName="max-w-none"
        />
      </div>
    );
}

export default Content;

import MyImage from "./image";
import Spacer from "./spacer";
import ParallaxImage from "./parallax";
import Md from "./md";

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
                <Md key={index} className="container py-10 space-y-6">
                  {item.md}
                </Md>
              </div>
            );
          case "shared.media":
            if (item.parallax)
              return (
                <ParallaxImage
                  item={item}
                  className={`${item.fillScreenWidth ? "" : "container"}`}
                />
              );
            else
              return (
                <div
                  key={index}
                  className={`${item.fillScreenWidth ? "" : "container"}`}
                  style={{
                    height: `${item.height ? item.height + "px" : "unset"}`,
                    overflow: "hidden",
                  }}
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
        <ParallaxImage
          item={item}
          contentClassName="m:h-full h-96"
          bgClassName="max-w-none"
        />
        <div>
          <Md className="m:p-24 p-10">{item.description}</Md>
        </div>
      </div>
    );
  } else
    return (
      <div className="md:grid grid-cols-2 items-center">
        <div>
          <Md className="m:p-24 p-10">{item.description}</Md>
        </div>
        <ParallaxImage
          item={item}
          contentClassName="m:h-full h-96"
          bgClassName="max-w-none"
        />
      </div>
    );
}

export default Content;

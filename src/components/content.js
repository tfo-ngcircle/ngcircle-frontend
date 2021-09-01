import ReactMarkdown from "react-markdown";
import MyImage from "./image";
import Spacer from "./spacer";
import ParallaxImage from "./parallax";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

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
                  <TreeView
                    className="!container"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                  >
                    <TreeItem nodeId="1" label="Applications">
                      <TreeItem nodeId="2" label="Calendar" />
                      <TreeItem nodeId="3" label="Chrome" />
                      <TreeItem nodeId="4" label="Webstorm" />
                    </TreeItem>
                    <TreeItem nodeId="5" label="Documents">
                      <TreeItem nodeId="10" label="OSS" />
                      <TreeItem nodeId="6" label="Material-UI">
                        <TreeItem nodeId="7" label="src">
                          <TreeItem nodeId="8" label="index.js" />
                          <TreeItem nodeId="9" label="tree-view.js" />
                        </TreeItem>
                      </TreeItem>
                    </TreeItem>
                  </TreeView>
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
        <ParallaxImage
          item={item}
          contentClassName="m:h-full h-96"
          bgClassName="max-w-none"
        />
      </div>
    );
}

export default Content;

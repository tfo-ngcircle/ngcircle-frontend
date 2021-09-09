/* eslint-disable react/display-name */
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "@/lib/media";
import styled, { css } from "styled-components";

function Md({ className, content, item, largeHeadings }) {
  return (
    <Markdown
      backgroundColor={item && item.backgroundColor}
      backgroundImage={item && getStrapiMedia(item.backgroundImage)}
      color={item && item.textColor}
      textAlign={item && item.textAlignment}
    >
      <ReactMarkdown
        className={className}
        components={{
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-5 lg:pl-6" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="pl-3 marker:text-primary" {...props} />
          ),
          a: ({ node, ...props }) => <a className="text-primary" {...props} />,
          p: ({ node, ...props }) => <p className="my-4" {...props} />,
          h1: ({ node, ...props }) => (
            <h1
              className={largeHeadings ? "md:text-7xl xl:text-8xl" : ""}
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className={largeHeadings ? "md:text-6xl xl:text-7xl" : ""}
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </Markdown>
  );
}

const Markdown = styled.div`
  color: ${(props) => props.color};

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}

  ${(props) =>
    props.backgroundImage &&
    css`
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("${props.backgroundImage}") center no-repeat;
      background-size: cover;
    `}

  & * {
    text-align: ${(props) => props.textAlign};
  }
`;

export default Md;

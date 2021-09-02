/* eslint-disable react/display-name */
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "@/lib/media";
import styled, { css } from "styled-components";

function Md({ className, content, item }) {
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
            <ul className="list-disc list-inside" {...props} />
          ),
          li: ({ node, ...props }) => <li className="pl-4" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </Markdown>
  );
}

const Markdown = styled.div`
  color: ${(props) => props.color};
  background-size: cover;

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
    `}

  & * {
    text-align: ${(props) => props.textAlign};
  }
`;

export default Md;

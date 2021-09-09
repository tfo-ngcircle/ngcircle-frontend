import { getStrapiMedia } from "@/lib/media";
import { getTextColor } from "src/utils/textColor";
import styled, { css } from "styled-components";
import NetworkItem from "./networkItem";

function NetworkItems({ content }) {
  console.log(content.backgroundColor);
  return (
    <Group
      color={content.backgroundColor && getTextColor(content.backgroundColor)}
      backgroundColor={content.backgroundColor && content.backgroundColor}
      backgroundImage={
        content.backgroundImage && getStrapiMedia(content.backgroundImage)
      }
      textAlign={content.textAlignment && content.textAlignment}
      className={`grid grid-cols-1 sm:grid-cols-2 ${
        !content.showMedia
          ? "divide-x divide-gray-50 divide-opacity-50"
          : "py-10 px-4 sm:px-8 gap-14 sm:gap-8 lg:px-14 lg:gap-14 xl:px-32"
      } ${
        content.items.length % 3 === 0 ? "xl:grid-cols-3" : "xl:grid-cols-2"
      }`}
    >
      {content.items.map((item) => (
        <NetworkItem key={item.id} item={item} showMedia={content.showMedia} />
      ))}
    </Group>
  );
}

export default NetworkItems;

const Group = styled.div`
  background-size: cover;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}

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

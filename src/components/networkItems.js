import { getStrapiMedia } from "@/lib/media";
import styled, { css } from "styled-components";
import NetworkItem from "./networkItem";

function NetworkItems({ content }) {
  return (
    <Group
      backgroundColor={content.backgroundColor && content.backgroundColor}
      backgroundImage={
        content.backgroundImage && getStrapiMedia(content.backgroundImage)
      }
      textAlign={content.textAlignment && content.textAlignment}
      className="grid py-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-4 sm:px-8 gap-14 sm:gap-8 lg:px-14 lg:gap-14 xl:px-32"
    >
      {content.items.map((item) => (
        <NetworkItem key={item.id} media={item.media} content={item.content} />
      ))}
    </Group>
  );
}

export default NetworkItems;

const Group = styled.div`
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

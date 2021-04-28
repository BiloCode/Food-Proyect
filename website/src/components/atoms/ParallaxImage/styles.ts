import styled from "styled-components";

type ImageContainerProps = {
  backgroundUrl: string;
};

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 100%;
  height: 70vh;
  background-image: url(${({ backgroundUrl }) => backgroundUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;

  &.small {
    height: 35vh;
  }
`;

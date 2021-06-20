import styled from "styled-components";

import { BLACK_LIGHT_B, FONT } from "config/styles";

export const MainContainer = styled.article`
  position: relative;

  &.pressable {
    cursor: pointer;
  }
`;

export const ContainerDisabled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const ButtonContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 2em;
  box-sizing: border-box;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  & > img {
    filter: brightness(90%);
  }
`;

export const ImageFloatText = styled.div`
  position: absolute;
  top: 2em;
  left: 2em;
`;

export const TextContent = styled.div`
  display: grid;
  row-gap: 2em;
`;

export const TextContainer = styled.div`
  display: grid;
  row-gap: 5px;
`;

export const Description = styled.div`
  font-weight: 300;
  font-family: ${FONT};
  color: ${BLACK_LIGHT_B};
  font-size: 0.9em;
`;

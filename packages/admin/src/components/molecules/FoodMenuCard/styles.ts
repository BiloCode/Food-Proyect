import styled from "styled-components";

import { FONT, NORMAL_BLUE } from "config/styles";

export const ImageContainer = styled.div`
  position: relative;
  height: inherit;
`;

type ListProps = {
  columns: number;
  imageIndex: number;
};

export const IconContainer = styled.div`
  padding: 0 1em;
  box-sizing: border-box;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;

export const ImageList = styled.div<ListProps>(
  ({ imageIndex, columns }) => `
  width: 100%;
  height: inherit;
  display: grid;
  transition: .3s;
  line-height: 0;
  grid-template-columns: repeat(${columns}, 100%);
  transform: translateX(-${imageIndex * 100}%);

  & > img{
    filter: brightness(0.8);
  }
`
);

export const InformationContainer = styled.div`
  display: grid;
  row-gap: 1.5em;
`;

export const TextContainer = styled.div`
  display: grid;
  row-gap: 8px;
  justify-items: center;
  text-align: center;
`;

export const PriceText = styled.div`
  font-size: 1.6em;
  font-family: ${FONT};
  color: ${NORMAL_BLUE};
  font-weight: 800;
`;

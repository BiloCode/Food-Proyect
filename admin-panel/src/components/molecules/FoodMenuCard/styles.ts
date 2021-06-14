import styled from "styled-components";

import { FONT, NORMAL_BLUE } from "config/styles";

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

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

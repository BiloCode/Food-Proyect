import styled from "styled-components";

import {
  BACKGROUND_LIGHT,
  DARK_BLUE,
  FONT,
  HOME_STATISTICS_ROW_WIDTH,
} from "config/styles";

export const MainContainer = styled.div`
  height: 60px;
  display: grid;
  grid-template-columns: 1fr ${HOME_STATISTICS_ROW_WIDTH};
  column-gap: 8px;
`;

export const TextContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${BACKGROUND_LIGHT};
`;

export const TextElement = styled.span`
  font-family: ${FONT};
  font-weight: 800;
  color: ${DARK_BLUE};
  padding: 0 2em;
  box-sizing: border-box;
`;

export const BarDecorator = styled.div`
  width: 12px;
  height: 100%;
  flex: none;
  background-color: ${DARK_BLUE};
`;

export const AmountContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${BACKGROUND_LIGHT};
`;

export const AmountElement = styled.div`
  width: 90px;
`;

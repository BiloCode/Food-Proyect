import styled from "styled-components";

import { FONT, FOOD_MODAL_ITEM_HEIGHT } from "config/styles";

export const MainContainer = styled.div`
  width: 100%;
  height: ${FOOD_MODAL_ITEM_HEIGHT};
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 1em;
  align-items: center;
  cursor: pointer;
  padding: 0 2em;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(240, 240, 240);

  &:hover {
    background-color: rgb(250, 250, 250);
  }
`;

export const Indicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #000;
`;

export const Name = styled.span`
  font-family: ${FONT};
  font-weight: 600;
  font-size: 0.95em;
`;

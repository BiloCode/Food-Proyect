import styled from "styled-components";

import {
  FONT,
  FOOD_MODAL_ITEM_HEIGHT,
  NORMAL_BLUE,
  NORMAL_GRAY_LIGHT,
  NORMAL_GRAY_LIGHT_B,
} from "config/styles";

export const MainContainer = styled.button`
  border: none;
  outline: none;
  display: grid;
  height: ${FOOD_MODAL_ITEM_HEIGHT};
  grid-template-columns: 32px 1fr max-content;
  column-gap: 10px;
  align-items: center;
  padding: 0 2em;
  box-sizing: border-box;
  background-color: ${NORMAL_GRAY_LIGHT};
  text-align: initial;
  cursor: pointer;
  font-family: ${FONT};

  &:hover {
    background-color: ${NORMAL_GRAY_LIGHT_B};
  }
`;

export const ImageContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const Name = styled.span``;

export const Price = styled.span`
  font-weight: 800;
  font-size: 16px;
  color: ${NORMAL_BLUE};
`;

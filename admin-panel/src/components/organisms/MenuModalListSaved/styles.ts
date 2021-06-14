import styled from "styled-components";

import { FONT, FOOD_MODAL_ITEM_HEIGHT } from "config/styles";

export const FoodListContainer = styled.div`
  display: grid;
  align-items: flex-start;
  row-gap: 1em;
`;

const numItemsRender = 2;
const GapItemHeight = "4px";

const TotalGap = `calc(${GapItemHeight} * ${numItemsRender - 1})`;
const TotalItemsHeight = `calc(${FOOD_MODAL_ITEM_HEIGHT} * ${numItemsRender})`;
const TotalHeight = `calc(${TotalItemsHeight} + ${TotalGap})`;

export const Container = styled.div`
  width: 100%;
  height: ${TotalHeight};
`;

export const FoodSavedContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: grid;
  align-items: flex-start;
  row-gap: 4px;
`;

export const DefaultFoodSaved = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const DefaultFoodText = styled.span`
  font-family: ${FONT};
  font-size: 14px;
`;
